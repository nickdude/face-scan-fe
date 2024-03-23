import { useState, useEffect } from "react";
import React from "react";
import { ArrowBackIosRounded } from "@mui/icons-material";
import "bootstrap/dist/css/bootstrap.min.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ResultCardComponent from "./ResultCardComponent";
import BloodPressureResultCardComponent from "./BPResultCardComponent";

const ResultsPage = () => {
  const percentage = 66;

  const [heartRate, setHeartRate] = useState(0);
  const [respirationRate, setRespirationRate] = useState(0);
  const [oxygenSaturation, setOxygenSaturation] = useState(0);
  const [sysBP, setSysBP] = useState(0);
  const [diaBP, setDiaBP] = useState(0);

  useEffect(() => {
    const urlSearchString = window.location.search;
    const params = new URLSearchParams(urlSearchString);

    
    setHeartRate(params.get("hr"));
    setRespirationRate(params.get("rr"));
    setOxygenSaturation(params.get("spo2"));
    setSysBP(params.get("sysbp"));
    setDiaBP(params.get("diabp"));
  }, []);

  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          border: "0px solid red",
          flexDirection: "column",
        }}
      >
        <div
          className="container"
          id="results-top-bar-row"
          style={{
            display: "flex",
            border: "0px solid red",
            flexDirection: "row",
            marginTop: "2vh",
          }}
        >
          <div
            style={{
              display: "flex",
              flex: 1,
              border: "0px solid green",
              marginLeft: "1vw",
              marginRight: "1vw",
            }}
          >
            <ArrowBackIosRounded />
          </div>
          <div
            style={{
              display: "flex",
              flex: 1,
              border: "0px solid green",
              marginLeft: "1vw",
              marginRight: "1vw",
              justifyContent: "center",
              fontWeight: "bolder",
            }}
          >
            Your Report
          </div>
          <div
            style={{
              display: "flex",
              flex: 1,
              border: "0px solid green",
              justifyContent: "end",
              fontWeight: 450,
              marginLeft: "1vw",
              marginRight: "1vw",
              color: "#fc9434",
              fontSize: 10,
              alignItems: "center",
            }}
          >
            Done
          </div>
        </div>

        {/*  */}

        <div
          id="wbscore-container"
          className="container"
          style={{
            display: "flex",
            border: "0px solid red",
            marginTop: "2vh",
            minHeight: "10vh",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            className="container"
            style={{
              display: "flex",
              border: "0px solid green",
              justifyContent: "center",
              marginTop: 20,
              height: 155,
              width: 155,
            }}
          >
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              strokeWidth={6}
              styles={buildStyles({
                pathTransitionDuration: 0.5,
                // Colors
                pathColor: `rgba(28,174,129, ${percentage / 100})`,
                textColor: "#1cae81",
                backgroundColor: "#1cae81",
              })}
            />
          </div>

          <div
            className="container"
            style={{
              display: "flex",
              border: "0px solid green",
              justifyContent: "center",
              marginTop: 15,
              fontSize: 17,
              fontWeight: 450,
            }}
          >
            <div>Wellbeing Score</div>
          </div>

          <div
            className="container"
            style={{
              display: "flex",
              border: "0px solid green",
              justifyContent: "center",
              color: "#1cae81",
            }}
          >
            <div style={{ fontWeight: "450" }}>EXCELLENT</div>
          </div>
        </div>

        <div
          id="result-cards-container"
          style={{
            display: "flex",
            border: "0px solid red",
            flexDirection: "column",
          }}
        >
          <ResultCardComponent
            cardMetricTitle={"Heart Rate"}
            cardMetricValue={heartRate}
            cardMetricUnit={"BPM"}
            scaleValueRangeList={["30", "60", "101", "220"]}
          />
          <ResultCardComponent
            cardMetricTitle={"Respiration Rate"}
            cardMetricValue={respirationRate}
            cardMetricUnit={"breaths/min"}
            scaleValueRangeList={["6", "12", "21", "30"]}
          />
          <ResultCardComponent
            cardMetricTitle={"Oxygen Saturation"}
            cardMetricValue={oxygenSaturation}
            cardMetricUnit={"%"}
            scaleValueRangeList={["80", "91", "95", "100"]}
          />

          <BloodPressureResultCardComponent
            cardMetricTitle={"Blood Pressure"}
            systolicCardMetricValue={sysBP}
            diastolicCardMetricValue={diaBP}
            cardMetricUnit={"mmHg"}
            systolicScaleValueRangeList={[50, 100, 120, 139, 220]}
            diastolicScaleValueRangeList={[30, 70, 80, 90, 120]}
            systolicSelectedSectionIndex={1}
            diastolicSelectedSectionIndex={2}
          />
        </div>
      </div>
    </>
  );
};

export default ResultsPage;
