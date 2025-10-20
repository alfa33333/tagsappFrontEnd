import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function snakeToTitle(input) {
  if (input == null) return '';
  // replace underscores with spaces, lowercase, then capitalize each word
  const s = String(input).replace(/_/g, ' ').toLowerCase();
  return s.replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function BasicTable({ columns, rowstoDisplay }) {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column, index) => (
              <TableCell key={index}>{snakeToTitle(column)}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowstoDisplay.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {columns.map((column, index) => (
              <TableCell key={index}>{row[column.toLowerCase()]}</TableCell>
            ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}