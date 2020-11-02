import React, { Component } from 'react'
import Social from '../components/Social'
import profilepic from '../img/profile.jpg'
import ReactTypingEffect from 'react-typing-effect'

class Home extends Component {
    render () {
        return (
            <div className="condiv home">
                <img src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-9/122469918_3299941550074464_8745690583165857185_o.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGFRN8gMJqkZe_pQ0c9MdayKUNhqw82fzIpQ2GrDzZ_Mtpql3i7hPTRT5CSRmI8EzCLccuFPuDxau0QbF1b938X&_nc_ohc=T49LbAuY5FMAX-vMk41&_nc_ht=scontent.fbkk10-1.fna&oh=48cbca3e1e6ee51050a09654a0799d5f&oe=5FC1CAE5" alt="profile" className="profilepic" />
                <ReactTypingEffect text={[ 'I am Surasak', 'I am Developer']} speed={80} eraseDelay={200} className="typingeffect" />
               
            </div>
        )
    }
}

/*<img src={profilepic} alt="profile" className="profilepic" />*/

export default Home;