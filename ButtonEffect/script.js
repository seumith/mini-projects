const BTN = document.querySelector(".btn");

BTN.addEventListener("mouseover",(e)=>{

    // Getting the correct position of cursor inside the element.
    let mousePositionX = e.clientX - BTN.getBoundingClientRect().left
    let mousePositionY = e.clientY - BTN.getBoundingClientRect().top

    // We are using style.setProperty to target or set and add styling in 
    // before pseudo element, We will use --xPos , --yPos in css before pseudo
    // element with var(--xPos).

    BTN.style.setProperty("--xPos",mousePositionX+"px")
    BTN.style.setProperty("--yPos",mousePositionY+"px")

})