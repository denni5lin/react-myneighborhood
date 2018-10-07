import React, { Component } from "react";
import VenueList from "./VenueList";

class SideBar extends Component {
  render() {
    return (
      <div className="sideBar">
        <input type={"search"} id={"search"} placeholder={"Filter Venues"} />
        <VenueList {...this.props} />
      </div>
    );
  }
}

export default SideBar;
