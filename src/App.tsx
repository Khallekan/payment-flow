import { Toaster } from "react-hot-toast";
import FormContainer from "./containers/FormContainer";
import { toastOptions } from "./data";

function App() {
  return (
    <div className="w-full h-full overflow-hidden">
      <FormContainer />
      <Toaster position="top-right" toastOptions={toastOptions} />
    </div>
  );
}

export default App;
