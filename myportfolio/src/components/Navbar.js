import React, { Component } from 'react'
import Navitems from './Navitems'
import Social from '../components/Social'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'NavItemActive':''
        }
    }

    actiiveitem = (item) => {
        if (this.state.NavItemActive.length > 0) {
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({ 'NavItemActive': item }, () => {
            document.getElementById(this.state.NavItemActive).classList.add('active');
        })
    }

    render() {
        return (
            <nav>
                <ul>
                    <Navitems item="Home" tolink="/" activenav={this.actiiveitem}></Navitems>
                    <Navitems item="About" tolink="/about" activenav={this.actiiveitem}></Navitems>
                    <Navitems item="Education" tolink="/education" activenav={this.actiiveitem}></Navitems>
                    <Navitems item="Skills" tolink="/skills" activenav={this.actiiveitem}></Navitems>
                    <Navitems item="Contact" tolink="/contact" activenav={this.actiiveitem}></Navitems>
                <div className="home2"><Social /></div>
                
                </ul>
                
                
            </nav>
        )
    }
}

export default Navbar;