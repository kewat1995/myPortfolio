let isUpperCase =false;
let isNumber =false;
let isSymbols =false;
let passwordLength =8;


const passwordRangeInputEl = document.getElementById("passwordRangeInput");
const passwordRangeValueEl = document.getElementById("passwordRangeValue");
const genBtn =document.getElementById("btn");
const passwordEl = document.getElementById("password")

const getRandomData =(passLength) =>{
    const lowerCaseLetter ="abcdefghijklmnopqstuvwxyz";
    const upperCaseLetter = isUpperCase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : " ";
    const numbers = isNumber ? '0123456789' : "";
    const symboles =isSymbols ?  '!$%@^*%_+?/' : " ";
 const totalChar = lowerCaseLetter + upperCaseLetter + numbers + symboles;

  let password = " "; 
 for (let i = 0; i < passLength; i++) {
     
    const charIndex = Math.floor(Math.random()* totalChar.length);
    password += totalChar[charIndex]
   
 }
 return password;
}

passwordRangeInputEl.addEventListener("click" ,
(e)=>{
  let passwordLength = e.target.value ;

  passwordRangeValueEl.innerText = passwordLength;
})

genBtn.addEventListener("click" , 
()=>{

    const upperCaseCheckEl =document.getElementById("upper-case");
    const numbersCheckEl =document.getElementById("number");
    const symbolsCheckEl =document.getElementById("symbol");

    isUpperCase = upperCaseCheckEl.checked;
    isNumber = numbersCheckEl.checked;
    isSymbols = symbolsCheckEl.checked;
 const password = getRandomData(passwordLength);
 passwordEl.innerHTML = password;
// console.log(password)
}
)

