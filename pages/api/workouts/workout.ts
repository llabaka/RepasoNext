import connectDb from "../../../db/connection";
import Workouts from "../../../models/workoutModel";

export default async function handler(req: any, res: any) {
    try {
        // Conectar a la base de datos
        await connectDb();

        const workouts = await Workouts.find();

        console.log(workouts);
        
        return res.status(200).json({ workouts });
    } catch (err: any) {
        console.error("Error fetching workouts:", err.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}
