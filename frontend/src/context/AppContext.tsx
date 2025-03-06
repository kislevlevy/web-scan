// imports
import { createContext, useContext, useState, ReactNode } from "react";

// context state types
type ScanResult = {
  url: string;
  a: string[];
  aaaa: string[];
  cname: string[];
  title: string;
  status_code: string;
  webserver: string;
  tech: string[];
  failed: boolean;
};
interface AppContextType {
  url: string;
  isLoading: boolean;
  error: string;
  result: null | ScanResult;

  setUrl: (url: string) => void;
  setIsLoading: (isLoading: boolean) => void;
  setError: (error: string) => void;
  setResult: (result: ScanResult | null) => void;
  resetContext: () => void;
}
const defaultContext: AppContextType = {
  url: "",
  isLoading: false,
  error: "",
  result: null,
  setUrl: () => {},
  setIsLoading: () => {},
  setError: () => {},
  setResult: () => {},
  resetContext: () => {},
};

// create the context
const AppContext = createContext<AppContextType | undefined>(undefined);

// provider component
export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  // context state
  const [url, setUrl] = useState(defaultContext.url);
  const [isLoading, setIsLoading] = useState(defaultContext.isLoading);
  const [error, setError] = useState(defaultContext.error);
  const [result, setResult] = useState(defaultContext.result);

  // reset context function
  const resetContext = () => {
    setIsLoading(defaultContext.isLoading);
    setError(defaultContext.error);
    setResult(defaultContext.result);
  };

  // privider context value
  const context = {
    url,
    setUrl,
    isLoading,
    setIsLoading,
    error,
    setError,
    result,
    setResult,
    resetContext,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

// Use the context hook
export const useAppContext = () => {
  // retrive the context
  const context = useContext(AppContext);

  // gurd to check if use hook was called before provider initiation
  if (!context) {
    throw new Error(
      "useAppContext must be used within an App-context-provider"
    );
  }
  return context;
};
