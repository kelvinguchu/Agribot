import React from "react";

function ListItem({ icon, text }) {
  return (
    <div className="listItems">
      <img src={icon} alt="" className="listItemsImg  login" />
      {text}
    </div>
  );
}

export default ListItem;
