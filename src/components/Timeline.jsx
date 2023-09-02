import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Lightbox from "./Lightbox";
import "../styles/Timelines.css";

const TimelineComponent = ({ events, theme }) => {
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
        events.map((event, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot sx={{ background: theme }} />
              <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent>
              <div className="timline-action-points">
                <div>{event.date}</div>
                <div>{event.about}</div>
                <div className="timeline-view-gallery-text">
                  <Lightbox theme={theme} gallery={event.gallery} />
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
    </Timeline>
  );
};

export default TimelineComponent;
