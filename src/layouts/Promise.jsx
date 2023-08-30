import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";
import CenteredContainer from "../components/CenteredContainer";
import "../styles/Promise.layout.css";

const Layout = () => {
  return (
    <Stack spacing={8}>
      <CenteredContainer>
        <Outlet />
      </CenteredContainer>

      <CenteredContainer backgroundColor="#f3f5f8">
        <Stack className="promise-footer-section" spacing={2}>
          <h1 className="promise-footer-section-title">
            Tracking Hon. Frank Annoh-Dompreh
          </h1>
          <Stack spacing={2}>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              necessitatibus quam non animi eveniet fuga nesciunt perspiciatis
              tenetur labore quaerat ratione fugiat. Tenetur adipisci maxime
              numquam, magni odio quasi nisi necessitatibus eum blanditiis
              facere! Nisi unde sunt libero non quam repellat veritatis!
              Delectus, quae libero! Consectetur voluptatibus laudantium quis.
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              nostrum eaque fugit pariatur soluta id numquam sequi voluptas cum
              at! Deserunt illo ullam in amet quisquam quas atque, sit et,
              numquam, magni odio quasi nisi necessitatibus eum blanditiis
              facere! Nisi unde sunt libero non quam repellat veritatis!
              Delectus, quae libero! Consectetur voluptatibus laudantium quis.
            </div>
            <div>
              at! Deserunt illo ullam in amet quisquam quas atque, sit et,
              itaque. Velit ex, repudiandae culpa maiores impedit, rerum
              numquam, magni odio quasi nisi necessitatibus eum blanditiis
              facere! Nisi unde sunt libero non quam repellat veritatis!
              Delectus, quae libero! Consectetur voluptatibus laudantium quis.
            </div>
          </Stack>
        </Stack>
      </CenteredContainer>
    </Stack>
  );
};

export default Layout;
