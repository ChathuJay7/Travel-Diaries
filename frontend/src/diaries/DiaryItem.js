import {
  Alert,
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Snackbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import React, { useState } from "react";

import { Link } from "react-router-dom";
import { postDelete } from "../api-helpers/helpers";
const DiaryItem = ({
  title,
  description,
  image,
  location,
  date,
  id,
  user,
  name,
}) => {
  const [open, setOpen] = useState(false);
  const isLoogedInUser = () => {
    if (localStorage.getItem("userId") === user) {
      return true;
    }
    return false;
  };

  const handleDelete = () => {
    postDelete(id)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    setOpen(true);
  };
  return (
    <Card
      sx={{
        width: "50%",
        height: "auto",
        margin: 1,
        padding: 1,
        display: "flex",
        flexDirection: "column",
        boxShadow: "5px 5px 10px #ccc",
        bgcolor:"black"
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "green" }} aria-label="recipe">
            {name.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" >
            {<EditLocationAltIcon />}
          </IconButton>
        }
        title={location}
        header={location}
        subheader={date}
        color={"yellow"}
        sx={{color:"yellow"}}
      />

      <img height="194" src={image} alt={title} />
      <CardContent>
        <Typography paddingBottom={1} variant="h6" color={"yellow"}>
          {title}
        </Typography>
        <hr />
        <Box paddingTop={1} display="flex">
          <Typography
            width="auto"
            sx={{ mr: 1 }}
            fontWeight={"bold"}
            variant="caption"
            color={"yellow"}
          >
            {name}:
          </Typography>
          <Typography variant="body2" color={"yellow"}>
            {description}
          </Typography>
        </Box>
      </CardContent>

      {isLoogedInUser() && (
        <CardActions sx={{ marginLeft: "auto" }}>
          <IconButton LinkComponent={Link} to={`/post/${id}`} color="warning">
            <ModeEditOutlineIcon />
          </IconButton>
          <IconButton onClick={handleDelete} color="error">
            <DeleteForeverIcon />
          </IconButton>
        </CardActions>
      )}

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          This is a success message!
        </Alert>
      </Snackbar>
    </Card>
  );
};

export default DiaryItem;
