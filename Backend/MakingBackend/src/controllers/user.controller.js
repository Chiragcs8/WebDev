import {asyncHandler} from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import{ User } from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { ApiResponse } from '../utils/ApiResponse.js';
import jwt from "jsonwebtoken"

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
    User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                refreshToken: undefined,
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

export { 
    registerUser,
    loginUser,
    logoutUser,
    refershAccessToken,
 }