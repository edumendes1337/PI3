import AccessibilityWidget from "./accessibility/AccessibilityWidget.tsx";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <AppRoutes />
      <AccessibilityWidget />
    </>
  );
}

export default App;
