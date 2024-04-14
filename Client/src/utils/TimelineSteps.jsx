import React from "react";
function TimelineSteps({ position, year }) {
  const StepPosition = () => {
    if (position === "left") {
      return (
        <>
          <div className="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi,
            minus!
          </div>
          <div className="line">
            <div className="round"></div>
          </div>
          <div className="time">
            <div className="year">{year}</div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="time">
            <div className="year">{year}</div>
          </div>
          <div className="line">
            <div className="round"></div>
          </div>
          <div className="text">
            LLorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi,
            minus!
          </div>
        </>
      );
    }
  };
  return (
    <>
      <section className={`timeline-item timeline-text-${position}`}>
        <StepPosition />
      </section>
    </>
  );
}

export default TimelineSteps;
