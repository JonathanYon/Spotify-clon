
      
    
  window.onload = () => {
    // dataFetch("shakira")
    
      let currentArtistId = new URLSearchParams(window.location.search).get(
        "artistId"
      );
      console.log(currentArtistId)
      // console.log(currentAlbumId)
    fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/" + currentArtistId)
    .then(res => res.json())
    .then(response => {
        
      console.log("Heloooooooooo", response)
      // console.log("Image", response.album)
      let albumName = document.querySelector(".album-name")
      albumName.innerHTML = ""
      albumName.innerHTML = `
      <p>
      <i class="bi bi-patch-check-fill text-primary"></i> Verified
      Artist
      </p>
      <h1 class="name font-weight-bolder">${response.name}</h1>
      <p class="number-listner">${response.nb_fan} monthly listners</p>
      `
    })
    fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/" + currentArtistId + "/top?limit=50")
    .then(res => res.json())
    .then(track => {
      console.log(track.data)

      // <div class="row rowz d-flex align-items-center p-2">
      let colRow = document.getElementById("tracklist")
      track.data.forEach((song, i) => {
        
        let rowDiv = document.createElement("div")
        rowDiv.classList.add("row", "rowz", "d-flex", "align-items-center", "p-2")
        rowDiv.innerHTML = ""
        rowDiv.innerHTML += `
        <div class="col-8 pr-0">
        <div class="text-white d-flex align-items-center">
          <div
            class="
              num-icon
              d-flex
              position-relative
              play-button-list
            "
          >
            <p class="hide-num mb-2">${i+1}</p>
          </div>
          <div class="imgg mx-4">
            <img
              class="img-thumb"
              src="${song.album.cover_small}"
              alt=""
            />
          </div>
          <p class="album-names mb-lg-2 pt-2">${song.title}</p>
        </div>
        </div>
        <div class="col-3 d-lg-block d-sm-none px-0 text-white-50">
          ${song.rank}
        </div>
        <div class="heart text-white-50">
          <svg
            role="img"
            height="16"
            width="16"
            viewBox="0 0 16 16"
            class="Svg-ulyrgf-0 ghlXvf"
          >
            <path
              d="M13.764 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253A4.05 4.05 0 00.974 5.61c0 1.089.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195A4.052 4.052 0 0014.96 5.61a4.057 4.057 0 00-1.196-2.883zm-.722 5.098L8.58 13.048c-.307.36-.921.36-1.228 0L2.864 7.797a3.072 3.072 0 01-.905-2.187c0-.826.321-1.603.905-2.187a3.091 3.091 0 012.191-.913 3.05 3.05 0 011.957.709c.041.036.408.351.954.351.531 0 .906-.31.94-.34a3.075 3.075 0 014.161.192 3.1 3.1 0 01-.025 4.403z"
            ></path>
          </svg>
        </div>
        <div class="col-1 d-flex align-items-center">
          <p
            class="
              song-time
              mb-lg-n1
              d-md-block d-sm-none
              text-white-50
              pr-3
            "
        >
          ${Math.floor(song.duration/60)}:${Math.floor(song.duration % 60)}
        </p>
        <div class="dots text-white">...</div>
      </div>
        `

        colRow.appendChild(rowDiv)
      })
      document.getElementById("pick").innerHTML = `
      <div class="row mt-lg-n5 mb-3 pl-3">
      <div
        class="
          text-title
          col col-lg-4
          text-white
          font-weight-bold
          text-nowrap
        "
      >
        Artist pick
      </div>
    </div>
    <div class="col d-flex">
      <div class="imgg-right">
        <img
          src="${track.data[0].album.cover_big}"
          class="img-thumb"
          alt=""
        />
      </div>
      <div class="last-img pl-3">
        <p class="text-white-50 posted">
          <img
            src="${track.data[0].album.cover_medium}"
            class="rounded rounded-circle px-1 py-1"
            alt=""
          />Posted By ${track.data[0].artist.name}
        </p>
        <p class="album-name-small pl-1">Best of ${track.data[0].artist.name}</p>
        <p class="text-white-50 posted pl-1">Playlist</p>
      </div>
    </div>
      `
      
      let backGround = document.querySelector(".img-bgd")
      backGround.style.backgroundImage = `url("${track.data[0].album.cover_big}")`

    })

    
    
    
  }



  