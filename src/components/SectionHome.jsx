import React from "react";

function SectionHome (){
    return(
    <section className="section-home">
        <img src="images/lizbon-photo.jpg" alt="Lizbon Photo" className="home-img" />
        <div className="header-box row">
        <h3 className="heading-tertiary">your new home <span className="sub">in lizbon</span></h3>
        <p className="sub-heading">Find the best real estate opportunities</p>
        </div>
    </section>
    );
}

export default SectionHome;