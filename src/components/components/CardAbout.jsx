import React from "react";
import mision from "../assets/img/mision.jpg";
import Vision from "../assets/img/Vision.jpg";
import '../../style/view/about.css'

const CardAbout = () => {
  return (
    <div className="p-4 container">
      <div className="card card-header bg-primary">
            <p>
              <h2>Mision y Vision</h2>
            </p>
        <div className="card card-body">
          <div class="row">
              <div class="col-12 col-md-6">
                 <img  src={mision} alt="Mision" className="img-about"></img>
              </div>
            <div class="col-12 col-md-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolores sint aspernatur animi iste nostrum facere possimus hic eos quisquam, rerum tenetur sit unde, nulla velit, quae itaque quas ad.
                Quos adipisci reiciendis culpa blanditiis, laboriosam autem harum cupiditate vero, a accusantium odit ab illo, magni veritatis assumenda molestias! Dolorem in eaque dolores possimus voluptas, officia et ad nihil provident.
                Minima maiores tenetur esse, eligendi cumque, est velit nisi, ad laudantium sunt ipsam iure nulla quos asperiores unde nam voluptatum sequi voluptate inventore enim facere! Facere aperiam ipsa porro consequuntur?
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ipsum delectus nobis magni non odit cupiditate, id, iure quae tenetur, fugiat ea. At commodi dolorum deleniti accusantium, reprehenderit nisi corrupti.
                Numquam architecto, officiis officia sequi deleniti atque rem accusamus ipsam, id repellat quo incidunt nemo hic similique perspiciatis reiciendis quam? Placeat fugit commodi reprehenderit quasi ullam in eos odio ducimus.
                Alias illum rerum fugiat rem quo possimus id sint sunt dolorem accusamus optio incidunt nihil provident eos sequi dicta sit fugit odio quam quia, quis odit ullam. Rerum, animi distinctio. 
              </div>
              <div className="col-12 col-md-6">
                <img src={Vision} alt="" className="img-about"/>
              </div>
            </div>
          </div>
      </div>
    </div>
    </div>
  );
};

export default CardAbout;
