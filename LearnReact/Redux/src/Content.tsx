import { useSelector } from "react-redux";
import type { RootState } from "./store/store";

export function Content() {
  const permissions = useSelector((state: RootState) => state.permissions);
  const fieldStyle = "mt-4 text-l text-center";

  if (permissions === undefined) {
    return null;
  }

  return permissions.includes("admin") ? (
    <p className={fieldStyle}>Some important stuff that only an admin can do</p>
  ) : (
    <p className={fieldStyle}>Insufficient permissions</p>
  );
}
