"use client";

import React from "react";

import CustomInput from "./CustomInput";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useFormContext } from "react-hook-form";
import {
  annualFamilyIncomeOptions,
  familyLocationOptions,
  familyPreferenceOptions,
  familyTypeOptions,
  fathersStatusOptions,
  mothersStatusOptions,
} from "./options";

const FamilySection = () => {
  const { control } = useFormContext();

  return (
    <div className="flex flex-col gap-6 h-full bg-white">
      <p className="text-[2rem] text-secondaryDark font-poppins font-medium">
        My Family
      </p>

      <div className="grid grid-cols-2 gap-y-4 gap-x-8">
        <CustomInput
          control={control}
          type="text"
          label="Fathers Name *"
          name="fatherName"
          endAdornment={
            <div className=" -mr-4 h-[48px] w-[68px] bg-secondaryDark rounded-r-[11px] text-white flex items-center justify-center">
              <AccountCircleOutlinedIcon />
            </div>
          }
          rules={{ required: "Father's Name is required" }}
        />
        <CustomInput
          control={control}
          type="text"
          label="Mothers Name *"
          name="motherName"
          endAdornment={
            <div className=" -mr-4 h-[48px] w-[68px] bg-secondaryDark rounded-r-[11px] text-white flex items-center justify-center">
              <AccountCircleOutlinedIcon />
            </div>
          }
          rules={{ required: "Mother's Name is required" }}
        />
        <CustomInput
          control={control}
          type="text"
          label="Family Members Mobile No *"
          name="familyMobileNo"
          endAdornment={
            <div className=" -mr-4 h-[48px] w-[68px] bg-secondaryDark rounded-r-[11px] text-white flex items-center justify-center">
              <PhoneAndroidOutlinedIcon />
            </div>
          }
        />
        <CustomInput
          control={control}
          type="dropdown"
          label="Family Type *"
          name="familyType"
          options={familyTypeOptions}
        />
        <CustomInput
          control={control}
          type="dropdown"
          label="Family Type Preference *"
          name="familyUnitPreference"
          options={familyPreferenceOptions}
        />
        <CustomInput
          control={control}
          type="dropdown"
          label="Fathers Status *"
          name="fatherStatus"
          options={fathersStatusOptions}
        />
        <CustomInput
          control={control}
          type="dropdown"
          label="Mothers Status *"
          name="motherStatus"
          options={mothersStatusOptions}
        />
        <CustomInput
          control={control}
          type="dropdown"
          label="Family Location *"
          name="familyLocation"
          options={familyLocationOptions}
        />
        <CustomInput
          control={control}
          type="dropdown"
          label="Annual Family Income *"
          name="familyIncome"
          options={annualFamilyIncomeOptions}
          rules={{ required: "Family Income is required" }}
        />
      </div>
    </div>
  );
};

export default FamilySection;
