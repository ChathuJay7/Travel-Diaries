import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import ModeOfTravelIcon from "@mui/icons-material/ModeOfTravel";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const linksArr = ["home", "diaries", "Auth"];
const loggedInLinks = ["home", "diaries", "add", "profile","AboutUs"];
const Header = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const [value, setValue] = useState();
  return (
    <AppBar sx={{ bgcolor: "#421d19", position: "sticky" }}>
      <Toolbar>
        <ModeOfTravelIcon sx={{ color: "white" }} />

        <Tabs
          value={value}
          onChange={(e, val) => setValue(val)}
          
          sx={{ ml: "auto", textDecoration: "none", color:"red" }}
        >
          {isLoggedIn
            ? loggedInLinks.map((link) => (
                <Tab
                  LinkComponent={Link}
                  to={`/${link === "home" ? "" : link}`}
                  sx={{
                    textDecoration: "none",
                    color: "#fff700",
                    ":hover": {
                      //textDecoration: "underline",
                      textUnderlineOffset: "18px",
                      color: "white"
                    },
                  }}
                  key={link}
                  label={link}
                />
              ))
            : linksArr.map((link) => (
                <Tab
                  LinkComponent={Link}
                  to={`/${link === "home" ? "" : link}`}
                  sx={{
                    textDecoration: "none",
                    color: "#fff700", 
                    ":hover": {
                      //textDecoration: "underline",
                      textUnderlineOffset: "18x",
                      color: "white"
                    },
                  }}
                  key={link}
                  label={link}
                />
              ))}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
