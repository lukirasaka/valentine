const noTexts = [
  "nie",
  "fr? :(",
  "o kurwa :(",
  "prosze",
  "por favor mi amor",
  "24 carat golden labubu",
  "proc",
  "a sakra",
  "kurwa zajebiscie",
  "nie",
  "fr? :(",
  "o kurwa :(",
  "prosze",
  "por favor mi amor",
  "24 carat golden labubu",
  "proc",
  "a sakra",
  "kurwa zajebiscie",
  "nie",
  "fr? :(",
  "o kurwa :(",
  "prosze",
  "por favor mi amor",
  "24 carat golden labubu",
  "proc",
  "a sakra",
  "kurwa zajebiscie",
  "dobre tak ne to by stačilo",
];

const yesBtn = document.getElementById("yesBtn");
const noBtn  = document.getElementById("noBtn");
const msgEl  = document.getElementById("msg");

const askView = document.getElementById("askView");
const yesView = document.getElementById("yesView");

let noCount = 0;
let yesTextScale = 1;

function setYesTextScale(v){
  yesTextScale = v;
  document.documentElement.style.setProperty("--yesTextScale", String(yesTextScale));
}

const btnRow = document.querySelector(".btnRow");
let lastMoveAt = 0;
const MOVE_COOLDOWN_MS = 400; 


function moveNoButton() {
  const now = Date.now();
  if (now - lastMoveAt < MOVE_COOLDOWN_MS) return;
  lastMoveAt = now;

  const rowRect = btnRow.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  // menší, kontrolovanější rozsah pohybu (aby to nebylo "šílené")
  const maxX = Math.max(0, rowRect.width - btnRect.width - 10);
  const xRange = Math.min(280, maxX); // max 180px do stran
  const yRange = 100;               // max 50px nahoru/dolů

  const x = (Math.random() * xRange) - (xRange / 2);
  const y = (Math.random() * yRange) - (yRange / 2);

  noBtn.style.transform = `translate(${Math.round(x)}px, ${Math.round(y)}px)`;
}


noBtn.addEventListener("click", () => {
  noCount++;

  const t = noTexts[Math.min(noCount, noTexts.length - 1)];
  noBtn.textContent = t;

  setYesTextScale(Math.min(yesTextScale + 0.12, 2.1));

  // po 3 kliknutích začne uhýbat
  if (noCount >= 3) moveNoButton();
});

// když najede myší, začne utíkat po 5 kliknutích
noBtn.addEventListener("mouseenter", () => {
  if (noCount >= 5) moveNoButton();
});

// pro mobil (touchstart)
noBtn.addEventListener("touchstart", () => {
  if (noCount >= 4) moveNoButton();
}, { passive: true });


yesBtn.addEventListener("click", () => {
  // přepnutí na "success" obrazovku
  askView.classList.add("hidden");
  yesView.classList.remove("hidden");

  // (volitelné) vrátí scale zpět, ať to nepůsobí ulítle při návratu
  setYesTextScale(1);
});

// init
setYesScale(1);
