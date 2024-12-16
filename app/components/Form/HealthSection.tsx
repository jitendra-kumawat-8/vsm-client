"use client";

import React from "react";

import CustomInput from "./CustomInput";
import { useFormContext, useWatch } from "react-hook-form";
import {
  bloodGroupOptions,
  differentlyAbledOptions,
  medicalConditionsOptions,
  allergiesOptions,
  visionCorrectionOptions,
  familyHistoryOptions,
  disabilityTypeOptions,
} from "./options";

const HealthSection = () => {
  const { control } = useFormContext();

  const differentlyAbled = useWatch({ control, name: "differentlyAbled" });
  const preExistingMedicalCondition = useWatch({
    control,
    name: "preExistenceMedicalCondition",
  });
  const allergies = useWatch({ control, name: "allergies" });
  const visionCorrection = useWatch({ control, name: "visionCorrection" });
  const familyHistory = useWatch({ control, name: "familyHistory" });
  const substanceAbuse = useWatch({ control, name: "substanceAbuse" });

  return (
    <div className="flex flex-col gap-6 h-full bg-white">
      <p className="text-[2rem] text-secondaryDark font-poppins font-medium">
        My Medical / Health History
      </p>

      <div className="grid grid-cols-2 gap-y-4 gap-x-8">
        <CustomInput
          control={control}
          type="dropdown"
          label="Blood Group *"
          name="bloodGroup"
          options={bloodGroupOptions}
        />

        <CustomInput
          control={control}
          type="dropdown"
          label="Differently Abled *"
          name="differentlyAbled"
          options={differentlyAbledOptions}
        />
        {differentlyAbled === "Yes" && (
          <>
            <CustomInput
              control={control}
              type="dropdown"
              label="Differently Abled Condition *"
              name="differentlyAbledConditionList"
              options={disabilityTypeOptions}
              multiselect
            />
            <CustomInput
              control={control}
              type="text"
              label="Please specify in detail the nature and extent of disability *"
              name="differentlyAbledConditionDetail"
            />
          </>
        )}

        <CustomInput
          control={control}
          type="dropdown"
          label="Pre-Existing Medical Conditions *"
          name="preExistenceMedicalCondition"
          options={differentlyAbledOptions}
        />
        {preExistingMedicalCondition === "Yes" && (
          <>
            <CustomInput
              control={control}
              type="dropdown"
              label="Pre-Existing Medical Contitions *"
              name="preExistenceMedicalConditionList"
              options={medicalConditionsOptions}
              multiselect
            />
            <CustomInput
              control={control}
              type="text"
              label="Please specify in detail the nature and extent of the medical condition *"
              name="preExistenceMedicalConditionDetail"
            />
          </>
        )}

        <CustomInput
          control={control}
          type="dropdown"
          label="Allergies *"
          name="allergies"
          options={differentlyAbledOptions}
        />
        {allergies === "Yes" && (
          <>
            <CustomInput
              control={control}
              type="dropdown"
              label="Allergy Types *"
              name="allergiesList"
              options={allergiesOptions}
              multiselect
            />
            <CustomInput
              control={control}
              type="text"
              label="Please specify in detail the nature and extent of allergy *"
              name="allergiesDetail"
            />
          </>
        )}

        <CustomInput
          control={control}
          type="dropdown"
          label="Vision Correction *"
          name="visionCorrection"
          options={differentlyAbledOptions}
        />
        {visionCorrection === "Yes" && (
          <CustomInput
            control={control}
            type="dropdown"
            label="Vision Correction Details *"
            name="visionCorrectionList"
            options={visionCorrectionOptions}
            multiselect
          />
        )}

        <CustomInput
          control={control}
          type="dropdown"
          label="Family History *"
          name="familyHistory"
          options={differentlyAbledOptions}
        />
        {familyHistory === "Yes" && (
          <>
            <CustomInput
              control={control}
              type="dropdown"
              label="Family History Details *"
              name="familyHistoryList"
              options={familyHistoryOptions}
              multiselect
            />
            <CustomInput
              control={control}
              type="text"
              label="Please specify in detail the persons with these disabilities and the nature of the condition *"
              name="familyHistoryDetail"
            />
          </>
        )}
        <CustomInput
          control={control}
          type="dropdown"
          label="Does anyone in your family struggle with alcoholism or substance abuse? *"
          name="substanceAbuse"
          options={[
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" },
          ]}
        />
        {substanceAbuse === "Yes" && (
          <CustomInput
            control={control}
            type="text"
            label="Please specify the person's relation to you and the nature of the substance abuse *"
            name="substanceAbuseDetails"
          />
        )}
      </div>
    </div>
  );
};

export default HealthSection;
