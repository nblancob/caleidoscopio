let symmetry = 6;

let angle = 360 / symmetry;
let saveButton, clearButton, mouseButton, keyboardButton;
let slider;
let c=[0,0,0];

function setup() {
  createCanvas(displayWidth, displayHeight);
  angleMode(DEGREES);
  background(255,255,255);

  // Creando el botón para guardar para el archivo
  saveButton = createButton('save');
  saveButton.mousePressed(saveFile);

  // Creando el botón para borrar la pantalla
  clearButton = createButton('clear');
  clearButton.mousePressed(clearScreen);

  // Creando el botón para la pantalla completa
  fullscreenButton = createButton('Full Screen');
  fullscreenButton.mousePressed(screenFull);
  
  // Select color
  fullscreenButton = createButton('Color');
  fullscreenButton.mousePressed(colors);
  
  // Configurando el deslizador para el grosor del pincel
  brushSizeSlider = createButton('Brush Size Slider');
  sizeSlider = createSlider(1, 32, 4, 0.1);
}

function colors(){
  c[0]=int(random(0,255));
  c[1]=int(random(0,255));
  c[2]=int(random(0,255));
}

// Función para guardar el archivo
function saveFile() {
  save('design.jpg');
}

// Función para limpiar la pantalla
function clearScreen() {
  background(255,255,255);
}

// Función para pantalla completa
function screenFull() {
  let fs = fullscreen();
  fullscreen(!fs);
}

function draw() {
  translate(width / 2, height / 2);
 
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    let pmx = pmouseX - width / 2;
    let pmy = pmouseY - height / 2;

    if (mouseIsPressed) {
      for (let i = 0; i < symmetry; i++) {
        rotate(angle);
        stroke(c);
        let sw = sizeSlider.value();
        strokeWeight(sw);
        line(mx, my, pmx, pmy);
        push();
        scale(1, -1);
        line(mx, my, pmx, pmy);
        pop();
      }
    }
  }
}
