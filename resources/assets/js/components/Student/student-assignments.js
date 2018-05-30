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
        SVGIcon } from 'react-md';

export default class StudentAssignments extends Component {
  render() {
    return (
      <div className="md-grid">
        <Card className="cards__example md-cell md-cell--6 md-cell--8-tablet">
          <CardTitle title="Assignments" subtitle="" />
          <CardText>
            <DataTable baseId="table-with-interactions">
            <TableHeader>
              <TableRow>
                <TableColumn>Subject</TableColumn>
                <TableColumn>Topic</TableColumn>
                <TableColumn>Deadline</TableColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                  <TableColumn>Math</TableColumn>
                  <TableColumn>Sets</TableColumn>
                  <TableColumn>May 2, 2018</TableColumn>
                </TableRow>
                <TableRow>
                  <TableColumn>Science</TableColumn>
                  <TableColumn>BioChemistry</TableColumn>
                  <TableColumn>May 3, 2018</TableColumn>
                </TableRow>
                <TableRow>
                  <TableColumn>Homeroom</TableColumn>
                  <TableColumn>Homeroom</TableColumn>
                  <TableColumn>May 1, 2018</TableColumn>
                </TableRow>
                <TableRow>
                  <TableColumn>Literature</TableColumn>
                  <TableColumn>Stephen King</TableColumn>
                  <TableColumn>May 12, 2018</TableColumn>
                </TableRow>
                <TableRow>
                  <TableColumn>Philosophy</TableColumn>
                  <TableColumn>Existentialism</TableColumn>
                  <TableColumn>? 2, 2018</TableColumn>
                </TableRow>
            </TableBody>
            </DataTable>
          </CardText>
        </Card>
        <Card className="cards__example md-cell md-cell--6 md-cell--8-tablet">
      <CardTitle title="Submit Assignments" subtitle="" />
      <center><FileInput id="image-input-3" accept="image/*" name="images" primary /></center>
    </Card>
      </div>
    );
  }
}
