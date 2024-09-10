import { AppShellMain } from "@mantine/core";
import AppRoutes from "./AppRoutes";

export function AppBody() {
  return (<AppShellMain>
    <AppRoutes />
  </AppShellMain>
  );
}