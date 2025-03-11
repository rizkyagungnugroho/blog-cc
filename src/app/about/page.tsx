"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const API_URL = "https://summerycrown-us.backendless.app/api/data/users"; // Ganti dengan API yang sesuai

interface User {
  objectId: string;
  firstName: string;
  lastName: string;
  email: string;
  description: string;
  thumbnail: string;
}

export default function About() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(API_URL);
        const data: User[] = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-6">About Us Review Gadget</h1>
      <p className="text-lg text-gray-600 text-center mb-8">
      Selamat datang di Review Gadget, sumber terpercaya untuk ulasan gadget terbaru! 
      Kami menghadirkan analisis mendalam, perbandingan objektif, serta rekomendasi terbaik untuk membantu Anda memilih perangkat yang sesuai dengan kebutuhan.
       Dari smartphone, laptop, hingga aksesori teknologi, kami menguji setiap produk dengan cermat agar Anda mendapatkan informasi akurat dan terpercaya.
      </p>
      <p className="text-4xl font-extrabold text-gray-800 text-center mb-10">Meet Our Authors
      </p>
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {users.map((user) => (
            <div key={user.objectId} className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4">
              <Image
                src={user.thumbnail}
                alt={user.firstName}
                className="rounded-full border-4 border-black-500"
                width={64}
                height={64}
              />
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {user.firstName} {user.lastName}
                </h2>
                <p className="text-gray-500 text-sm">{user.email}</p>
                <p className="text-gray-700 mt-2">
                  {user.description || "Tidak ada deskripsi tersedia."}
                </p>
                
              </div>
            </div>
          ))}
        </div>
      )}
      <h1 className="text-4xl font-extrabold text-gray-800 text-center py-10">Our Mission & Vision
      </h1>
      <p className="text-lg text-gray-600  mb-8">Visi:
Menjadi platform review gadget terdepan yang memberikan informasi akurat, terpercaya, dan membantu pengguna dalam memilih teknologi terbaik sesuai kebutuhan mereka.
</p>
<p className="text-lg text-gray-600  mb-8">Misi:
Menyediakan Review Objektif Memberikan ulasan yang jujur, berbasis pengalaman langsung, dan tanpa bias terhadap merek tertentu.
Menghadirkan Informasi Terkini Selalu mengikuti perkembangan teknologi terbaru dan memberikan berita terkini tentang dunia gadget.</p>
    </div>
    
  );
}
