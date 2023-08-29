import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";
import CenteredContainer from "../components/CenteredContainer";

const Layout = () => {
  return (
    <Stack spacing={8}>
      <CenteredContainer>
        <Outlet />
      </CenteredContainer>

      <CenteredContainer backgroundColor="#efefef">
        <Stack paddingY={5} spacing={2}>
          <h1 style={{ color: "var(--third-text-color)" }}>
            Delivering Promises
          </h1>
          <Stack spacing={1}>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              cum, ad vero harum corporis delectus quae beatae rem obcaecati
              officia corrupti architecto ipsam? Error blanditiis dolores rem
              distinctio, atque fuga saepe amet nam aliquid earum sequi tenetur
              eos! Doloribus beatae rem odio, quia aperiam reiciendis harum ipsa
              suscipit iure omnis illum molestiae facere sed!
            </div>
            <div>
              iure nulla sapiente, modi laborum, ullam earum sit aspernatur
              adipisci eius minus. Perspiciatis, modi. Sapiente vitae aspernatur
              fugit voluptatum commodi, tempora reiciendis quidem perferendis
              quia ullam qui magni odio impedit totam rem adipisci voluptate
              corrupti
            </div>
          </Stack>
        </Stack>
      </CenteredContainer>
    </Stack>
  );
};

export default Layout;
