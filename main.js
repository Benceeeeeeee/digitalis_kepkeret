import './node_modules/bootstrap/dist/css/bootstrap.css'
import './style.css'

document.addEventListener("DOMContentLoaded", () => {

  document.getElementById("gomb").addEventListener("click", () => {
    
    let kepUrl = document.getElementById("kepUrl").value;
    let kepSzelesseg = document.getElementById("kepSzelesseg").value;
    let kepVastagsag = document.getElementById("kepVastagsag").value;
    let kepSzin = document.getElementById("kepSzin").value;
    let kep = document.getElementById("kep");

    kep.src = kepUrl;
    kep.style.width = kepSzelesseg + "px";
    kep.style.border = kepVastagsag + "px solid" + kepSzin;
  })
  
  document.getElementById("sotet").addEventListener("click", () => {
    document.getElementById("body").classList.toggle("darkMode");
  })
})