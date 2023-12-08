import { Grid } from "@suid/material";
import { JSX } from "solid-js";
import COLORS from "~/constants/colors";
import LeftSideBar from "./leftSideBar";

type AppLayoutPropsType = {
  children: JSX.Element;
};

function AppLayout({ children }: AppLayoutPropsType) {
  return (
    <main>
      <Grid container spacing={2} height={"100vh"} marginTop={0}>
        <Grid
          item
          xs={3}
          md={3}
          lg={3}
          xl={2}
          backgroundColor={COLORS.catalina_blue}
          height={"auto"}
          paddingTop={"0 !important"}
        >
          <LeftSideBar />
        </Grid>
        <Grid
          item
          xs={9}
          md={9}
          lg={9}
          xl={10}
          backgroundColor={COLORS.bright_gray}
          height={"auto"}
          padding={"0 !important"}
        >
          {children}
        </Grid>
      </Grid>
    </main>
  );
}

export default AppLayout;
