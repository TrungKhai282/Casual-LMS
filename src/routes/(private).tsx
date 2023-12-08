import { Outlet } from "solid-start";
import AppLayout from "~/layouts/appLayout";

export default function PrivateLayout() {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}
