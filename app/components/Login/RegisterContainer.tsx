"use client";

import { Button, Link } from "@mui/material";
import CustomInput from "../Form/CustomInput";
import { useForm, FormProvider } from "react-hook-form";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import { useAuth } from "@/app/context/AuthContext";
import { RegisterPayload } from "@/app/utils/types";
import { useRouter } from "next/navigation";
import { countries } from "../Form/options";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterContainer = () => {
  const methods = useForm<RegisterPayload>({
    defaultValues: {
      Email: "",
      Password: "",
      UserName: "",
      FirstName: "",
      LastName: "",
      Country: "",
      MobileNo: "",
      LookingFor: "",
    },
  });

  const { register } = useAuth();
  const router = useRouter();

  const onSubmit = async (data: RegisterPayload) => {
    try {
      await register(data);
      toast.success("Registration successful!");
    } catch (error) {
      console.error("Registration Error:", error);
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="w-[900px] bg-white m-auto flex flex-col items-center px-20 py-8 rounded-md shadow-md gap-4 overflow-auto"
      >
        <p className="font-poppins font-medium text-secondaryDark text-[24px] mb-4">
          Create an account
        </p>
        <div className="w-full">
          <CustomInput
            type="dropdown"
            label="Looking For*"
            name="LookingFor"
            options={[
              { value: "Groom", label: "Groom" },
              { value: "Bride", label: "Bride" },
            ]}
            control={methods.control}
            rules={{ required: "This field is required" }}
          />
        </div>
        <div className="w-full grid grid-cols-2 gap-x-4 gap-y-4">
          <CustomInput
            type="text"
            label="Username*"
            name="UserName"
            endAdornment={
              <div className="h-[48px]  w-[60px] bg-secondaryDark rounded-r-[11px] text-white flex items-center justify-center">
                <AccountCircleOutlinedIcon />
              </div>
            }
            control={methods.control}
            rules={{
              required: "Username is required",
              minLength: {
                value: 3,
                message: "Username must be at least 3 characters",
              },
            }}
          />
          <CustomInput
            type="text"
            label="First Name*"
            name="FirstName"
            control={methods.control}
            endAdornment={
              <div className="h-[48px]  w-[60px] bg-secondaryDark rounded-r-[11px] text-white flex items-center justify-center">
                <AccountCircleOutlinedIcon />
              </div>
            }
            rules={{
              required: "First name is required",
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "First name must contain only letters",
              },
            }}
          />
          <CustomInput
            type="text"
            label="Last Name*"
            name="LastName"
            control={methods.control}
            endAdornment={
              <div className="h-[48px]  w-[60px] bg-secondaryDark rounded-r-[11px] text-white flex items-center justify-center">
                <AccountCircleOutlinedIcon />
              </div>
            }
            rules={{
              required: "Last name is required",
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Last name must contain only letters",
              },
            }}
          />
          <CustomInput
            type="text"
            label="E-Mail Address*"
            name="Email"
            endAdornment={
              <div className="h-[48px]  w-[60px] bg-secondaryDark rounded-r-[11px] text-white flex items-center justify-center">
                <EmailOutlinedIcon />
              </div>
            }
            control={methods.control}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            }}
          />
          <CustomInput
            type="number"
            label="Mobile No.*"
            name="MobileNo"
            endAdornment={
              <div className="h-[48px]  w-[60px] bg-secondaryDark rounded-r-[11px] text-white flex items-center justify-center">
                <PhoneAndroidOutlinedIcon />
              </div>
            }
            control={methods.control}
            rules={{
              required: "Mobile number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Mobile number must be 10 digits",
              },
            }}
          />
          <CustomInput
            type="dropdown"
            label="Country*"
            name="Country"
            options={countries}
            control={methods.control}
            rules={{ required: "Country is required" }}
          />
          <CustomInput
            type="password"
            label="Password*"
            name="Password"
            endAdornment={
              <div className="h-[48px]  w-[60px] bg-secondaryDark rounded-r-[11px] text-white flex items-center justify-center">
                <LockOutlinedIcon />
              </div>
            }
            control={methods.control}
            rules={{ required: "Password is required" }}
          />
          <CustomInput
            type="password"
            label="Confirm Password*"
            name="confirmPassword"
            endAdornment={
              <div className="h-[48px]  w-[60px] bg-secondaryDark rounded-r-[11px] text-white flex items-center justify-center">
                <LockOutlinedIcon />
              </div>
            }
            control={methods.control}
            rules={{
              required: "Please confirm your password",
              validate: (value: any) =>
                value === methods.getValues("Password") ||
                "Passwords do not match",
            }}
          />
        </div>

        {/* <div className="w-full my-4">
    
          <p className="text-[0.9rem] text-gray-500 text-center">
            Verification expired. Check the checkbox again.
          </p>
        </div> */}

        <ToastContainer />

        <Button
          type="submit"
          variant="contained"
          className="!w-full !font-poppins !normal-case !text-white !bg-primary !py-2"
        >
          Register
        </Button>

        <Link
          href="#"
          className="text-[0.9rem] !text-secondaryDark !font-poppins !mt-4 "
          sx={{
            textDecorationColor: "#a88652",
          }}
          onClick={() => router.push("/login?active=sign-in")}
        >
          Have an account? Login
        </Link>
      </form>
    </FormProvider>
  );
};

export default RegisterContainer;
