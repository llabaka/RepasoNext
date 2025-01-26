import styled from "styled-components";
import { WorkoutsContainerInterface } from "@/interfaces/InterfacesWorkouts";

const WorkoutsContainer: React.FC<WorkoutsContainerInterface> = ({ workouts }) => {
    return (
        <Container>
            <WorkoutBox data-testid="workout-item">
                {workouts!.length > 0 ? (
                    <WorkoutList>
                        {workouts!.map((workout, index) => (
                            <WorkoutItem key={index}>{workout.name}</WorkoutItem>
                        ))}
                    </WorkoutList>
                ) : (
                    <NoWorkouts>No workouts available.</NoWorkouts>
                )}
            </WorkoutBox>
        </Container>
    );
};

export default WorkoutsContainer;

// Styled-components
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    padding: 1.5rem;
    border-radius: 12px;
    background: linear-gradient(135deg, #252836, #1e1e2e);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    `;

const WorkoutBox = styled.div`
    width: 100%;
    padding: 1.5rem;
    border: 2px solid white;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: translateY(-5px);
        border-color: #ffdd57;
    }
    `;

const WorkoutList = styled.ul`
    font-size: 1.2rem;
    color: #fff;
    list-style: none;
    padding: 0;
    `;

const WorkoutItem = styled.li`
    margin-bottom: 0.8rem;
    padding: 0.6rem;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease-in-out;

    &:hover {
        background: rgba(255, 221, 87, 0.2);
        color: #ffdd57;
    }
    `;

const NoWorkouts = styled.p`
    font-size: 1.2rem;
    color: #ffdd57;
    text-align: center;
    `;