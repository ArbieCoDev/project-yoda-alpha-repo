import React, { Component } from 'react';
import { Card, 
          CardTitle, 
          CardText,
          DataTable,
          TableHeader,
          TableBody,
          TableRow,
          TableColumn, } from 'react-md';


export default class StudentCourses extends Component {
  render() {
    return (
      <div className="md-grid">
        <Card className="cards__example md-cell md-cell--4md-cell--8-tablet">
          <CardTitle title="Science" subtitle="By: Teacher A." />
          <CardText>
              Lesson: Basics of Chemistry
          </CardText>
        </Card>
        <Card className="cards__example md-cell md-cell--4md-cell--8-tablet">
          <CardTitle title="Math" subtitle="By: Teacher B." />
          <CardText>
              Lesson: Statistics 
          </CardText>
        </Card>
        <Card className="cards__example md-cell md-cell--4md-cell--8-tablet">
          <CardTitle title="Games" subtitle="By: Teacher B." />
          <CardText>
              Lesson: Kerbal Space Program
          </CardText>
        </Card>
        <Card className="cards__example md-cell md-cell--4md-cell--8-tablet">
          <CardTitle title="Homeroom" subtitle="By: Teacher A." />
          <CardText>
              Lesson: Homeroom
          </CardText>
        </Card>
        <Card className="cards__example md-cell md-cell--4md-cell--8-tablet">
          <CardTitle title="Science" subtitle="By: Teacher C." />
          <CardText>
              Lesson: Geology - Rocks and Stuff
          </CardText>
        </Card>
        <Card className="cards__example md-cell md-cell--4md-cell--8-tablet">
          <CardTitle title="Literature" subtitle="By: Teacher A." />
          <CardText>
              Lesson: Hamlet - Chapter 1
          </CardText>
        </Card>
        
      </div>
    );
  }
}
