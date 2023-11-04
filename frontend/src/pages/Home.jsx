import {
  useGetAllNotesQuery,
  useDeleteNoteMutation,
  useAddNoteMutation,
} from "../features/notes/noteApiSlice";
import { NoteCard, InputField, Button } from "../components";
import { useState } from "react";

const Home = () => {
  const [notesData, setNotesData] = useState({
    title: "",
    description: "",
  });

  const { data, isLoading, isSuccess, isError, error } = useGetAllNotesQuery();
  const [deleteNote] = useDeleteNoteMutation();
  const [addNote] = useAddNoteMutation();

  const deleteSelectedNote = async (id) => {
    await deleteNote(id);
  };

  const handleForm = async (e) => {
    e.preventDefault();
    console.log("Data payload : ", notesData);
    await addNote(notesData);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNotesData({ ...notesData, [name]: value });
  };

  let content;
  if (isLoading) {
    content = <p>Loading.....</p>;
  } else if (isSuccess) {
    content = <NoteCard notes={data} deleteNote={deleteSelectedNote} />;
  } else if (isError) {
    content = alert("Error deteching Data :", error);
  }

  return (
    <>
      <div className="px-2 py-2 flex flex-row">
        <div className="p-4 w-3/4 flex flex-wrap justify-between">
          {content}
        </div>

        <form onSubmit={handleForm} className="w-1/3 px-3 py-4">
          <InputField
            placeholder="Note Title Here..."
            handleChange={handleChange}
            name="title"
          />
          <InputField
            type="textarea"
            placeholder="Note Description Here..."
            handleChange={handleChange}
            name="description"
          />
          <Button
            name="Add New Note"
            additionalClass="bg-lime-400 text-black hover:bg-lime-500"
            type="submit"
          />
        </form>
      </div>
    </>
  );
};

export default Home;
