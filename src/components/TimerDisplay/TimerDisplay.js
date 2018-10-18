import React from 'react';
import * as TimerState from '../TimerConfig/TimerStates';

const leftPad = (val) => {
    if (val < 10) return `0${val}`;
    return `${val}`
};

const TimerDisplay = (props) => (
    <div>
    <div className="row center-block">
        {
            (props.timerState === TimerState.COMPLETE)
            && <iframe title="mission complete"
                        className="center-block youtube-responsive-width"
                       height="315"
                        src="https://www.youtube.com/embed/U3IiuDWJ1t8?autoplay=1"
                       allow="autoplay; encrypted-media">
            </iframe>
        }
    </div>
    <div className="row">
        <h2 className="text-center">
            {leftPad(props.currentTime.get('hours'))}:{leftPad(props.currentTime.get('minutes'))}:{leftPad(props.currentTime.get('seconds'))}
            </h2>
    </div>
    </div>
);

export default TimerDisplay;
