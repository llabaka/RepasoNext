export interface Workouts {
    name: string
    mode: string,
    equipment: string[]
}

export interface WorkoutsContainerInterface {
    workouts: Workouts[];
}

