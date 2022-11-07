/* eslint-disable react/jsx-props-no-spreading */
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Button from "./components/Button";
// import Button from "./components/Button";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="logo">
        <img
          src={`${process.env.PUBLIC_URL}/assets/logo.svg`}
          alt="Organization logo"
        />
      </Link>
      <ul className="menu-item">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/about">About us</CustomLink>
        <CustomLink to="/forum">Forum</CustomLink>
        <CustomLink to="/event">Event</CustomLink>
        <CustomLink to="/blog">Blog</CustomLink>
        <CustomLink to="/job">Job</CustomLink>
      </ul>

      <Button />
    </nav>
  );
}

// eslint-disable-next-line react/prop-types
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({
    path: resolvedPath.pathname,
    end: true,
  });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
