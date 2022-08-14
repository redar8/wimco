import React from "react";

function SectionGetPro (){
    return(
    <section className="section-get-pro">
        <div className="row">
            <div className="section-get-pro-box">
               <div className="head"> <h2 className="heading-secondary">why get properties?</h2></div>
                <p className="get-pro-paragraph">
                We help our clients make a property investment that meets their lifestyle expectations in Portugal, Greece, Spain, 
                and Turkey. We offer professional advisory services for property selection and acquisition, management, and rental 
                services. With a unique approach that includes market understanding and location advisory, we focus on delivering a 
                tailored-made and efficient service for our international clients. 
                </p>
                <p className="get-pro-paragraph">
                With local offices in Lisbon, Athens, Istanbul, 
                and London and various international associations, Get Properties will be on your side throughout the whole property 
                investment journey.
                </p>
                <div className="get-pro-icons">
                    <img src="images/calender-icon.png" alt="calender icon" className="icon" />
                    <img src="images/home-icon.png" alt="home icon" className="icon" />
                    <img src="images/per-icon.png" alt="% icon" className="icon" />
                </div>
                <div className="get-pro-features">
                    <p className="feature-text">Schedule an Appointment with Real Estate Professionals</p>
                    <p className="feature-text">Search and Choose the Right Property</p>
                    <p className="feature-text">Complete the Property Purchase</p>
                </div>
            </div>
        </div>
    </section>)
}


export default SectionGetPro;