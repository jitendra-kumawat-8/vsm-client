"use client";

import React from "react";

import CustomInput from "./CustomInput";
import { useFormContext, useWatch } from "react-hook-form";
import { educationalFields } from "./options";

const EducationSection = () => {
  const { control } = useFormContext();

  const selectedEducationalField = useWatch({
    control,
    name: "highestEducation",
  });

  const qualifications =
    educationalFields.find((field) => field.value === selectedEducationalField)
      ?.qualifications || [];

  return (
    <div className="flex flex-col gap-6 h-full bg-white">
      <p className="text-[2rem] text-secondaryDark font-poppins font-medium">
        My Educational Qualifications
      </p>

      <div className="grid grid-cols-2 gap-y-4 gap-x-8">
        <CustomInput
          control={control}
          type="dropdown"
          label="Educational Field *"
          name="highestEducation"
          options={educationalFields}
        />
        <CustomInput
          control={control}
          type="dropdown"
          label="Highest Qualification *"
          name="highestQualification"
          options={qualifications ?? []}
          rules={{ required: "Highest Qualification is required" }}
        />
        <CustomInput
          control={control}
          type="text"
          label="Name of Last College/ Institution Attended *"
          name="nameOfLastInstitution"
        />
        <CustomInput
          control={control}
          type="text"
          label="Name of Last School Attended *"
          name="nameOfLastSchool"
        />
      </div>
    </div>
  );
};

export default EducationSection;
