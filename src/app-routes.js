import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TeamsMain from './Components/Teams/teams-main';
import App from './Components/app';
import TeamDetail from './Components/Teams/TeamDetail/team-detail';


export default class AppRoutes extends React.Component {
   
    render() {
        return (
            <Switch>

                <Route path="/teams/:id" component={TeamDetail} ></Route>
                <Route path="/teams" component={TeamsMain} ></Route>
                <Route exact path="/" component={App} ></Route>
            </Switch>

        )
    }
}