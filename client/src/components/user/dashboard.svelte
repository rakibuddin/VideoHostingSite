<script>
<<<<<<< HEAD
    import {push, pop} from 'svelte-spa-router';
    import Navbar from "../home/components/navbar.svelte";
    // import Navbar from "../home/components/navbar-dashboard.svelte";
    import { store } from '../session/auth';
=======
    import {push, pop} from 'svelte-spa-router'
    import { store } from '../../session/auth';
>>>>>>> 5b82a4fa0b123d38ee30b76fad22f1db51a31be5

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