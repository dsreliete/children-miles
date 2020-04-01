import React from 'react';
import { Switch, Route } from 'react-router-dom'

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

const Main = (props) => {

    const SignupPage = () => {
        return (
            <Signup />
        )
    }
    

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
                <Route exact path='/signup' component={SignupPage} />
                <Route path='/home' component={HomePage} />
                <Route path='/family' component={FamilyPage} />
                <Route path='/child' component={ChildPage} />
                <Route path='/awards' component={AwardPage} />
                <Route path='/goals' component={GoalPage} />
                <Route path='/penalties' component={PenaltyPage} />
                <Route path='/history' component={HistoryPage} />
                <Route path='/verifyEmail/:token'  
                    render={({match}) => (
                        <VerifyEmail token={match.params.token}/>)
                    }/>
                <Route path='/resendEmail/:email'   
                    render={({match}) => (
                        <ResendEmail email={match.params.email}/>)
                    }/>
            </Switch>
        </div>
    );
}

export default Main;