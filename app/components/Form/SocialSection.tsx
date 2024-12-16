"use client";

import React from "react";
import { Typography } from "@mui/material";
import CustomInput from "./CustomInput";
import { useFormContext, useWatch } from "react-hook-form";
import { yesNoOptions, socialMediaOptions } from "./options";

const SocialSection = () => {
  const { control } = useFormContext();

  const memberOfGymkhanasOrClubs = useWatch({
    control,
    name: "memberOfGymkhanasOrClubs",
  });
  const memberOfProfessionalOrganisation = useWatch({
    control,
    name: "memberOfProfessionalOrganisation",
  });
  const memberOfCommunityBasedOrganisation = useWatch({
    control,
    name: "memberOfCommunityBasedOrganisation",
  });
  const memberOfOtherOrganisation = useWatch({
    control,
    name: "memberOfOtherOrganisation",
  });
  const politicallyActive = useWatch({
    control,
    name: "politicallyActive",
  });
  const socialMediaHandle = useWatch({
    control,
    name: "socialMediaHandle",
  });

  return (
    <div className="flex flex-col gap-6 h-full bg-white">
      <p className="text-[2rem] text-secondaryDark font-poppins font-medium">
        My Social / Affiliations
      </p>

      <div className="grid grid-cols-2 gap-y-4 gap-x-8">
        <CustomInput
          control={control}
          type="dropdown"
          label="Member of Gymkhanas or Clubs *"
          name="memberOfGymkhanasOrClubs"
          options={yesNoOptions}
        />
        {memberOfGymkhanasOrClubs === "Yes" && (
          <CustomInput
            control={control}
            type="text"
            label="Details of Gymkhanas or Clubs *"
            name="memberOfGymkhanasOrClubsDetails"
          />
        )}

        <CustomInput
          control={control}
          type="dropdown"
          label="Member of Professional Organisation *"
          name="memberOfProfessionalOrganisation"
          options={yesNoOptions}
        />
        {memberOfProfessionalOrganisation === "Yes" && (
          <CustomInput
            control={control}
            type="text"
            label="Details of Professional Organisation *"
            name="memberOfProfessionalOrganisationDetails"
          />
        )}

        <CustomInput
          control={control}
          type="dropdown"
          label="Member of Community Based Organisation *"
          name="memberOfCommunityBasedOrganisation"
          options={yesNoOptions}
        />
        {memberOfCommunityBasedOrganisation === "Yes" && (
          <CustomInput
            control={control}
            type="text"
            label="Details of Community Based Organisation *"
            name="memberOfCommunityBasedOrganisationDetails"
          />
        )}

        <CustomInput
          control={control}
          type="dropdown"
          label="Member of Other Organisation *"
          name="memberOfOtherOrganisation"
          options={yesNoOptions}
        />
        {memberOfOtherOrganisation === "Yes" && (
          <CustomInput
            control={control}
            type="text"
            label="Details of Other Organisation *"
            name="memberOfOtherOrganisationDetails"
          />
        )}

        <CustomInput
          control={control}
          type="dropdown"
          label="Politically Active *"
          name="politicallyActive"
          options={yesNoOptions}
        />
        {politicallyActive === "Yes" && (
          <CustomInput
            control={control}
            type="text"
            label="Details of Political Activity *"
            name="politicallyActiveDetails"
          />
        )}

        <CustomInput
          control={control}
          type="text"
          label="Instagram *"
          name="instagram"
        />
        <CustomInput
          control={control}
          type="text"
          label="Threads *"
          name="threads"
        />
        <CustomInput
          control={control}
          type="text"
          label="Youtube *"
          name="youTube"
        />
        <CustomInput
          control={control}
          type="text"
          label="Facebook *"
          name="facebook"
        />
        <CustomInput
          control={control}
          type="text"
          label="X (Twitter) *"
          name="twitter"
        />
        <CustomInput
          control={control}
          type="text"
          label="Snapchat *"
          name="snapchat"
        />
      </div>
    </div>
  );
};

export default SocialSection;
