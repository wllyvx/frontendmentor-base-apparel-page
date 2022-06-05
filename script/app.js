const form = document.querySelector('.form');
const email = document.querySelector('.email');

function validateEmail (email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

form.addEventListener('submit', (e) => {
	e.preventDefault();
	let emailValue = email.value;
	console.log(email.value);
	if (validateEmail(emailValue)) {
		form.classList.remove('error');
	} else {
		form.classList.add('error');
	}
});
