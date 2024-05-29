function go(){
    window.location.href = "index.html"
}



function changeColor3() {
    const buttons = document.querySelector("pay-button");
  
    buttons.addEventListener('click', () =>{
        buttons.style.backgroundColor = "red"
    })
}