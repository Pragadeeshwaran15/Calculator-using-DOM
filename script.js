
const main=document.querySelector("#main")

const calculator=document.createElement("div");
calculator.setAttribute("class","calculator");


//display
const textdiv=document.createElement("div")
textdiv.id="display"
const display=document.createElement("input")
display.setAttribute("Type","text")
display.id="result"
textdiv.appendChild(display)
calculator.appendChild(textdiv)
//Buttons Block
const btndiv=document.createElement("div")
btndiv.setAttribute("class","buttons")
calculator.appendChild(btndiv)

//function for creating many button
function btn(tagname,attributename,attributevalue,content,idvalue){
    const button=document.createElement(tagname);
    button.setAttribute(attributename,attributevalue)
    button.innerHTML=content;
    button.id=idvalue;
    return button;
}

//buttons
const btn1=btn("button","class","btn1","C","clear")
const btn2=btn("button","class","btn1","<-","del")
const btn3=btn("button","class","btn1",".",".")
const btn4=btn("button","class","btn1","*","*")
const btn5=btn("button","class","btn1","7","7")
const btn6=btn("button","class","btn1","8","8")
const btn7=btn("button","class","btn1","9","9")
const btn8=btn("button","class","btn1","/","/")
const btn9=btn("button","class","btn1","4","4")
const btn10=btn("button","class","btn1","5","5")
const btn11=btn("button","class","btn1","6","6")
const btn12=btn("button","class","btn1","-","subtract")
const btn13=btn("button","class","btn1","1","1")
const btn14=btn("button","class","btn1","2","2")
const btn15=btn("button","class","btn1","3","3")
const btn16=btn("button","class","btn1","+","add")
const btn17=btn("button","class","btn1","0","0")
const btn18=btn("button","class","btn1","00","00")
const btn19=btn("button","class","btn2","=","equal")

btndiv.append(btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9,btn10,btn11,btn12,btn13,btn14,btn15,btn16,btn17,btn18, btn19)


main.append(calculator)


// Funstions of Calculator:

const input=document.querySelector("#result")
const keyborad=document.querySelectorAll("button")
keyborad.forEach((bot)=>{
    bot.addEventListener("click",()=>{
        if(bot.id === "equal" ){
           input.value =eval(input.value)
        }
        
         else if(bot.id === "clear"){
            input.value = "";
        } 
        else if(bot.id === "del"){
            input.value = input.value.slice(0,-1);
        } 
        else if(bot.id === "add"){
            input.value += "+";
        } 
        else if(bot.id === "subtract"){
            input.value += "-";
        }
        
        
        else{
            input.value += bot.id;
        }
    })
})
