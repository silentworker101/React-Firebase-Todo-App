import React, { useState } from "react";
import "./Todo.css";
import {
  List,
  Button,
  ListItemAvatar,
  ListItem,
  ListItemText,
  Modal,
} from "@material-ui/core";
import db from "./firebase";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
// import firebase from 'firebase';

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState();

  const handleopen = () => {
    setOpen(true);
  };

  const updateTodo = () => {
    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );

    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <form>
            <h1>Edit this Todo</h1>
            <input
              placeholder={props.todo.todo}
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <Button
              disabled={!input}
              type="submit"
              onClick={updateTodo}
              variant="contained"
              color="primary"
            >
              Update Todo
            </Button>
          </form>
        </div>
      </Modal>

      <List className="todo_list">
        <ListItem>
          <ListItemAvatar></ListItemAvatar>
          <ListItemText primary={props.todo.todo} secondary="⏰" />
        </ListItem>
        <Button
          onClick={(e) => setOpen(true)}
          variant="outlined"
          color="secondary"
        >
          Edit
        </Button>

        <DeleteForeverIcon
          onClick={(event) =>
            db.collection("todos").doc(props.todo.id).delete()
          }
        />
      </List>
    </>
  );
}

export default Todo;
