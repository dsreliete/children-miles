import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import Signup from './auth/SignupComponent';
import Header from './HeaderComponent.js';
import Home from './HomeComponent.js';
import Family from './family/FamilyComponent.js';
import Child from './children/ChildrenComponent.js';
import Goal from './goals/GoalComponent.js';
import Penalty from './penalties/PenaltyComponent.js';
import Award from './awards/AwardComponent.js';
import History from './HistoryComponent.js';
import VerifyEmail from './auth/VerifyEmailComponent';
import ResendEmail from './auth/ResendEmailComponent';
import Signin from './auth/SigninComponent';
import RescuePassword from './auth/RescuePasswordComponent';

const Main = (props) => {

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
            <Switch>
                <Route path='/home' render={() => <Home/>} />
                <Route path='/family' component={FamilyPage} />
                <Route path='/child' component={ChildPage} />
                <Route path='/awards' component={AwardPage} />
                <Route path='/goals' component={GoalPage} />
                <Route path='/penalties' component={PenaltyPage} />
                <Route path='/history' component={HistoryPage} />
                <Route path='/signup' render={() => <Signup/>} />
                <Route path='/verifyEmail/:token'  
                    render={(props) => <VerifyEmail token={props}/>}
                />
                <Route path='/resendEmail/:email'   
                    render={({match}) => (<ResendEmail email={match.params.email}/>)}
                />
                <Route path='/signin' render={() => <Signin/>} />
                <Route path='/rescueCredentials' render={() => <RescuePassword/>} />
                <Redirect to='/home' />
            </Switch>
        </div>
    );
}

export default Main;