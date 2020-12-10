const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
  {
    is_active: {
      type: Boolean,
      default: true,
    },
    comment: {
      type: String,
      required: true,
    },
    pros: {
      type: String,
      required: true,
    },
    cons: {
      type: String,
      required: true,
    },
    created_by: {
      type: Schema.Types.ObjectId,
      ref: "reviews",
    },
  },
  { timestamps: true }
);

const Review = model("Review", reviewSchema, "Reviews");

module.exports = Review;
