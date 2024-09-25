import React from "react";
import MainButton from "../../../components/mainbutton";
import InputGroup from "../../../components/InputGroup";
import Image from "next/image";
import loginHero from "../../../public/adminImgs/loginHero.svg";
import Flag from "../../../public/adminImgs/englandflag.svg";
function Login() {
  return (
    <div className="flex  justify-center items-center  mx-auto w-3/5  my-[10rem] ">
      <form
        action=""
        className="flex w-3/6 h-[425px] justify-center items-center  bg-[#38394E] flex-col gap-10 "
      >
        <h1 className="text-3xl font-bold text-white">Welcome Admin</h1>
        <InputGroup
          placeholder1="Email"
          placeholder2="Password"
          type1="email"
          type2="password"
        />
        <MainButton btnDesc="Submit" />
      </form>
      <div className="bg-white w-3/5 flex items-start justify-center py-3">
        <Image className="h-[400px] " src={loginHero} alt="loginHero" />
        <Image src={Flag} alt="flag" />
      </div>
    </div>
  );
}

export default Login;
