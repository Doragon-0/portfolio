// Vérification que le JS est chargé
console.log("JS chargé");

// Initialisation EmailJS
emailjs.init("uQJgs979eals5AIOX");
var form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_x7yq5vs",
    "template_hv88k4a",
    form
  )
  .then(function () {
    alert("Message envoyé avec succès !");
    form.reset();
  });
});
