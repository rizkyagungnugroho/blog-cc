"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";


const API_URL = "https://summerycrown-us.backendless.app/api/data/blogs";

interface Review {
  objectId: string;
  title: string;
  category: string;
  content: string;
  thumbnail: string;
  description: string;
  slug: string;
  created: string;
  user?: {
    firstName: string;
    lastName: string;
    objectId: string;
    address?: string;
  };
}

export default function Home() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const cachedData = localStorage.getItem("reviews");
    if (cachedData) {
      setReviews(JSON.parse(cachedData));
    } else {
      fetchReviews();
    }
  }, []);

  const fetchReviews = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}?pageSize=5&offset=${page * 5}&sortBy=created%20desc`);
      const data = await response.json();

      console.log("Response API:", data); // Debugging untuk melihat isi response

      if (Array.isArray(data)) {
        setReviews((prev) => [...prev, ...data]);
        localStorage.setItem("reviews", JSON.stringify([...reviews, ...data]));
        setPage((prev) => prev + 1);
      } else {
        console.error("Data bukan array:", data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-center font-bold text-3xl md:text-4xl mb-6">Blog Review HP & Laptop</h1>

      {reviews.length > 4 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reviews.map((review) => (
            <Card
              key={review.objectId}
              className="flex flex-row items-center p-2 md:p-4 cursor-pointer"
              onClick={() => router.push(`/review/${review.slug}`)}
            >
              <img
                src={review.thumbnail}
                alt={review.title}
                className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-md mr-4"
              />
              <CardContent className="flex-1">
                <h2 className="text-lg md:text-xl font-semibold">{review.title}</h2>
                <p className="text-xs md:text-sm text-gray-500">Kategori: {review.category}</p>
                <p className="text-xs md:text-sm text-gray-500">
               
                </p>
                <p className="text-xs md:text-sm text-gray-500">
                  Tanggal: {new Date(review.created).toLocaleString()}
                </p>
                <p className="mt-2 text-gray-700 text-sm md:text-base line-clamp-2">{review.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">Tidak ada hasil yang ditemukan.</p>
      )}
    </div>
  );
}
