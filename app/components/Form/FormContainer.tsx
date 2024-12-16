"use client";

import React, { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import AboutMeSection from "./AboutMeSection";
import FamilySection from "./FamilySection";
import EducationSection from "./EducationSection";
import ProfessionSection from "./ProfessionSection";
import LifestyleSection from "./LifestyleSection";
import HealthSection from "./HealthSection";
import SocialSection from "./SocialSection";
import HobbySection from "./HobbySection";
import ExtraSection from "./ExtraSection";
import { Button } from "@mui/material";
import { getUser, postForm } from "@/app/utils/apis";
import ReligionSection from "./ReligionSection";
import { useAuth } from "@/app/context/AuthContext";
import { payloadMapper } from "./mapper";
import { UserResponse } from "@/app/utils/types";
import PartnerPreferencesSection from "./PartnerPreferenceSection";
import FamilyPlanningSection from "./FamilyPlanningSection";
import { useSnackbar } from "@/app/context/SnackbarContext";

const FormContainer = () => {
  const methods = useForm();
  const { handleSubmit } = methods;
  const { user } = useAuth();
  const showSnackbar = useSnackbar();

  const getDetails = async () => {
    const responseS = await getUser(user?.userId as string);
    const data = responseS?.data as UserResponse;
    const initialValues = {
      ...data?.aboutMeInfo,
      ...data?.familyInfo,
      ...data?.hobbyInfo,
      ...data?.educationInfo,
      ...data?.professionInfo,
      ...data?.lifePartnerInfo,
      ...data?.socialAffiliationInfo,
      ...data?.lifestyleAndHealthInfo,
      ...data?.userViewOnFamilyInfo,
      mobileNo: data?.mobileNo,
      email: data?.email,
      currentAddress: data?.aboutMeInfo?.currentAddress,
    };
    console.log(initialValues);

    initialValues["particularCasteOfPartnerList"] = [
      data?.aboutMeInfo?.particularCasteOfPartnerList?.[0],
    ];
    initialValues["particularCommunityOfPartnerList"] = [
      data?.aboutMeInfo?.particularCommunityOfPartnerList?.[0],
    ];
    initialValues["particularGotraOfPartnerList"] = [
      data?.aboutMeInfo?.particularGotraOfPartnerList?.[0],
    ];

    methods.reset(initialValues);
  };

  useEffect(() => {
    if (user?.userId) getDetails();
  }, [user]);

  const onSubmit = async (values: any) => {
    if (!user) {
      console.error("User ID is missing. Cannot submit the form.");
      showSnackbar("User ID is missing. Cannot submit the form.", "error");
      return;
    }

    try {
      const final: any = { userId: user?.userId };

      Object.keys(values)?.forEach((key: any) => {
        const value = values[key];
        if (Array.isArray(value)) {
          final[key] = value;
        } else if (typeof value === "string" || typeof value === "number") {
          final[key] = value?.toString();
        } else if (key === "dob") {
          final[key] = (value as Date)?.toISOString();
        }
      });

      const response = await postForm(final as any);
      showSnackbar("Form submitted successfully!", "success");
    } catch (error) {
      console.error("Error submitting the form:", error);
      showSnackbar("Failed to submit the form. Please try again.", "error");
    }
  };

  return (
    <div className="h-full w-full bg-white mt-4 py-10 px-[150px]">
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-10"
        >
          <AboutMeSection />
          <FamilySection />
          <EducationSection />
          <ProfessionSection />
          <ReligionSection />
          <LifestyleSection />
          <HealthSection />
          <SocialSection />
          <HobbySection />
          <PartnerPreferencesSection />
          <FamilyPlanningSection />
          <ExtraSection />
          <div className="flex w-full gap-8">
            <Button
              variant="contained"
              className="w-full font-poppins !normal-case text-white !bg-primary"
            >
              Save as draft
            </Button>
            <Button
              variant="contained"
              type="submit"
              className="w-full font-poppins !normal-case text-white !bg-primary"
            >
              Submit
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default FormContainer;
