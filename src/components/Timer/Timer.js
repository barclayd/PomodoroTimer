import React, { Component } from 'react';
import moment from 'moment';

import TimerHeader from '../TimerHeader/TimerHeader';
import TimerDisplay from "../TimerDisplay/TimerDisplay";
import TimerButton from "../TimerButton/TimerButtomn";
import TimerConfig from "../TimerConfig/TimerConfig";

class Timer extends Component {

    constructor() {
        super();

        this.state = {
            currentTime: moment.duration(25, 'minutes'),
            baseTime: moment.duration(25,'minutes')
        };
    }



    render() {
        return (
            <div className="container-fluid">
                    <TimerHeader />
                    <TimerDisplay currentTime={this.state.currentTime}/>
                    <TimerButton />
                    <TimerConfig />
            </div>
        );
    }
}

export default Timer;
