import mongoose from 'mongoose';

const workoutsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mode: { type: String, required: true },
    equipment: { type: Array, required: true },
}, { timestamps: true }); // Agrega campos `createdAt` y `updatedAt` automáticamente

export default mongoose.models.Workouts || mongoose.model("Workouts", workoutsSchema);