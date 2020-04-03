import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import Signup from './auth/SignupComponent';
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
import UpdatePassword from './auth/UpdatePasswordComponent';

const Main = (props) => {

    return (
        <div>
            <Switch>
                <Route path='/home' render={() => <Home/>} />
                <Route path='/family' render={() => <Family/>} />
                <Route path='/child' render={() => <Child/>} />
                <Route path='/awards' render={() => <Award/>} />
                <Route path='/goals' render={() => <Goal/>} />
                <Route path='/penalties' render={() => <Penalty/>} />
                <Route path='/history' render={() => <History/>}/>
                <Route path='/signup' render={() => <Signup/>} />
                <Route path='/verifyEmail/:token'  
                    render={(props) => <VerifyEmail token={props}/>}
                />
                <Route path='/resendEmail/:email'   
                    render={({match}) => (<ResendEmail email={match.params.email}/>)}
                />
                <Route path='/signin' render={() => <Signin/>} />
                <Route path='/rescueCredentials' render={() => <RescuePassword />} />
                <Route path='/resetCredentials/:token' 
                    render={({match}) => (<UpdatePassword token={match.params.token} />)} 
                />

                <Redirect to='/signin' />
            </Switch>
        </div>
    );
}

export default Main;