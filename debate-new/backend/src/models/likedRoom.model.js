import mongoose from "mongoose";

const LikedRoomSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const LikedRoom = mongoose.model("LikedRoom", LikedRoomSchema);

export default LikedRoom;
