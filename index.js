


let input = "shakira"
const userInput = (event) => {
 
  input = event.target.value.toLowerCase()
  console.log(input)
  if (event.key === "Enter"){
    fetchData()
    event.preventDefault()
  }
}




const fetchData = (q = input) => {
  fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${q}`)
.then(res => res.json())
.then(response => {
console.log(response);

let theRes = response.data;
console.log(theRes)

let theRow = document.querySelector("#card-rows")
theRow.innerHTML = ""
theRes.forEach(card => {
  // console.log("Here is the card", card)
  theRow.innerHTML += `
                <div class="col-sm-3 pl-0">
                  <div class="card h-100">
                    <div class="position-relative">
                      <img
                        src="${card.album.cover_medium}"
                        class="card-img-top img-fluid rounded py-3 px-2"
                        alt="..."
                      />

                      <div class="play"></div>
                    </div>

                    <div class="card-body px-2 pt-0">
                    <a href="./album.html?albumId=${card.album.id}"><h5 class="card-title mb-1 text-white">
                    
                      ${card.album.title}
                      </h5></a>
                    <a href="./artist.html?artistId=${card.artist.id}"><p class="card-text text-white-50">${card.artist.name}</p></a>
                    </div>
                  </div>
                </div>
  `
  
});


})
.catch(err => {
	console.error(err);
});
}
window.onload = fetchData()

// let imgContain = document.getElementById("container-img");
//       window.onload = () => {
//         let albumId = new URLSearchParams(window.location.search).get(
//           "albumId"
//         );
//         console.log(albumId);
//       };