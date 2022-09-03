<script>
    import {push} from 'svelte-spa-router'
    import Navbar from "./components/navbar.svelte";

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
		const res = await fetch('http://localhost:5678/register', {
			method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
				name: data.name,
				email: data.email,
                password: data.password,
                role: data.role,
			})
		})
		
		const json = await res.json()
		var result = JSON.stringify(json)
        push('/login');
	}
</script>

<Navbar/>

<form on:submit|preventDefault={onSubmit} action="">
    <label for="name">Enter Your Name</label>
    <input id="name" type="text" name="name">

    <label for="email">Enter Your Email</label>
    <input id="email" type="email" name="email">

    <label for="password">Enter Your Password</label>
    <input id="password" type="password" name="password">

    <label for="">Role:</label>
    <label for="user">User</label>
    <input type="radio" id="user" name="age" value="User">
    <label for="admin">Admin</label>
    <input type="radio" id="admin" name="age" value="Admin"><br>
    

    <button type="submit">Complete Registration</button>
</form>


<style>

</style>