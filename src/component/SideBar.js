import React, { Component } from "react";
import VenueList from "./VenueList";

class SideBar extends Component {
  render() {
    return (
      <div className="sideBar">
        <VenueList />
      </div>
    );
  }
}

export default SideBar;
