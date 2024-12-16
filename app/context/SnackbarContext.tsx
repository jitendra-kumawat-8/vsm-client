"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { toast } from "react-toastify";

// Define the type for the Snackbar context
type SnackbarContextType = (
  message: string,
  type?: "success" | "error",
) => void;

const SnackbarContext = createContext<SnackbarContextType | null>(null);

export const SnackbarProvider = ({ children }: { children: ReactNode }) => {
  const showSnackbar: SnackbarContextType = (message, type = "success") => {
    toast[type](message);
  };

  return (
    <SnackbarContext.Provider value={showSnackbar}>
      {children}
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return context;
};
