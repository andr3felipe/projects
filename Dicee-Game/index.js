let img = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"]


document.querySelector(".container p").addEventListener("click", refreshMe)

function refreshMe(){
    let dice1 = Math.floor(Math.random() * 6 + 1) // BOTH WAYS, as it dont use an array, i need to add +1 so 0=1 (generating numbers from 1 to 6)
    let dice2 = Math.floor(Math.random() * img.length) // using and array as output so i dont need to add 1, 0 = array 0 (generating numbers from 0 to 5) >>>> can also use array length
    document.querySelectorAll("img")[0].src = `images/dice${dice1}.png` // both ways (get first "img"[0])
    document.querySelector(".img2").setAttribute("src", `${img[dice2]}`)
    document.querySelector(".container p").textContent = `Click to roll again!`
    
    if (dice1 > dice2){
        document.querySelector("h1").textContent = `🚩 Player 1 Wins!`
    } else if (dice1 < dice2){
        document.querySelector("h1").textContent = `Player 2 Wins! 🚩`
    } else {
        document.querySelector("h1").textContent = `Draw!`
    }
}