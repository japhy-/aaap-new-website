import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export function useMembers () {
  const location = useLocation();
  const isMembers = useMemo(() => location.pathname.startsWith("/members"), [location.pathname]);
  return isMembers;
}
