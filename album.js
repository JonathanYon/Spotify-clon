
      
    
  window.onload = () => {
    // dataFetch("shakira")
    
      let currentAlbumId = new URLSearchParams(window.location.search).get(
        "albumId"
      );
      // console.log(currentAlbumId)
    fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + currentAlbumId)
    .then(res => res.json())
    .then(response => {
      console.log("Heloooooooooo", response)
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
  
     


    let songsRow = document.querySelector(".container-songs")
    response.tracks.data.forEach( (album, i) => {
      // console.log(album)
                let row = document.createElement("div")
                row.classList.add("row", "rowz", "ml-3", "mr-4", "pt-1", "mb-2")
                row.insertAdjacentHTML("beforeend", `
                <div class="col-4 padding-img d-flex pt-1 pl-5">
                <div
                  class="num-icon d-flex position-relative play-button-list"
                  onclick="playSong()"
                >
                  <audio
                    src="./audios/Ed_Sheeran_-_Galway_Girl_Audio_-_128K_MP3.mp3"
                  ></audio>
                  <p class="hide-num mb-2 padding-list" style="width: 10px">
                  ${i+1}
                  </p>
                </div>
                <div class="imgg mx-4"></div>
                
              </div>
              <div class="col-3 albums-align pt-2">${album.title}</div>
              <div class="col-3 added-align pt-2">DATE ADDED</div>
              <div class="col-2 d-flex">
                <div class="heart d-flex text-white-50">
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
                <div class="d-flex align-items-center">
                  <p
                    class="
                      song-time
                      mb-lg-n1
                      d-md-block d-sm-none
                      text-white-50
                      pr-3
                      pb-2
                    "
                  >
                    ${Math.floor(album.duration / 60)}:${Math.floor(album.duration % 60)}
                  </p>
                  <div class="dots text-white">...</div>
                </div>
              </div>
               ` ) 
                songsRow.appendChild(row)

                
                let trackImg = document.querySelectorAll(".imgg")
                 
                trackImg.forEach(img => {
                  img.innerHTML = `<img class="img-thumb" src="${response.cover_small}" alt="" />`
                })
                
                let para = document.createElement("p")
                para.classList.add("album-names", "mb-lg-2", "padding-list")
                para.innerText = `${response.title}`
                // console.log(para)
                trackImg.forEach(par => {
                  par.insertAdjacentElement("afterend", para)
                })

                
            })



    })
    .catch(err => console.log(err))

  }



  