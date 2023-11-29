import React from "react";
import { useAuth } from "./AuthContext"; 

function ListItem({ icon, text, className, isAuthItem }) {
  const { user, googleSignIn, logOut } = useAuth();

  const handleAuthAction = () => {
    if (!isAuthItem) return; // Only proceed if this is the auth item

    if (user) {
      logOut();
    } else {
      googleSignIn();
    }
  };

  return (
    <div className={`listItems ${className}`} onClick={handleAuthAction}>
      <img
        src={user && isAuthItem ? user.photoURL || icon : icon}
        alt=""
        className="listItemsImg"
      />
      {user && isAuthItem ? user.displayName || user.email : text}
    </div>
  );
}


export default ListItem;
