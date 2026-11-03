import KNRoutes from "./KNRoutes/KNRoutes";
import { TranslationProvider } from "./context/TranslationContext";

function App() {
  return (
    <TranslationProvider>
      <div>
        <KNRoutes />
      </div>
    </TranslationProvider>
  );
}

export default App;
