import {asyncHandler} from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import{ User } from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { ApiResponse } from '../utils/ApiResponse.js';
import jwt from "jsonwebtoken"
import { subscribe } from 'diagnostics_channel';
import mongoose from 'mongoose';

const genrateAccessAndRefreshTokens = async(userId) => {
    try {
        const user = await User.findById(userId)//find user
        const accessToken = user.genrateAccessToken()//genrate access token
        const refreshToken = user.genrateRefreshToken()//genrate refresh token

        user.refershToken = refreshToken
        await user.save({validateBeforeSave: false})// saved refresh token in database

        return {accessToken, refreshToken}

    } catch (error) {
        throw new ApiError(500, "Something went wrong while gerating access and refresh tokens")
    }
}

const registerUser = asyncHandler(async (req, res) => {
    // get user detailed from frontend
    // validation - not empty
    // check if user already exist : username, email
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return res



    const {fullname, email, username, password} = req.body
    // console.log("email: ", email);
    
    if (
        [fullname, email, username, password].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const existedUser = await User.findOne({
        $or: [{username}, {email}]
    })

    if (existedUser) {
        throw new ApiError(409, "User with email or username already exists")
    }
    console.log(req.files);
    

    const avatarLocalPath = req.files?.avatar[0]?.path;
    // const coverImageLocalpath = req.files?.coverImage[0]?.path

    let coverImageLocalpath;
    if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
        coverImageLocalpath = req.files.coverImage[0].path;
    }

    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar file is required")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalpath)

    if (!avatar) {
        throw new ApiError(400, "Avatar file is required")
    }


    const user = await User.create({
        fullname,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase(),
    })

    const createdUser = await User.findById(user._id).select(
        "-password  -refreshToken",
    )

    if (!createdUser) {
        throw new ApiError(500, "Somting went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered successfully")
    )


})


const loginUser = asyncHandler(async (req, res) => {
    // req body -> data
    // username or email
    // find the user
    // password check
    // access and refrence token
    // send cookie

    // getting the data from req
    const {email, username, password} = req.body

    // giving acces by either username or email
    if (!username && !email) {
        throw new ApiError(400, "Username or email is required")
    }

    // finding the user
    const user = await User.findOne({
        $or: [{username}, {email}]
    })

    //if user is not found or not exist
    if (!user) {
        throw new ApiError(401, "Invalid credentials")
    }

    // password check
    const isPasswordValid = await user.isPasswordCorrect(password)

    if (!isPasswordValid) {
        throw new ApiError(401, "Invalid credentials")
    }

    //gets an access token and refresh token
    const {accessToken, refreshToken} = await genrateAccessAndRefreshTokens(user._id)

    //removing unwanted fields (expensive option)
    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

    //sending cookies
    const options = {
        httpOnly: true,
        secure:true,
    }

    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(
            200,
            {
                user: loggedInUser,
                refreshToken
            },
            "User logged in successfully"
        )
    )

    
})

const logoutUser = asyncHandler(async (req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset: {
                refreshToken: 1
            }
        }, 
        {  
            new: true,
        }
    )

    const options = {
        httpOnly: true,
        secure:true,
    }

    return res
    .status(200)
    .clearCookie("accessToken")
    .clearCookie("refreshToken")
    .json(
        new ApiResponse(
            200,
            {},
            "User logged out successfully"
        )
    )

})

const refershAccessToken = asyncHandler(async (req, res) => {
    const incomingRefreshToken = req.cookie.refershToken || req.body.refershToken

    if (!incomingRefreshToken) {
        throw new ApiError(401, "unauthorized request")
    }

   try {
     const decodedToken = jwt.verify(
         incomingRefreshToken,
         process.env.REFRESH_TOKEN_SECRET,
     )
 
     const user = await User.findById(decodedToken?._id)
 
     if (!user) {
         throw new ApiError(401, "Invalid refreshToken")
     }
 
     if (incomingRefreshToken !== user?.refershToken) {
         throw new ApiError(401, "RefreshToken is expired or used") 
     }
 
 
     const options = {
         httpOnly: true,
         secure: true,
     }
 
     const {accessToken, newRefreshToken} = await genrateAccessAndRefreshTokens(user._id)
 
     return res
     .status(200)
     .cookie("accessToken", accessToken, options)
     .cookie("refreshToken", newRefreshToken, options)
     .json(
         new ApiResponse(
             200,
             {accessToken, refreshToken: newRefreshToken},
             "accessToken refreshed"
         )
     )
   } catch (error) {
     throw new ApiError(401, error?.message || "Invalid refreshToken")
   }

})

const changeCurrentPassword = asyncHandler(async(req, res) => {
    const {oldPassword, newPassword} = req.body

    const user = await User.findById(req.user?._id)
    const isPasswordCorrect = user.isPasswordCorrect(oldPassword)

    if (!isPasswordCorrect) {
        throw new ApiError(400, "Invalid old password")
    }


    user.password = newPassword
    await user.save({validateBeforeSave: false})

    return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password updated successfully"))
})

const getCurrentUser = asyncHandler(async(req, res) => {
    return res
    .status(200)
    .json(new ApiResponse(200, req.user, "Current user fetched successfully"))
})

const updateAccountDetails = asyncHandler(async(req, res) => {
    const {fullname, email } = req.body

    if (!fullname || !email) {
        throw new ApiError(400, "All fields are required")
    }

    const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set: {
                fullname: fullname,
                email: email,
            }
        },
        {new: true}

    ).select("-password")

    return res
   .status(200)
   .json(new ApiResponse(200, user, "Account details updated successfully"))
})

const updateUserAvatar = asyncHandler(async (req, res) => {
    const avatarLocalPath = req.file?.path

    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar file is Missing")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath) 

    if (!avatar.url) {
        throw new ApiError(400, "Failed to upload avatar to cloudinary")
    }

    const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set: {
                avatar: avatar.url
            }
        },
        {new: true}
    ).select("-password")

    return res
    .status(200)
    .json(new ApiResponse(200, user, "Avatar updated successfully"))
 
})

const updateUserCoverimage = asyncHandler(async (req, res) => {
    const coverImageLocalPath = req.file?.path

    if (!coverImageLocalPath) {
        throw new ApiError(400, "CoverImage file is Missing")
    }

    const coverImage = await uploadOnCloudinary(coverImageLocalPath) 

    if (!coverImage.url) {
        throw new ApiError(400, "Failed to upload coverImage to cloudinary")
    }

    const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set: {
                coverImage: coverImage.url
            }
        },
        {new: true}
    ).select("-password")


    return res
    .status(200)
    .json(new ApiResponse(200, user, "CoverImage updated successfully"))
})

const getUserChannelProfile = asyncHandler(async (req, res) => {
    const { username } = req.params

    if (!username?.trim() ) {
        throw new ApiError(400, "Username is missing")
    }

    const channel = await User.aggregate([
        {
            $match: {
                username: username?.toLowerCase()

            }
        },
        {
            $lookup: {
                from: "subscriptions",
                localField: "_id",
                foreignField: "channel",
                as: "subscription",
            }
        },
        {
            $lookup: {
                from: "subscriptions",
                localField: "_id",
                foreignField: "channel",
                as: "subscribedTo",
            }
        },
        {
            $addFields: {
                subscribersCount: {
                    $size: "$subscription",
                },
                channelsSubscribedCount: {
                    $size: "$subscribedTo",
                },
                isSecureContext:{
                    $cond: {
                        if: {$in: [request.user?._id, "$subscribers.subscribers"]},
                        then: true,
                        else: false,
                    }
                }
            }
        },
        {
            $project: {
                fullName: 1,
                username: 1,
                subscribersCount: 1,
                channelsSubscribedCount: 1,
                isSubscribed: 1,
                avatar: 1,
                coverImage: 1,
                email: 1,
            }
        }
    ])

    if (!channel?.length){
        throw new ApiError(404, "channel does not exist")
    }

    return res
   .status(200)
   .json(new ApiResponse(200, channel[0], "User channel fetched successfully"))
})

const getWatchHistory = asyncHandler(async(req, res) => {
    const user = await User.aggregate([
        {
            $match: {
                _id: new mongoose.Types.ObjectId(req.user._id)
            }
        },
        {
            $lookup: {
                from: "videos",
                localField: "watchHistory",
                foreignField: "_id",
                as: "watchHistory",
                pipeline: [
                    {
                        $lookup: {
                            from: "users",
                            localField: "owner",
                            foreignField: "_id",
                            as: "owner",
                            pipeline: [
                                {
                                    $project: {
                                        fullName: 1,
                                        username: 1,
                                        avatar: 1
                                    }
                                }
                            ]
                        }
                    },
                    {
                        $addFields:{
                            owner:{
                                $first: "owner"
                            }
                        }
                    }
                ]
            }
        }
    ])

    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            user[0].watchHistory,
            "User watch history fetched successfully"
        )
    )
})

export { 
    registerUser,
    loginUser,
    logoutUser,
    refershAccessToken,
    changeCurrentPassword,
    getCurrentUser,
    updateAccountDetails,
    updateUserAvatar,
    updateUserCoverimage,
    getUserChannelProfile,
    getWatchHistory,
 }