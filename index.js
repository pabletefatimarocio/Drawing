const mainCanvas = document.getElementById("main-canvas");
const context = mainCanvas.getContext("2d");
const  brushSizeInput = document.getElementById("brush-size");

let initialX;
let initialY;
let brushSize = parseInt(brushSizeInput.value);



const dibujar = (cursorX, cursorY) => {
    context.beginPath();
    context.moveTo(initialX, initialY);
    context.lineWidth = brushSize;
    context.strokeStyle = "#000";
    context.lineCap = "round";
    context.lineJoin = "round";
    context.lineTo(cursorX, cursorY);
    context.stroke();

    initialX = cursorX;
    initialY = cursorY;
};

const cambiarTamañoPincel = () => {
    brushSize = parseInt(brushSizeInput.value);
};

const mouseDown = (evt) => {
    initialX = evt.offsetX;
    initialY = evt.offsetY;
    dibujar(initialX, initialY);
    mainCanvas.addEventListener("mousemove", mouseMoving);
};



const mouseMoving = (evt) => {
    dibujar(evt.offsetX, evt.offsetY);
};


const mouseUp = () => {
    mainCanvas.removeEventListener("mousemove", mouseMoving);
};

brushSizeInput.addEventListener("input", cambiarTamañoPincel);
mainCanvas.addEventListener("mousedown", mouseDown);
mainCanvas.addEventListener("mouseup", mouseUp);