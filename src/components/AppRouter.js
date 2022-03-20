import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {allRoutes} from "../routes";
import {MAIN_ROUTE} from "../utils/consts";

const AppRouter = () => {
    return (
        <Switch>
            {allRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={MAIN_ROUTE}/>
        </Switch>
    );
};

export default AppRouter;