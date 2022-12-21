import React from "react";
import { useState, useEffect } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import Axios from "axios";
import AdminPage from "./adminPage";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const userData = {
    user: "",
    password: "",
  };
  const [data, setData] = useState(userData);
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState("");
  const [access, setAccess] = useState(false);

  function handleChange(event) {
    setData({ ...data, [event.target.name]: event.target.value });
  }

  // useEffect(() => {
  //   if (result === "success") {
  //     setAccess(true);
  //   } 
  //   }, [result]);

  useEffect(() => {
    if (result === "success") {
      setAccess(true);
      sessionStorage.setItem("access", true);  // store access state in sessionStorage
    } 
  }, [result]);

  // retrieve access state from sessionStorage on initial render
  useEffect(() => {
    const storedAccess = sessionStorage.getItem("access");
    if (storedAccess) {
      setAccess(true);
    }
  }, []);


  const onSubmit = async () => {
    setIsLoading(true);
    await Axios.post("http://localhost:8080/api/verify", {
      user: data.user,
      password: data.password,
    })
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    
  };
  return !access ? (
    <div>
      <div className="bg-red-900 h-16 flex justify-center items-center  ">
        <div>
          <h1 className="text-white text-2xl">
            Welcome to Eyewitness Testimony Admin Page!
          </h1>
        </div>
      </div>
      <div className="bg-yellow-400 w-fit mt-40 mx-auto p-1">
        <div className="bg-[#660000]">
          <div className="p-10 xl:p-16 text-2xl">
            <p className="text-white">Username:</p>
            <input
              type="text"
              name="user"
              className="bg-white w-full px-2"
              placeholder="username"
              onChange={handleChange}
            />
            <p className="text-white mt-4">Password:</p>
            <div className="flex justify-center">
              <p>
                <input
                  className="bg-white px-2 inline-block float-left"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
                {showPassword ? (
                  <MdVisibility
                    className="block float-right bg-white h-8 text-red-500"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <MdVisibilityOff
                    className="block float-right bg-white h-8"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </p>
            </div>
            <div className=" text-white bg-yellow-500 w-fit mt-8 mx-auto px-3  rounded-md">
              <button onClick={onSubmit}>Sign in</button>
            </div>
            <div>
              <p className="text-white text-center mt-4">
                Don't have an account?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <AdminPage access={access} />
    </div>
  );
};

export default Signin;
