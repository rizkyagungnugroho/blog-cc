export async function fetchBlogs() {
    const response = await fetch("https://summerycrown-us.backendless.app/api/data/blogs");
    if (!response.ok) {
      throw new Error("Gagal mengambil data blog");
    }
    return await response.json();
  }
  