"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const { loading } = useAuth();
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    // Ensure code runs only on the client side
    setIsClient(true);

    // Retrieve the user from localStorage
    const storedUser = localStorage.getItem("authUser");
    setUser(storedUser);

    if (!storedUser) {
      router.push("/login");
    }
  }, [router]);

  // Render children only if the user is authenticated
  if (loading || !isClient) {
    return null; // Or render a loading spinner
  }

  return user ? <>{children}</> : null;
};

export default AuthGuard;
