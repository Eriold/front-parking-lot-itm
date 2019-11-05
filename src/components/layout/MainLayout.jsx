import React from "react";
import "../../style/layout/mainLayout.css";

const MainLayout = props => {
  const ShowContents = props.content;
  const ShowContents2 = props.content2;
  const Separate = props.separate;
  return (
    <div className="">
      <ShowContents />
      <Separate />
      <ShowContents2 />
      <Separate />
    </div>
  );
};

export default MainLayout;
