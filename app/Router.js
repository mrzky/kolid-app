import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Home from './pages/Home';

export default class Routes extends Component {
	constructor() {
		super();
		// this.state = { hasToken: false, isLoaded: false, init: true};
	}

	render() {
        return(
            <Router>
                <Stack key="root">
                    <Scene key="home" component={Home} hideNavBar={true} hideTabBar={true} />
                </Stack>
            </Router>
            )
	}
}