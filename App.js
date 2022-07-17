import Bio from "./modules/bio/Bio.js"
import Gallery from "./modules/gallery/Gallery.js"
import Nav from "./modules/nav/Nav.js"
import { request, addEntryToDB } from "./database.js"

const App = ()=>{
    return(
    `   ${Nav()}
        <div class="container">
            ${Bio()}
            ${Gallery()}
        </div>
        `
        )
}

document.getElementById("root").innerHTML = App()


request.onsuccess = ()=>{
    addEntryToDB('bio', {name:"Lotachi", description:"I love you"})
}




const editBioForm = document.querySelector(".edit-bio-form")
const nameInput = document.querySelector("#name")
const nameOutput =  document.querySelector(".username")

editBioForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    nameOutput.innerHTML = nameInput.value
})