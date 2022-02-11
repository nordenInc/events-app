import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Switch, Route, Redirect } from 'react-router-dom';
import { privateRoutes, publicRoutes, RouteName } from '../routes';

const AppRouter = () => {
	const { isAuth } = useTypedSelector(state => state.authReducer)
	return (
		isAuth
			?
			< Switch >
				{privateRoutes.map((route: any) =>
					<Route
						path={route.path}
						component={route.component}
						exact={route.exact}
						key={route.path}
					/>
				)}
				<Redirect to={RouteName.EVENT} />
			</Switch >
			:
			< Switch >
				{publicRoutes.map((route: any) =>
					<Route
						path={route.path}
						component={route.component}
						exact={route.exact}
						key={route.path}
					/>
				)}
				<Redirect to={RouteName.LOGIN} />
			</Switch >
	);
};

export default AppRouter;