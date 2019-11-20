import React from "react";
import mision from "../assets/img/mision.jpg";
import '../../style/view/about.css'

const About = () => {
  return (
    <div className="p-4 container bg-primary">
      <div className="card card-header">
            <p>
              <h2>Mision y Vision</h2>
            </p>
        <div className="card card-body">
          <div class="row">
              <div class="col-m d-6">
                 <img  width="" height="50%" src={mision} alt="Mision" className="img-about"></img>
              </div>
            <div class="col-md-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolor eum esse itaque neque optio quidem fugit. Eveniet hic quo illo, repellendus praesentium libero nobis aperiam voluptas culpa accusantium corrupti!
                Sit blanditiis inventore doloribus beatae consectetur id ipsa nobis ducimus. Error reiciendis odit mollitia voluptatum rem corrupti, sed aut quae fugit eveniet voluptates porro quisquam harum earum perspiciatis voluptate alias.
            </div>
            <div className="row">
              <div className="col-md-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ipsum delectus nobis magni non odit cupiditate, id, iure quae tenetur, fugiat ea. At commodi dolorum deleniti accusantium, reprehenderit nisi corrupti.
                Numquam architecto, officiis officia sequi deleniti atque rem accusamus ipsam, id repellat quo incidunt nemo hic similique perspiciatis reiciendis quam? Placeat fugit commodi reprehenderit quasi ullam in eos odio ducimus.
                Alias illum rerum fugiat rem quo possimus id sint sunt dolorem accusamus optio incidunt nihil provident eos sequi dicta sit fugit odio quam quia, quis odit ullam. Rerum, animi distinctio.
              </div>
              <div className="col-md-6">
                <img src={mision} alt="" className="img-about"/>
              </div>
            </div>
          </div>
      </div>
    </div>
    </div>
  );
};

export default About;
