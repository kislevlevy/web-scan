// imports
import { FormEvent } from "react";
import axios from "axios";

import { isValidUrl } from "@/lib/utils";
import { useAppContext } from "@/context/AppContext";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Clipboard } from "lucide-react";

// component
export default function SearchBar() {
  // retrive context state
  const {
    url,
    setUrl,
    isLoading,
    setIsLoading,
    setError,
    setResult,
    resetContext,
  } = useAppContext();

  // form submit logic
  const handleSubmit = async (e: FormEvent) => {
    // prevent form from refreshing
    e.preventDefault();

    try {
      // gurd
      if (!url) return setError("");
      if (!isValidUrl(url)) return setError("Please provide a valid url");

      // reset context on api call
      resetContext();
      setIsLoading(true);

      // axios api call
      const { data } = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_BACKEND_URL}/api/scan?domain=${url}`,
      });

      // set state
      setResult(data.scan_result);
      setIsLoading(false);

      // error handeling
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      setError("Something went wrong please try again later...");
    }
  };

  return (
    <form
      className="flex justify-center items-center gap-x-1"
      onSubmit={handleSubmit}
    >
      <Button
        type="button"
        disabled={isLoading}
        className="fixed cursor-pointer h-12 dark bg-transparent hover:brightness-75 hover:bg-transparent -translate-x-56"
        onClick={async () => setUrl(await navigator.clipboard.readText())}
      >
        <Clipboard color="white" height={23} />
      </Button>
      <Input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        size={50}
        className="text-white h-12 pl-10"
        disabled={isLoading}
      />
      <Button
        type="submit"
        variant="secondary"
        disabled={isLoading}
        className="cursor-pointer h-12 dark"
      >
        Search...
      </Button>
    </form>
  );
}
