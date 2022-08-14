import React from "react";

function TopPhotos (props){
    return(
        <div>
            <figure className="top-img-boxes">
        <img src={props.img} alt="Barcelona img" className="top-photos" />
        <figcaption className="info-text"><span className="city">barcelona, spain</span><span className="address">266, libardade</span>
        <span className="price">starting from €1,450,000</span>
        </figcaption>
        </figure>
        <div className={props.box}>
        <p className="black-box-text">{props.text}</p>
        <a href="#" className={props.btnStyle}>{props.btn}</a>
    </div>
        </div>
     
    );
}

export default TopPhotos;

