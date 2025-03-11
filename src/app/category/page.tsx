"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const API_URL = "https://summerycrown-us.backendless.app/api/data/blogs";

interface Review {
  objectId: string;
  title: string;
  category: string;
  content: string;
  thumbnail: string;
  description: string;
  slug: string;
}

export default function Home() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const router = useRouter();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(API_URL);
        const data: Review[] = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchReviews();
  }, []);

  const filteredReviews = reviews.filter(
    (review) =>
      (category === "All" || review.category === category) &&
      (review.title.toLowerCase().includes(search.toLowerCase()) ||
        review.content.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="max-w-6xl mx-auto p-4 flex flex-col md:flex-row gap-6">
      {/* Sidebar Filter */}
      <div className="w-full md:w-1/4 bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-bold mb-3">Filter Kategori</h2>
        <ul className="space-y-2">
          {["All", "HP", "Laptop", "Keyboard"].map((cat) => (
            <li
              key={cat}
              className={`cursor-pointer p-2 rounded-md text-sm font-medium ${
                category === cat ? "bg-blue-500 text-white" : "hover:bg-gray-200"
              }`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>

      {/* Konten Utama */}
      <div className="flex-1">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          Blog Review HP & Laptop
        </h1>

        {/* Pencarian */}
        <Input
          type="text"
          placeholder="Cari review..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border rounded-md mb-4"
        />

        {/* List Review */}
        {filteredReviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredReviews.map((review) => (
              <Card
                key={review.objectId}
                className="flex flex-col md:flex-row items-center p-4 cursor-pointer shadow-md hover:shadow-lg transition"
                onClick={() => router.push(`/review/${review.slug}`)}
              >
                <img
                  src={review.thumbnail}
                  alt={review.title}
                  className="w-full md:w-32 h-32 object-cover rounded-md mb-4 md:mb-0 md:mr-4"
                />
                <CardContent className="flex-1">
                  <h2 className="text-lg md:text-xl font-semibold">{review.title}</h2>
                  <p className="text-sm text-gray-500">Kategori: {review.category}</p>
                  <p className="mt-2 text-gray-700 line-clamp-2">{review.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center mt-4">Tidak ada hasil yang ditemukan.</p>
        )}
      </div>
    </div>
  );
}
