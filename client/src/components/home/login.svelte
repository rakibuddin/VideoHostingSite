<script>
    import {push} from 'svelte-spa-router'
    import Navbar from "./components/navbar.svelte";
    import { store } from '../session/auth';

    function onSubmit(e){
        const formData = new FormData(e.target);
        const data = {};
        for (let field of formData) {
            const [key, value] = field;
            data[key] = value;
        }
        postData(data)
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

<Navbar/>

<form on:submit|preventDefault={onSubmit} action="">

    <label for="email">Enter Your Email</label>
    <input id="email" type="email" name="email">

    <label for="password">Enter Your Password</label>
    <input id="password" type="password" name="password">
    <br>
    <small id="errorlog" style="color:red;"></small>
    <br>
    <button type="submit">Log In</button>
</form>


<style>

</style>