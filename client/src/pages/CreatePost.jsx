import { TextInput, Select, FileInput, Button } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function CreatePost() {
  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Crear Post</h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Titulo"
            required
            id="title"
            className="flex-1"
          />
          <Select>
            <option value="Sin categoria">Seleccione categoria</option>
            <option value="Prueba categoria 0">Prueba 0</option>
            <option value="Prueba categoria 1">Prueba 1</option>
            <option value="Prueba categoria 1">Prueba 2</option>
          </Select>
        </div>

        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput type="file" accept="image/*" />
          <Button
            type="button"
            gradientDuoTone="purpleToBlue"
            size="sm"
            outline
          >
            Subir imagen
          </Button>
        </div>
        <ReactQuill
          theme="snow"
          placeholder="Escribe un post..."
          className="h-72 mb-12"
          required
        />
        <Button type="submit" gradientDuoTone="purpleToBlue">
          Publicar
        </Button>
      </form>
    </div>
  );
}
