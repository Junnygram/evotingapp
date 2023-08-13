import mongoose from 'mongoose';

const candidateSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    position: { type: String, required: true },
    image: { type: String },
    level: { type: String, required: true },
    dept: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const User =
  mongoose.models.Candidate || mongoose.model('Candidate', candidateSchema);
export default User;
