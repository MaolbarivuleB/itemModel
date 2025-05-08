const mongoose = require("mongoose")

const itemSchema = new mongoose.Schema({

  itemname: {type: String, require: true},
  description: String,
  locationFound: String,
  dataFound: {type: Date, default: Date.now},
  claimed: {type: Boolean, default: false},

})
const item = new mongoose.model("item", itemSchema)

//if i am going to use some something outside of this file i most export it 

module.exports = item

