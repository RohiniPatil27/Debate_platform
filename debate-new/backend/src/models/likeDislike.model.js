import mongoose from "mongoose";

const LikeDislikeSchema = new mongoose.Schema(
  {
    messageId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    type: {
      type: String,
      enum: ["LIKE", "DISLIKE"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const LikeDislike = mongoose.model("LikeDislike", LikeDislikeSchema);

export default LikeDislike;
