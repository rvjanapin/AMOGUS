const music = new Audio('report.mp3')

function SUS(){
    crewmate.src = "deadbody.png";
    music.play();
    document.getElementById("red").innerHTML = "YOU SUS"
    setTimeout(() => {
        crewmate.src = "AMOGUS.png";
        console.log("change")
        document.getElementById("red").innerHTML = ""
    }, 3000);
}
