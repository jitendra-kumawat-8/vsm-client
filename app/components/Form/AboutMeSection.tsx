"use client";

import React from "react";

import CustomInput from "./CustomInput";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AttachmentOutlinedIcon from "@mui/icons-material/AttachmentOutlined";
import { useFormContext } from "react-hook-form";
import {
  grewUpInOptions,
  heightOptions,
  maritalStatusOptions,
  motherTongueOptions,
  statesOptions,
  weightOptions,
} from "./options";

const AboutMeSection = () => {
  const { control } = useFormContext();
  return (
    <div className="flex flex-col gap-6 h-full bg-white">
      <p className="text-[2rem] text-secondaryDark font-poppins font-medium">
        About Me
      </p>

      <div className="grid grid-cols-2 gap-y-4 gap-x-8 items-start">
        <CustomInput
          type="date"
          label="Date of Birth *"
          name="dob"
          endAdornment={
            <div className=" -mr-4 h-[48px] w-[68px] bg-secondaryDark rounded-r-[11px] text-white flex items-center justify-center">
              <CalendarTodayRoundedIcon />
            </div>
          }
          control={control}
          rules={{ required: "Date of Birth is required" }}
        />
        <CustomInput
          type="time"
          label="Time of Birth *"
          name="tob"
          control={control}
          rules={{ required: "Time of Birth is required" }}
        />
        <CustomInput
          type="text"
          label="Place of Birth *"
          name="pob"
          endAdornment={
            <div className=" -mr-4 h-[48px] w-[68px] bg-secondaryDark rounded-r-[11px] text-white flex items-center justify-center">
              <AccountCircleOutlinedIcon />
            </div>
          }
          control={control}
          rules={{ required: "Place of Birth is required" }}
        />
        <CustomInput
          type="dropdown"
          label="Gender *"
          name="gender"
          options={[
            { value: "Male", label: "Male" },
            { value: "Female", label: "Female" },
            { value: "Other", label: "Other" },
          ]}
          control={control}
        />
        <CustomInput
          type="text"
          label="Mobile No *"
          name="mobileNo"
          endAdornment={
            <div className=" -mr-4 h-[48px] w-[68px] bg-secondaryDark rounded-r-[11px] text-white flex items-center justify-center">
              <PhoneAndroidOutlinedIcon />
            </div>
          }
          control={control}
        />
        <CustomInput
          type="text"
          label="Email ID *"
          name="email"
          endAdornment={
            <div className=" -mr-4 h-[48px] w-[68px] bg-secondaryDark rounded-r-[11px] text-white flex items-center justify-center">
              <EmailOutlinedIcon />
            </div>
          }
          control={control}
        />
        <CustomInput
          type="text"
          label="Current Address *"
          name="currentAddress"
          control={control}
        />
        <CustomInput
          type="dropdown"
          label="Home Town - State*"
          name="homeTownState"
          control={control}
          options={statesOptions}
        />
        <CustomInput
          type="text"
          label="Home Town *"
          name="homeTown"
          control={control}
        />
        <CustomInput
          type="dropdown"
          label="Weight *"
          name="weight"
          control={control}
          options={weightOptions}
        />
        <CustomInput
          type="dropdown"
          label="Height *"
          name="height"
          control={control}
          options={heightOptions}
        />
        <CustomInput
          type="dropdown"
          label="Marital Status *"
          name="maritalStatus"
          options={maritalStatusOptions}
          control={control}
        />
        <CustomInput
          type="dropdown"
          label="Mother Tongue *"
          name="motherTounge"
          options={motherTongueOptions}
          control={control}
        />
        <CustomInput
          type="file"
          label="PAN Card No *"
          name="panNo"
          endAdornment={
            <div className=" -mr-4 h-[48px] w-[68px] bg-secondaryDark rounded-r-[11px] text-white flex items-center justify-center">
              <AttachmentOutlinedIcon />
            </div>
          }
          control={control}
        />
        <CustomInput
          type="file"
          label="Passport No *"
          name="passportNo"
          endAdornment={
            <div className=" -mr-4 h-[48px] w-[68px] bg-secondaryDark rounded-r-[11px] text-white flex items-center justify-center">
              <AttachmentOutlinedIcon />
            </div>
          }
          control={control}
        />
        <CustomInput
          type="file"
          label="Recent 4 Photographs *"
          name="photo"
          endAdornment={
            <div className=" -mr-4 h-[48px] w-[68px] bg-secondaryDark rounded-r-[11px] text-white flex items-center justify-center">
              <AttachmentOutlinedIcon />
            </div>
          }
          control={control}
        />
        <CustomInput
          type="dropdown"
          label="Grew Up In *"
          name="grewUpIn"
          options={grewUpInOptions}
          control={control}
        />
      </div>
      <CustomInput
        label="Additional info you want to share with us *"
        name="additionalInfo"
        type="text"
        rows={4}
        control={control}
      />
    </div>
  );
};

export default AboutMeSection;
