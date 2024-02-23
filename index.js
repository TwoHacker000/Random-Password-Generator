const lenght=document.getElementById("slider")
lenght.addEventListener("input",()=>{
    document.getElementById("lengthValue").innerText=lenght.value
})
document.getElementById("submit").onclick=function(){
    let n=Math.floor(Math.random()*50);
    const lowerchars='qwertyuiopasdfghjklzxcvbnm'
    const upperchars=lowerchars.toUpperCase()
    const numbers='1234567890'
    const specialsymbol='~`!@#$%^&*()_+?>/<,"[]{}=-;:|'
    function randomnumber(chosen){
    return Math.floor(Math.random()*chosen)
    }
    let fullpassword='';
    while(fullpassword.length<=n){
    let x=lowerchars[randomnumber(lowerchars.length)]
    let y = upperchars[randomnumber(upperchars.length)]
    let z=numbers[randomnumber(numbers.length)]
    let special=specialsymbol[randomnumber(specialsymbol.length)]
    fullpassword+=x+y+z+special}
   fullpassword= fullpassword.slice(0,n)
    console.log(fullpassword)
}
