"use client";

import { Button, Link } from "@mui/material";
import CustomInput from "../Form/CustomInput";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useForm, FormProvider } from "react-hook-form";
import { loginUser } from "@/app/utils/apis";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";

const LoginContainer = () => {
  const router = useRouter();
  const methods = useForm();
  const { login } = useAuth();

  const onSubmit = async (data: any) => {
    login(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="w-[500px] bg-white  m-auto flex flex-col items-center p-20 rounded-md shadow-md gap-4    "
      >
        <img
          src="/svgs/header-badge.svg"
          alt="Header Badge"
          className="w-[18rem] "
        />
        <p className="font-poppins font-medium text-secondaryDark text-[24px] ">
          Login into your account
        </p>

        <CustomInput
          type="text"
          label="Email / Mobile No."
          name="emailOrMobile"
          endAdornment={
            <div className="-mr-4 h-[48px] w-[60px] bg-secondaryDark rounded-r-[11px] text-white flex items-center justify-center">
              <EmailOutlinedIcon />
            </div>
          }
          control={methods.control}
          rules={{
            required: "Email is required",
          }}
        />
        <CustomInput
          type="password"
          label="Password"
          name="password"
          endAdornment={
            <div className="h-[48px] -mr-4 w-[60px] bg-secondaryDark rounded-r-[11px] text-white flex items-center justify-center">
              <LockOutlinedIcon />
            </div>
          }
          control={methods.control}
          rules={{
            required: "Password is required",
          }}
        />

        <Link
          href="#"
          className="!self-end !text-[0.9rem] !text-secondaryDark !font-poppins "
        >
          Forgot password?
        </Link>

        <Button
          type="submit"
          variant="contained"
          className="!w-full !font-poppins !normal-case !text-white !bg-primary !py-2 !shadow-md"
        >
          Login Now
        </Button>

        <div className="flex items-center gap-2 w-full my-4">
          <div className="flex-grow h-[1px] bg-gray-300"></div>
          <p className="text-gray-400 font-poppins text-[0.9rem]">OR</p>
          <div className="flex-grow h-[1px] bg-gray-300"></div>
        </div>

        <Button
          variant="outlined"
          className="!w-full !font-poppins !normal-case !text-secondaryDark !border-black py-2"
          onClick={() => router.push("/login?active=sign-up")}
        >
          Signup Now
        </Button>
      </form>
    </FormProvider>
  );
};

export default LoginContainer;
