const InputField = ({ type, placeholder, name, handleChange }) => {
  return (
    <>
      {type === "textarea" ? (
        <textarea
          className="w-full mb-4 rounded-sm p-2 border border-lime-500 focus:border-lime-500 outline-none hover:border-lime-300"
          name={name}
          cols="30"
          rows="10"
          placeholder={placeholder}
          onChange={handleChange}
          required
        />
      ) : (
        <input
          className="w-full mb-4 rounded-sm p-2 border border-lime-500 focus:border-lime-500 outline-none hover:border-lime-300"
          type="text"
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
          required
        />
      )}
    </>
  );
};

export default InputField;
