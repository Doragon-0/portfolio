emailjs.init("service_x7yq5vs");

const form = document.getElementById("contact-form");
const status =  document.getElementById("form-status");

form.addEventListener("submit", function(e){

	e.preventDefault();
	status.textContent = "Envoi du message";
	status.style.color = "#333";
	emailjs.sendForm(
		"service_x7yq5vs",
		"template_hv88k4a",
		this
		).then(() => {
			status.textContent ="Message envoyé avec succès ✅";
			status.style.color = "green";
			form.reset();
		})
		.catch(error) => {
			status.textContent = "Erreur lors de l'envoi ❌";
			status.style.color = "red";
			console.error(error);
		};
});