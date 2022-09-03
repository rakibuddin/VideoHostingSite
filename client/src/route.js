import Home from './components/home/index.svelte';
import Login from './components/home/login.svelte'
import Register from './components/home/register.svelte'
import AdminDashboard from './components/admin/adminDashboard.svelte';
import UserDashboard from './components/user/dashboard.svelte';

export const routes = {
    '/': Home,
    '/login': Login,
    '/register': Register,


    '/user/dashboard': UserDashboard,

    '/admin/dashboard': AdminDashboard
};