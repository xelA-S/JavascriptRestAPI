const express = require("express")
const Video = require("../models/video")
const router = express.Router()


//get a list of videos from the db
router.get("/videos",function(req,res, next) {
    Video.find({}).then(function(videos){
        if(videos.length == false){
            res.send("No videos found in database")
        }else{
            res.send(videos)
        }
    })     
})



//add a new video to the db
router.put("/videos",function(req,res,next){
    Video.create(req.body).then(function(video){
    res.send(video)     
}).catch(next)
})


//update a video in the db
router.patch("/videos/:id",function(req,res, next){
    Video.findOneAndUpdate({_id: req.params.id}, req.body,{ new: true, useFindAndModify: false }).then(function(){
        Video.findOne({_id: req.params.id}).then(function(video){
            res.send(video)
        })
    })
})


//delete a video from the db
router.delete("/videos/:id",function(req,res, next){
    Video.findOneAndDelete({_id: req.params.id}).then(function(video){
        res.send(video);
        
    }).catch(function(){
        res.send("No video with that ID")
    })
})

module.exports=router
 