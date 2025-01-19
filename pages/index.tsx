// pages/index.tsx
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import { Workouts } from "@/interfaces/InterfacesWorkouts";
import WorkoutsContainer from "@/components/WorkoutsContainer";
import { io } from "socket.io-client";
export default function Home() {

  const [workouts, setWorkouts] = useState<Workouts[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const socket = io('http://192.168.1.150:3001')

    socket.on('connection', () => {
      console.log('Connected to server');
    });

    socket.emit('userConnected', 'Message sent from client')
  });

  const fetchWorkouts = async () => {
    try {
      const res = await fetch('/api/workouts/workout');
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }
      const result = await res.json();

      console.log(result.workouts);

      setWorkouts(result.workouts);
      setLoading(false); // Cuando la carga termine, actualizamos el estado
    } catch (error) {
      console.log(error);
      setLoading(false); // En caso de error, también paramos el loading
    }
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black-100 border-white">

        <h1 className="text-2xl font-bold mb-4 text-white">Workouts</h1>

        <WorkoutsContainer
          workouts={workouts!}
        />
      </div>
    );
  }
}
