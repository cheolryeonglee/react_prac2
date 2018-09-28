// Important NOTE: This example is a bad example to use nested routes
// USE REACT-ROUTE IN ANOTHER EXAMPLE
import React, { Component } from 'react';
import { SkiDayList } from './SkiDay/SkiDayList.jsx';
import { SkiDayCount } from './SkiDay/SkiDayCount.jsx';
import { AddDayForm } from './AddDayForm.jsx';
import { Menu } from './Menu.jsx';

import { Route } from 'react-router';

export class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allSkiDays: [
                {
                    resort: "Death Valley",
                    date: new Date("9/26/2018"),
                    powder: true,
                    backcountry: false
                },
                {
                    resort: "Yosemite",
                    date: new Date("10/11/2018"),
                    powder: false,
                    backcountry: false
                },
                {
                    resort: "Grand Canyon",
                    date: new Date("11/6/2018"),
                    powder: false,
                    backcountry: true
                },
            ]
        }
    }

    countDays(filter) {
        const { allSkiDays } = this.state;
        return allSkiDays.filter((day) => 
            filter ? day[filter] : day).length;
    }

    render() {
        return (
            <div className="app">
            <Menu />
            {(this.props.location.pathname === '/') ?
            <SkiDayCount total={this.countDays()}
            powder={this.countDays('powder')}
            backcountry={this.countDays('backcountry')}/> :
            (this.props.location.pathname === "/add-day") ?
                <AddDayForm /> :
                <SkiDayList days={this.state.allSkiDays}
                   filter={this.props.match.params.filter} />
            }
            <Route path={`${this.props.match.url}/:filter`}
                   component={App} />
            </div>
        )
    }
}