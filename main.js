function preload() {} ;

function setup() {
  canvas = createCanvas(400, 300) ;
  video = createCapture(VIDEO);
  video.hide();
}
function draw() {
    image(video, 0, 0, 400, 300) ;
}