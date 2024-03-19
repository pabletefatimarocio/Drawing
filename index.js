const mainCanvas = document.getElementById("main-canvas");
    const context = mainCanvas.getContext("2d");
    const brushSizeInput = document.getElementById("brush-size");
    const eraserButton = document.getElementById("eraser-button");

    let initialX;
    let initialY;
    let brushSize = parseInt(brushSizeInput.value);
    let isErasing = false;

    const dibujar = (cursorX, cursorY) => {
        context.beginPath();
        context.moveTo(initialX, initialY);
        context.lineWidth = brushSize;
        if (isErasing) {
            context.strokeStyle = "#FFFFFF"; 
        } else {
            context.strokeStyle = "#000000"; 
        }
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

    const toggleEraserMode = () => {
        isErasing = !isErasing;
        if (isErasing) {
            eraserButton.textContent = "Draw"; 
        } else {
            eraserButton.textContent = "Eraser"; 
        }
    };

    brushSizeInput.addEventListener("input", cambiarTamañoPincel);
    mainCanvas.addEventListener("mousedown", mouseDown);
    mainCanvas.addEventListener("mouseup", mouseUp);
    eraserButton.addEventListener("click", toggleEraserMode);