import React from "react";
import TopUsersContainerCSS from "./TopUsersContainer.module.css";
import TopUserCard from "./TopUserCard";
function TopUsersContainer() {
  return (
    <div className={TopUsersContainerCSS.root}>
      <div className={TopUsersContainerCSS.heading}>
        <p className={TopUsersContainerCSS.headingText}>Top Users</p>
        <p className={TopUsersContainerCSS.viewAllText}>View all</p>
      </div>
      <div className={TopUsersContainerCSS.topUsersCardContainer}>
        <TopUserCard />
        <TopUserCard />
      </div>
    </div>
  );
}

export default TopUsersContainer;
