import React, { useEffect, useState } from "react";
import axios from "axios";

export default function NasaPage() {

    const [dailyData, setDailyData] = useState([]);

    const effectFn = () => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=xKkue9hehQ8u0qeYqF9dFZPov8qynnnbGfkxg3ue&date=2020-09-20`)
        .then((res) => {
            setDailyData(res.data)
            console.log(res);
        })
    }
    useEffect(effectFn, []);
    console.log(dailyData);

}
