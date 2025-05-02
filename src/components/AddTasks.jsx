import { useState } from "react";
import Input from "./Input";

function AddTasks({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescrition] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o titulo da tarefa"
        className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={title}
        onChange={() => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa "
        value={description}
        onChange={() => setDescrition(event.target.value)}
      />
      <button
        onClick={() => {
          //verificar se inputs estao preenchidos
          if (!title.trim() || !description.trim()) {
            return alert("Preencha o titulo e a descrição");
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescrition("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTasks;
