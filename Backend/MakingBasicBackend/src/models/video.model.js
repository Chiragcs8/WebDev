import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile:{
            type: String, // cloudinary url
            required: true,
        },
        thumbnail:{
            type: String, // cloudinary url
            required: true,
        },
        title:{
            type: String, 
            required: true,
        },
        description:{
            type: String, 
            required: true,
        },
        duration:{
            type: Number, 
            required: true,
        },
        duration:{
            type: Number, 
            default: 0,
        },
        isPublished:{
            type: Boolean,  
            default: true,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"  // assuming User is the model name
        }
    },
    {
         timestamps: true,
 
    }
)

videoSchema.plugin(mongooseAggregatePaginate); // for pagination

export const Video = mongoose.model("Video", videoSchema);