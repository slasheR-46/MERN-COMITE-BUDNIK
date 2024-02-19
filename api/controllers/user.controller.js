import { errorHandler } from "../utils/error.js";

export const test = (req, res) => {
  res.json({ message: "Api: levantada" });
};

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.userId) {
    return next(
      errorHandler(403, "No tienes permiso para actualizar este usuario.")
    );
  }
  if (req.body.password) {
    if (req.body.password.length < 6) {
      return next(errorHandler(400, "No estas autorizado para esta ruta"));
    }
    req.body.password = bcrypt.hashSync(req.body.password, 10);
  }
  if (req.body.username) {
    if (req.body.username.length < 7 || req.body.username.length > 20) {
      return next(
        errorHandler(
          400,
          "El nombre de usuario debe tener entre 7 y 20 caracteres."
        )
      );
    }
    if (req.body.username.includes(" ")) {
      return next(
        errorHandler(400, "El nombre de usuario no puede contener espacios")
      );
    }
    if (req.body.username !== req.user.username.toLowerCase()) {
      return next(
        errorHandler(400, "El nombre de usuario debe estar en minúsculas")
      );
    }
    if (!req.body.username.match(/^[a-z0-9]+$/)) {
      return next(
        errorHandler(
          400,
          "El nombre de usuario solo puede contener letras y números"
        )
      );
    }
    try {
      const updateUser = await User.findByIdAndUpdate(
        req.params.userId,
        {
          $set: {
            username: req.body.username,
            email: req.body.email,
            profilePicture: req.body.profilePicture,
            password: req.body.password,
          },
        },
        { new: true }
      );
      const { password, ...rest } = updateUser._doc;
      res.status(200).json(rest);
    } catch (error) {
      next(error);
    }
  }
};
