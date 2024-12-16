"use client";

import React from "react";
import { Typography } from "@mui/material";
import CustomInput from "./CustomInput";
import { useFormContext } from "react-hook-form";
import { yesNoOptions } from "./options";

const FamilyPlanningSection = () => {
  const { control, watch } = useFormContext();
  const isGenderBasedChildren = watch("isGenderBasedChildren");

  return (
    <div className="flex flex-col gap-6 h-full bg-white">
      <p className="text-[2rem] text-secondaryDark font-poppins font-medium">
        Family Planning and Parenting Preferences
      </p>

      <div className="grid grid-cols-2 gap-y-4 gap-x-8">
        {/* Start a Family */}
        <CustomInput
          control={control}
          type="dropdown"
          label="Do you want to start a family? *"
          name="wantToStartFamily"
          options={yesNoOptions}
        />
        <CustomInput
          control={control}
          type="text"
          label="Why do you want to start a family? *"
          name="startFamilyReason"
        />

        {/* Seek Medical Treatment for Conceiving */}
        <CustomInput
          control={control}
          type="dropdown"
          label="Would you be willing to seek medical treatment personally if we couldn't conceive naturally? *"
          name="medicalTreatmentPersonally"
          options={yesNoOptions}
        />

        {/* Adopt if Unable to Conceive */}
        <CustomInput
          control={control}
          type="dropdown"
          label="Would you be willing to adopt if we couldn't have children? *"
          name="wouldAdoptChild"
          options={yesNoOptions}
        />

        {/* Expectations Around Childcare and Parenting */}
        <CustomInput
          control={control}
          type="dropdown"
          label="Do you have any gender-based expectations? *"
          name="isGenderBasedChildren"
          options={yesNoOptions}
        />
        {isGenderBasedChildren === "Yes" && (
          <CustomInput
            control={control}
            type="text"
            label="Please specify your gender-based expectations"
            name="genderBasedChildrenRemark"
          />
        )}
        {/* Ideal Parenting Situation */}
        <CustomInput
          control={control}
          type="dropdown"
          label="Which is your ideal situation—do we both work and take care of the kids? *"
          name="isBothWorkAndTakeCareKids"
          options={yesNoOptions}
        />

        {/* Stay at Home */}
        <CustomInput
          control={control}
          type="dropdown"
          label="Would you want to stay at home? *"
          name="wantToStayHome"
          options={yesNoOptions}
        />
      </div>
    </div>
  );
};

export default FamilyPlanningSection;
