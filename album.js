



      
    
  window.onload = () => {
    // dataFetch("shakira")
    
      let currentAlbumId = new URLSearchParams(window.location.search).get(
        "albumId"
      );
      // console.log(currentAlbumId)
    fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + currentAlbumId)
    .then(res => res.json())
    .then(response => {
      console.log("Heloooooooooo", response.cover_medium)
      // console.log("Image", response.album)
      


      let albumImg = document.querySelector(".album-cover")
      albumImg.innerHTML = ""
      albumImg.innerHTML = `<div>
      <img
        class="main-image"
        aria-hidden="false"
        draggable="false"
        loading="eager"
        src="${response.cover_medium}"
        alt="Top Throwbacks of 2020"
      /> 
    </div>
    <div class="main-info d-inline-block pl-4 pt-5">
      <h6 class="d-inline-block" style="color: white">Playlist</h6>
      <h1 class="display-4 Throwbacks">
        <strong>${response.title}</strong>
      </h1>
      <h6 class="jumbo-words-under">
        <small
          >The most-streamed classics and songs with comeback moments
          in 2020. Cover: Fleetwood Mac</small
        >
      </h6>
      <div class="d-flex d-inline">
        <h6 class="a-changes-jumbo">Spotify</h6>

        <small class="pl-3 jumbo-words"><li>59,582 likes</li></small>
        <small class="pl-3 jumbo-words"
          ><li>52 songs, 3 hr 30 min</li></small
        >
      </div>
    </div>`

    

    })
    .catch(err => console.log(err))

  }



  