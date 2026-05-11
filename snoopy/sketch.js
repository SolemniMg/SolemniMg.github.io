// ========== Traduccions i constants ==========
const emotionsCA = {
  happy: "feliÃ§", sad: "trist", angry: "enfadat", surprised: "sorprÃ¨s",
  disgusted: "fastiguejat", fearful: "espantat", neutral: "neutral"
};
const emotionsEmoji = {
  happy: "ðŸ˜„", sad: "ðŸ˜¢", angry: "ðŸ˜ ", surprised: "ðŸ˜²",
  disgusted: "ðŸ¤¢", fearful: "ðŸ˜±", neutral: "ðŸ˜"
};

// ========== Variables globals ==========
let faceapi, detections = [], video;
let modelsReady = false;
let currentExpression = { dominant: 'neutral', intensity: 0 };
let smoothIntensity = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();
  video.elt.muted = true;
  video.elt.playsinline = true;

  const options = { withLandmarks: false, withExpressions: true, withDescriptors: false };
  faceapi = ml5.faceApi(video, options, () => {
    modelsReady = true;
    document.getElementById('loading-screen').style.display = 'none';
    faceapi.detect(gotResults);
  });
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function gotResults(err, results) {
  if (err) {
    console.error(err);
    document.getElementById('loading-screen').innerHTML =
      '<p style="color: red">Error amb la cÃ mera. Actualitza la pÃ gina.</p>';
    return;
  }
  detections = results;
  if (detections.length > 0) updateCurrentExpression();
  faceapi.detect(gotResults);
}

function updateCurrentExpression() {
  let maxIntensity = 0;
  detections.forEach(face => {
    const expr = face.expressions;
    const dominant = Object.keys(expr).reduce((a, b) => expr[a] > expr[b] ? a : b);
    if (expr[dominant] > maxIntensity) {
      currentExpression = { dominant: dominant, intensity: expr[dominant] };
      maxIntensity = expr[dominant];
    }
  });
}

function draw() {
  background(240);
  smoothIntensity = lerp(smoothIntensity, currentExpression.intensity, 0.1);

  // Dibuixa la figura geomÃ¨trica segons el sentiment
  push();
  // TranslaciÃ³ exacta com al teu codi original
  translate(width/2 - 1000, height/2 - 600);

  switch(currentExpression.dominant) {
    case 'happy': figuraFelic(smoothIntensity); break;
    case 'sad': figuraTrist(smoothIntensity); break;
    case 'angry': figuraEnfadat(smoothIntensity); break;
    case 'disgusted': figuraFastiguejat(smoothIntensity); break;
    case 'surprised': figuraSorprÃ¨s(smoothIntensity); break;
    case 'fearful': figuraEspantat(smoothIntensity); break;
    default: figuraNeutral(smoothIntensity); break;
  }
  pop();

  // VÃ­deo petit a la cantonada inferior dreta
  let vW = 160, vH = 120, margin = 20;
  imageMode(CORNER);
  push();
  translate(width - vW - margin, height - vH - margin);
  stroke(255);
  strokeWeight(2);
  fill(0, 180);
  rect(-5, -5, vW + 10, vH + 10, 12);
  image(video, 0, 0, vW, vH);
  pop();

  // Text informatiu a dalt
  fill(30, 180);
  noStroke();
  textAlign(CENTER, TOP);
  textSize(28);
  let label = emotionsCA[currentExpression.dominant] || "neutral";
  let emoji = emotionsEmoji[currentExpression.dominant] || "ðŸ˜";
  text(`${emoji} Sentiment: ${label} (${(smoothIntensity * 100).toFixed(0)}%)`, width/2, 20);
}





