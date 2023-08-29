import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Stack } from "@mui/material";

const TimelineComponent = ({ events, dotsColor }) => {
  return (
    <Timeline
      style={{ margin: 0, padding: 0, height: "100%" }}
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {events &&
        events.map((event) => (
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ background: dotsColor }} />
              <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent>
              <Stack spacing={0}>
                <div>{event.date}</div>
                <div>{event.about}</div>
              </Stack>
            </TimelineContent>
          </TimelineItem>
        ))}
    </Timeline>
  );
};

export default TimelineComponent;
