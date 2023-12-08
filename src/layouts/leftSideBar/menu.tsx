import { Box, Stack } from "@suid/material";
import { Accessor, Component, For, JSX } from "solid-js";
import style from "./index.module.scss";
import COLORS from "~/constants/colors";
import { AnalyticsOutlined, DashboardOutlined } from "@suid/icons-material";
import { useLocation } from "solid-start";

type MenuItemsType = {
  icon: JSX.Element;
  label: string;
  href: string;
};

const menuItems: MenuItemsType[] = [
  {
    icon: <DashboardOutlined />,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: <AnalyticsOutlined />,
    label: "Grades",
    href: "/",
  },
];

type MenuItemPropsType = {
  item: MenuItemsType;
  index: Accessor<number>;
};

const MenuItem = ({ item, index }: MenuItemPropsType) => {
  const location = useLocation();
  return (
    <Box
      component={"div"}
      displayRaw="flex"
      alignItems="center"
      gap={1}
      paddingY={2}
      paddingX={4}
      classList={{
        [style.itemMenuActive]: location.pathname === item.href,
      }}
      color={COLORS.silver}
    >
      {item.icon}
      {item.label}
    </Box>
  );
};

const Menu: Component<{}> = (props) => {
  return (
    <Box component={"div"}>
      <Stack spacing={2}>
        <For each={menuItems} fallback={<></>}>
          {(item, index) => <MenuItem item={item} index={index} />}
        </For>
      </Stack>
    </Box>
  );
};

export default Menu;
