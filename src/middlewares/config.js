import mongoose from 'mongoose';

const dbConnect = async (req, res, next) => {
    if (mongoose.connections[0].readyState) {
        return next();
    }

    await mongoose.connect(process.env.MONGODB_URI, {
        useUnifiedTopology: true,
        // useFindAndModify: true,
        // useCreateIndex: true,
        useNewUrlParser: true,
    });
    console.log('DB Connected');
    next()
};

export default dbConnect;
