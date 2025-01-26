import { WorkoutsContainerInterface } from "@/interfaces/InterfacesWorkouts";

const WorkoutsContainer: React.FC<WorkoutsContainerInterface> = ({ workouts }) => {

    return (
        <div className="flex flex-col justify-start items-center w-3/12 p-4 rounded-md">
            <div className="mb-4 border-2 border-white p-4" data-testid="workout-item">
                {workouts!.length > 0 ? (
                    <ul className="text-lg text-white">
                        {workouts!.map((workout, index) => (
                            <li key={index} className="mb-2">
                                {workout.name}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-white">No workouts available.</p>
                )}
            </div>
        </div>
    );
};

export default WorkoutsContainer;