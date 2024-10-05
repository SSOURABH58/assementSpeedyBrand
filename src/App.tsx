import { useState } from "react";
import "./App.css";
import { DashboardComponent } from "./components/dashboard";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <DashboardComponent />
    </ThemeProvider>
  );
}

export default App;
