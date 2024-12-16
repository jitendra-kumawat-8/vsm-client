"use client";

import React from "react";
import CustomInput from "../components/Form/CustomInput";
import { useForm, FormProvider } from "react-hook-form";

const ContactUs = () => {
  const methods = useForm();

  return (
    <div className="relative min-h-screen bg-[#45133C] text-secondaryLight px-32 py-24 font-vietnam flex  gap-20">
      <img
        src="/contact-us-bg.svg"
        alt="contact-us"
        className="w-full h-full absolute top-0 object-cover left-0 z-0 "
      />
      <div className="bg-[#0D040B] opacity-70 w-full h-full absolute top-0 left-0 z-0 "></div>
      <div className="relative z-10 h-fit bg-white p-10 rounded-lg shadow-lg w-1/2 ">
        <h2 className="text-2xl font-semibold text-primary text-center mb-6">
          CONTACT US
        </h2>
        <FormProvider {...methods}>
          <form className="space-y-4">
            <CustomInput
              type="text"
              label="Name *"
              name="name"
              placeholder="Santhosh"
              control={methods.control}
              rules={{ required: "Name is required" }}
            />
            <CustomInput
              type="text"
              label="Email *"
              name="email"
              placeholder="santhosh@gmail.com"
              control={methods.control}
              rules={{ required: "Email is required" }}
            />
            <CustomInput
              type="text"
              label="Mobile *"
              name="mobile"
              placeholder="+91 98265834232"
              control={methods.control}
              rules={{ required: "Mobile number is required" }}
            />
            <CustomInput
              type="text"
              label="Message *"
              name="message"
              control={methods.control}
              rules={{ required: "Message is required" }}
              rows={4}
              placeholder="Hello, I want to know more about your services."
            />
            <button
              type="submit"
              className="w-full bg-[#45133C] text-white py-2 rounded-lg"
            >
              SUBMIT
            </button>
          </form>
        </FormProvider>
      </div>
      <div className="relative w-1/2 z-10 text-secondaryDark font-vietnam flex flex-col gap-10">
        <div className="flex gap-8 items-start">
          <img src="/location.svg" className="w-12 h-12" />
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-normal ">COMPANY NAME & ADDRESS</h3>
            <p className="text-lg font-normal">Vedic Soulmate Pvt. Ltd.</p>
            <p className="text-lg font-normal">Sky Loft, Creaticity Mall,</p>
            <p className="text-lg font-normal">Shastrinagar, Yerawada, Pune,</p>
            <p className="text-lg font-normal">Maharashtra 411006</p>
          </div>
        </div>
        <div className="flex gap-8 items-start">
          <img src="/phone.svg" className="w-12 h-12" />
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-normal ">PHONE</h3>
            <p className="text-lg font-normal">+91 98265834232</p>
          </div>
        </div>
        <div className="flex gap-8 items-start">
          <img src="/email.svg" className="w-12 h-12" />
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-normal ">EMAIL</h3>
            <p className="text-lg font-normal">contact@vsm.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
