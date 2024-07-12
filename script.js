const box = document.querySelector('.block');

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

function randomColor() {
    const getValue = () => randomNumber(0, 255);
    return `rgba(${getValue()}, ${getValue()}, ${getValue()}, ${Math.random().toFixed(3)})`;
}

setInterval(() => {
    box.style.backgroundColor = randomColor();
}, 500);

setInterval(() => {
    box.style.left = `${randomNumber(0, window.innerWidth - box.offsetWidth)}px`;
    box.style.top = `${randomNumber(0, window.innerHeight - box.offsetHeight)}px`;
}, 1000);