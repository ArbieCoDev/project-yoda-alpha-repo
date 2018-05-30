import React, { Component } from 'react';
import { Card, 
  CardTitle, 
  CardText,
  DataTable,
  TableHeader,
  TableBody,
  TableRow,
  TableColumn,
  Divider,
  Button
} from 'react-md';

export default class StudentMessages extends Component {
  render() {
    return (
      <div className="md-grid">
      <Card className="cards__example md-cell md-cell--6 md-cell--8-tablet">
    <CardTitle className="subject-1" title="Homeroom" subtitle="2018-19" />
    <CardText>
          <div className="big-button-container">
          <Button secondary raised  className="course-big-buttons-red" >Send a Message to Homeroom Teacher</Button><br></br>
          </div><br></br>
          <p className="homeroom-summary-text">
            Recent Messages
          </p>
          <Divider />
          <br></br>
          <p className="recent-messages-text">
          <b>May 2, 2018:</b>  “Great job selling so many of your puppies. 
          That's super impressive that you're rewriting your goals and staying focused. 
          I watched your video that you did for My Tech High the other day. 
          I was very impressed! Way to Go!” <i>-Teacher A.</i>
          </p>
          <p className="recent-messages-text">
          <b>May 2, 2018:</b>  “It sounds like you are really enjoying Math and Reading.  Keep up the great work!” <i>-Teacher A.</i>
          </p>
      
    </CardText>
  </Card>

  <Card className="cards__example md-cell md-cell--6 md-cell--8-tablet">
    <CardTitle className="subject-2" title="LEGO Robotics EV3" subtitle="2018-19" />
    <CardText>
          <div className="big-button-container">
          <Button secondary raised  className="course-big-buttons-red" >Send a Message to Online Mentor</Button><br></br>
          </div><br></br>
          <p className="homeroom-summary-text">
            Recent Messages
          </p>
          <Divider />
          <br></br>
          <p className="recent-messages-text">
          <b>May 2, 2018:</b>  “Outstanding Robotics project!  I really liked how you made the robot move!” <i>-Teacher B.</i>
          </p>
          <p className="recent-messages-text">
          <b>April 28, 2018:</b>  “Well done on your Robotics assignment.  Sounds like you learned a lot!” <i>-Teacher B.</i>
          </p>
          <p className="recent-messages-text">
          <b>April 15, 2018:</b>  “I loved your Robotics Project #5 - nice work!!” <i>-Teacher B.</i>
          </p>
    </CardText>
  </Card>

  </div>
    );
  }
}
