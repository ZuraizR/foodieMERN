import mongoose from 'mongoose'

export const connectDB = async () => {
  await mongoose
    .connect(
      'mongodb+srv://devzuraiz:devzuraiz@cluster0.hieloll.mongodb.net/foodie'
    )
    .then(() => console.log('MongoDB Connected Successfully'))
}
