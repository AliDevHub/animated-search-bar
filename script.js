
const searchContainer = document.querySelector(".search-container");
const search = document.querySelector(".search");
const googleMic = document.querySelector(".google-mic");


search.addEventListener("click", ()=> {
    searchContainer.classList.toggle("active")
})
googleMic.addEventListener("click", ()=> {
    searchContainer.classList.toggle("active")
})
