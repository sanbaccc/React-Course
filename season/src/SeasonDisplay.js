import React from "react"
import "./SeasonDisplay.css"

const seasonConfig = {
    Summer: {
        text: "Lets hit the beach!",
        icon: "sun"
    },
    Winter: {
        text: "Burr, it is chilly",
        icon: "snowflake"
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? "Summer" : "Winter";
    } else {
        return lat > 0 ? "Winter" : "Summer";
    }
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, icon } = seasonConfig[season]
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${icon} icon`} />
            <h1> {text} </h1>
            <i className={`icon-right massive ${icon} icon`} />
        </div>
    );
};

export default SeasonDisplay;