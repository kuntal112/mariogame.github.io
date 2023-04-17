// let character=["./ch1.png","./ch2.png"];
let obstacle = document.getElementById("obstacle");
let bike = document.getElementById("image");
let jumpbtn = document.getElementById("jumpbtn");
let startbtn = document.getElementById("startbtn");
let bgsound = new Audio("bgsound.mp3");
let play_pause=document.getElementById("playPause");
play_pause.style.visibility="hidden"
let counter=1;
bgsound.loop=true;
// changebtn.addEventListener("click",()=>{
//     if(counter==1){
//          bike.src="./ch2.png"
//          counter++
//     }else if(counter==2){
//         counter++
//         bike.src="./ch1.png"
//     }else{
//         bike.src="./ch3.png"
//         counter-=2
//     }
// })
startbtn.addEventListener("click", start)
function start() {
    bgsound.play()
    play_pause.style.visibility='visible'
    pausebtnFun();
    document.getElementById("startbtn").classList.add("hide")
    document.getElementById("back").classList.add("backanimation")
    document.getElementById("road").classList.add("roadanime")
    obstacle.classList.add("obstaclemove")
    window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowUp") {
            jumpbtn.disabled = true;
            bike.classList.add("jump");
            
            setTimeout(() => {
                jumpbtn.disabled = false;
                bike.classList.remove("jump");
            }, 700)
        }
    })
    jumpbtn.addEventListener("click", () => {
        jumpbtn.disabled = true;
        bike.src="./ch1jump.png"
        bike.classList.add("jump");

        setTimeout(() => {
            jumpbtn.disabled = false;
          
            bike.classList.remove("jump");
        }, 2000)
    })

    setInterval(() => {
        let bx = parseInt(window.getComputedStyle(bike, null).getPropertyValue("left"));
        let by = parseInt(window.getComputedStyle(bike, null).getPropertyValue("bottom"));
        let cx = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("left"));
        let cy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("bottom"));
        offsetx = Math.abs(bx - cx);
        offsety = Math.abs(by - cy);
        if(bike.classList.contains("jump"))
        bike.src="./ch1jump.png"
        else
        bike.src="./ch1.png"
        if (offsetx < 130 && offsetx > 80 && offsety < 20) {
            let road = document.getElementById("road");
            road.classList.remove("roadanime");
            window.location.reload()
        }
    }, 100)
}
function pausebtnFun() {
    let plybtn = document.createElement("button");
    plybtn.setAttribute("id", "playbtn")
    plybtn.innerText="play/pause"
    document.getElementById("playPause").appendChild(plybtn);
    plybtn.addEventListener("click", () => {
        if (road.style.animationPlayState === "paused") {
            obstacle.style.animationPlayState = "running";
            back.style.animationPlayState = "running";
            road.style.animationPlayState = "running";
            bike.style.animationPlayState = "running";
            bgsound.play();
        } else {
            bgsound.pause();
            obstacle.style.animationPlayState = "paused";
            back.style.animationPlayState = "paused";
            road.style.animationPlayState = "paused";
            bike.style.animationPlayState = "paused";

        }

    })
}
