import { Workout } from "@/interfaces/InterfacesWorkouts";

// Recibira un array de workouts, saldra solo el workout que en el equipamiento tenga el mismo señalado
export function filterByEquipment(workouts: Workout[], equipment: string): Workout[] {

    console.log("en la funcion");
    
    console.log(workouts);
    
    return workouts.filter(workouts => workouts.equipment.includes(equipment));
}