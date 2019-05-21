import React, {useState, useEffect} from 'react'
import * as moment from 'moment';
import "./clock.scss";

export default function ClockComponent(props) {

    useEffect(() => {
        setInterval(() => {
            setTime(generateTimeObject());
        }, 1000)
    }, []);

    function generateTimeObject() {
        let currentMoment = moment();

        let time = {
            hour: currentMoment.hour(),
            minute: currentMoment.format('mm'),
            second: currentMoment.format('ss'),
            day: currentMoment.format('dddd'),
            month: currentMoment.format('MMMM'),
            date: currentMoment.format('Do'),
            meridiem: currentMoment.format('A'),
        };

        return time;
    }


    const [time, setTime] = useState(generateTimeObject());

    return (
        <div className="clockWrapper">
            {time.hour}:{time.minute}:{time.second}{time.meridiem} {time.day} {time.date} {time.month}
        </div>
    )
}
