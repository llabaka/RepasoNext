import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {

  const [workouts, setWorkouts] = useState<any[]>([]);

  const fetchWorkouts = async () => {
    try {
      const res = await fetch('/api/workouts/workout');
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }
      const result = await res.json();

      console.log(result.workouts);
      
      setWorkouts(result);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWorkouts();
  },[]);

  useEffect(() => {
    console.log(workouts);
  },[]);

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
        <Loading/>
      )}
    </div>
  );
}
