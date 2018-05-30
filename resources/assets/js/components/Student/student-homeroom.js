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


export default class StudentHomeroom extends Component {
  render() {
    return (
        <div className="md-grid">
    <Card className="cards__example md-cell md-cell--6 md-cell--8-tablet">
      <CardTitle title="To Do List" subtitle="(Most Recent)" />
      <CardText>
          <ul className="checklist-todo md-text--secondary">
            <li><input type="checkbox" /> Due May 15 Weekly Learning Log #20</li>
            <li><input type="checkbox" />  Due May 15 Weekly Learning Log #19</li>
            <li className="checklist-done"><input type="checkbox"  checked disabled/>Due May 15 Weekly Learning Log #18</li>
            <li className="checklist-done"><input type="checkbox"  checked disabled/>Due May 15 Weekly Learning Log #17</li>
          </ul>
          <Divider />
          <br></br>
          <div className="weekly-learning"><FileInput className="weekly-learning-button" label="Submit Weekly Learning Logs" id="image-input-1" secondary flat /></div>
      </CardText>
    </Card>
    <Card className="cards__example md-cell md-cell--6 md-cell--8-tablet">
        <br></br>
        <div className="md-grid homeroom-summary-text">
           Grade Summary: 87.6% - Pass <span className="homeroom-dot-pass-good"></span>
             <p><br></br><br></br>
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
        </p>
        </div>
    </Card>
    <Card className="cards__example md-cell md-cell--12 md-cell--8-tablet">
      <CardText>
              <div className="homeroom-resource-title">Homeroom Resources <i className="homeroom-resource-subtitle">(Single Sign On!)</i></div>
              <br></br>
              <Divider />
              <br></br>
              <div className="homeroom-resource-card">
                <img className="homeroom-resource-img"  src={require("../../../images/brainpop.png")} />
                <img className="homeroom-resource-img" src={require("../../../images/studyisland.png")} /> 
                <img className="homeroom-resource-img" src={require("../../../images/educationcity.png")} /> 
              </div>
      </CardText>
    </Card>
    <Card className="cards__example md-cell md-cell--12 md-cell--8-tablet">
      <CardText>
              <div className="homeroom-resource-title">Additional Homeroom Resources <i className="homeroom-resource-subtitle">(NOT single sign on)</i></div>
              <br></br>
              <Divider />
              <br></br>
              <div className="homeroom-resource-card">
                <img className="homeroom-resource-img"  src={require("../../../images/shmoop.png")} />
                <img className="homeroom-resource-img" src={require("../../../images/utahlibrary.png")} /> <br></br>
                <img className="homeroom-resource-img" src={require("../../../images/peg.png")} />    
                <img className="homeroom-resource-img" src={require("../../../images/imaginemath.png")} /> 
                <img className="homeroom-resource-img" src={require("../../../images/ownit.png")} /> 
              </div>
      </CardText>
    </Card>
    
      </div>
    );
  }
}
