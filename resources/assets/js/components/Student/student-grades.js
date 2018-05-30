import React, { Component } from 'react';
import { Card, 
        CardTitle, 
        CardText,
        DataTable,
        TableHeader,
        TableBody,
        TableRow,
        TableColumn,
        Divider
     } from 'react-md';

export default class StudentGrades extends Component {
  render() {
    return (
      <div className="md-grid">
          <Card className="cards__example md-cell md-cell--6 md-cell--8-tablet">
        <CardTitle className="subject-1" title="Homeroom" subtitle="2018-19" />
        <CardText>
        <p className="course-summary-text">
          Grade Summary: 87.6%  <span className="dot-pass-good"></span>
        </p>
        <br></br><br></br>
        <p className="course-summary-text left-aligned">Recent Scores</p>
        <Divider />
        <br></br>
        <div className="course-summary-center">
        <p className="course-summary-text-small">
          <b>Weekly Learning Log #22:</b> 76.6%  <span className="dot-pass-fail"></span>
        </p>
        <p className="course-summary-text-small">
         <b>Weekly Learning Log #21:</b> 91.6%  <span className="dot-pass-excellent"></span>
        </p>
        <p className="course-summary-text-small">
          <b>Weekly Learning Log #20:</b> 100%  <span className="dot-pass-excellent"></span>
        </p>
        <p className="course-summary-text-small">
          <b>Weekly Learning Log #19:</b> 62%  <span className="dot-pass-fail"></span>
        </p>
        <p className="course-summary-text-small">
        <b>Weekly Learning Log #18:</b> 82%  <span className="dot-pass-good"></span>
        </p>
        </div>
        </CardText>
      </Card>

      <Card className="cards__example md-cell md-cell--6 md-cell--8-tablet">
        <CardTitle className="subject-2" title="LEGO Robotics EV3" subtitle="2018-19" />
        <CardText>
        <p className="course-summary-text">
         Grade Summary: 96.7% - Pass <span className="dot-pass-excellent"></span>
        </p>
        <br></br><br></br>
        <p className="course-summary-text left-aligned">Recent Scores</p>
        <Divider />
        <br></br>
        <div className="course-summary-center">
        <p className="course-summary-text-small">
          <b>Robotics Project #5:</b> 76.6%  <span className="dot-pass-fail"></span>
        </p>
        <p className="course-summary-text-small">
         <b>Robotics Quiz #8:</b> 91.6%  <span className="dot-pass-excellent"></span>
        </p>
        <p className="course-summary-text-small">
          <b>Robotics Assignment #6:</b> 100%  <span className="dot-pass-excellent"></span>
        </p>
        <p className="course-summary-text-small">
          <b>Robotics Projects #4:</b> 62%  <span className="dot-pass-fail"></span>
        </p>
        <p className="course-summary-text-small">
        <b>Robotics Assignment #2:</b> 82%  <span className="dot-pass-good"></span>
        </p>
        </div>
        
        </CardText>
      </Card>

      </div>
    );
  }
}
