import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const aboutus = () => {
  return (
      <Box width="100%" height="30%" display={"flex"} flexDirection="column" sx={{bgcolor:"#ffdad6" }}>
        <Typography
          fontFamily={"quicksand"}
          textAlign={"center"}
          variant="h4"
          padding={4}
          sx={{marginTop: "45px"}}
        >
          Hi There I am Chathura Jeewantha
        </Typography>
        <Box width="100%" height="30%" display={"flex"} flexDirection="row">
            <img className="creator" src="/Creator.jpeg" alt="Road" />
        <Typography
          fontFamily={"quicksand"}
          
          variant="h6"
          padding={4}
          
        >
            I am a Computer Science and Technology undergraduate at Uva Wellassa University of Sri Lanka. Passionate about Full-Stack Development, Back-End Development & Database Management.
            I have good experience in developing web based software platforms with API backends. I am a self-learner, good team player and willing to take others opinions into consideration.
            Always looking forward to learn new technologies and meet new people to work with.
        </Typography>
        </Box>
        <Box margin="auto">
          <Button variant="outlined" sx={{ mr: 2 }}>
            Share Your Story
          </Button>
          <Button
            LinkComponent={Link}
            to="/diaries"
            variant="contained"
            sx={{ ml: 2 }}
          >
            View Diaries
          </Button>
        </Box>
      </Box>

  )
}

export default aboutus
