const container = document.querySelector('.container');

const backArr = [
    './images/banner_01.png',
    './images/banner_02.png',
    './images/banner_03.png'
]
let i = 0;
const showBack = () => {
    i++
    if(i > backArr.length - 1) {
        i = 0
    }
    container.style.backgroundImage = `url('${backArr[i]}')`
    setTimeout(showBack,2500)
}

showBack()