const mongoose = require("mongoose")
const Schema = mongoose.Schema



//create video schema and model

const VideoSchema =new Schema({
    name: {
        type: String,
        required: [true, "Name of the video is required"]
    },
    views:{
        type: Number,
        required: [true, "Views of the video is required"]
    },
    likes:{
        type: Number,
        required: [true, "likes of the video is required"]
    }

})

const Video= mongoose.model("video",VideoSchema)

module.exports = Video