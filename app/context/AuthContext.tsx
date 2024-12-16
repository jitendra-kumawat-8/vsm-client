"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

import { loginUser, registerUser } from "../utils/apis";
import { RegisterPayload } from "../utils/types";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface UserData {
  email: string;
  userName: string;
  firstName: string;
  lastName: string;
  country: string;
  lookingFor: string;
  mobileNo: string;
  userId: string;
}

// Define the type for the context value
interface AuthContextType {
  user: UserData | null;
  setUser: (user: UserData | null) => void;
  logout: () => void;
  login: ({
    emailOrMobile,
    password,
  }: {
    emailOrMobile: string;
    password: string;
  }) => Promise<void>;
  register: (formData: RegisterPayload) => Promise<void>;
  loading: boolean;
}

// Create AuthContext
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider Component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Retrieve user data from localStorage on mount
  useEffect(() => {
    setLoading(true);
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("authUser");
    router.push("/login?active=sign-in");
  };

  // Login function
  const login = async ({
    emailOrMobile,
    password,
  }: {
    emailOrMobile: string;
    password: string;
  }) => {
    try {
      const response = await loginUser({
        Email: emailOrMobile,
        Password: password,
      });

      if (response?.data) {
        const userData = response?.data;

        setUser(userData);
        localStorage.setItem("authUser", JSON.stringify(userData));
        router.push("/");
      } else {
        console.log(response?.msg);

        toast.error(response?.msg || "Login failed");
      }
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  // Register function
  const register = async (formData: RegisterPayload) => {
    try {
      const response = await registerUser(formData);
      if (response?.data) {
        const userData = response?.data;
        setUser(userData);
        localStorage.setItem("authUser", JSON.stringify(userData));
        router.push("/");
      } else {
        throw new Error(response?.msg || "Registration failed");
      }
    } catch (error) {
      console.error("Registration Error:", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, logout, login, register, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
