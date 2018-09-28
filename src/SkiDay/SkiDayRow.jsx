import React from 'react';
import { MdTerrain } from 'react-icons/md';
import { TiWeatherSnow } from 'react-icons/ti';
import PropTypes from 'prop-types';

export const SkiDayRow = ({resort, date, powder, backcountry}) => (
    <tr>
        <td>
            {date}
        </td>
        <td>
            {resort}
        </td>
        <td>
            { (powder) ? <TiWeatherSnow /> : null }
        </td>
        <td>
            { (backcountry) ? <MdTerrain /> : null }
        </td>
    </tr>
)

SkiDayRow.propTypes = {
    resort: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    powder: PropTypes.bool,
    backcountry: PropTypes.bool
}