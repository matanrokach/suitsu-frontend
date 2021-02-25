import React from 'react';
import MUITable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const Table = ({ header, data }) => {
  return (
    <TableContainer component={Paper}>
      <MUITable>
        {header ? (
          <TableHead>
            <TableRow>
              {header.map((h) => (
                <TableCell>{h}</TableCell>
              ))}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>
              {Object.keys(row).map((key) => (
                <TableCell component='th' scope='row'>
                  {row[key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </MUITable>
    </TableContainer>
  );
};

export default Table;
