"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface LandingContextType {
  showLanding: boolean;
  setShowLanding: (show: boolean) => void;
}

const LandingContext = createContext<LandingContextType>({
  showLanding: false,
  setShowLanding: () => {},
});

export function LandingProvider({ children }: { children: ReactNode }) {
  const [showLanding, setShowLanding] = useState(false);

  return (
    <LandingContext.Provider value={{ showLanding, setShowLanding }}>
      {children}
    </LandingContext.Provider>
  );
}

export function useLanding() {
  return useContext(LandingContext);
}
