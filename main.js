let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #b89e7a ;">Estudiante de Ingenieria en Computacion y amante de la astronomia.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
