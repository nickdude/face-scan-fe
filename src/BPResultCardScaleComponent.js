import React, { useState } from "react";

const BloodPressureResultCardScaleComponent = (props) => {
  const [scaleFontGreyColor, setScaleFontGreyColor] = useState("#6e7786");

  const [scaleLableList, setScaleLabelList] = useState([
    "LOW",
    "NORMAL",
    "HIGH",
  ]);

  const [primaryGreen, setPrimaryGreen] = useState("#1cae81");


  var selectedSectionIndex = 0;

  return (
    <>
      <div
        style={{
          display: "flex",
          border: "0px solid blue",
          flexDirection: "column",
          width: "60vw",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            border: "0px solid red",
            flexDirection: "row",
            textAlign: "center",
            marginBottom: "5px",
          }}
        >
          <div
            style={{
              flex: 1,
              border: "0px solid yellow",
              fontSize: 10,
              color:
                props.selectedSectionIndex == 0 ? primaryGreen : scaleFontGreyColor,
            }}
          >
            LOW
          </div>
          <div
            style={{
              flex: 1,
              border: "0px solid yellow",
              fontSize: 10,
              color:
                props.selectedSectionIndex == 1 ? primaryGreen : scaleFontGreyColor,
            }}
          >
            NORMAL
          </div>

          <div
            style={{
              flex: 1,
              border: "0px solid yellow",
              fontSize: 10,
              color:
                props.selectedSectionIndex == 2 ? primaryGreen : scaleFontGreyColor,
            }}
          >
            ABV. NORM.
          </div>

          <div
            style={{
              flex: 1,
              border: "0px solid yellow",
              fontSize: 10,
              color:
                props.selectedSectionIndex == 3 ? primaryGreen : scaleFontGreyColor,
            }}
          >
            HIGH
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", border: "0px solid red" }}>
          <div
            style={{
              flex: 1,
              border: "0px solid yellow",
              backgroundColor:
                props.selectedSectionIndex == 0 ? primaryGreen : "grey",
              height: 5,
            }}
          />
          <div
            style={{
              flex: 1,
              border: "0px solid blue",
              backgroundColor:
                props.selectedSectionIndex == 1 ? primaryGreen : "grey",
            }}
          />
          <div
            style={{
              flex: 1,
              border: "0px solid red",
              backgroundColor:
                props.selectedSectionIndex == 2 ? primaryGreen : "grey",
            }}
          />

<div
            style={{
              flex: 1,
              border: "0px solid red",
              backgroundColor:
                props.selectedSectionIndex == 3 ? primaryGreen : "grey",
            }}
          />
        </div>

        <div style={{ flex: 1, display: "flex", border: "0px solid red" }}>
          <div
            style={{
              flex: 1,
              border: "0px solid red",
              fontSize: 10,
              color: scaleFontGreyColor,
            }}
          >
            {props.scaleValueRangeList[0]}
          </div>
          <div
            style={{
              flex: 1,
              border: "0px solid red",
              fontSize: 10,
              color: scaleFontGreyColor,
            }}
          >
            {props.scaleValueRangeList[1]}
          </div>
          <div
            style={{
              flex: 1,
              border: "0px solid red",
              fontSize: 10,
              color: scaleFontGreyColor,
            }}
          >
            {props.scaleValueRangeList[2]}
          </div>
          <div
            style={{
              flex: 1,
              border: "0px solid red",
              fontSize: 10,
              color: scaleFontGreyColor,
            }}
          >
            {props.scaleValueRangeList[3]}
          </div>
          <div
            style={{
              flex: 0.1,
              border: "0px solid red",
              fontSize: 10,
              color: scaleFontGreyColor,
            }}
          >
            {props.scaleValueRangeList[4]}
          </div>
        </div>
      </div>
    </>
  );
};

export default BloodPressureResultCardScaleComponent;
