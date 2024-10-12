import React from "react";
import Sharebutton from "../../../components/shared/sharebutton/index";
import InputGroup from "../../../components/shared/InputGroup";
import Image from "next/image";
import loginHero from "../../../public/adminImgs/loginHero.svg";
import Flag from "../../../public/adminImgs/englandflag.svg";

function Login() {
  return (
    <div>
      <img className="ml-6 mt-10" src="/adminImgs/logo.svg" alt="logo" />
      <div className="flex  justify-center items-center  mx-auto w-3/5  my-20 ">
        <form
          action=""
          className="flex w-3/6 h-[425px] justify-center items-center  bg-[#38394E] flex-col gap-10 "
        >
          <h1 className="text-3xl font-bold text-white">Welcome Admin</h1>
          <InputGroup
            className="h-[50px] pl-3 text-xl bg-bgoptions"
            type="email"
            placeholder=" Email"
          />
          <InputGroup
            className="h-[50px] pl-3 text-xl bg-bgoptions"
            type="password"
            placeholder=" Password"
          />
          <div className="w-[70%]  ">
            <Sharebutton
              className="bg-btnColor w-full py-3 justify-center items-center flex  hover:opacity-85 active:opacity-80 transition-opacity duration-200 "
              btnName="Sign in"
            />
          </div>
        </form>
        <div className="bg-white w-3/5 flex items-start justify-center py-3">
          <Image className="h-[400px] " src={loginHero} alt="loginHero" />
          <Image src={Flag} alt="flag" />
        </div>
      </div>
    </div>
  );
}

export default Login;
