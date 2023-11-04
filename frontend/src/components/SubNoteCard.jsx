import Button from "./Button";

const SubNoteCard = ({ notes }) => {
  const learnClick = (id) => {
    console.log("Learn btn clicked");
    console.log("ID :", id);
  };

  const deleteClick = (id) => {
    // deleteNote(id);
    console.log("Delete Button Clicked");
    console.log("ID :", id);
  };

  return (
    <>
      {notes.map((note) => (
        <div key={note.id} className="bg-gray-300 rounded-md mb-2 w-2/5 px-2 py-2 flex justify-between flex-col hover:shadow">
          <div className="border p-2 mb-2 rounded-md bg-gray-200">
            <h2>{note.name}</h2>
          </div>

          <div className="border p-2 mb-2 rounded-md bg-gray-200 text-gray-500">
            <p>{note.longDetail}</p>
          </div>

          <div className="flex justify-end">
            <Button
              name="Expand"
              additionalClass="bg-lime-400 text-black hover:bg-lime-500"
              handleClick={() => learnClick(note.id)}
            />
            <Button
              name="Delete"
              additionalClass="bg-red-500 text-black hover:bg-red-600"
              handleClick={() => deleteClick(note.id)}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default SubNoteCard;
