import { Button } from "@suid/material";
import { Outlet, Title } from "solid-start";

export default function Home() {
  return (
    <>
      <Title>Hello World</Title>
      <Button variant="contained" onClick={() => console.log("hello")}>
        Hello world
      </Button>
    </>
  );
}
