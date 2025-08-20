import { NavLink, useParams } from "react-router";

export default function Home() {
  const { id } = useParams();
  return (
    <div>
      <h1>{`Home ${id}`}</h1>
      <NavLink to="/about" state={[{ from: "home", data: { id } }]}>
        About
      </NavLink>
    </div>
  );
}
