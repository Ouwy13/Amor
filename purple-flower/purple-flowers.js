var audio = document.getElementById("bg-music");
audio.volume = 0;
let audioStarted = false;

function startFadeIn() {
  var fadeIn = setInterval(function () {
    if (audio.volume < 0.95) {
      audio.volume += 0.05;
    } else {
      audio.volume = 1;
      clearInterval(fadeIn);
    }
  }, 100);
}

function nextSection() {
  document.body.classList.add("fade-out");
  setTimeout(function () {
    window.location.href = "../notes/notes.html";
  }, 800);
}

function liberarTudo() {
  audio
    .play()
    .then(startFadeIn)
    .catch(function (e) {
      console.log("Erro ao tocar áudio:", e);
    });
  audioStarted = true;
  document.body.classList.remove("not-loaded");
  document.body.removeEventListener("click", playMusicOnce);

  setTimeout(function () {
    var btn = document.querySelector(".continue-btn");
    btn.style.display = "block";
    // Adiciona o event listener aqui!
    btn.addEventListener("click", function (e) {
      nextSection();
      e.stopPropagation();
    });
  }, 5000); // 5 segundos para aparecer e funcionar
}

function playMusicOnce() {
  if (!audioStarted) {
    liberarTudo();
  }
}

document.body.addEventListener("click", playMusicOnce);
