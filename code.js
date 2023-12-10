document.addEventListener('DOMContentLoaded', function() {
  const grid = document.querySelectorAll('.grid > div');
  let numero = 1;
  let nextNum = 26;
  let contador = 0;
  let intervalId = null;

  setupGrid();

  function setupGrid() {
      const numeros = generarNumerosAleatorios(1, 25);

      grid.forEach(function(div, index) {
          div.textContent = numeros[index];
          div.addEventListener("click", function () {
              play(div);
          });
      });
  }

  function generarNumerosAleatorios(min, max) {
      let numeros = [];
      for (let i = min; i <= max; i++) {
          numeros.push(i);
      }
      return numeros.sort(function() { return Math.random() - 0.5 });
  }

  function play(valor) {
      let num = parseInt(valor.innerText, 10);

      if (num === numero) {
          numero++;

          if (nextNum <= 50) {
              valor.innerText = nextNum;
              nextNum++;
              valor.classList.add('second-half');
          } else {
              valor.innerText = '';
              valor.classList.add('hide');
          }

          if (num === 50) {
              detenerContador();
              alert('¡Has ganado!');
          } else {
              iniciarContador();
          }
      }
  }

  function iniciarContador() {
      if (!intervalId) {
          intervalId = setInterval(actualizarContador, 100);
      }
  }

  function detenerContador() {
      clearInterval(intervalId);
      intervalId = null;
  }

  function actualizarContador() {
      contador += 100;
      let segundos = Math.floor(contador / 1000);
      let milisegundos = Math.floor((contador % 1000) / 100);
      document.getElementById('contador').textContent = segundos + '.' + milisegundos + ' sec.';
  }
});
