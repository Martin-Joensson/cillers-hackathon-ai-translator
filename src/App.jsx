import { BrowserRouter } from "react-router-dom";
import { TranslationRoutes } from "./routes/TranslationRoutes";

export const App = () => {
  return (
    <BrowserRouter>
      <TranslationRoutes />
    </BrowserRouter>
    
  );
};
