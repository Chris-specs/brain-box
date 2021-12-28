import mongoose from 'mongoose';

const dbConnect = async () => {
    if (mongoose.connections[0].readyState) {
        return;
    }

    await mongoose.connect(process.env.MONGODB_URI, {
        useUnifiedTopology: true,
        // useFindAndModify: true,
        // useCreateIndex: true,
        useNewUrlParser: true,
    });
    console.log('DB Connected');
};

export default dbConnect;
