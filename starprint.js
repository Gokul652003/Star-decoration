let resultpart = document.querySelector(".rightpart")
let delay
let starcolor
let flickeringcolor
let selectstar


let erroradd = document.querySelector('.erroradd')
let erroradd1 = document.querySelector('.erroradd1')
let rowinfo = document.createElement('label')
rowinfo.setAttribute('class', 'rowinfo')
let rowinfo1=document.createElement('label')
rowinfo1.setAttribute('class', 'rowinfo')
erroradd1.appendChild(rowinfo1)
erroradd.appendChild(rowinfo)

function set() {


    let controls = document.querySelector('.controls')
    starcolor = document.querySelector('.style1').value
    flickeringcolor = document.querySelector('.style2').value
    selectstar = document.querySelector('#style3').value
    delay = document.querySelector('.delay').value

    resultpart.innerHTML = ""
    text = document.querySelector('.textbox').value
    delay = document.querySelector('.delay').value
    if (text == "" & delay == "") {

        rowinfo.innerHTML = "*Please enter the rows"
        

        rowinfo1.innerHTML = "*Please enter the delaytime"
        


    }
    else {
    
        

        
        
        if (delay == "") {
            rowinfo.innerHTML = ""
            
            rowinfo1.innerHTML = "*Please enter the delaytime"
        


        }
        else if(text==""){
            rowinfo.innerHTML = "*Please enter the rows"
            
            
            

        }
        else {
            rowinfo.innerHTML=""
            rowinfo1.innerHTML=""
            if (text > 10) {
                alert("Row Value less than 10")
            }
            else {
                resultpart.style.display = "block"
                controls.style.display = "flex"
                let rainbow = document.querySelector('.rainbow')
                rainbow.style.height = `${450}px`
                n = text;
                for (let i = 1; i <= n; i++) {
                    let str = `${selectstar} `;
                    let space = '  ';
                    resultpart.innerHTML += `<p style="color:${starcolor}">${(space.repeat((n - i)) + str.repeat(i * 2 - 1))}</p>`
                }

            }

        }


    }




    star = [...document.querySelectorAll('p')]
    console.log(selectstar)


}
function red(a, x) {
    a[x].style.color = flickeringcolor

}
function removered(a, x) {
    a[x].style.color = starcolor
}

let tmr;
let currentone = 0;
let interval=0

function runloop() {
    
    if (!tmr) {
        interval = delay; 
        tmr = setInterval(abc,interval);
    }
}

function abc() {
    

    if (currentone > n) {
        currentone = 0;
    }
    
    for (let i = 0; i < star.length; i++) {
        removered(star, i);
    }
    red(star, currentone);

    


    currentone++;
    
    
}

function stoploop() {
    if (tmr) {
        clearInterval(tmr);
        tmr = null;
    }

    for (let i = 0; i < star.length; i++) {
        removered(star, i);
    }
    currentone = 0
}

function pause() {
    if (tmr) {
        clearInterval(tmr);
        tmr = null;
    }

    red(star, currentone - 1);
}
document.getElementById("start").addEventListener("click", runloop);
document.getElementById("stop").addEventListener("click", stoploop);
document.getElementById("pause").addEventListener("click", pause);









