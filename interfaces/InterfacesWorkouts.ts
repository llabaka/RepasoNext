export interface Workout {
    name: string
    mode: string,
    equipment: string[]
}

export interface WorkoutsContainerInterface {
    workouts: Workout[];
}

export interface FiltersInterface {
    equipmentFilter: string,
    setEquipmentFilter: (equipment: string) => void;
}