import mongoose from "mongoose";

const {Schema} = mongoose

const bannerSchema = new Schema({
    images:{
        type:Array
    }
})

let Banner;
try {
  Banner = mongoose.model('Banner');
} catch (e) {
  // If the model doesn't exist, define it
  Banner = mongoose.model('Banner', bannerSchema);
}

export default Banner