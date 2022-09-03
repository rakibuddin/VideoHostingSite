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