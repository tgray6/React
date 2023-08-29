import { useRouteError } from "react-router-dom";
import { Header } from "../Header";

export function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <Header />
      <div className="text-center p-5 text-xl">
        <h1 className="text-xl text-slate-900">Sorry, an error has occurred</h1>
        {isError(error) && (
          <p className="text-base text-slate-700">{error.statusText}</p>
        )}
      </div>
    </>
  );
}

//type predicate to allow Typescript to narrow it to something we can work with. the function checks whether the error object has a statusText property(which it does), then gives it a type with that property
function isError(error: any): error is { statusText: string } {
  return "statusText" in error;
}
