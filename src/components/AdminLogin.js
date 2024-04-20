import React from "react";
import Header from "./Header";

const AdminLogin = () => {
  return (
    <div className="flex justify-between">
      <div className="absolute z-10 text-3xl text-bold p-6 m-3">
        <h1>Admin login</h1>
      </div>
      <div className="absolute">
        <img
          src="https://unsplash.com/photos/zA7I5BtFbvw/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzEzNDc4NDcwfA&force=true"
          alt="backgrn-login"
        />
      </div>
      <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 ">
        <input type="text" placeholder="Email Address" className="p-2 m-2" />
        <input
          type="password"
          placeholder="Email Address"
          className="p-2 m-2"
        />
        <button className="p-4 m-4">Sign In</button>
      </form>
    </div>
  );
};

export default AdminLogin;
