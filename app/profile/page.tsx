"use client";

import AuthGuard from "@/app/components/AuthGuard";
import FormContainer from "../components/Form/FormContainer";
import Header from "../components/Header/Header";

const ProfilePage = () => {
  return (
    <AuthGuard>
      <div className="min-h-screen flex flex-col">
        <FormContainer />
      </div>
    </AuthGuard>
  );
};

export default ProfilePage;
