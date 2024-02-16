import mongoose  from "mongoose";
const {Schema} = mongoose

const projectSchema = new Schema({
    project_name :{
        type:String
    },
    details: {
        type:String
    },
    main_image:{
        type:String
    },
    project_images:{
        type: Array
    },
    unique_name:{
        type:String
    },
    featured:{
        type:Boolean,
        default:false
    }

})

let Project

try {
    Project = mongoose.model('Project')
} catch (error) {
    Project = mongoose.model("Project",projectSchema)
}

export default Project