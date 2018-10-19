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
                        className="btn btn-success card-body"
                        onClick={this.props.startTimer}>
                        START
                    </button>
                </div>
            );
        if(this.props.timerState === TimerState.RUNNING)
            return (
                <div className="row">
                    <button
                        className="btn btn-danger card-boy"
                        onClick={this.props.stopTimer}>
                        CANCEL
                    </button>
                </div>
            );
        if(this.props.timerState === TimerState.COMPLETE)
            return (
                <div className="row">
                    <button
                        className="btn btn-info card-body"
                        onClick={this.props.stopTimer}>
                        RESET
                    </button>
                </div>
            )

    }

    render() {
        return (
            <div className="card-body">
                {this.getButton()}
            </div>
        )
    }
}

export default TimerButton;
