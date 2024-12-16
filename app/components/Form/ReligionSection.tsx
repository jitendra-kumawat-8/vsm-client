"use client";

import React from "react";
import { Typography } from "@mui/material";
import CustomInput from "./CustomInput";
import { useFormContext, useWatch } from "react-hook-form";
import { headCoveringOptions, religionOptions } from "./options";

const ReligionSection = () => {
  const { control } = useFormContext();

  const particularReligionOfPartner = useWatch({
    control,
    name: "particularReligionOfPartner",
  });
  const particularCasteOfPartner = useWatch({
    control,
    name: "particularCasteOfPartner",
  });
  const particularCommunityOfPartner = useWatch({
    control,
    name: "particularCommunityOfPartner",
  });
  const particularGotraOfPartner = useWatch({
    control,
    name: "particularGotraOfPartner",
  });

  return (
    <div className="flex flex-col gap-6 h-full bg-white">
      <p className="text-[2rem] text-secondaryDark font-poppins font-medium">
        Religion, Caste, and Preferences
      </p>

      <div className="grid grid-cols-2 gap-y-4 gap-x-8">
        <CustomInput
          control={control}
          type="dropdown"
          label="Your Religion *"
          name="religion"
          options={religionOptions}
        />
        <CustomInput
          control={control}
          type="dropdown"
          label="Are you particular about the Religion of your partner? *"
          name="particularReligionOfPartner"
          options={[
            { label: "Yes", value: "Yes" },
            { label: "Religion No Bar", value: "Religion No Bar" },
          ]}
        />
        {particularReligionOfPartner === "Yes" && (
          <CustomInput
            control={control}
            type="dropdown"
            label="Religion of your Partner *"
            name="particularReligionOfPartnerList"
            options={religionOptions}
            multiselect
          />
        )}

        <CustomInput
          control={control}
          type="text"
          label="Your Caste *"
          name="cast"
        />
        <CustomInput
          control={control}
          type="dropdown"
          label="Are you particular about the Caste of your partner? *"
          name="particularCasteOfPartner"
          options={[
            { label: "Yes", value: "Yes" },
            { label: "Caste No Bar", value: "Caste No Bar" },
          ]}
        />
        {particularCasteOfPartner === "Yes" && (
          <CustomInput
            control={control}
            type="dropdown"
            label="Caste of your Partner *"
            name="particularCasteOfPartnerList"
            multiselect
          />
        )}
        <CustomInput
          control={control}
          type="text"
          label="Your Community *"
          name="community"
        />
        <CustomInput
          control={control}
          type="dropdown"
          label="Are you particular about the Community of your partner? *"
          name="particularCommunityOfPartner"
          options={[
            { label: "Yes", value: "Yes" },
            { label: "Community No Bar", value: "Community No Bar" },
          ]}
        />
        {particularCommunityOfPartner === "Yes" && (
          <CustomInput
            control={control}
            type="dropdown"
            label="Community of your Partner *"
            name="particularCommunityOfPartnerList"
            multiselect
          />
        )}
        <CustomInput
          control={control}
          type="text"
          label="Your Gotra *"
          name="gotra"
        />
        <CustomInput
          control={control}
          type="dropdown"
          label="Are you particular about the Gotra of your partner? *"
          name="particularGotraOfPartner"
          options={[
            { label: "Yes", value: "Yes" },
            { label: "Gotra No Bar", value: "Gotra No Bar" },
          ]}
        />
        {particularGotraOfPartner === "Yes" && (
          <CustomInput
            control={control}
            type="dropdown"
            label="Gotra of your Partner *"
            name="particularGotraOfPartnerList"
            multiselect
          />
        )}

        <CustomInput
          control={control}
          type="dropdown"
          label="Do you wear Dastar/Pagg/Any Head Covering? *"
          name="isWearDasterOrPagg"
          options={headCoveringOptions}
        />
      </div>
    </div>
  );
};

export default ReligionSection;
