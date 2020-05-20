const { Schema, model } = require("mongoose")
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      max: 12,
      min: 2,
    },
    password: {
      type: String,
      required: true,
      max: 12,
      min: 6,
      select: false,
    },
    photos: [
      {
        url: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          default: "",
        },
        discription: {
          type: String,
          default: "",
        },
      },
    ],
  },
  {
    timestamps: true,
  }
)

module.exports = model("User", userSchema)
