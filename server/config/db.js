import mongoose from 'mongoose';

export default () => {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/meetUpMe');
    mongoose.connection
        .once('open', () => console.log('MongoDb running'))
        .on('error', err => console.error(err));
};