"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

const API_URL = "https://summerycrown-us.backendless.app/api/data/blogs";

interface Review {
  objectId: string;
  title: string;
  category: string;
  content: string;
  thumbnail: string;
  description: string;
  user?: {
    firstName: string;
    lastName: string;
    objectId: string;
  };
}

export default function ReviewDetail() {
  const { slug } = useParams(); // Ambil slug dari URL
  const [review, setReview] = useState<Review | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!slug) return; // Jika slug belum ada, jangan fetch data

    const fetchReview = async () => {
      try {
        const response = await fetch(`${API_URL}?where=${encodeURIComponent(`slug='${slug}'`)}&loadRelations=user`);
        const data = await response.json();
        if (data.length > 0) {
          setReview(data[0]); // Ambil data pertama
        } else {
          setReview(null);
        }
      } catch (error) {
        console.error("Error fetching review:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReview();
  }, [slug]);
  
  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (!review) return <p className="text-center text-red-500">Review tidak ditemukan.</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{review.title}</h1>
      <p className="text-sm text-gray-500 mt-1">Kategori: {review.category}</p>

      {/* Author */}
      <p className="text-sm text-gray-600 mt-2">
        Author:{" "}
        {review.user?.objectId ? (
          <a
            href={`/user/${review.user.objectId}`}
            className="text-blue-600 hover:underline"
          >
            {review.user.firstName} {review.user.lastName}
          </a>
        ) : (
          "Unknown"
        )}
      </p>

      {/* Gambar */}
      <img
        src={review.thumbnail}
        alt={review.title}
        className="w-full max-w-full h-auto object-cover mt-4 rounded-md shadow-md"
      />

      {/* Deskripsi dan Konten */}
      <p className="mt-4 text-lg text-gray-800">{review.description}</p>
      <p className="mt-2 text-gray-700">{review.content}</p>

      {/* Tombol Kembali */}
      <button
        onClick={() => router.back()}
        className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition"
      >
        Kembali
      </button>
    </div>
  );
}
