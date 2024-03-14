/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Alert, Button, Textarea } from "flowbite-react";
import { useState } from "react";

export default function CommentSection({ postId }) {
  const { currentUser } = useSelector((state) => state.user);
  const [comment, setComment] = useState("");
  const [commentError, setCommentError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (comment.length > 200) {
      return;
    }
    try {
      const res = await fetch("/api/comment/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: comment,
          postId,
          userId: currentUser._id,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setComment("");
        setCommentError(null);
      }
    } catch (error) {
      setCommentError(error.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto w-full p-3">
      {currentUser ? (
        <div className="flex item-center gap-1 my-5 text-gray-400 text-sm">
          <p>Sesión iniciada:</p>
          <img
            className="h-5 w-5 object-cover rounded-full"
            src={"currentUser.profilePicture"}
            alt="Imagen de perfil"
          />
          <Link
            to={"/dashboard?tab=profile"}
            className="text-xs text-orange-400 hover:underline"
          >
            @{currentUser.username}
          </Link>
        </div>
      ) : (
        <div className="text-sm text-gray-400 my-5 flex gap-1">
          Necesitas Iniciar sesión para comentar.
          <Link to={"/sign-in"} className="text-orange-400 hover:underline">
            {" "}
            Iniciar sesión
          </Link>
        </div>
      )}
      {currentUser && (
        <form onSubmit={handleSubmit} className="border rounded-md p-3">
          <Textarea
            placeholder="Escribe un comentario"
            rows="3"
            maxLength="200"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
          <div className="flex justify-between items-center mt-5">
            <p className="text-gray-500">
              {200 - comment.length} caracteres restantes
            </p>
            <Button outline gradientDuoTone="purpleToBlue" type="submit">
              Publicar
            </Button>
          </div>
          {commentError && (
            <Alert color="failure" className="mt-5">
              {commentError}
            </Alert>
          )}
        </form>
      )}
    </div>
  );
}
