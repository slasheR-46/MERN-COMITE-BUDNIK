import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";
import DashPosts from "../components/DashPosts";
import DashUsers from "../components/DashUsers";

export default function Dashborad() {
  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    // console.log(tabFromUrl);
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }),
    [location.search];

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        <DashSidebar />
      </div>
      {/* Dashboard */}

      {/* Perfil */}
      {tab === "profile" && <DashProfile />}
      {/* Posts */}
      {tab === "posts" && <DashPosts />}
      {/* Usuarios */}
      {tab === "users" && <DashUsers />}
      {/* Comentarios */}
    </div>
  );
}
