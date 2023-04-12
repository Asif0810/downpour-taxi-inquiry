import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Router } from "./Layout/Routes/Router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <RouterProvider router={Router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
