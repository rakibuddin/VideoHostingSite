<script>
    import { onMount } from 'svelte';
    import {push, pop} from 'svelte-spa-router'
    import { store } from '../session/auth';

    onMount(async () => {
		if($store == null || $store.role !== "Admin"){
            pop();
        }
	});

    function logout(){
        $store = null;
        push('/')
    }

</script>

<button on:click="{logout}" style="display: inline-block; float: right">Logout</button>