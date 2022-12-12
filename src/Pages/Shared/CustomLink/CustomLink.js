import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Link
      className={
        match
          ? "btn btn-circle btn-primary text-white"
          : "btn btn-circle bg-[#242424] text-white hover:btn-primary hover:text-white border-[#242424]"
      }
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
