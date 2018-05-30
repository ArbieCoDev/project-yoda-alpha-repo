import React, { Component } from 'react';
import {  Button,
          Card, 
          CardTitle, 
          CardText,
          DataTable,
          TableHeader,
          TableBody,
          TableRow,
          TableColumn,
          Divider,
          FileInput  } from 'react-md';



export default class StudentCourse1 extends Component {
  render() {
    return (
      <div className="md-grid">
        <Card className="cards__example md-cell md-cell--6 md-cell--8-tablet">
      <CardTitle title="To Do List" subtitle="" />
      <CardText>
          <ul className="checklist-todo md-text--secondary">
            <li><input type="checkbox" />Robotics Project #6</li>
            <li><input type="checkbox" />Robotics Assignment #4</li>
            <li><input type="checkbox" />Robotics Project #5</li>
            <li><input type="checkbox" />Robotics Quiz #8</li>
            <li className="checklist-done"><input type="checkbox"  checked disabled/>Robotics Assignment #3</li>
            <li className="checklist-done"><input type="checkbox"  checked disabled/>Robotics Quiz #7</li>
          </ul>
          <Divider />
          <br></br>
          <div className="big-button-container">
          <Button secondary raised  className="course-big-buttons" >Interactive Curriculum</Button><br></br>
          <Button secondary raised  className="course-big-buttons" >Quizzes</Button><br></br>
          <Button secondary raised  className="course-big-buttons" >Assignments</Button><br></br>
          <Button secondary raised  className="course-big-buttons" >Projects</Button><br></br>
          </div>
      </CardText>
    </Card>
    <Card className="cards__example md-cell md-cell--6 md-cell--8-tablet">
        <br></br>
        <div className="md-grid homeroom-summary-text">
           Grade Summary: 96.7% - Pass <span className="homeroom-dot-pass-excellent"></span>
             <p><br></br><br></br>
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
        </p>
        </div>
    </Card>
      </div>
    );
  }
}
