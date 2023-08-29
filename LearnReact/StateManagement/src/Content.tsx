import { useAppContext } from "./AppContext";

export function Content() {
  const { permissions } = useAppContext();
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
