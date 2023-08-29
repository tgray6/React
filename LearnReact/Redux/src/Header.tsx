import { authenticate } from "./api/authenticate";
import { authorize } from "./api/authorize";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "./store/store";
import { userSlice } from "./store/userSlice";

export function Header() {
  const user = useSelector((state: RootState) => state.user);
  const loading = useSelector((state: RootState) => state.loading);

  const dispatch = useDispatch();

  async function handleSignInClick() {
    dispatch(userSlice.actions.authenticateAction());
    const authenticatedUser = await authenticate();
    dispatch(userSlice.actions.authenticatedAction(authenticatedUser));
    if (authenticatedUser !== undefined) {
      dispatch(userSlice.actions.authorizeAction());
      const authorizedPermissions = await authorize();
      dispatch(userSlice.actions.authorizedAction(authorizedPermissions));
    }
  }

  return (
    <header className="flex justify-between items-center border-b-2 border-gray-100 py-6">
      {user ? (
        <span className="ml-auto font-bold">{user.name} has signed in</span>
      ) : (
        <button
          onClick={handleSignInClick}
          className={`whitespace-nowrap inline-flex items-center justify-center ml-auto px-4 py-2 w-36 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 ${
            loading ? "animate-ping" : ""
          }`}
        >
          {loading ? "..." : "Sign In"}
        </button>
      )}
    </header>
  );
}
