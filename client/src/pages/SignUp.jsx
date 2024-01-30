import { Link } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className=" font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600 rounded-lg text-white">
              Comite
            </span>
            Budnik
          </Link>
          <p className="text-sm mt-5">Texto de prueba</p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Usuario" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <Label value="Email" />
              <TextInput type="text" placeholder="@budnik.cl" id="email" />
            </div>
            <div>
              <Label value="Contraseña" />
              <TextInput type="text" placeholder="Password" id="password" />
            </div>
            <Button gradientDuoTone="purpleToBlue">Crear Cuenta</Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Ya tienes una cuenta ?</span>
            <Link to="/sign-in" className="text-blue-500">
              Iniciar sesion
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
