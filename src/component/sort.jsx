import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));
export default function Sort(props) {
  const classes = useStyles();

  function mySort(e) {
    if (e.target.value == 1) {
      const newItems = props.items
        .sort((a, b) => {
          if (a.original_title < b.original_title) {
            return -1;
          }
          if (a.original_title > b.original_title) {
            return 1;
          }
          return 0;
        })
        .slice();
      props.setItems(newItems);
    }
    if (e.target.value == 2) {
      const newItems = props.items
        .sort((a, b) => {
          if (a.release_date < b.release_date) {
            return -1;
          }
          if (a.release_date > b.release_date) {
            return 1;
          }
          return 0;
        })
        .slice();
      props.setItems(newItems);
    }

    console.log("sort", e.target.value);
  }
  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="grouped-native-select">Sort</InputLabel>
      <Select
        native
        defaultValue=""
        id="grouped-native-select"
        onClick={(e) => {
          mySort(e);
        }}
      >
        <option value="0">no sort </option>
        <option value="1">Sort By Name</option>
        <option value="2">Sort By Date </option>
      </Select>
    </FormControl>
  );
}
