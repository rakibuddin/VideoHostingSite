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

    async function onSubmit(e){
        // debugger;

        const formData = new FormData(e.target);

        try{
            let response = await fetch('http://localhost:5678/uploadVideo', {
            method: 'POST',
            body: formData
            });

            const data = await response.json();
            console.log(data);
        }catch(err){
            console.log(err);
        }

        // if(data['success']){
        //     // fetchSingleData.featchSingleUserData(email);
        //     // hasCOntent.set(true);
        //     // isUpload.set(false);
        // }else{
        //     alert("This video is already uploaded by another user!!");
        // }
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

<form on:submit|preventDefault={onSubmit}>

    <label for="title">Enter Video Title</label>
    <input id="title" type="text" name="title" required>

    <label for="description">Enter Video Description</label>
    <textarea name="description" id="description" cols="30" rows="10" required></textarea>
    
    <label for="myfile">Choose your video</label>
    <input type="file" id="myFile" name="filename" required> 

    <input id="title" type="text" value="1" name="user_id">

    <button type="submit">Upload</button>

</form>