import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ProductsPage } from "./pages/ProductsPage";
import { SingleProductPage } from "./pages/SingleProductPage";
import { ErrorPage } from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import App from "./App";

const AdminPage = lazy(() => import("./pages/AdminPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "products/:productID",
        element: <SingleProductPage />,
      },
      {
        path: "admin",
        element: (
          <Suspense
            fallback={
              <div className="text-center p-5 text-xl text-slate-00">
                Loading...
              </div>
            }
          >
            <AdminPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
