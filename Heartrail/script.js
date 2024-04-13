const bodyElement = document.querySelector("body");

let heartTrailLogic = (e)=>{
    const xPose = e.offsetX;
    const yPose = e.offsetY;
    const size = Math.random().toFixed(1)
    console.log(size);
    const heartElement = document.createElement("span");
    heartElement.style.left = xPose + "px";
    heartElement.style.top = yPose + "px";
    heartElement.style.scale = size;
    bodyElement.appendChild(heartElement)
    setTimeout(()=>{
        heartElement.remove()
    },1000)
}
bodyElement.addEventListener("mousemove",heartTrailLogic)
