import mongoose, { Document, Schema } from 'mongoose';

export interface IUser {
  firstName: string;
  surName: string;
  email: string;
  telephone: string;
  gender: string;
  dob: string;
  comments: string;
}

export interface IUserModel extends IUser, Document {}

const UserSchema: Schema = new Schema(
  {
    firstName: { type: String, required: true },
    surName: { type: String, required: true },
    email: { type: String, required: true },
    telephone: { type: String, required: true },
    gender: { type: String, required: true },
    dob: { type: String, required: true },
    comments: { type: String, required: true }
  },
  {
    versionKey: false
  }
);

export default mongoose.model<IUserModel>('User', UserSchema);
