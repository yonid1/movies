import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Search(props) {
  const [search, setSearch] = useState("");
  const classes = useStyles();
  function searchMovie(e) {
    const test = props.myItems?.filter((item) => {
      
      return item.original_title
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    props.setItems(test);
   
    setSearch(e.target.value);
  }
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="search"
          variant="outlined"
          name=""
          type="text"
          value={search}
          onChange={(e) => {
            searchMovie(e);
          }}
        />
      </form>
    </div>
  );
}
