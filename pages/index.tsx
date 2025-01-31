// pages/index.tsx
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import { Workout } from "@/interfaces/InterfacesWorkouts";
import WorkoutsContainer from "@/components/WorkoutsContainer";
import { io } from "socket.io-client";
import { filterByEquipment } from "@/helpers/workoutsHelpers";
import Filters from "@/components/Filters";


export default function Home() {

  const [workouts, setWorkouts] = useState<Workout[]>();
  const [loading, setLoading] = useState(true);
  const [showingWorkouts, setShowingWorkouts] = useState<Workout[]>();
  const [equipmentFilter, setEquipmentFilter] = useState('');

  //const socket = io('http://192.168.1.150:3001');

  // useEffect(() => {

  //   socket.on('eyou', (message) => {
  //     console.log(message);
  //   });


  //   socket.emit('userConnected', 'Message sent from client')
  // });

  const fetchWorkouts = async () => {
    try {
      const res = await fetch('/api/workouts/workout');
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }
      const result = await res.json();

      setLoading(false); // Cuando la carga termine, actualizamos el estado
      setWorkouts(result.workouts)
      filterWorkouts(result.workouts)
    } catch (error) {
      console.log(error);
      setLoading(false); // En caso de error, también paramos el loading
    }
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  useEffect(() => {
    filterWorkouts(workouts!);
  }, [equipmentFilter])

  async function filterWorkouts(workouts: Workout[]) {

    let filteredWorkouts = workouts;

    if (equipmentFilter) {
      filteredWorkouts = filterByEquipment(workouts, equipmentFilter)
    }

    setShowingWorkouts(filteredWorkouts)
  }


  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black-100 border-white">

        <Filters
          equipmentFilter={equipmentFilter}
          setEquipmentFilter={setEquipmentFilter}
        />

        <h1 className="text-2xl font-bold mb-4 text-white mt-2">Workouts</h1>

        <WorkoutsContainer
          workouts={showingWorkouts!}
        />
      </div>
    );
  }
}
