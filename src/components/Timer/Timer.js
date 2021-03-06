import React, { Component } from 'react';
import moment from 'moment';

import TimerHeader from '../TimerHeader/TimerHeader';
import TimerDisplay from "../TimerDisplay/TimerDisplay";
import TimerButton from "../TimerButton/TimerButton";
import TimerConfig from "../TimerConfig/TimerConfig";
import * as TimerStates from '../TimerConfig/TimerStates';

class Timer extends Component {

    constructor() {
        super();

        this.state = {
            currentTime: moment.duration(25, 'minutes'),
            baseTime: moment.duration(25,'minutes'),
            timerState: TimerStates.NOT_SET,
            timer: null,
        };
        this.baseTimeHandler = this.baseTimeHandler.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.completedTimer = this.completedTimer.bind(this);
        this.countdown = this.countdown.bind(this);
    }

    baseTimeHandler(newBaseTime) {
        this.setState({
            baseTime: newBaseTime,
            currentTime: newBaseTime
        });
    }

    startTimer() {
        this.setState({
            timerState: TimerStates.RUNNING,
            timer: setInterval(this.countdown, 1000)
        });

    }

    stopTimer() {
        if(this.state.timer) {
            clearInterval(this.state.timer);
        }
        this.setState({
            timerState: TimerStates.NOT_SET,
            timer: null,
            currentTime: moment.duration(this.state.baseTime)
        });
    }

    countdown() {
        if (this.state.currentTime.get('hours') === 0
            && this.state.currentTime.get('minutes') === 0
            && this.state.currentTime.get('seconds') === 0) {
            this.completedTimer();
            return;
        }

        const newTime = moment.duration(this.state.currentTime);
        newTime.subtract(1, 'second');
        this.setState({
            currentTime: newTime
        });
    }

    completedTimer() {
        if(this.state.timer) {
            clearInterval(this.state.timer);
        }
        this.setState({
            timerState: TimerStates.COMPLETE,
            timer: null,
        });
    }

    render() {
        return (
            <div className="card-body text-md-center">
                    <TimerHeader />
                    <TimerDisplay
                        currentTime={this.state.currentTime}
                        timerState={this.state.timerState}/>
                    <TimerButton
                        startTimer={this.startTimer}
                        stopTimer={this.stopTimer}
                        timerState={this.state.timerState}
                    />
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
