// Time-based duas
const morningDua = "اللّهُمَّ بك أَصْبَحْنا، وبك أَمْسَيْنا، وبك نَحْيا، وبك نَموتُ، وإليك النُّشُور";
const eveningDua = "اللّهُمَّ أَمْسَيْنا بك، وبك أَصْبَحْنا، وبك نَحْيا، وبك نَموتُ، وإليك المَصير";

// Show morning or evening dua based on current hour
function showTimeBasedDua() {
  const hour = new Date().getHours();
  const dua = hour < 18 ? morningDua : eveningDua;
  document.getElementById("time-dua").textContent = dua;
}

// List of random duas
const duas = [
  "اللّهُـمَّ أَنْتَ رَبِّـي لا إِلـهَ إِلاّ أَنْتَ، خَلَقْتَنـي وَأَنا عَبْـدُك",
  "اللّهُـمَّ إِنِّي أَصْبَـحْتُ أُشْهِـدُكَ، وَأُشْهِدُ حَمَلَـةَ عَرْشِـكَ",
  "اللّهُـمَّ عافِـني في بَدَنـي، اللّهُـمَّ عافِـني في سَمْعـي"
];

// Show a random dua in the #random-dua element
function showRandomDua() {
  const randomIndex = Math.floor(Math.random() * duas.length);
  document.getElementById("random-dua").textContent = duas[randomIndex];
}

// Emotion-based duas mapped to emotions
const emotionDuas = {
  happy: "اللهم لك الحمد على كل النعم",
  sad: "اللهم اجبر قلبي واصرف عني الحزن",
  worried: "اللهم إني أعوذ بك من الهم والحزن",
  thankful: "اللهم اجعلني من الشاكرين"
};

// Show a random emotion dua in the #emotion-dua element
function showEmotionDua() {
  const emotions = Object.keys(emotionDuas);
  const randomEmotion = emotions[Math.floor(Math.random() * emotions.length)];
  const dua = emotionDuas[randomEmotion];
  const emotionDuaEl = document.getElementById("emotion-dua");
  emotionDuaEl.textContent = `(${randomEmotion.charAt(0).toUpperCase() + randomEmotion.slice(1)}) ${dua}`;
}

// Show date & time-based dua on page load
document.addEventListener("DOMContentLoaded", function () {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  document.getElementById("current-date").textContent = "📅 " + formattedDate;

  showTimeBasedDua();
  showRandomDua();  // optional: show a random dua on load
  showEmotionDua(); // optional: show an emotion dua on load

  // Attach button event listeners if buttons exist
  const randomDuaBtn = document.getElementById("btn-random-dua");
  if(randomDuaBtn) {
    randomDuaBtn.addEventListener("click", showRandomDua);
  }

  const emotionDuaBtn = document.getElementById("btn-emotion-dua");
  if(emotionDuaBtn) {
    emotionDuaBtn.addEventListener("click", showEmotionDua);
  }
});

