import { SubNoteCard, InputField, Button } from "../components";
import { useParams } from "react-router-dom";
import { useGetSubNotesMutation } from "../features/notes/noteApiSlice.js";
import { useState, useEffect } from "react";

const SubNote = () => {
  const [notesData, setNotesData] = useState({
    title: "",
    description: "",
  });
  const { id } = useParams();
  const [getSubNotes, { data, isLoading, isSuccess, isError, error }] =
    useGetSubNotesMutation();

  useEffect(() => {
    getSubNotes(id);
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNotesData({ ...notesData, [name]: value });
  };

  const handleForm = async (e) => {
    e.preventDefault();
    console.log("Data payload : ", notesData);
  };

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = <SubNoteCard notes={data} />;
  } else if (isError) {
    content = alert("Error while fetching subnotes :", error);
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
            name="Add SubNote"
            additionalClass="bg-lime-400 text-black hover:bg-lime-500"
            type="submit"
          />
        </form>
      </div>
    </>
  );
};

export default SubNote;
