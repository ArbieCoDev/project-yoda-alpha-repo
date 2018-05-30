import React, { Component } from 'react';
import { Card, 
        CardTitle, 
        CardText, 
        Button, 
        SVGIcon,
        FontIcon,
        Avatar,
        List,
        ListItem,
        ListItemControl,
        Checkbox,
        Switch,
        Divider} from 'react-md';


export default class StudentHome extends Component {
  render() {
    return (
  <div className="md-grid">
   
    <Card className="cards__example md-cell md-cell--4 md-cell--8-tablet">
      <CardTitle className="card-title-black" title="Combined To Do List" subtitle="(Most Recent)" />
      <CardText>
          <ul className="checklist-todo md-text--secondary">
            <li><input type="checkbox" /> Weekly Learning Log #22</li>
            <li><input type="checkbox" /> Robotics Project #6</li>
            <li><input type="checkbox" /> Weekly Learning Log #21</li>
            <li className="checklist-done"><input type="checkbox"  checked disabled/> Robotics Assignment #20</li>
            <li className="checklist-done"><input type="checkbox"  checked disabled/> Weekly Learning #20</li>
            <li className="checklist-done"><input type="checkbox"  checked disabled/> Robotics Assignment #21</li>
          </ul>
      </CardText>
    </Card>
    
    <Card className=" cards__example md-cell md-cell--4 md-cell--8-tablet">
      <CardTitle className="subject-1" title="Homeroom" subtitle="2018-19" />
      <CardText>
        <p className="course-summary-text">
          Grade Summary: 87.6% - Pass <span className="dot-pass-good"></span>
        </p>
        <p><br></br>
          <p className="course-message-text-head">
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
        </p>
      </CardText>
    </Card>
    <Card className="cards__example md-cell md-cell--4 md-cell--8-tablet">
      <CardTitle className="subject-2" title="LEGO Robotics EV3" subtitle="2018-19" />
      <CardText>
        <p className="course-summary-text">
         Grade Summary: 96.7% - Pass <span className="dot-pass-excellent"></span>
        </p>
        <p>
          <br></br>
          <p className="course-message-text-head">
            Recent Messages
          </p>
          <Divider />
          <br></br>
          <p className="recent-messages-text">
            <b>May 2, 2018:</b>  “Outstanding Robotics project!  I really liked how you made the robot move!” <i>-Teacher B.</i>
          </p>
          <p className="recent-messages-text">
           <b>May 2, 2018:</b>  “Well done on your Robotics assignment.  Sounds like you learned a lot!” <i>-Teacher B.</i>
          </p>
        </p>
      </CardText>
    </Card>
  </div>
    );
  }
}
