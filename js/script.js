function Write(el){
    const textArray = el.innerHTML.split('')
    el.innerHTML = ''
    textArray.forEach((letra,i)=>{
        setTimeout(()=>{
            el.innerHTML += letra
        },300 * i)
    });
}
let i = 0
while( i <= 10){
    const title = document.querySelector('.main-title')
    Write(title)
    i++
}
