import { lazy } from 'react';

const Events = lazy(() => import('./Events'));

/**
 * The Example page config.
 */
const EventsConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: 'events',
			element: <Events />
		}
	]
};

export default EventsConfig;
