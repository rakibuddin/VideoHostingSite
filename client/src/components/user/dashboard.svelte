<script>
    import {push, pop} from 'svelte-spa-router'
    import { store } from '../../session/auth';

    // if($store == null || $store.role !== "User"){
    //     pop();
    // }

    function logout(){
        $store = null;
        push('/')
    }

    async function onSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.target)
        const res = await fetch('http://localhost:5678/uploadVideo', {
			method: "POST",
            body: formData
        })
		
		const result = await res.json()
    }

    

</script>

<button on:click="{logout}" style="display: inline-block; float: right">Logout</button>

<form on:submit={onSubmit} action="">

    <label for="title">Enter Video Title</label>
    <input id="title" type="text" name="title">

    <label for="description">Enter Video Description</label>
    <textarea name="description" id="description" cols="30" rows="10"></textarea>
    
    <label for="myfile">Choose your video</label>
    <input type="file" id="myFile" name="filename"> 

    <input id="title" type="text" value="{$store._id}" name="user_id" hidden>

    <button type="submit">Upload</button>

</form>