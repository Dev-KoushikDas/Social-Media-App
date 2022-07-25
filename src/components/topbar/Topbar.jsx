import "./topbar.css";
import {  PlayCircleFilledOutlined,
  Group,
  WorkOutline,Search, Person, Chat, Notifications, Home } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo"></span>
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search Connect"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarCenter">
      <div className="topbarnav-icons">
      <div className="topbarnav-items active">
      <Home className="navicons"/>
      </div>
      <div className="topbarnav-items">
      <PlayCircleFilledOutlined className="navicons"/>
      </div>
      <div className="topbarnav-items">
      <Group className="navicons"/>
      </div>
      <div className="topbarnav-items">
      <WorkOutline className="navicons"/>
      </div>
      </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          {/*<span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>*/}
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person className="topbar_right_img" />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat className="topbar_right_img"/>
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications className="topbar_right_img"/>
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg"/>
      </div>
    </div>
  );
}
