"use client";

import React from "react";

import CustomInput from "./CustomInput";
import { useFormContext, useWatch } from "react-hook-form";
import { organizationTypes, personalAnnualIncomeOptions } from "./options";

const ProfessionSection = () => {
  const { control } = useFormContext();

  const selectedOrganizationType = useWatch({
    control,
    name: "workingType",
  });

  const filteredSubOptions =
    organizationTypes.find((type) => type.value === selectedOrganizationType)
      ?.subOptions || [];

  return (
    <div className="flex flex-col gap-6 h-full bg-white">
      <p className="text-[2rem] text-secondaryDark font-poppins font-medium">
        My Profession & Income
      </p>

      <div className="grid grid-cols-2 gap-y-4 gap-x-8">
        <CustomInput
          control={control}
          type="dropdown"
          label="Type of Organization working with *"
          name="workingType"
          options={organizationTypes.map((type) => ({
            label: type.label,
            value: type.value,
          }))}
          rules={{ required: "Working Type is required" }}
        />
        <CustomInput
          control={control}
          type="dropdown"
          label="Specific Organization Type *"
          name="workingProfession"
          options={filteredSubOptions}
        />
        <CustomInput
          control={control}
          type="text"
          label="Name of Organization & Complete Address *"
          name="nameOfOrganisation"
        />
        <CustomInput
          control={control}
          type="text"
          label="Designation *"
          name="designation"
        />
        <CustomInput
          control={control}
          type="text"
          label="Annual Income *"
          name="annualIncome"
          rules={{ required: "Annual Income is required" }}
        />
      </div>
    </div>
  );
};

export default ProfessionSection;
