import { Link } from "react-router-dom";
import { problems } from "../problems/registry";

export default function Home() {
  return (
    <div className="home">
      <h1>Personal prep</h1>

      <ul>
        {problems.map((p) => (
          <li key={p.id}>
            <Link to={p.path}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
