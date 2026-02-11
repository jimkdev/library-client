"use client";

import React, { Context, useContext } from "react";
import { ApplicationContextType } from "@/types/application.types";

interface AppContextValue {
  context: ApplicationContextType | undefined;
  setContext: (context: ApplicationContextType | undefined) => void;
}

const ApplicationContext: Context<AppContextValue | undefined> =
  React.createContext<AppContextValue | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [context, setContext] = React.useState<
    ApplicationContextType | undefined
  >(undefined);

  return (
    <ApplicationContext.Provider value={{ context, setContext }}>
      {children}
    </ApplicationContext.Provider>
  );
}

export function useApplicationContext() {
  const ctx = useContext(ApplicationContext);
  if (!ctx) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return ctx;
}
