var countdownDate = new Date("May 2, 2023 10:15:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countdownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.querySelectorAll('.text').forEach(function(el) {el.style.display = "none";});
    document.querySelectorAll('.countdown-box').forEach(function(el) {el.style.display = "none";});
    document.querySelectorAll('.text2').forEach(function(el) {el.style.display = "initial";});
    document.querySelectorAll('.confetti').forEach(function(el) {el.style.display = "initial";});
  }
}, 1000);

// función para generar un número aleatorio entre dos valores
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// función para crear una pieza de confeti
function createConfetti() {
  const confettiEl = document.createElement('div');
  confettiEl.classList.add('confetti');
  confettiEl.style.left = randomBetween(0, window.innerWidth) + 'px';
  confettiEl.style.top = randomBetween(-100, -10) + 'px';
  confettiEl.style.animationDuration = randomBetween(3, 6) + 's';
  confettiEl.style.animationDelay = randomBetween(0, 2) + 's';
  document.querySelector('.confetti-container').appendChild(confettiEl);
  // eliminar la pieza de confeti después de que termine la animación
  confettiEl.addEventListener('animationend', () => {
    confettiEl.parentNode.removeChild(confettiEl);
  });
}

// crear varias piezas de confeti al mismo tiempo
for (let i = 0; i < 100; i++) {
  createConfetti();
}



