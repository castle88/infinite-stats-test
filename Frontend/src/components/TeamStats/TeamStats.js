import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function TeamStats({ eagle, cobra }) {
  return (
    <TableContainer
      component={Paper}
      sx={{ bgcolor: "rgba(255, 255, 255, 0.08)" }}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              align="center"
              sx={{ color: `${eagle.outcome === "win" ? "green" : "red"}` }}
            >
              Eagle
            </TableCell>
            <TableCell align="center">Category</TableCell>
            <TableCell
              align="center"
              sx={{ color: `${cobra.outcome === "win" ? "green" : "red"}` }}
            >
              Cobra
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {eagle.stats.map((stat, index) => (
            <TableRow
              key={stat.title + index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                {stat.stat}
              </TableCell>
              <TableCell align="center" sx={{ color: "gray" }}>
                {stat.title}
              </TableCell>
              <TableCell align="center">{cobra.stats[index].stat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
