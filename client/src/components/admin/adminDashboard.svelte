<svelte:head>
	<title>Admin Dashboard</title>
	<link rel='stylesheet' href='bootstrap-5.2.0-dist/css/bootstrap.min.css'>
    <script src='bootstrap-5.2.0-dist/js/bootstrap.min.js' crossorigin="anonymous"></script>
</svelte:head>

<script>
    import {push, pop} from 'svelte-spa-router'
    import { store } from '../session/auth';

	// if($store == null || $store.role !== "Admin"){
    //     pop();
    // }

    function logout(){
        $store = null;
        push('/')
    }

</script>

<button on:click="{logout}" style="display: inline-block; float: right">Logout</button>