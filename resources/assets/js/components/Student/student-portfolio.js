import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'react-md';

export default class StudentPortfolio extends Component {
  render() {
    return (
  <div className="md-grid">
    <Card className="cards__example md-cell md-cell--12 md-cell--8-tablet ">
    <CardTitle title="September Highlights" className="portfolio-1" />
      <CardText>
      <p className="portfolio-draft">
        [click to copy / insert a good Learning Log here from Homeroom (embed from Yoda)]
      </p>
      <p className="portfolio-draft">
       [click to copy / insert a good project from Robotics course (embed from Yoda)]
      </p>
      <p className="portfolio-draft">
      [click to upload a photo / document representing something you enjoyed from a Core class (i.e Math, English, History, Science)] 
      </p>
      <p className="portfolio-draft">
      [click to upload a photo / document representing something you enjoyed from a Core class (i.e Math, English, History, Science)]      </p>
      <p className="portfolio-draft">
       [click to upload a photo / document representing something you enjoyed from an elective class (i.e Tech, Entrepreneurship,Art, Music, P.E., etc.)]
      </p>
      </CardText>
    </Card>
    
  </div>
    );
  }
}
