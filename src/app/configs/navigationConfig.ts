import i18next from 'i18next';
import { FuseNavigationType } from '@fuse/core/FuseNavigation/types/FuseNavigationType';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

/**
 * The navigationConfig object is an array of navigation items for the Fuse application.
 */
const navigationConfig: FuseNavigationType = [
	{
		id: 'example-component',
		title: 'Example',
		translate: 'EXAMPLE',
		type: 'item',
		icon: 'heroicons-outline:star',
		url: 'example'
	},
	{
		id: 'overview-component',
		title: 'Overview',
		translate: 'Overview',
		type: 'item',
		icon: 'heroicons-outline:sparkles',
		url: 'dashboard'
	},
	{
		id: 'event-component',
		title: 'Events',
		translate: 'Events',
		type: 'item',
		icon: 'heroicons-outline:gift',
		url: 'events'
	},
	{
		id: 'users-component',
		title: 'Users',
		translate: 'Users',
		type: 'item',
		icon: 'heroicons-outline:users',
		url: 'users'
	},
];

export default navigationConfig;
