import React, { useRef, useEffect, useState } from 'react';
import './Results.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Results = (props) => {

  const [isFirstLoad, setFirstLoad] = useState(true);
  const divRef = useRef(null);

  useEffect(() => {
    if (isFirstLoad) {
      divRef.current.scrollIntoView({ behavior: 'smooth' });
      setFirstLoad(false);
    }
  });


  return (<div ref={divRef}>
    <h1>Results </h1>
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Category</TableCell>
            <TableCell align="right">Total Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.categorySums.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.category}
              </TableCell>
              <TableCell align="right">{row.sum}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>);
}

export default Results;
