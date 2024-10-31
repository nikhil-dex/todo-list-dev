let inputTodo = document.querySelector(".input-todo");
const addBtn = document.querySelector(".add-btn")
const gridList = document.querySelector(".grid-list")
let ListofGrid;
let cross;



// my js normal 
addBtn.addEventListener("click",()=>{
    if(inputTodo.value === "" ){

    }else{
    console.log(inputTodo.value)
    const lists = `<div id="list"><div id="check"></div><p>${inputTodo.value}</p><div class="cross">X</div></div>`
    gridList.innerHTML = gridList.innerHTML + lists
    inputTodo.value = ""
}
});
setInterval(() => {
ListofGrid = document.querySelectorAll(".grid-list #list");
cross = document.querySelectorAll(".cross");
cross.forEach(function crosscheck(crossbtn){
    crossbtn.addEventListener("click",()=>{
        console.log(crossbtn.parentElement)
        crossbtn.parentElement.remove();
    })
})
ListofGrid.forEach((val)=>{
    val.addEventListener('click',()=>{
        if(val.getAttribute("id") == "list"){
            val.setAttribute("id","newlist");
            val.firstElementChild.setAttribute("id","newcheck")
        }else {
            val.setAttribute("id","list");
            val.firstElementChild.setAttribute("id","check")
        }

    }) 
})
 
}, 10);



