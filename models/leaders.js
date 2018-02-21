const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var leaderSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    image: {
      type: String,
      required: true
    },
    designation: {
      type: String,
      default: ""
    },
    abbr: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      required: true
    },
    featured: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

var Leaders = mongoose.model("Leader", leaderSchema);

module.exports = Leaders;
