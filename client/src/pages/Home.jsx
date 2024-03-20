import { Link } from "react-router-dom";
// import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div className="min-h-screen">
      <div className="flex flex-col gap-3 p-8 px-3 max-w-6xl mx-auto ">
        <h1 className="bg-gradient-to-r from-orange-500 to-orange-200 text-transparent bg-clip-text text-3xl font-bold lg:text-6xl">
          Bienvenidos a budnik Info
        </h1>
        <p className="text-gray-500 text-xs sm:text-sm">
          Un lugar donde mantenerte informado sobre las últimas noticias de la
          compañía
        </p>
        <Link
          to="/search"
          className="text-orange-500 text-xs sm:text-sm font-bold hover:underline"
        >
          Ver todos los posts
        </Link>
      </div>
      {/* <div className="p-3 bg-amber-100 dark:bg-slate-700">
        <CallToAction />
      </div> */}

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">
              Posts Recientes
            </h2>
            <div className="flex flex-wrap gap-4">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-orange-500 hover:underline text-center"
            >
              Ver todos los posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
