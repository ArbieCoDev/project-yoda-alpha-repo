import React, { Component } from 'react';
import { Card, 
        CardTitle, 
        CardText,
        DataTable,
        TableHeader,
        TableBody,
        TableRow,
        TableColumn,
        FileInput, 
        SVGIcon,
        Button,
        Divider } from 'react-md';

export default class StudentTodo extends Component {
  render() {
    return (
      <div className="md-grid">

      <Card className="cards__example md-cell md-cell--6 md-cell--8-tablet">
        <CardTitle className="subject-1" title="Homeroom" subtitle="2018-19" />
        <CardText>
          <Card className="cards__example md-cell md-cell--12 md-cell--8-tablet">
            <CardTitle subtitle="To Do List" />
            <CardText>
              <ul className="checklist-todo md-text--secondary">
              <li><input type="checkbox" /> Due May 15 Weekly Learning Log #20</li>
              <li><input type="checkbox" />  Due May 15 Weekly Learning Log #19</li>
              <li className="checklist-done"><input type="checkbox"  checked disabled/>Due May 15 Weekly Learning Log #18</li>
              <li className="checklist-done"><input type="checkbox"  checked disabled/>Due May 15 Weekly Learning Log #17</li>
              </ul>
            </CardText>
          </Card>
          <Card className="cards__example md-cell md-cell--12 md-cell--8-tablet">
            <CardTitle subtitle="To Do List" />
            <CardText>
              <ul className="checklist-todo md-text--secondary">
              <li><input type="checkbox" /> Due May 15 Weekly Learning Log #20</li>
              <li><input type="checkbox" />  Due May 15 Weekly Learning Log #19</li>
              <li className="checklist-done"><input type="checkbox"  checked disabled/>Due May 15 Weekly Learning Log #18</li>
              <li className="checklist-done"><input type="checkbox"  checked disabled/>Due May 15 Weekly Learning Log #17</li>
              </ul>
            </CardText>
          </Card>
        </CardText>
      </Card>

      <Card className="cards__example md-cell md-cell--6 md-cell--8-tablet">
        <CardTitle className="subject-2" title="LEGO Robotics EV3" subtitle="2018-19" />
        <CardText>
          <Card className="cards__example md-cell md-cell--12 md-cell--8-tablet">
          <CardTitle subtitle="To Do List" />
          <CardText>
            <ul className="checklist-todo md-text--secondary">
            <li><input type="checkbox" />Robotics Project #6</li>
            <li><input type="checkbox" />Robotics Assignment #4</li>
            <li><input type="checkbox" />Robotics Project #5</li>
            <li><input type="checkbox" />Robotics Quiz #8</li>
            <li className="checklist-done"><input type="checkbox"  checked disabled/>Robotics Assignment #3</li>
            <li className="checklist-done"><input type="checkbox"  checked disabled/>Robotics Quiz #7</li>
            </ul>
          </CardText>
          </Card>
          <Card className="cards__example md-cell md-cell--12 md-cell--8-tablet">
          <CardTitle subtitle="To Do List" />
          <CardText>
            <ul className="checklist-todo md-text--secondary">
            <li><input type="checkbox" />Robotics Project #6</li>
            <li><input type="checkbox" />Robotics Assignment #4</li>
            <li><input type="checkbox" />Robotics Project #5</li>
            <li><input type="checkbox" />Robotics Quiz #8</li>
            <li className="checklist-done"><input type="checkbox"  checked disabled/>Robotics Assignment #3</li>
            <li className="checklist-done"><input type="checkbox"  checked disabled/>Robotics Quiz #7</li>
            </ul>
          </CardText>
          </Card>
        </CardText>
      </Card>

      </div>
    );
  }
}
