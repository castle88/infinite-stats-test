import {
  Table,
  TableContainer,
  Paper,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

export default function ProfileStatsList({ stats }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableBody>
          {stats.map((stat) => (
            <TableRow
              key={stat.title + stat.stat}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {stat.title}
              </TableCell>
              <TableCell align="center">{stat.stat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
