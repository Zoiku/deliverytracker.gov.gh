import "../styles/Promises.css";
import { Avatar, Stack } from "@mui/material";
import CenteredContainer from "../components/CenteredContainer";
import client from "../assets/mp/obama.png";

const MainSection = ({ title, titleHelper, children, centeredTitle }) => (
  <Stack spacing={2}>
    {title && (
      <Stack sx={centeredTitle ? { textAlign: "center" } : {}}>
        <div>{title}</div>
        {titleHelper && <div>{titleHelper}</div>}
      </Stack>
    )}
    <div>{children}</div>
  </Stack>
);

const PromiseSummary = ({ type, children }) => (
  <Stack
    direction="row"
    justifyContent="space-between"
    style={{ width: "40%" }}
    spacing={1}
  >
    <Stack sx={{ width: "100%" }} spacing={5}>
      <div style={{ color: "GrayText" }}>{type}</div>
      <Stack direction="row" justifyContent="space-between">
        {children}
      </Stack>
    </Stack>
  </Stack>
);

const PromiseSummaryItem = ({ title, value }) => (
  <Stack>
    <div style={{ fontSize: "xxx-large", fontWeight: 600 }}>{value}</div>
    <div style={{ color: "GrayText" }}>{title}</div>
  </Stack>
);

const PromiseSummaryItems = ({ leftElement, rightElement }) => (
  <Stack sx={{ width: "100%" }} direction="row" justifyContent="space-between">
    {leftElement}
    {rightElement}
  </Stack>
);

const ClientProfile = () => (
  <Stack>
    <Avatar
      variant="square"
      sx={{ width: 350, height: 350 }}
      src={client}
      alt=""
    />
  </Stack>
);

const Promises = () => {
  return (
    <main className="promises-page">
      <CenteredContainer marginated>
        <Stack spacing={5}>
          <MainSection>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={15}
            >
              <ClientProfile />
              <PromiseSummaryItems
                leftElement={
                  <PromiseSummary type="Positive">
                    <PromiseSummaryItem title="In Progress" value={23} />
                    <PromiseSummaryItem title="Scheduled" value={5} />
                    <PromiseSummaryItem title="Completed" value={12} />
                  </PromiseSummary>
                }
                rightElement={
                  <PromiseSummary type="Negative">
                    <PromiseSummaryItem title="Stalled" value={22} />
                    <PromiseSummaryItem title="Stopped" value={7} />
                    <PromiseSummaryItem title="Defered" value={23} />
                  </PromiseSummary>
                }
              />
            </Stack>
          </MainSection>
        </Stack>
      </CenteredContainer>
    </main>
  );
};

export default Promises;
