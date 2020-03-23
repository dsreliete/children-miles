import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

import Header from './HeaderComponent.js';
import Home from './HomeComponent.js';
import Family from './family/FamilyComponent.js';
import Child from './children/ChildrenComponent.js';
import Goal from './goals/GoalComponent.js';
import Penalty from './penalties/PenaltyComponent.js';
import Award from './awards/AwardComponent.js';
import History from './HistoryComponent.js';


const Main = (props) => {

    const HomePage = () => {
        return (
            <Home />
        )
    }

    const FamilyPage = () => {
        return (
            <Family />
        )

    }

    const ChildPage = () => {
        return (
            <Child />
        )
    }

    const AwardPage = () => {
        return (
            <Award />
        )
    }

    const GoalPage = () => {
        return (
            <Goal />
        )

    }

    const PenaltyPage = () => {
        return (
            <Penalty />
        )
    }

    const HistoryPage = () => {
        return (
            <History />
        )
    }


    return (
        <div>
            <Header />
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route path='/family' component={FamilyPage} />
                <Route path='/child' component={ChildPage} />
                <Route path='/awards' component={AwardPage} />
                <Route path='/goals' component={GoalPage} />
                <Route path='/penalties' component={PenaltyPage} />
                <Route path='/history' component={HistoryPage} />
                <Redirect to='/child' />
            </Switch>
        </div>
    );
}

export default Main;