import React from 'react';
import {Route, Redirect} from 'react-router-dom'

function PrivateRoute({component: RouteComponent, user, ...rest}) {
    return(
        <Route
        {...rest}
        render ={()=>
        user? (
            <RouteComponent/>
        ) : (
            <Redirect to={'/login'}/>
        )
        }
        />
    )
}

export default PrivateRoute
