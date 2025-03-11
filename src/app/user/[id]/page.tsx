"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import About from "./_components/AboutUser";

const API_URL = "https://summerycrown-us.backendless.app/api/data/users"; 

interface User {
  objectId: string;
  firstName: string;
  lastName: string;
   thumbnail: string;
  description?:string;
}

export default function UserProfile() {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`${API_URL}?where=objectId='${id}'`);
        const data = await response.json();
        setUser(data[0]); 
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* ✅ Gunakan About.tsx dengan data user */}
      <About thumbnail= {user.thumbnail} firstName={user.firstName} lastName={user.lastName} 
      description={user.description}/>
    </div>
  );
}
