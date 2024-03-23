import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ResultCardScaleComponent from "./ResultCardScaleComponent";

const ResultCardComponent = (props) => {

  return (
    <>
      <div
        className="container shadow"
        style={{
          display: "flex",
          border: "0px solid red",
          borderRadius: 20,
          minHeight: 120,
          width: "90vw",
          marginTop: 10,
          flexDirection: "column",
        }}
      >
        {/* row1 */}
        <div
          style={{ display: "flex", border: "0px solid red", fontWeight: 450, marginTop: '2vh', marginLeft: '2vw'}}
        >
          {props.cardMetricTitle}
        </div>

        {/* row2 */}
        <div
          style={{ display: "flex", border: "0px solid red", fontWeight: 450 , marginTop: '2vh', marginLeft: '2vw', marginBottom: '4vh'}}
        >
          {/* column1  */}

          <div
            style={{
              display: "flex",
              flex: 1,
              border: "0px solid red",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", border: "0px solid green",  color: '#1cae81', fontSize:23}}>{props.cardMetricValue}</div>
            <div style={{ display: "flex", border: "0px solid green" , color: '#767d93', fontSize: 12}}>{props.cardMetricUnit}</div>
          </div>

          {/* column2 */}

          <div
            style={{
              display: "flex",
              flex: 4,
              border: "0px solid red",
              justifyContent: "center",
              alignItems:'center'
              
            }}
          >
            <ResultCardScaleComponent scaleValueRangeList={props.scaleValueRangeList}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultCardComponent;
