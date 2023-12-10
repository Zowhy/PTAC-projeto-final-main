import { NavLink } from "react-router-dom";
import "./Aside.css";

export function Aside() {

  return (
    <aside>
      <nav>
        <ul className='list'>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/destaque">Destaque</NavLink></li>
          <li><NavLink to="/novo-video">Novo vídeo</NavLink></li>
        </ul>
      </nav>
    </aside>
  );
}
