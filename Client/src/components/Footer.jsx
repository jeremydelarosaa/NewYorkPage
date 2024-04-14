import React from "react";

function Footer({ title, arg1, arg2, arg3 }) {
  return (
    <>
      <div>
        <h3>{title}</h3>
        <ul>
          <li>
            <a href={`/${arg1}`}>{arg1}</a>
          </li>
          <li>
            <a href={`/${arg2}`}>{arg2}</a>
          </li>
          <li>
            <a href={`/${arg3}`}>{arg3}</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Footer;
