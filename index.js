const mainCanvas = document.getElementById("main-canvas");
const context = mainCanvas.getContext("2d");


let initialX;
let initialY;

const dibujar = (cursorX, cursorY) => {
    context.beginPath();
    context.moveTo(initialX, initialY);
    context.lineWith = 20;
    context.strokeStyle = "#000";
    context.lineCap = "round";
    context.lineJoin = "round";
    context.lineTo(cursorX, cursorY);
    context.stroke();

    initialX = cursorX;
    initialY = cursorY;
};



const mouseDown = (evt) => {
    initialX = evt.offsetX;
    initialY = evt.offsetY;

    dibujar(initialX, initialY);
};

mainCanvas.addEventListener("mousedown", mouseDown);