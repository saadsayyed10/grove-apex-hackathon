import Landing from "./_components/LandingPage/Landing";
import { useAuth } from "@clerk/react";
import { Loader2 } from "lucide-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Waiting from "./_components/ApprovalWaiting/Waiting";

const App = () => {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center w-full min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  return isSignedIn ? (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Waiting />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  ) : (
    <Landing />
  );
};

export default App;
