import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MdTerrain } from 'react-icons/md';
import { TiWeatherSnow } from 'react-icons/ti';
import { FaCalendar } from 'react-icons/fa';
import '../ui.scss';

export class SkiDayCount extends Component {
    constructor() {
        super();
    }

    static get defaultProps() {
        return {
            total: 0,
            powder: 0,
            backcountry: 0,
            goal: 100
        }
    }

    precentToDecimal(decimal) {
        return ((decimal * 100) + '%');
    }

    calcGoalProgress(total, goal) {
        return this.precentToDecimal(total / goal);
    }

    render() {
        return (
            <div className="ski-day-count">
                <div className="total-days">
                    <span>{this.props.total}</span>
                        <FaCalendar />
                    <span>days</span>
                </div>
                <div className="powder-days">
                    <span>{this.props.powder}</span>
                        <TiWeatherSnow />
                    <span>days</span>
                </div>
                <div className="backcountry-days">
                    <span>{this.props.backcountry}</span>
                        <MdTerrain />
                    <span>days</span>
                </div>
                <div>
                    <span>{this.calcGoalProgress(
                        this.props.total, 
                        this.props.goal)}
                    </span>
                </div>
            </div>
        )
    }
}

SkiDayCount.propTypes = {
    total: PropTypes.number,
    powder: PropTypes.number,
    backcountry: PropTypes.number,
    goal: PropTypes.number
}