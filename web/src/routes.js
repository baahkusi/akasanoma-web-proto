import Charts from './components/Charts.vue';
import Dashboard from './components/Dashboard.vue';
import Data from './components/Data.vue';
import Settings from './components/Settings.vue';
import Tables from './components/Tables.vue';
import Admin from './pages/Admin.vue';
import Login from './pages/Login.vue';

const routes = [
    {
        path: '/admin', component: Admin,
        children: [
            { path: 'charts', component: Charts },
            { path: 'dashboard', component: Dashboard },
            { path: 'data', component: Data },
            { path: 'settings', component: Settings },
            { path: 'tables', component: Tables },
            { path: '', component: Dashboard },
        ]
    },
    { path: '/admin/', component: Admin },
    { path: '/login', component: Login },
    { path: '*', component: Login }
];

export default routes;