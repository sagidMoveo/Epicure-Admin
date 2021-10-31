import React, { useEffect } from "react";
import { apiClient } from "../api";
import { collection } from "../api";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { collectionActions } from "../redux/slice/collection-slice";
import Table from "@mui/material/Table";
import TableRowColumn from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Chef } from "../api";
import { Button } from "@material-ui/core";

const chef = {
  id: "ID",
  name: "Name",
  image: "Image",
  description: "Description",
  resturants: "Resturants",
};

const generateChef = async () => {
  const response = await apiClient.getAllChefs(collection.chefs);
  // console.log(response);
  return response;
};

const ChefTable: React.FC = () => {
  const dispatch = useAppDispatch();
  const collections: Chef[] = useAppSelector(
    (state) => state.collection.collection
  );
  useEffect(() => {
    async function fetch() {
      const res = await generateChef();
      dispatch(collectionActions.setcollection(res));
    }
    fetch();
  }, []);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>{chef.id}</TableCell>
              <TableCell align="left">{chef.name}</TableCell>
              <TableCell align="left">{chef.image}</TableCell>
              <TableCell align="left">{chef.description}</TableCell>
              <TableCell align="left">{chef.resturants}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {collections.map((collection) => (
              <>
                <TableRow
                  key={collection._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {collection._id}
                  </TableCell>
                  <TableCell align="left">{collection.name}</TableCell>
                  <TableCell align="left">{collection.image}</TableCell>
                  <TableCell align="left">{collection.description}</TableCell>
                  <TableCell align="left">{collection.resturants}</TableCell>

                  <TableRowColumn></TableRowColumn>
                </TableRow>
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ChefTable;
