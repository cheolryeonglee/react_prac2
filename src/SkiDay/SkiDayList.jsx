import React from 'react';
import { SkiDayRow } from './SkiDayRow.jsx';
import { NavLink } from 'react-router-dom';

export const SkiDayList = ({days, filter}) => {
    const filteredDays = (!filter || !filter.match(/powder|backcountry/)) ?
        days : days.filter(day => day[filter])
    return (
        <div className="ski-day-list">
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Resort</th>
                        <th>Powder</th>
                        <th>Backcountry</th>
                    </tr>
                    <tr>
                        <td colSpan={4}>
                            <NavLink to="/list-days">
                                All Days
                            </NavLink>
                            <NavLink to="/list-days/powder">
                                Powder Days
                            </NavLink>
                            <NavLink to="/list-days/backcountry">
                                Backcountry Days
                            </NavLink>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {filteredDays.map((day, i) =>
                        <SkiDayRow key={i}
                                    {...day}/>
                        )}
                </tbody>
            </table>
        </div>
    )
}

SkiDayList.propTypes = {
    days: function(props) {
        if (!Array.isArray(props.days)) {
            return new Error("SkiDayList should be an array");
        } else if (!props.days.length) {
            return new Error("SkiDayList must have at least one record");
        } else {
            return null;
        }
    }
}