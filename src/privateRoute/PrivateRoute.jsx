import React from 'react'
import { Route } from 'react-router-dom'
import Forbidden from '../pages/Forbidden/Forbidden'
import PageLayout from '../components/layouts/PageLayout'
import BasicLayout from '../components/layouts/BasicLayout'
const PrivateRoute = ({ component: Component, isPrivate, ...rest }) => {
    const Layout = isPrivate ? PageLayout : BasicLayout;
    return (
        <Route
            {...rest}
            component={() => {
                return isPrivate ? (
                    localStorage.getItem("jwt-token") ? (
                        <Layout>
                            <Component {...rest} />
                        </Layout>
                    ) : (
                        <Forbidden />
                    )
                ) : (
                    <Layout>
                        <Component {...rest} />
                    </Layout>
                );
            }}
        />
    );

}
export default PrivateRoute