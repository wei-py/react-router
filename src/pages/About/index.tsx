import { NavLink, useLocation, useSearchParams } from "react-router";

export default function About() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const state = location.state;
  return (
    <div>
      <h1>About</h1>
      <h2>{JSON.stringify(state)}</h2>
      <p>
        sugar:
        {searchParams.get("sugar")}
      </p>
      <p>
        add:
        {searchParams.get("add")}
      </p>
      <p>
        age:
        {searchParams.get("age")}
      </p>
      <button
        type="button"
        onClick={() => {
          setSearchParams((prev) => {
            prev.set("sugar", "1");
            prev.set("add", "2");
            prev.set("age", "3");
            return prev;
          });
        }}
      >
        修改路由
      </button>
      <NavLink to="/Home">Home</NavLink>
    </div>
  );
}
