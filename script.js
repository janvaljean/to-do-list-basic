

const liste = document.querySelector(".liste");
const language = document.querySelector(".language");

//! add the item to the list
document.querySelector(".add").onclick = () => {
    
    liste.innerHTML += `<li class="list-group-item" >
    <input class="form-check-input me-1" type="checkbox" value="" id="">
    <label class="form-check-label" for="">${language.value}</label>
    </li>`;

    language.value = "";
}
//! delete the item from the list
document.querySelector(".delete").onclick = () => {
    liste.removeChild(liste.lastElementChild);
}

//!with the keydown event

document.querySelector(".language").onkeydown = (e) => {
    if(e.keyCode === 13){
        document.querySelector(".add").click();
    }
    if(e.keyCode === 46){
        document.querySelector(".delete").click();
    }};


document.querySelector("wage").onkeydown = (e) => {
    if(e.keyCode === 13){  // enter
        document.querySelector(".add").click();
    }
    if(e.keyCode === 46){ // delete

        document.querySelector(".delete").click();
    }};
