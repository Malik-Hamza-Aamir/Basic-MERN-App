const Button = ({ name, handleClick, additionalClass, type }) => {
  return (
    <>
      <button
        className={`px-3 py-1 ${
          additionalClass ? additionalClass : ""
        } rounded-sm text-sm ml-[1rem]`}
        onClick={handleClick}
        type={type ? type : "button"}
      >
        {name}
      </button>
    </>
  );
};

export default Button;
