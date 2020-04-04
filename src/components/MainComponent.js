import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from './HomeComponent.js';
import Family from './family/FamilyComponent.js';
import Child from './children/ChildrenComponent.js';
import Goal from './goals/GoalComponent.js';
import Penalty from './penalties/PenaltyComponent.js';
import Award from './awards/AwardComponent.js';
import History from './HistoryComponent.js';

import Signup from './auth/SignupComponent';
import VerifyEmail from './auth/VerifyEmailComponent';
import ResendEmail from './auth/ResendEmailComponent';
import Signin from './auth/SigninComponent';
import RescuePassword from './auth/RescuePasswordComponent';
import UpdatePassword from './auth/UpdatePasswordComponent';

// import requireAuth from './hoc/RequireAuth';
// import requireNotAuth from './hoc/RequireNotAuth';

const Main = (props) => {

    const VerifyEmailAndAuthUser = () => {
        return <VerifyEmail token={props} />
    }

    const VerifyEmailAndUpdatePassword = () => {
        return <UpdatePassword token={props} />
    }

    const ResendEmailToAuthUser = ({match}) => {
        return <ResendEmail email={match.params.email} />
    }

    return (
        <div>
            <Switch>
                <Route path='/home' component={Home} />
                <Route path='/family' component={Family} />
                <Route path='/child' component={Child} />
                <Route path='/awards' component={Award} />
                <Route path='/goals' component={Goal} />
                <Route path='/penalties' component={Penalty} />
                <Route path='/history' component={History} />

                <Route path='/signup' component={Signup} />
                <Route path='/signin' component={Signin} />
                <Route path='/rescueCredentials' component={RescuePassword} />
                <Route path='/verifyEmail/:token' component={VerifyEmailAndAuthUser} />
                <Route path='/resendEmail/:email' component={ResendEmailToAuthUser} />
                <Route path='/resetCredentials/:token' component={VerifyEmailAndUpdatePassword} />
                
                <Redirect to='/signin' />
            </Switch>
        </div>
    );
}

export default Main;