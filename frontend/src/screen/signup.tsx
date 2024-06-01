import React, { useState } from "react";
import { Link } from "react-router-dom";

// import { useNavigate } from 'react-router-dom';
const Signup = () => {
 const [userData , setUserData]=useState({
  name:"",
  email:"",
  phone:"",
  gender:"",
  password:""
 })
  //   const navigate=useNavigate()
  const SignUp = (e) => {
    e.preventDefault();
     console.log(userData , "uuuuuuuuu")

    //  navigate('/login')
  };
  console.log(userData , "userData")
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "10px",
        marginTop: 2,
      }}
    >
      <form onSubmit={(e) => SignUp(e)} className="mt-5  w-2/5">
        <input
          type="text"
          placeholder="Name"
          required
          className=" rounded w-full text-center  p-1 px-3 m-1 py-1 bg-blue-50 "
          onChange={(e) => setUserData({ ...userData, 'name':e.target.value})}
        />
        <br />

        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setUserData({ ...userData, 'email':e.target.value})}
          className="rounded w-full text-center bg-blue-50  p-1 px-3 m-1 py-1  "
        />
        <br />
        <input
          type="text"
          placeholder="Phone"
          required
          onChange={(e) => setUserData({ ...userData, 'phone':e.target.value})}
          className="rounded w-full text-center  p-1 px-3 m-1 py-1 bg-blue-50"
        />
        <br />
        <div className="rounded w-full text-center  p-1 px-3 m-1 py-1 bg-blue-50" style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Gender:</span>{" "}
          <div>
            {" "}
            <div>
              {" "}
              <input
                type="radio"
                // name="male"
                value={"male"}
                checked={userData.gender === "male"}
                onChange={(e) => setUserData({ ...userData, 'gender':e.target.value})}
              />
              <span>male </span>
            </div>
            <div>
              <input
                type="radio"
                // name="male"
                value={"female"}
                checked={userData.gender === "female"}
                onChange={(e) => {
                  console.log(e.target.value)
                  setUserData({ ...userData, 'gender':e.target.value})
                }}
              />{" "}
              <span>female</span>
            </div>
          </div>
        </div>
        <div className="rounded w-full text-center  p-1 px-3 m-1 py-1 bg-blue-50 " style={{ display: "flex", justifyContent: "space-between" }}>
          <span>education:</span>
          <br />
          <div>
            {" "}
            <span>
              {" "}
              <input type="checkbox" /> 12th{" "}
            </span>
            <br />
            <span>
              <input type="checkbox" /> bca
            </span>
            <br />
            <span>
              <input type="checkbox" /> mca
            </span>
            <br />
            <span>
              <input type="checkbox" /> phd.
            </span>
            <br />
          </div>
        </div>
        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setUserData({ ...userData, 'password':e.target.value})}
          className="rounded w-full text-center bg-blue-50 p-1 px-3 m-1 py-1 "
        />
        <br />
        <button
          type="submit"
          required
          className=" rounded bg-blue-800 w-full text-center text-white p-1 px-3 m-1 py-1"
        >
          Signup
        </button>
        <br />
        <Link
          to="/"
          className="rounded  w-full text-center text-blue-800 p-1 px-3 m-1 py-1"
        >
          Already have account ? SignIn
        </Link>
      </form>
    </div>
  );
};

export default Signup;
