import "../styles/Footer.css";
import CenteredContainer from "../components/CenteredContainer";
import { Box, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const FooterSection = ({ title, children }) => {
  return (
    <Stack className="footer-section" spacing={2}>
      <div style={{ fontSize: "larger" }}>{title}</div>
      <div style={{ color: "GrayText" }}>{children}</div>
    </Stack>
  );
};

const Footer = () => {
  const navigate = useNavigate();
  const openMail = () => {
    window.open(`mailto://`);
  };

  return (
    <CenteredContainer backgroundColor="var(--third-text-color)">
      <div className="footer-component">
        <Box color="#fff" className="footer-sections">
          <FooterSection
            title={
              <div>
                <span style={{ color: "var(--primary-theme)" }}>Promise</span>{" "}
                Tracker
              </div>
            }
          >
            A custom application to track project delivery and implementation,
            showcase the MP's special initiatives, intervention, and
            achievements
          </FooterSection>
          <FooterSection title="Quick Links">
            <ul>
              <li onClick={() => navigate("/")}>Home</li>
              <li onClick={() => navigate("/promises")}>Track Promises</li>
            </ul>
          </FooterSection>
          <FooterSection title="Fact Check">
            Is there a promise you’d like to see tracked or fact-checked? Send
            an email to{" "}
            <span onClick={openMail} className="footer-important-link">
              email@email.com
            </span>
          </FooterSection>
        </Box>

        <Box className="footer-copyright">
          Copyright@{new Date().getFullYear()}. All rights reserved | Developed
          by Mark Zoiku
        </Box>
      </div>
    </CenteredContainer>
  );
};

export default Footer;
