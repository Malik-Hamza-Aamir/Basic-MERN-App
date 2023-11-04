import { NavLink } from "react-router-dom";
import { navlinks } from "../data/data";
import Button from "./Button";

const Navbar = () => {
  const loginClick = () => {
    console.log("login btn clicked");
  };

  const signupClick = () => {
    console.log("signup btn clicked");
  };

  return (
    <div className="bg-black text-white flex justify-between items-center h-16 px-2">
      <div>
        <h2 className="font-bold text-2xl">Notes App</h2>
      </div>

      <div className="">
        <div className="flex">
          {navlinks.map((navlink, index) => (
            <NavLink
              to={navlink.to}
              key={index}
              className={({ isActive }) =>
                `${isActive ? "text-lime-400" : ""} mx-2 `
              }
            >
              {navlink.title}
            </NavLink>
          ))}
        </div>
      </div>

      <div>
        <Button
          name="Login"
          handleClick={loginClick}
          additionalClass="bg-white text-black hover:bg-slate-200"
        />
        <Button
          name="Signup"
          handleClick={signupClick}
          additionalClass="bg-white text-black hover:bg-slate-200"
        />
      </div>
    </div>
  );
};

export default Navbar;
