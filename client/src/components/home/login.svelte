<script>
    import {push} from 'svelte-spa-router'
    import Navbar from "./components/navbar.svelte";
    import { store } from '../../session/auth';

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


<style>
 
    form {
        border: 3px solid #f1f1f1;
        width: 500px;
        display: inline-block;
        margin: 100px 0px 0px 600px;
    }
    
    input[type=text], input[type=email], input[type=password] {
      width: 100%;
      padding: 12px 20px;
      margin: 10px 0;
      display: inline-block;
      border: 1px solid #ccc;
      box-sizing: border-box;
    }
    
    button {
      background-color: #c4302b;
      color: white;
      padding: 14px 20px;
      margin: 8px 0;
      border: none;
      cursor: pointer;
      width: 100%;
    }
    
    button:hover {
      opacity: 0.8;
    }
    
</style>


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