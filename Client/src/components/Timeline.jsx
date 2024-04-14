import React from "react";
import TimelineSteps from "../utils/TimelineSteps";
function Timeline() {
  return (
    <div>
      <section id="timeline-intro">
        <h1>New York Story</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus esse
          error at impedit eveniet incidunt reiciendis natus nihil odio tempora!
        </p>
      </section>

      <section id="timeline">
        <TimelineSteps position="left" year={1900} />
        <TimelineSteps position="right" year={1945} />
        <TimelineSteps position="left" year={1952} />
        <TimelineSteps position="right" year={2000} />
        <TimelineSteps position="left" year={2001} />
        <TimelineSteps position="right" year={2015} />
      </section>
    </div>
  );
}

export default Timeline;
