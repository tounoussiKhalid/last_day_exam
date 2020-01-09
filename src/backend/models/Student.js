import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
  name: {
    type: String
  },
  class: {
    type: String
  }
});

const Student = mongoose.model('User', schema);
export default Student;