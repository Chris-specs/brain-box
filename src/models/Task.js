import mongoose, { Schema, model } from 'mongoose';

const taskSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        content: {
            type: String,
            trim: true,
        },
        user: {
            ref: 'User',
            type: Schema.Types.ObjectId,
            required: true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

mongoose.models = {};

export default model('Task', taskSchema);
