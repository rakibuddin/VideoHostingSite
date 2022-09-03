<script>
    
</script>


<style>

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 15px;
    background-color: #f9f9f9;
    border-bottom: 1px solid #dfdfdf;
}
.left {
    display: flex;
    align-items: center;
}  
.left #menu {
    padding: 0 7px;
    cursor: pointer;
}
.search {
    display: flex;
}  
.search form {
    display: flex;
    border: 1px solid #ddd;
    height: 45px;
}
.search input {
    width: 600px;
    padding:10px;
    border: 0;
    height: 100%;
    border-radius: 2px 0 0 2px
} 
input:focus {
    outline: none;
    border: 1px solid #ddd;
}
.search button {
    height: 100%;
    width: 60px;
    border: none;
}
.mic {
    margin-top: 10px;
}
.icons {
    display: flex;
    text-decoration: none;
}
.material-icons {
    color: rgb(100, 100, 100);
    padding: 0 7px;
    cursor: pointer;
}
.nav-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 12px 25px;
}
.nav-link span {
    margin-left: 15px;
}
.nav-link:hover {
    background: #e5e5e5;
    cursor: pointer;
}
@media (max-width: 768px) {
    .search {
      display: none;
    }
}
@media (max-width: 900px) {
    .search input {
      width: 25rem;
    }
}

</style>



<header>
    <div class="logo left">
      <i id="menu" class="material-icons">menu</i>
      <a href="#/"><img src="https://www.freecodecamp.org/news/content/images/2022/01/yt-logo.png" alt="youtube-logo"></a>
    </div>
    
    <div class="search center">
      <form action="">
        <input type="text" placeholder="Search" />
        <button><i class="material-icons">search</i></button>
      </form>
      <i class="material-icons mic">mic</i>
    </div>
    
    <div class="icons right">
        <a class="nav-link" href="#/register">
            <i class="material-icons">how_to_reg</i>
            <span>Register</span>
         </a>
         <a class="nav-link" href="#/login">
            <i class="material-icons">login</i>
            <span>Login</span>
         </a>
    </div>
</header>