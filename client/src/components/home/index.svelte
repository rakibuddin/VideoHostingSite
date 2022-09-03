<script>
    import Navbar from "./components/navbar.svelte";

    let videos = [
		{ title: 'title1', path: '/videos/video1.mp4' },
        { title: 'title2', path: '/videos/video2.mp4' },
        { title: 'title3', path: '/videos/video3.mp4' },
        { title: 'title3', path: '/videos/video4.mp4' },
        { title: 'title3', path: '/videos/video5.mp4' }, 
	];
</script>

<style>
    main {
    height: calc(100vh - 70px);
    padding: 100px;;
    display: flex;
    background-color: #f9f9f9;
}
.content {
    background-color: #f9f9f9;
    width: 100%;
    height: 100%;
    padding: 15px 15px;
}
.videos {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
}
.video {
    width: 270px;
    margin-bottom: 30px;
}
.thumbnail {
    width: 100%;
    height: 170px;
}
.thumbnail img {
    object-fit: cover;
    height: 94%;
    width: 100%;
}
.author img {
    object-fit: cover;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    margin-right: 10px;
}
.details {
    display: flex;
}
.title {
    display: flex;
    flex-direction: column;
}  
.title h3 {
    color: rgb(3, 3, 3);
    line-height: 18px;
    font-size: 14px;
    margin-bottom: 6px;
} 
.title a, span {
    text-decoration: none;
    color: rgb(96, 96, 96);
    font-size: 12px;
}
 video{
    height: 168px;
    width: 250px;
 }

</style>


<Navbar/>


<main>
    <div class="content">
        <div class="videos">
            <!-- a video starts -->

            {#each videos as { title, path }, i}
            <div class="video">
                <div class="thumbnail">
                   <video controls>
                       <source src="{path}" type="video/mp4">
                     </video>
                </div>
         
                   <div class="details">
                      <div class="author">
                         <img src="https://yt3.ggpht.com/y6CgrLx1GSmph4i88wbDCPQtPrN889Z1axRccaeYg63li7x5Mc9xbfZRhHcHR-_2T0NPMKLIpIo=s68-c-k-c0x00ffffff-no-rj" alt="" />
                      </div>
                      <div class="title">
                         <h3>
                             {title}
                          </h3>
                          <a href="">
                                 Rakib Uddin
                           </a>
                           <span> 2M Views • 3 Months Ago </span>
                      </div>
                   </div>
              </div> 
	        {/each}
        </div>
    </div>
</main>