import "./App.css";
import { DashboardComponent } from "./components/dashboard";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <DashboardComponent />
    </ThemeProvider>
  );
}

export default App;
