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

noBtn.addEventListener("click", () => {
  noCount++;

  const t = noTexts[Math.min(noCount, noTexts.length - 1)];
  noBtn.textContent = t;

  // jemnější růst, ať to nevypadá "divně" a netlačí se přes UI
  setYesScale(Math.min(yesScale + 0.12, 2.1));

});

yesBtn.addEventListener("click", () => {
  // přepnutí na "success" obrazovku
  askView.classList.add("hidden");
  yesView.classList.remove("hidden");

  // (volitelné) vrátí scale zpět, ať to nepůsobí ulítle při návratu
  setYesTextScale(1);
});

// init
setYesScale(1);
