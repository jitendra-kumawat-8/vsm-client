"use client";

import React from "react";
import CustomInput from "./CustomInput";
import { useFormContext, useWatch } from "react-hook-form";
import {
  hobbyOptions,
  hobbyTrainingOptions,
  hobbyHoursOptions,
  leisureTravelOptions,
  timeAloneImportanceOptions,
  likePetsOptions,
  ownPetsOptions,
  partnerPetsOptions,
} from "./options";

const HobbySection = () => {
  const { control } = useFormContext();
  const trainingForHobbies = useWatch({
    control,
    name: "trainingForHobbies",
  });

  return (
    <div className="flex flex-col gap-6 h-full bg-white">
      <p className="text-[2rem] text-secondaryDark font-poppins font-medium">
        My Hobbies & Interests
      </p>

      <div className="grid grid-cols-2 gap-y-4 gap-x-8">
        <CustomInput
          control={control}
          type="dropdown"
          label="What are your serious hobbies? *"
          name="hobbiesList"
          options={hobbyOptions}
          multiselect
        />
        <CustomInput
          control={control}
          type="dropdown"
          label="Have you undertaken any courses or formal training for your hobbies? *"
          name="trainingForHobbies"
          options={hobbyTrainingOptions}
        />
        {trainingForHobbies === "Yes" && (
          <CustomInput
            control={control}
            type="text"
            label="Details of Training *"
            name="trainingForHobbiesDetail"
          />
        )}

        <CustomInput
          control={control}
          type="text"
          label="Describe your hobbies *"
          name="specifyHobby"
        />
        <CustomInput
          control={control}
          type="text"
          label="Which ideas, topics or subjects interest you and you want to learn more about? *"
          name="topicNameForLearnMore"
        />
        <CustomInput
          control={control}
          type="dropdown"
          label="How many hours per week do you spend on your hobbies/special interests? *"
          name="spendTimeOnHobbyInWeek"
          options={hobbyHoursOptions}
        />
        <CustomInput
          control={control}
          type="dropdown"
          label="Do you enjoy travelling for leisure? *"
          name="enjoyTravellingForLeisure"
          options={leisureTravelOptions}
        />
        <CustomInput
          control={control}
          type="dropdown"
          label="How important is spending time alone, to you? *"
          name="spendingTimeAlone"
          options={timeAloneImportanceOptions}
        />
        <CustomInput
          control={control}
          type="dropdown"
          label="Do you like pets? *"
          name="doYouLikePets"
          options={likePetsOptions}
        />
        <CustomInput
          control={control}
          type="dropdown"
          label="Do you own any pets? *"
          name="doYouOwnPets"
          options={ownPetsOptions}
        />
        <CustomInput
          control={control}
          type="dropdown"
          label="Are you agreeable to your life partner keeping pets? *"
          name="lifePartnerKeepingPets"
          options={partnerPetsOptions}
        />
      </div>
    </div>
  );
};

export default HobbySection;
