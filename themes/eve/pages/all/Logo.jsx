import React from "react";

function Logo() {
  return (
    <div>
      <a href="/">
        <h1 style={{ fontWeight: "800", color: "#137E86" }}>lalscorp</h1>
      </a>
    </div>
  );
}

export default Logo;

export const layout = {
  areaId: "header",
  sortOrder: 5,
};
