import { NavLink, Link, useSearchParams, Form } from "react-router-dom";
import logo from "../logo.png";

export function Header() {
  const [searchParams] = useSearchParams();

  return (
    <header className="text-center text-slate-50 bg-[#79419c] h-40 p-5">
      <Form className="relative text-right" action="/products">
        <input
          type="search"
          name="search"
          placeholder="Search Game"
          defaultValue={searchParams.get("search") ?? ""}
          className="absolute right-0 top-0 rounded py-2 px-3 text-gray-700 border"
        />
      </Form>

      <Link to="">
        <img src={logo} alt="Logo" className="inline-block h-12" />
      </Link>
      <h1 className="text-2xl">Welcome to HoBo Games Store</h1>
      <nav className="py-1">
        <div>
          <NavLink
            className={({ isActive }) =>
              `text-white no-underline p-1 pb-0.5 border-solid border-b-2 ${
                isActive ? "border-white" : "border-transparent"
              }`
            }
            to="products"
          >
            New Games Available
          </NavLink>
        </div>

        <div>
          <NavLink
            className={({ isActive }) =>
              `text-white no-underline p-1 pb-0.5 border-solid border-b-2 ${
                isActive ? "border-white" : "border-transparent"
              }`
            }
            to={"admin"}
          >
            Admin
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
