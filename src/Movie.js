import React, { useState } from "react";
// import "./App.css";
import moment from "moment";
import { connect } from "react-redux";
import { changeInput } from "./redux/actions";
// import Movies from "./App";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const mapStateToProps = (state) => {
  return { id: state.showInputId };
};
function Movie(props) {
  
  const [allMovie, setAllMovie] = useState(props.item);

  const classes = useStyles();
 
  const date = moment(allMovie.release_date).format("MMM Do YY");
  const res = allMovie.original_title.replace(/ /g, "-");
  const url = allMovie.id + "-" + res;
  const [value, setValue] = useState();

  function save() {
    const NewArray = allMovie;
    NewArray.original_title = value;
    setAllMovie(NewArray);
  }

  
  const edited = props.id === props.item.id;

  return (
    <div className="display">
      <div>
        {props.id === props.item.id && (
          <div className="edit">
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.button}
              startIcon={<SaveIcon />}
              onClick={() => {
                save(props.changeInput(null));
              }}
            >
              save{" "}
            </Button>
            <Button
              size="small"
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<DeleteIcon />}
              onClick={() => {
                props.remove();
              }}
            >
              delete{" "}
            </Button>
            <form className={classes.root}>
              <TextField
                id="standard-basic"
                label="Title"
                onChange={(e) => setValue(e.target.value)}
              />
            </form>
          </div>
        )}
      </div>
      <div>
        <a href={`https://www.themoviedb.org/movie/${url}`}>
          {
            <div
              className="img"
              style={{
                background: (() => {
                  return `linear-gradient(rgba(255,255,255,${
                    edited ? 0.99 : 0
                  }), rgba(255,255,255,${
                    edited ? 0.4 : 0
                  })), url("https://image.tmdb.org/t/p/w200/${
                    allMovie.poster_path
                  }")`;
                })(),
              }}
            ></div>
          }
        </a>
        <div className="title">{allMovie.original_title} </div>
        <div className="date"> {date} </div>
      </div>

      {props.id !== props.item.id && (
        <div>
          <button
            onClick={() => {
              props.changeInput(props.item.id);
            }}
          >
            edit
          </button>
        </div>
      )}
    </div>
  );
}
export default connect(mapStateToProps, { changeInput })(Movie);
