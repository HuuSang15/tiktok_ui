import config from '~/config';

//Layouts

import { HeaderOnly } from '~/layouts';

//Pages

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Explore from '~/pages/Explore';
import Live from '~/pages/Live';

//Public Routes
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.following,
        component: Following,
    },
    {
        path: config.routes.profile, //`/@:nickname`
        component: Profile,
    },
    {
        path: config.routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: config.routes.search,
        component: Search,
        layout: null,
    },
    {
        path: config.routes.explore,
        component: Explore,
    },
    {
        path: config.routes.live,
        component: Live,
    },
];
const privateRoutes = [];

export { privateRoutes, publicRoutes };
