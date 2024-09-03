import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
        },
        postId: {
            type: String,
            required: true,
        },
        userId: {
            type: String,
            required: true,
        },
        profilePicture: {
            type: String,
            // required: true, // Mettez `true` si vous souhaitez que ce champ soit obligatoire.
        },
        username: {
            type: String,
            // required: true, // Mettez `true` si vous souhaitez que ce champ soit obligatoire.
        },
        likes: {
            type: Array,
            default: [],
        },
        numberOfLikes: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
);

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
