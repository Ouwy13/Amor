// Definir data específica
document.getElementById("currentDate").textContent = "14/06/23";

// Primeira carta - sobre o verdadeiro amor
const message1 = `
    <p>Esse papel de declaração pensei que não iria fazer tão cedo, mas eis-me aqui novamente...</p>
    
    <p>Parei um tempo para rever as antigas cartas que fiz a você. E, falar real pra cê, eu era horrível no começo, kkk. Mas fui, aos poucos, conhecendo e dando mais profundidade às minhas cartas.</p>
    
    <p>Vi que a visão sobre relacionamento e maturidade mudou, e como mudou. Digo isso porque demonstra as dificuldades que tivemos que enfrentar em nossa relação. Vi com outros olhos aquilo que me motivava a continuar esperando e aprendendo sobre o amor...</p>
    
    <p><strong>Aprendi que o amor não é um sentimento, é o fazer por alguém, mesmo sem que ela saiba.</strong> Não é sobre sentir-se amado, mas sobre amar com pequenas atitudes que parecem insignificantes...</p>
    
    <p>O amor aprendi que não é um sentimento, é o que você faz, apesar do que você sente.</p>
    
    <p>O verdadeiro ato de amor não é visto pela pessoa que amamos. São as pequenas atitudes que fazemos por aquela pessoa, mesmo sabendo que ela nunca vai saber.</p>
    
    <p>É o quanto você se esforça e se esforçou para fazer algo por aquela pessoa, mesmo sem ter o reconhecimento e a validação disso por ela.</p>
    
    <p>E é por isso que, quando a relação termina, é aí que o amor mesmo começa, porque não fazemos ideia do que o outro vai continuar fazendo dali em diante. E, se foi amor de verdade, vai doer de verdade. Mas é seguir continuando a fazer o bem de verdade.</p>
    
    <p>O amor pode doer muito, porque envolve maturidade e responsabilidade... E, real, tô passando por isso e creio que você, mesmo sendo diferente de mim, esteja sentindo o mesmo...</p>
    
    <p><em>Somos conexão demais para sermos apenas amigos, problemas demais para sermos namorados e memórias demais para ter que simplesmente esquecer o que fomos..</em></p>
    
    <p>Temos que rever as coisas com os mesmos olhos do começo, mas com um propósito diferente.</p>
    
    <p>Volto novamente a falar que, somente nós dois, não conseguimos manter esse relacionamento. Precisamos ter um real propósito por trás de nossas decisões um pelo outro. É no cair e querer superar as dificuldades, buscando não agradar nossas vontades, mas respeitar o corpo um do outro.</p>
    
    <p>É buscar a pureza de um verdadeiro amor que não se baseia somente em emoções, que podem ser alteradas pelas situações. É buscar a felicidade um do outro, e não completar um espaço de felicidade que nos falta.</p>
    
    <p>Peço desculpas pelas vezes de arrogância que tive com você, acabando por magoar. Eu também venho aprendendo a amar agora.</p>
    
    <p>Deus sabe o quanto venho lutando por você, nas decisões de querer esperar, repreendi você, não por arrogância, mas por te amar tanto e acreditar que você possa ser a mãe dos meus futuros filhos.</p>
    
    <p><strong>Eu acredito que possamos voltar, mas que seja com um novo propósito, resolvendo todas as dificuldades que nos rodeavam, não sendo os problemas contra nós, mas nós contra os problemas.</strong></p>
`;

// Segunda carta - sobre relacionamentos com propósito
const message2 = `
    <p><strong>Já parou para pensar por que muitos relacionamentos não dão certo?</strong></p>
    
    <p>É simplesmente porque começam pela causa errada, e quando chegam as dificuldades, percebe-se a imaturidade consigo mesmo para lidar com uma relação. A gente aprende a seguir com o coração, mas esquece que o coração, sem direção, se perde. E por essa causa muitos relacionamentos começam no coração e terminam na confusão.</p>
    
    <p>Um relacionamento com propósito ("santo") não é feito somente de carinho, nem apenas pelo gostar um do outro. É quando você se respeita, respeitando o propósito maior na vida de cada um.</p>
    
    <p>Ter a maturidade de lidar com um relacionamento é difícil, e eu sei que é difícil. Mas, se for com as intenções certas, mesmo que venham as dificuldades, ele não acaba, pois não se baseia somente no amor, mas também na responsabilidade com seu companheiro.</p>
    
    <p>Um dos motivos pelos quais me apaixonei pelos direcionamentos bíblicos é o fato de entender as vontades do coração — e saber que muitas delas estão erradas —, mas com o direcionamento de Deus e na fidelidade aos planos d'Ele, um verdadeiro amor pode ser construído.</p>
    
    <p><em>Pois relacionamento é uma construção que deve ser firmada sobre um alicerce que não venha a ruir nos tempos conturbados.</em></p>
    
    <p>Eu sei que é difícil acreditar que possa vir a dar certo, mas isso depende do nosso querer mudar, de acreditar nos planos de Deus, mesmo sem saber o que virá amanhã.</p>
    
    <p>Não digo que a amo somente pelos meus sentimentos, mas pela razão que me fez nunca desistir, pois ainda reconheço seu afeto. E acredito que, com a ajuda um do outro e a bênção de Deus, grandes coisas podem ser feitas.</p>
    
    <p>Como nas cartas que voltei a ler, e vi o quanto pude melhorar com sua ajuda.</p>
    
    <p>É difícil aprendermos com nossos erros, mas, com superação, você realmente entende aquilo — e tenta agir com atitudes diferentes...</p>
    
    <p><strong>Amor é escolha, bondoso e liberdade.</strong></p>
`;

// Inserir mensagens após um delay para efeito de digitação
setTimeout(() => {
  document.querySelector("#message1 .message-text").innerHTML = message1;
}, 1000);

setTimeout(() => {
  document.querySelector("#message2 .message-text").innerHTML = message2;
}, 2000);

// Efeito de parallax suave nas estrelas baseado no movimento do mouse
document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX / window.innerWidth;
  const mouseY = e.clientY / window.innerHeight;

  const rings = document.querySelectorAll(".star-ring");
  rings.forEach((ring, index) => {
    const speed = (index + 1) * 0.5;
    const x = (mouseX - 0.5) * speed;
    const y = (mouseY - 0.5) * speed;

    ring.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
  });
});

// Gerenciamento de vídeos e áudio
document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll(".couple-video");
  const bgMusic = document.getElementById("bg-music");
  let originalVolume = 1;
  let fadeInterval = null;
  let isAnyVideoPlaying = false;

  // Função para fade out gradual do áudio
  function fadeOutAudio() {
    if (fadeInterval) clearInterval(fadeInterval);

    fadeInterval = setInterval(() => {
      if (bgMusic.volume > 0.05) {
        bgMusic.volume -= 0.05;
      } else {
        bgMusic.volume = 0;
        clearInterval(fadeInterval);
        fadeInterval = null;
      }
    }, 100); // Fade out em ~2 segundos
  }

  // Função para fade in gradual do áudio
  function fadeInAudio() {
    if (fadeInterval) clearInterval(fadeInterval);

    if (bgMusic.volume === 0) {
      fadeInterval = setInterval(() => {
        if (bgMusic.volume < originalVolume - 0.05) {
          bgMusic.volume += 0.05;
        } else {
          bgMusic.volume = originalVolume;
          clearInterval(fadeInterval);
          fadeInterval = null;
        }
      }, 100); // Fade in em ~2 segundos
    }
  }

  // Verifica se algum vídeo está tocando
  function checkIfAnyVideoPlaying() {
    return Array.from(videos).some((video) => !video.paused && !video.ended);
  }

  // Pausa outros vídeos quando um começa a tocar
  videos.forEach((video) => {
    // Quando um vídeo começa a tocar
    video.addEventListener("play", () => {
      // Pausa outros vídeos
      videos.forEach((otherVideo) => {
        if (otherVideo !== video && !otherVideo.paused) {
          otherVideo.pause();
        }
      });

      // Fade out do áudio de fundo
      if (!isAnyVideoPlaying) {
        fadeOutAudio();
        isAnyVideoPlaying = true;
      }
    });

    // Quando um vídeo é pausado
    video.addEventListener("pause", () => {
      setTimeout(() => {
        if (!checkIfAnyVideoPlaying()) {
          fadeInAudio();
          isAnyVideoPlaying = false;
        }
      }, 100); // Pequeno delay para verificar outros vídeos
    });

    // Quando um vídeo termina
    video.addEventListener("ended", () => {
      setTimeout(() => {
        if (!checkIfAnyVideoPlaying()) {
          fadeInAudio();
          isAnyVideoPlaying = false;
        }
      }, 100); // Pequeno delay para verificar outros vídeos
    });

    // Configurações de carregamento otimizado
    video.addEventListener("loadstart", function () {
      this.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    });

    video.addEventListener("canplay", function () {
      this.style.backgroundColor = "transparent";
    });

    // Tratamento de erro
    video.addEventListener("error", function () {
      console.log("Erro ao carregar vídeo:", this.src);
      this.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
    });
  });

  // Intersection Observer para carregar vídeos quando visíveis
  if ("IntersectionObserver" in window) {
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const video = entry.target;
          if (video.getAttribute("data-src")) {
            video.src = video.getAttribute("data-src");
            video.removeAttribute("data-src");
            videoObserver.unobserve(video);
          }
        }
      });
    });

    videos.forEach((video) => {
      videoObserver.observe(video);
    });
  }

  // Salva o volume original do áudio
  bgMusic.addEventListener("loadedmetadata", () => {
    originalVolume = bgMusic.volume;
  });
});
