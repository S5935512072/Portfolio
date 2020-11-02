import React, { Component } from 'react'
import Widecard from '../components/Widecard'
/*import Lightbox from "react-image-lightbox";
import 'react-image-lightbox/style.css';
import Game from "../components/img/00001.jpg";*/

class Education extends Component {
    /*constructor(props) {
        super(props);
        this.state = {
          isOpen: false
        };
      }*/

    render () {
        return (
            <div className="condiv">
                <h1 className="subtopic"  className="bulletbox">My Education</h1>
                <Widecard title="Computer Engineering" where="Prince of Songkla University Phuket Campus" from="2016" to="Present" />
                <Widecard title="Student" where="Saparachinee School Trang" from="2009" to="2015" />
                <h2 className="bulletbox">Certificate</h2>
                <img src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-9/123009321_3316664155068870_3605662343362918314_o.jpg?_nc_cat=102&ccb=2&_nc_sid=0debeb&_nc_eui2=AeHj0-COqGEtvAwyn6Ws3I7ZAbBwqfCDzcUBsHCp8IPNxWfnd6TbvzB6hqrT5YPT8DGikGYE1bN2HKcrYeVf2eKb&_nc_ohc=_ndPErv-OJAAX9e3sCa&_nc_ht=scontent.fbkk10-1.fna&oh=8530ec9d3d2f8da92df1229364eda0d2&oe=5FC4DC67"   className="certificate" />
                <img src="https://scontent.fbkk14-1.fna.fbcdn.net/v/t1.0-9/123090647_3316664425068843_37997755643551654_o.jpg?_nc_cat=100&ccb=2&_nc_sid=0debeb&_nc_eui2=AeF7wvZQupdhNmvkoWANKNaiDRONNxDWbv0NE403ENZu_SaJ6YScLjRqRrGwAufX9GWwzSicJWs-4RK2QSY9KRY9&_nc_ohc=RszgSg9fG-0AX9WSTOx&_nc_ht=scontent.fbkk14-1.fna&oh=78f1160a573741e312edb4e2f08da36a&oe=5FC36F25"  className="certificate" />
                <img src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-9/123189056_3316664445068841_8730675436389511161_o.jpg?_nc_cat=102&ccb=2&_nc_sid=0debeb&_nc_eui2=AeFB-14CdoiRVzZtQZqmD3Od_VaaqTWx3sT9VpqpNbHexA8VONgIdZbeUiqS_dfVGAT6t41I3Swl0nY0V6Y924Cc&_nc_ohc=WNf0d3ybtZIAX-UgkVW&_nc_ht=scontent.fbkk10-1.fna&oh=240fdf01ed672e7e1390366438e78873&oe=5FC62DCA"  className="certificate" />
                <img src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-9/123186594_3316666721735280_3327766079421040754_o.jpg?_nc_cat=108&ccb=2&_nc_sid=0debeb&_nc_eui2=AeEDULYktqLyW3YlVGSdtkc5GinoNex8G8MaKeg17Hwbw0-UjUwfaw_gzMRhlTIM0pE0WkHIFcbnqJ_7Hj3P2fKD&_nc_ohc=FkA8AhOJKUAAX9ZOM60&_nc_ht=scontent.fbkk10-1.fna&oh=bc3bc27fdce93539f18ea6e6f1241184&oe=5FC51D61"  className="certificate" />
                <img src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-9/123048326_3316664441735508_3827789556205126362_o.jpg?_nc_cat=109&ccb=2&_nc_sid=0debeb&_nc_eui2=AeFYxv_5NaLUnDqIWZop8_-k6370-g1vXrjrfvT6DW9euC7U7d14tW1w_BmyysTiA844agNkmsNqbsAiukJbZbL6&_nc_ohc=g1l7V5HJ6UcAX96rjCS&_nc_ht=scontent.fbkk10-1.fna&oh=6f2ff36c47da0f2c41e0af7acdb20ef3&oe=5FC39A82"  className="certificate" />
                <img src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-9/123079676_3316664281735524_8607934518919916274_o.jpg?_nc_cat=103&ccb=2&_nc_sid=0debeb&_nc_eui2=AeFWM5jH-b3iCoGpzEA0tJ6ds-Zc9CQe5_iz5lz0JB7n-CodDoeRqqz9VgTgef2v_e04FlFMbax2JhP9BP88_Vqg&_nc_ohc=ugxx4I7tndQAX8us9T5&_nc_ht=scontent.fbkk10-1.fna&oh=6196c595ad36b61796abb235173bcbb3&oe=5FC3E096"  className="certificate" />
            </div>
        )
    }
}

export default Education;

/*<img className="certificate"
             
onClick={() => this.setState({ isOpen: true })}
src={Game}
alt="QRcode"

></img>
{isOpen && (
<Lightbox
  mainSrc={Game}
  onCloseRequest={() => this.setState({ isOpen: false })}
/>
)}*/