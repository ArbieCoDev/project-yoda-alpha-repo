import React, { Component } from 'react';
import { Card, 
        CardTitle, 
        CardText,
        DataTable,
        TableHeader,
        TableBody,
        TableRow,
        TableColumn, } from 'react-md';

export default class StudentQuizzes extends Component {
  render() {
    return (
      <div className="md-grid">
        <Card className="cards__example md-cell md-cell--6 md-cell--8-tablet">
          <CardTitle title="Quizzes" subtitle="" />
          <CardText>
            <DataTable baseId="table-with-interactions">
            <TableHeader>
              <TableRow>
                <TableColumn>Subject</TableColumn>
                <TableColumn>Topic</TableColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                  <TableColumn>Math</TableColumn>
                  <TableColumn>Sets</TableColumn>
                </TableRow>
                <TableRow>
                  <TableColumn>Science</TableColumn>
                  <TableColumn>BioChemistry</TableColumn>
                </TableRow>
                <TableRow>
                  <TableColumn>Homeroom</TableColumn>
                  <TableColumn>Homeroom</TableColumn>
                </TableRow>
                <TableRow>
                  <TableColumn>Literature</TableColumn>
                  <TableColumn>Stephen King</TableColumn>
                </TableRow>
                <TableRow>
                  <TableColumn>Philosophy</TableColumn>
                  <TableColumn>Existentialism</TableColumn>
                </TableRow>
            </TableBody>
            </DataTable>
          </CardText>
        </Card>
        <Card className="cards__example md-cell md-cell--6 md-cell--8-tablet">
      <CardTitle title="Placeholder" subtitle="" />
      <CardText>
        <p>
          Some functions/Text
        </p>
      </CardText>
    </Card>
      </div>
    );
  }
}
