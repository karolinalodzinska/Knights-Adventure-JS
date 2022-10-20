const attackButton = document.getElementById('button-attack');
const goAwayButton = document.getElementById('button-goaway');

let characterStats = {
    "health": 300,
    "attack": 100
}
let skeletonStats = {
    "health": 200,
    "attack": 100
}
function attackAnimation(){

    // document.getElementById('characterHp').innerText = `hp:${characterStats["health"]}`
    attackphase()
    skeletonAttackPhase()
    skeletonStats["health"] -= characterStats["attack"]
    characterStats["health"] -= skeletonStats["attack"]
    healthDisplay()
    if (skeletonStats["health"] <= 0) {
        setTimeout(() => {
            alert("You have won!");
            document.open("/index.html");
            document.write('')
        }, 5000)
    }
}

function attackphase(){
    document.getElementById("Character-moves").src="static/sheet/Attack.png"
    document.getElementById("Character").style.marginLeft= "550px"
    setTimeout(() => {  document.getElementById("Character-moves").src="static/sheet/_Idle.png";
    document.getElementById("Character").style.marginLeft= "325px"}, 1000)
}
function skeletonAttackPhase(){
    setTimeout(() => {  document.getElementById("Skeleton-moves").src="static/sheet/ats3.png";
     document.getElementById("Sceleton").style.marginLeft= "200px";
     document.getElementById("Sceleton").style.top= "-270px"}, 2000)
    setTimeout(() => {  document.getElementById("Skeleton-moves").src="static/sheet/Skeleton Idle.png";
     document.getElementById("Sceleton").style.marginLeft= "325px";
     document.getElementById("Sceleton").style.top= "-310px"}, 3000)
}
function healthDisplay(){
        setTimeout(() => {
        document.getElementById('characterHp').innerText = `hp:${characterStats["health"]}`;
        document.getElementById('SkeletonHp').innerText = `hp:${skeletonStats["health"]}`;
        document.getElementById('characterAttack').innerText = `attack:${characterStats["attack"]}`;
        document.getElementById('skeletonAttack').innerText = `attack:${skeletonStats["attack"]}`;
    }, 4000)
}
