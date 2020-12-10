const { Schema, model } = require("mongoose");

const companySchema = new Schema(
  {
    is_active: {
      type: Boolean,
      default: true,
    },
    profile_img: {
      type: String,
      default: "https://picsum.photos/200/200",
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    created_by: {
      type: Schema.Types.ObjectId,
      ref: "reviews",
    },
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "reviews",
      },
    ],
    following: [
      {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
    ],
  },
  { timestamps: true }
);

const Company = model("Company", companySchema, "Companies");

module.exports = Company;
