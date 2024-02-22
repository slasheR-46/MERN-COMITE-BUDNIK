import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.acces_token;
  if (!token) {
    return next(errorHandler(401, "No estas autorizado para esta ruta"));
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(errorHandler(401, "No estas autorizado para esta ruta"));
    }
    req.user = user;
    next();
  });
};
