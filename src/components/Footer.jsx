import "../styles/Footer.css";
import CenteredContainer from "../components/CenteredContainer";
import { Box, Stack } from "@mui/material";

const FooterSection = ({ title, children }) => {
  return (
    <Stack className="footer-section" spacing={2}>
      <div style={{ fontSize: "larger" }}>{title}</div>
      <div style={{ color: "GrayText" }}>{children}</div>
    </Stack>
  );
};

const Footer = () => {
  return (
    <CenteredContainer backgroundColor="var(--third-text-color)">
      <div className="footer-component">
        <Box color="#fff" className="footer-sections">
          <FooterSection
            title={
              <div>
                <span style={{ color: "var(--primary-theme-light)" }}>
                  Promise
                </span>{" "}
                Tracker
              </div>
            }
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea facilis
            repellendus tempora est repudiandae doloribus, consectetur labore
            accusamus beatae sed.
          </FooterSection>
          <FooterSection title="Quick Links">
            <ul>
              <li>Home</li>
              <li>Track Promises</li>
            </ul>
          </FooterSection>
          <FooterSection title="Newsletter">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea facilis
            repellendus tempora est repudiandae doloribus, consectetur labore
            accusamus beatae sed.
          </FooterSection>
        </Box>

        <Box className="footer-copyright">
          Copyright@{new Date().getFullYear()}. All Rights Reserved by copyright
        </Box>
      </div>
    </CenteredContainer>
  );
};

export default Footer;
