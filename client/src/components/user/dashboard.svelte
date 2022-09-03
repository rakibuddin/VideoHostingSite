<script>
    import {push, pop} from 'svelte-spa-router';
    import Navbar from "../home/components/navbar.svelte";
    // import Navbar from "../home/components/navbar-dashboard.svelte";
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
    textarea[id="description"] {
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

<h1>User Dashboard</h1>

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