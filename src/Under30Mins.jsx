import React from "react";
import Under30MinsCSS from "./Under30Mins.module.css";
import Under30MinsCard from "./Under30MinsCard";

function Under30Mins() {
  return (
    <div className={Under30MinsCSS.root}>
      <p className={Under30MinsCSS.heading}>Under 30 Mins</p>
      <div className={Under30MinsCSS.list}>
        <Under30MinsCard />
        <Under30MinsCard />
        <Under30MinsCard />
        <Under30MinsCard />
      </div>
    </div>
  );
}

export default Under30Mins;
