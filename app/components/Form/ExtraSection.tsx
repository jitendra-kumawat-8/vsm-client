"use client";

import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import CustomInput from "./CustomInput";
import { useFormContext } from "react-hook-form";

const ExtraSection = () => {
  const { control } = useFormContext();

  return (
    <div className="flex flex-col gap-6 h-full bg-white">
      <p className="text-[2rem] text-secondaryDark font-poppins font-medium">
        What I am looking for in a Life Partner
      </p>

      <CustomInput
        control={control}
        type="text"
        label="Minimum 1000 Words *"
        name="describeLifePartner"
        rows={20}
      />

      <div className="flex flex-col ">
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                color: "#a88652",
                "&.Mui-checked": {
                  color: "#a88652",
                },
              }}
            />
          }
          label={
            <p className="text-secondaryDark text-[0.9rem] font-semibold font-poppins">
              I Certify That I Am 18+ Years Old
            </p>
          }
        />
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                color: "#a88652",
                "&.Mui-checked": {
                  color: "#a88652",
                },
              }}
            />
          }
          label={
            <p className="text-secondaryDark text-[0.9rem] font-semibold font-poppins">
              I Agree To The Terms & Conditions And Privacy Policy
            </p>
          }
        />
      </div>
    </div>
  );
};

export default ExtraSection;
