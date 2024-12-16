"use client";

import React from "react";

import CustomInput from "./CustomInput";
import { useFormContext } from "react-hook-form";
import {
  dietOptions,
  fitnessActivitiesOptions,
  fitnessLevelOptions,
  timeDedicatedOptions,
} from "./options";

const LifestyleSection = () => {
  const { control } = useFormContext();

  return (
    <div className="flex flex-col gap-6 h-full bg-white">
      <p className="text-[2rem] text-secondaryDark font-poppins font-medium">
        My Lifestyle
      </p>

      <div className="grid grid-cols-2 gap-y-4 gap-x-8">
        <CustomInput
          control={control}
          type="dropdown"
          label="Diet *"
          name="diet"
          options={dietOptions}
          rules={{ required: "Diet is required" }}
        />
        <CustomInput
          control={control}
          type="dropdown"
          label="Fitness Level *"
          name="fitnessLevel"
          options={fitnessLevelOptions}
        />
        <CustomInput
          control={control}
          type="dropdown"
          label="Time Dedicated for Fitness Activity *"
          name="timeDedicatedForFitnessActivity"
          options={timeDedicatedOptions}
        />
        <CustomInput
          control={control}
          type="dropdown"
          multiselect
          label="Fitness Activities *"
          name="fitnessActivityList"
          options={fitnessActivitiesOptions}
        />
      </div>
    </div>
  );
};

export default LifestyleSection;
