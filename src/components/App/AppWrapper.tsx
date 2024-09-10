import { MantineProvider } from "@mantine/core";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from ".";

export function AppWrapper() {
  return (
    <MantineProvider>
      <Router>
        <App />
      </Router>
    </MantineProvider>
  );
}

export default AppWrapper;