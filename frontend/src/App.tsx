// imports
import { useEffect } from "react";
import { isValidUrl } from "./lib/utils";
import { Loader2 } from "lucide-react";
import Background from "./components/layout/Background";
import SearchBar from "./components/layout/SearchBar";
import { useAppContext } from "./context/AppContext";
import Result from "./components/layout/Result";

// component
export default function App() {
  // retrive context state
  const { setUrl, isLoading, error, result } = useAppContext();

  // clipboard paste on app load
  useEffect(() => {
    (async () => {
      const text = await navigator.clipboard.readText();
      if (isValidUrl(text)) setUrl(text);
    })();
  }, [setUrl]);

  return (
    <>
      <Background />
      <div
        className={`w-[95vw] m-auto flex flex-col justify-center items-center ${
          result ? "pt-10" : "h-[100vh]"
        }`}
      >
        <h1 className="text-4xl text-white mb-10 font-bold">
          Scan Any Website Instantly – Get Insights Now!
        </h1>
        <SearchBar />
        {isLoading && (
          <Loader2 color="white" size={60} className="animate-spin mt-7" />
        )}
        {error && <p className="text-white mt-7">{error}</p>}
        <Result />
      </div>
    </>
  );
}
