import React from "react";
import "../../style/layout/mainLayout.css";

const MainLayout = props => {
  const ShowContents = props.content;
  return (
    <div className="">
      <ShowContents></ShowContents>
    </div>
  );
};

export default MainLayout;
