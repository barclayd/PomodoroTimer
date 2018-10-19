import React, {Component}  from 'react';

class TimerConfig extends Component {

    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const newBaseTime = this.props.baseTime;
        if(event.target.id === 'hours') newBaseTime.subtract(this.props.baseTime.get('hours'), 'hours').add(parseInt(event.target.value), 'hours');
        if(event.target.id === 'minutes') newBaseTime.subtract(this.props.baseTime.get('minutes'), 'minutes').add(parseInt(event.target.value), 'minutes');
        if(event.target.id === 'seconds') newBaseTime.subtract(this.props.baseTime.get('seconds'), 'seconds').add(parseInt(event.target.value), 'seconds');

        this.props.baseTimeHandler(newBaseTime);

    }

    render() {

        return (

            <div>
                <div className="card-body">
                    <h2 className="text-info">Set Timer</h2>
                    <div className="card">
                        <div className="card-body">
                            <div className="col-sm-3">
                                <label htmlFor="hours">Hours</label>
                            </div>
                            <div className="col-sm-9">
                                <input
                                    id="hours"
                                    className="form-control"
                                    type="number"
                                    defaultValue={this.props.baseTime.get('hours')}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <div className="col-sm-3">
                                <label htmlFor="minutes">Minutes</label>
                            </div>
                            <div className="col-sm-9">
                                <input
                                    id="minutes"
                                    className="form-control"
                                    type="number"
                                    defaultValue={this.props.baseTime.get('minutes')}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className='card'>
                        <div className="card-body">
                            <div className="col-sm-3">
                                <label htmlFor="seconds">Seconds</label>
                            </div>
                            <div className="col-sm-9">
                                <input
                                    id="seconds"
                                    className="form-control"
                                    type="number"
                                    defaultValue={this.props.baseTime.get('seconds')}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TimerConfig;
