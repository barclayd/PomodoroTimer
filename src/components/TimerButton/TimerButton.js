import React, {Component} from 'react';
import * as TimerState from '../TimerConfig/TimerStates';

class TimerButton extends Component {

    constructor() {
        super();

        this.getButton = this.getButton.bind(this);
    }

    getButton() {
        if(this.props.timerState === TimerState.NOT_SET)
            return (
                <div className="row">
                    <button
                        className="btn btn-success center-block"
                        onClick={this.props.startTimer}>
                        Start
                    </button>
                </div>
            );
        if(this.props.timerState === TimerState.RUNNING)
            return (
                <div className="row">
                    <button
                        className="btn btn-danger center-block"
                        onClick={this.props.stopTimer}>
                        CANCEL
                    </button>
                </div>
            )

    }

    render() {
        return (
            <div className="row">
                {this.getButton()}
            </div>
        )
    }
}

export default TimerButton;
