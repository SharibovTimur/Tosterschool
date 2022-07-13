console.log("12345")
const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function(event){
    jump();
});

function jump(){
    console.log("12345")
    if (dino.classList != "jump") {
        dino.classList.add("jump")
    }
    setTimeout(function(){
        dino.classList.remove("jump")
    }, 300)
}