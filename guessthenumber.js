const form = document.querySelector("form")
const rannum = parseInt((Math.random() * 100).toFixed(0))
const wait = (n) => new Promise((resolve) => setTimeout(resolve, n));
const ran = document.querySelector(".ran")
const f = document.querySelector(".hide")
let output = document.querySelector(".output")
let remainigguesses = 10
let nums = []

const hide = f.innerHTML

form.addEventListener('submit', function (e) {
    e.preventDefault();

    restart();
     
})

function reset(){
    output.innerHTML = "Try to guess"   
    nums = []
}

function setter(){
    f.innerHTML = hide
}

async function restart() {        

    let remguess = document.querySelector(".remguess")
    const input = parseInt(document.querySelector('#input').value)    
    remguess.innerHTML = `${remainigguesses}`

    

    if(nums.includes(input)){
        output.innerHTML = "You already guessed that number"
    }
    else{
        nums.push(input)
        // console.log(nums)
        if (input === rannum) {
            
            remainigguesses = 99
        }
        else if (input < rannum) {
            output.innerHTML = "You gussed too low"
            remguess.innerHTML = `${remainigguesses}`
        }
        else if (input > rannum) {
            output.innerHTML = "You gussed too high"
            remguess.innerHTML = `${remainigguesses}`
        }

        remainigguesses--
        
        // console.log(remainigguesses)

        if (remainigguesses === 0) {
            output.innerHTML = "Game Over"
            f.innerHTML = " "
            await wait(5000);
            setter()
            form.reset()
            reset()
            remainigguesses = 11
            restart()
        }
        if (remainigguesses === 98) {
            output.innerHTML = "Hurrey you guessed it right"
            f.innerHTML = " "
            await wait(5000);
            setter()
            form.reset()
            reset()
            remainigguesses = 11
            restart()
        }

    }

}   



















// if (input === rannum) {
//     output.innerHTML = "Hurrey You Guessed it"
//     flag = true
// }
// else if(input < rannum){
//     output.innerHTML = "You gussed too low"
// }
// else if(input > rannum){
//     output.innerHTML = "You gussed too high"
// }

// remainigguesses--
// remguess.innerHTML = `${remainigguesses}`
// console.log(remainigguesses)

// if (remainigguesses === 0) {
//     output.innerHTML = "Game Over"
//     await wait(5000);
//     form.reset()
//     reset()
//     remainigguesses = 11        
//     restart()
// }
// else if(flag == true){
//     await wait(5000);
//     form.reset()
//     reset();
//     remainigguesses = 11
//     restart()
// }