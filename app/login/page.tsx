"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "../components/Header/Header";
import LoginContainer from "../components/Login/LoginContainer";
import RegisterContainer from "../components/Login/RegisterContainer";

const LoginPage = () => {
  return (
    <div className="min-h-screen w-full relative">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/back.png"
          className="w-full h-full object-cover"
          alt="Background"
        />
      </div>

      {/* Content Section */}
      <Suspense fallback={<div>Loading...</div>}>
        <ContentSection />
      </Suspense>
    </div>
  );
};

const ContentSection = () => {
  const searchParams = useSearchParams();
  const activeTab = searchParams?.get("active") || "sign-in";

  return (
    <div className="py-10">
      {activeTab === "sign-in" ? <LoginContainer /> : <RegisterContainer />}
    </div>
  );
};

export default LoginPage;
