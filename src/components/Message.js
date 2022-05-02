import React from "react";

const Message = ({ msj, bgColor }) => {
  let styles = {
    padding: "1rem",
    marginBottom: "1rem",
    textAling: "center",
    paddingLeft: "3rem",
    backgroundColor: bgColor,
    color: "white",
    fontweight: "bold",
  };
  return (
    <div style={styles}>
      {/* <p>{msj}</p> */}
      <p dangerouslySetInnerHTML={{ __html: msj }}></p>
    </div>
  );
};

export default Message;
