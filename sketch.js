// Brush properties
let brushSize = 30;  // Default brush size
let brushColor;

function setup() {
  createCanvas(600, 600);
  background(255);  // White background
  brushColor = color(0);  // Default brush color is black
  noStroke();  // Remove default strokes for smoother brush strokes
}

function draw() {
  if (mouseIsPressed) {
    // Draw using the custom brush at the mouse position
    customBrush(mouseX, mouseY);
  }
}

// Custom brush function
function customBrush(x, y) {
  fill(brushColor);
  ellipse(x, y, brushSize, brushSize);  // Draw a circle with the brush size
}

// Change brush color based on key presses
function keyPressed() {
  if (key === 'r') {
    brushColor = color(255, 0, 0);  // Red
  } else if (key === 'g') {
    brushColor = color(0, 255, 0);  // Green
  } else if (key === 'b') {
    brushColor = color(0, 0, 255);  // Blue
  }
}

