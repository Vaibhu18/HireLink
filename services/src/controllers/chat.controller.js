import { chatClient } from "../lib/stream.js"

export const getStreamToken = async (req, res) => {
    try {
        const token = chatClient.createToken(req.user.clerkId);
        req.status(200).json({
            token,
            userId: req.user.clerkId,
            userName: req.user.name,
            userImage: req.user.profileImage
        })
    } catch (error) {
        console.log("Error in getStreamToken controller : ", error.message);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}