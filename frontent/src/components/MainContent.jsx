import React from "react";

function MainContent(){
    const date = new Date(2018, 6, 31, 18)
    const hours = date.getHours()

    let timeOfDay
    const styles = { fontSize: 30}

    if (hours < 12) {
        timeOfDay = "Morning"
        styles.color = "#FF0000"
    } else if (hours >= 12 && hours < 17){
        timeOfDay = "Afternoon"
        styles.color = "#FFA500"
    } else {
        timeOfDay = "Night"
        styles.color = "#0000FF"
    }
    return(
        // <h1 style={{color: "#FFFFFF"}}>good {timeOfDay}! </h1>
        <h1 style={styles}>good {timeOfDay}! </h1>
    )
}

export default MainContent;