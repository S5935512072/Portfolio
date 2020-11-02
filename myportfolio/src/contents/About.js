import React, { Component } from "react";
import profilepic from "../img/profile.jpg";

class About extends Component {
  render() {
    return (
      <div className="condiv">
        <div className="about">
          <h1 className="subtopic" className="bulletbox">About Me</h1>
        {/*<img src={profilepic} />*/}
        <img
          src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-9/122469918_3299941550074464_8745690583165857185_o.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGFRN8gMJqkZe_pQ0c9MdayKUNhqw82fzIpQ2GrDzZ_Mtpql3i7hPTRT5CSRmI8EzCLccuFPuDxau0QbF1b938X&_nc_ohc=T49LbAuY5FMAX-vMk41&_nc_ht=scontent.fbkk10-1.fna&oh=48cbca3e1e6ee51050a09654a0799d5f&oe=5FC1CAE5"
          alt="profile"
          className="profilepic"
        />
        <h3> Hi, I am Surasak</h3>
        <p>
          I started to know and use technology at a young age. I have a passion
          and a passion for technology. I want to work with technology because I
          personally like new technology. I have patience and can work under
          pressure. I have the skills that front-end developers must have and
          this helped me to have good work experience. I am happy and interested
          in working with professionals and I hope it will be a good experience
          in my life working with your company.
        </p>
      </div>
        </div>
        
    );
  }
}

export default About;
