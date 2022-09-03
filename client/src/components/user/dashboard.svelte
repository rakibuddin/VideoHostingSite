<script>
    import {push, pop} from 'svelte-spa-router'
    import { store } from '../session/auth';

    // if($store == null || $store.role !== "User"){
    //     pop();
    // }

    function logout(){
        $store = null;
        push('/')
    }

    function onSubmit(e){
        const formData = new FormData(e.target);
        const data = {};
        for (let field of formData) {
            const [key, value] = field;
            data[key] = value;
        }
        console.log(data)
    }

    async function postData (data) {        
		const res = await fetch('http://localhost:5678/login', {
			method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
				email: data.email,
                password: data.password,
			})
		})
		
		const result = await res.json()
        if(result.status !== "success"){
            document.getElementById('errorlog').innerText = result.message;
        }else{
            $store = result;
            if($store.role === "Admin"){
                push('/admin/dashboard')
            }else{
                push('/user/dashboard')
            }
        }
	}

</script>

<button on:click="{logout}" style="display: inline-block; float: right">Logout</button>

<form on:submit|preventDefault={onSubmit} action="">

    <label for="title">Enter Video Title</label>
    <input id="title" type="email" name="title">

    <label for="description">Enter Video Description</label>
    <textarea name="description" id="description" cols="30" rows="10"></textarea>
    
    <label for="myfile">Choose your video</label>
    <input type="file" id="myFile" name="filename"> 

    <button type="submit">Upload</button>

</form>