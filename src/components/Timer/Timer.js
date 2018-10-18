import React, { Component } from 'react';
import moment from 'moment';

import TimerHeader from '../TimerHeader/TimerHeader';
import TimerDisplay from "../TimerDisplay/TimerDisplay";
import TimerButton from "../TimerButton/TimerButtomn";
import TimerConfig from "../TimerConfig/TimerConfig";
import * as TimerStates from '../TimerConfig/TimerStates';

class Timer extends Component {

    constructor() {
        super();

        this.state = {
            currentTime: moment.duration(25, 'minutes'),
            baseTime: moment.duration(25,'minutes'),
            timerState: TimerStates.NOT_SET,
        };
        this.baseTimeHandler = this.baseTimeHandler.bind(this);
        this.startTimer = this.startTimer.bind(this);
    }

    baseTimeHandler(newBaseTime) {
        this.setState({
            baseTime: newBaseTime,
            currentTime: newBaseTime
        });
    }

    startTimer() {
        this.setState({
            timerState: TimerStates.RUNNING
        })
    }



    render() {
        return (
            <div className="container-fluid">
                    <TimerHeader />
                    <TimerDisplay currentTime={this.state.currentTime}/>
                    <TimerButton startTimer={this.startTimer}/>
                {
                    (this.state.timerState !== TimerStates.RUNNING)
                        &&
                    (<TimerConfig
                        baseTime={this.state.baseTime}
                        baseTimeHandler={this.baseTimeHandler}
                    />)
                }
            </div>
        );
    }
}

export default Timer;
