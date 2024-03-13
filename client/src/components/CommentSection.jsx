import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Textarea } from "flowbite-react";
import { useState } from "react";

export default function CommentSection({ postId }) {
  const { currentUser } = useSelector((state) => state.user);
  const [comment, setComment] = useState("");

  return (
    <div className="max-w-2xl mx-auto p-3">
      {currentUser ? (
        <div className="flex item-center gap-1 my-5 text-orange-500 text-sm">
          <p>Sesión iniciada:</p>
          <img
            className="h-5 w-5 object-cover rounded-full"
            src={"currentUser.profilePicture"}
            alt="Imagen de perfil"
          />
          <Link
            to={"/dashboard?tab=profile"}
            className="text-xs text-cyan-600 hover:underline"
          >
            @{currentUser.username}
          </Link>
        </div>
      ) : (
        <div className="text-sm text-orange-500 my-5 flex gap-1">
          Necesitas Iniciar sesión para comentar.
          <Link to={"/sign-in"} className="text-blue-500 hover:underline">
            {" "}
            Iniciar sesión
          </Link>
        </div>
      )}
      {currentUser && (
        <form>
          <Textarea
            className=""
            placeholder="Escribe un comentario"
            rows="3"
            maxLength="200"
          />
          <div className="">
            <p>caracteres restantes</p>
            <Button className="bg-orange-500 hover:bg-orange-500 transition duration-300 ease-in-out  ">
              Publicar
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
