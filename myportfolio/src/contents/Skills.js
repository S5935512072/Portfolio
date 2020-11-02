import React, { Component } from "react";
import { Progress } from "reactstrap";

class Skills extends Component {
  render() {
    return (
      <div className="condiv">
        <div className="skills">

        </div>
        <h1 className="subtopic" >My Skills</h1>

        <h5 className="bulletbox">Front-end</h5>
        <h5>HTML</h5>
        <Progress multi>
          <Progress bar value="65">
            Knowledge
          </Progress>
          <Progress bar animated color="success" value="15">
            Learning
          </Progress>
        </Progress>
        <h5>CSS</h5>
        <Progress multi>
          <Progress bar color="secondary" value="70">
            Knowledge
          </Progress>
          <Progress bar animated color="success" value="15">
            Learning
          </Progress>
        </Progress>
        <h5>Javascript</h5>
        <Progress multi>
          <Progress bar color="info" value="60">
            Knowledge
          </Progress>
          <Progress bar animated color="success" value="20">
            Learning
          </Progress>
        </Progress>
        <h5>C++</h5>
        <Progress multi>
          <Progress bar color="warning" value="70">
            Knowledge
          </Progress>
          <Progress bar animated color="success" value="5">
            Learning
          </Progress>
        </Progress>
        <h5>C#</h5>
        <Progress multi>
          <Progress bar color="danger" value="70">
            Knowledge
          </Progress>
          <Progress bar animated color="success" value="5">
            Learning
          </Progress>
        </Progress>
        
          <h5 className="bulletbox">Back-end</h5>
          
        <Progress multi>
          <Progress bar color="info" value="25">
            Knowledge
          </Progress>
          <Progress bar animated color="success" value="25">
            Learning
          </Progress>
        </Progress>
      </div>
    );
  }
}

export default Skills;

//constructor(props) {
//    super(props);

//   this.state = {
/*myskills: ["HTML", "CSS", "Javascript", "C++", "C#"]*/
//     myskills: ["Front-end"]
//   };
// }

// <ul>
//         {this.state.myskills.map(value => {
//           return <li>{value}</li>;
//         })}
//       </ul>
