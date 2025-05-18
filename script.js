// Time-based dua
const morningDua = "اللّهُمَّ بك أَصْبَحْنا، وبك أَمْسَيْنا، وبك نَحْيا، وبك نَموتُ، وإليك النُّشُور";
const eveningDua = "اللّهُمَّ أَمْسَيْنا بك، وبك أَصْبَحْنا، وبك نَحْيا، وبك نَموتُ، وإليك المَصير";

function showTimeBasedDua() {
  const hour = new Date().getHours();
  const dua = hour < 18 ? morningDua : eveningDua;
  document.getElementById("time-dua").textContent = dua;
}

// Random dua
const duas = [
  "اللّهُـمَّ أَنْتَ رَبِّـي لا إِلـهَ إِلاّ أَنْتَ، خَلَقْتَنـي وَأَنا عَبْـدُك",
  "اللّهُـمَّ إِنِّي أَصْبَـحْتُ أُشْهِـدُكَ، وَأُشْهِدُ حَمَلَـةَ عَرْشِـكَ",
  "اللّهُـمَّ عافِـني في بَدَنـي، اللّهُـمَّ عافِـني في سَمْعـي"
];

function showRandomDua() {
  const randomIndex = Math.floor(Math.random() * duas.length);
  document.getElementById("random-dua").textContent = duas[randomIndex];
}
// Emotion-based duas
const emotionDuas = {
  happy: "اللهم لك الحمد على كل النعم",
  sad: "اللهم اجبر قلبي واصرف عني الحزن",
  worried: "اللهم إني أعوذ بك من الهم والحزن",
  thankful: "اللهم اجعلني من الشاكرين"
};

function showEmotionDua() {
  const emotions = Object.keys(emotionDuas);
  const randomEmotion = emotions[Math.floor(Math.random() * emotions.length)];
  const dua = emotionDuas[randomEmotion];
  alert(`Emotion: ${randomEmotion}\n\nDua: ${dua}`);
}


// Show date & time-based dua when page loads
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
});
