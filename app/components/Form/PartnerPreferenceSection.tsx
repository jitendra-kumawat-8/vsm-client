"use client";

import React from "react";
import { Typography } from "@mui/material";
import CustomInput from "./CustomInput";
import { useFormContext } from "react-hook-form";
import {
  partnerHeightOptions,
  partnerWeightOptions,
  partnerMaritalStatusOptions,
  partnerEducationOptions,
  partnerFamilyTypeOptions,
  locationAfterMarriageOptions,
  locationAfterMarriageTypeOptions,
  savingHeldInYourNameOptions,
  howSavingHeldOptions,
  shareTheExpensesOptions,
  genderBasedFinancialExpectOptions,
  mergeYourAccountsOptions,
  dietOptions,
  personalityTraitsOptions,
} from "./options";

const PartnerPreferencesSection = () => {
  const { control, watch } = useFormContext();
  const locationAfterMarriage = watch("locationAfterMarriage");
  const employmentStatusType = watch("employmentStatusType");
  const personalityTraitsInPartner = watch("personalityTraitsInPartner");

  return (
    <div className="flex flex-col gap-6 h-full bg-white">
      <p className="text-[2rem] text-secondaryDark font-poppins font-medium">
        Partner Preferences and Financial Goals
      </p>

      <div className="grid grid-cols-2 gap-y-4 gap-x-8">
        {/* Partner Physical Attributes */}
        <CustomInput
          control={control}
          type="dropdown"
          label="Partner Height *"
          name="partnerHeight"
          options={partnerHeightOptions}
        />
        <CustomInput
          control={control}
          type="dropdown"
          label="Partner Weight *"
          name="partnerWeight"
          options={partnerWeightOptions}
        />

        {/* New Fields */}
        <CustomInput
          control={control}
          type="dropdown"
          label="Are you open to a partner wearing prescription spectacles? *"
          name="partnerWearingSpectacles"
          options={[
            { value: "Not specific", label: "Not specific" },
            {
              value: "No, I want to marry a person without glasses",
              label: "No, I want to marry a person without glasses",
            },
            {
              value: "Yes, I am open to a partner wearing prescription glasses",
              label: "Yes, I am open to a partner wearing prescription glasses",
            },
          ]}
        />
        <CustomInput
          control={control}
          type="dropdown"
          label="Are you willing to consider a partner who is differently abled? *"
          name="partnerDifferentlyAbled"
          options={[
            { value: "No", label: "No" },
            { value: "Same as mine", label: "Same as mine" },
            { value: "I am flexible", label: "I am flexible" },
          ]}
        />
        <CustomInput
          control={control}
          type="dropdown"
          label="How important are the partner's looks to you? *"
          name="partnerLooksToYou"
          options={[
            { value: "Very Important", label: "Very Important" },
            { value: "Moderately Important", label: "Moderately Important" },
            { value: "Least Important", label: "Least Important" },
          ]}
        />

        {/* Partner Marital Status */}
        <CustomInput
          control={control}
          type="dropdown"
          label="Partner's Marital Status *"
          name="partnerMaritalStatus"
          options={partnerMaritalStatusOptions}
        />

        {/* Partner Education */}
        <CustomInput
          control={control}
          type="dropdown"
          label="Partner's Education *"
          name="partnerEducation"
          options={partnerEducationOptions}
        />

        {/* Partner Family Type */}
        <CustomInput
          control={control}
          type="dropdown"
          label="Partner's Family Type *"
          name="partnerFamilyType"
          options={partnerFamilyTypeOptions}
        />

        {/* Partner's Location After Marriage */}
        <CustomInput
          control={control}
          type="dropdown"
          label="Location After Marriage *"
          name="locationAfterMarriage"
          options={locationAfterMarriageOptions}
        />
        {locationAfterMarriage === "I am willing to relocate" && (
          <CustomInput
            control={control}
            type="dropdown"
            label="Location After Marriage Type *"
            name="locationAfterMarriageType"
            options={locationAfterMarriageTypeOptions}
          />
        )}

        {/* Employment Status */}
        <CustomInput
          control={control}
          type="dropdown"
          label="Employment Status *"
          name="employmentStatusType"
          options={[
            { value: "Must be employed", label: "Must be employed" },
            { value: "Home Maker", label: "Home Maker" },
            { value: "Not Specific", label: "Not Specific" },
          ]}
        />
        {employmentStatusType === "Must be employed" && (
          <CustomInput
            control={control}
            type="dropdown"
            label="Professional Field *"
            name="employmentStatusName"
            options={[
              {
                value: "Same professional field as me",
                label: "Same professional field as me",
              },
              {
                value: "Similar professional field as mine",
                label: "Similar professional field as mine",
              },
              {
                value: "Any professional field",
                label: "Any professional field",
              },
            ]}
          />
        )}

        {/* Partner's Diet Should Be */}
        <CustomInput
          control={control}
          type="dropdown"
          label="Partner's Diet Should Be *"
          name="partnerDietShould"
          options={dietOptions}
        />

        {/* Hobbies & Interests */}
        <CustomInput
          control={control}
          type="dropdown"
          label="Hobbies & Interests *"
          name="partnerHobby"
          options={[
            { value: "Must be same as mine", label: "Must be same as mine" },
            {
              value: "Must be similar to mine",
              label: "Must be similar to mine",
            },
            {
              value:
                "I am willing to support my partner's interests whatever they may be",
              label:
                "I am willing to support my partner's interests whatever they may be",
            },
          ]}
        />

        {/* Desired Personality Traits */}
        <CustomInput
          control={control}
          type="dropdown"
          label="Desired Personality Traits in Your Partner *"
          name="personalityTraitsInPartner"
          options={[
            { value: "Nothing Specific", label: "Nothing Specific" },
            { value: "Select Traits", label: "Select Traits" },
          ]}
        />
        {personalityTraitsInPartner === "Select Traits" && (
          <CustomInput
            control={control}
            type="dropdown"
            label="Select Top 3 Traits *"
            name="personalityTraitsInPartnerNameList"
            options={personalityTraitsOptions}
            multiselect
            rules={{ max: 3 }}
          />
        )}

        {/* Financial Goals */}
        <CustomInput
          control={control}
          type="text"
          label="Percentage of Income Saved Monthly *"
          name="percentageOfIncomeSaveMonthly"
        />
        <CustomInput
          control={control}
          type="dropdown"
          label="Do You Have Savings Held in Your Name? *"
          name="savingHeldInYourName"
          options={savingHeldInYourNameOptions}
        />
        <CustomInput
          control={control}
          type="dropdown"
          label="How Are Your Savings Held? *"
          name="howSavingHeld"
          options={howSavingHeldOptions}
        />

        {/* Additional Financial Preferences */}
        <CustomInput
          control={control}
          type="dropdown"
          label="How Do You Expect to Share Expenses? *"
          name="shareTheExpenses"
          options={shareTheExpensesOptions}
        />
        <CustomInput
          control={control}
          type="dropdown"
          label="Gender-Based Financial Expectations? *"
          name="genderBasedFinancialExpect"
          options={genderBasedFinancialExpectOptions}
        />
        <CustomInput
          control={control}
          type="dropdown"
          label="Will We Merge Our Accounts? *"
          name="mergeYourAccounts"
          options={mergeYourAccountsOptions}
        />
        <CustomInput
          control={control}
          type="text"
          label="How Will We Prioritize Spending? *"
          name="prioritizeSpending"
        />
      </div>
    </div>
  );
};

export default PartnerPreferencesSection;
