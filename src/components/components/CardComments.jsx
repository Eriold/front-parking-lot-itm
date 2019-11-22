import React from "react";
// import "../../style/view/comments.css";
import user1 from "../assets/img/user1.png";
import user2 from "../assets/img/user2.jpg";
import user3 from "../assets/img/user3.png";

const CardComments = () => {
  return (
    <div className="comments">
      <div className="row  bg-primary">
        <div className="col-md-5">
          <img src={user1} alt="" className="img-about" />
        </div>
        <div className="col-md-5">
          <p className="text-center mt-4">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            natus corporis, asperiores odit maxime, aut neque quibusdam nesciunt
            quod assumenda alias, consequuntur aliquid fugiat. Aspernatur ea
            architecto hic earum dolor?Deserunt labore quibusdam nostrum,
            facilis possimus vel aperiam aliquid rem exercitationem accusamus
            provident maxime, molestiae enim excepturi quidem ab a iusto vitae
            laboriosam. Optio esse non ipsa voluptate a iusto.
          </p>
        </div>
      </div>
      <div className="row bg-dark">
        <div className="col-md-5">
          <p className="text-center mt-4">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            natus corporis, asperiores odit maxime, aut neque quibusdam nesciunt
            quod assumenda alias, consequuntur aliquid fugiat. Aspernatur ea
            architecto hic earum dolor?Deserunt labore quibusdam nostrum,
            facilis possimus vel aperiam aliquid rem exercitationem accusamus
            provident maxime, molestiae enim excepturi quidem ab a iusto vitae
            laboriosam. Optio esse non ipsa voluptate a iusto.
          </p>
        </div>
        <div className="col-md-5">
          <img src={user2} alt="" className="img-about" />
        </div>
      </div>
      <div className="row bg-success">
        <div className="col-md-5">
          <img src={user3} alt="" className="img-about" />
        </div>
        <div className="col-md-5">
          <p className="text-center mt-4">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            natus corporis, asperiores odit maxime, aut neque quibusdam nesciunt
            quod assumenda alias, consequuntur aliquid fugiat. Aspernatur ea
            architecto hic earum dolor?Deserunt labore quibusdam nostrum,
            facilis possimus vel aperiam aliquid rem exercitationem accusamus
            provident maxime, molestiae enim excepturi quidem ab a iusto vitae
            laboriosam. Optio esse non ipsa voluptate a iusto.
          </p>
        </div>
      </div>
    </div>
  );
};
export default CardComments;
