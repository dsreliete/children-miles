import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

import Header from './HeaderComponent.js';
// import Home from './HomeComponent.js';
import Family from './family/FamilyComponent.js';
import Child from './children/ChildrenComponent.js';
// import Goal from './goal/GoalComponent.js';
// import Penalty from './penalty/PenaltyComponent.js';
// import Award from './award/AwardComponent.js';
// import History from './HistoryComponent.js';


const Main = (props) => {

    // const HomePage = () => {
    //     return (
    //         <Home />
    //     )
    // }

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


    return (
        <div>
            <Header />
            <Switch>
                {/* <Route path='/home' component={HomePage} /> */}
                <Route path='/family' component={FamilyPage} />
                <Route path='/child' component={ChildPage} />
                <Redirect to='/child' />
            </Switch>
        </div>
    );
}

export default Main;