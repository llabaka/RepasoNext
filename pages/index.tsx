import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";

export default function Home() {

  const [workouts, setWorkouts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchWorkouts = async () => {
    try {
      const res = await fetch('/api/workouts/workout');
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }
      const result = await res.json();

      console.log(result.workouts);

      setWorkouts(result.workouts);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  useEffect(() => {
    console.log(loading);
  }, [loading]);

  if (loading) {
    return <Loading />
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black-100">
      <h1 className="text-2xl font-bold mb-4">Workouts</h1>
      {workouts.length > 0 ? (
        <ul className="text-lg">
          {workouts.map((workout, index) => (
            <li key={index} className="mb-2">
              {workout.name}
            </li>
          ))}
        </ul>
      ) : (
        <Loading />
      )}
    </div>
  );
}
