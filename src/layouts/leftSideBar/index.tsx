import { Component } from "solid-js";
import style from "./index.module.scss";
import { Box, Typography } from "@suid/material";
import Menu from "./menu";

const LeftSideBar: Component<{}> = (props) => {
  return (
    <Box component={"div"} class={style.leftSideBar}>
      <Box component={"div"} class={style.brand}>
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          fontWeight={"bold"}
          marginBottom={0}
        >
          LMS
        </Typography>
        <Typography
          variant="subtitle1"
          fontStyle="italic"
          gutterBottom
          component="div"
        >
          Learniong Management System
        </Typography>
      </Box>
      <Menu />
    </Box>
  );
};

export default LeftSideBar;
