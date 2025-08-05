import React from "react";
import { Link } from "react-router-dom";

function SubPageLayout({ title, children }) {
  return (
    <div className="page sub-page" style={{ display: "grid" }}>
      <div className="sub-top">
        <p>{title}</p>
      </div>

      <div className="sub-middle">{children}</div>

      <div className="sub-bottom">
        <Link to="/" className="back-button">
          <span
            className="material-symbols-outlined"
            style={{ paddingLeft: "6px" }}
          >
            chevron_backward
          </span>
        </Link>
      </div>
    </div>
  );
}

export default SubPageLayout;
