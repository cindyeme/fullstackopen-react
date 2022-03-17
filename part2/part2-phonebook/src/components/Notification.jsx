import React from "react";

const Notification = ({ message, status }) => {
  return (
    <>
      {message === "" ? (
        <></>
      ) : (
        <div className={`${status === "ok" ? "success" : "error"}`}>
          {message}
        </div>
      )}
    </>
  );
};

export default Notification;
