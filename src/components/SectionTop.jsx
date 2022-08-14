import React from "react";
import TopPhotos from "./TopPhotos";

function SectionTop (){
    return(
    <section className="section-top">
        <div className="row">
        <div className="top-header">
        <h2 className="heading-secondary">our top picks</h2>
        <a href="#" className="btn btn-top">see all properties</a>
        </div>
      <div className="top-img-boxes">
      <TopPhotos img="images/top-photo-1.jpg" />
       <TopPhotos img="images/op-photo-2.jpg"  
       box="black-box"
       text="These ultra sleek and contemporary new villas are situated on a seafront cliff top 
        with breath-taking views over the ocean and the natural landscape surrounding them." 
        btnStyle="btn btn-secondary" btn="get in" />
       <TopPhotos img="images/top-photo-3.jpg" />
      </div>
        </div>
    </section>
    );
}

export default SectionTop;