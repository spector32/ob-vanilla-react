import { withRouter, Link } from "react-router-dom";
import "./MainMenu.scss";

export default withRouter(function MainMenu({ match }) {
  const { url } = match;

  const menuItems = [
    {
      title: "Home (welcome page)",
      link: "/",
    },
    {
      title: "Non existant route",
      link: "/non-existing-route",
    },
    {
      title: "Private route",
      link: "/private",
    },
    {
      title: "Private route (with redirect)",
      link: "/private-redirect",
    },
  ];

  return (
    <nav className="main-nav">
      <ul>
        {menuItems.map(({ title, link }, index) => (
          <li
            key={`${index}-${link}`}
            className={link === url ? "active" : undefined}
          >
            <Link to={link}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
});
