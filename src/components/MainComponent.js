import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from './HomeComponent.js';
import Family from './family/FamilyComponent.js';
import Child from './children/ChildrenComponent.js';
import Goal from './goals/GoalComponent.js';
import Penalty from './penalties/PenaltyComponent.js';
import Award from './awards/AwardComponent.js';
import History from './HistoryComponent.js';
import NewUsers from './auth/NewUsersComponent';

import Signup from './auth/SignupComponent';
import VerifyEmail from './auth/VerifyEmailComponent';
import ResendEmail from './auth/ResendEmailComponent';
import Signin from './auth/SigninComponent';
import RescuePassword from './auth/RescuePasswordComponent';
import UpdatePassword from './auth/UpdatePasswordComponent';
import PrivateRoute from './PrivateRoute';

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
                <PrivateRoute path='/home' component={Home} />
                <PrivateRoute path='/family' component={Family} />
                <PrivateRoute path='/child' component={Child} />
                <PrivateRoute path='/awards' component={Award} />
                <PrivateRoute path='/goals' component={Goal} />
                <PrivateRoute path='/penalties' component={Penalty} />
                <PrivateRoute path='/history' component={History} />
                <PrivateRoute path='/new-users' component={NewUsers} />

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