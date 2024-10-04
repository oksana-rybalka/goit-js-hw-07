const submitForm = document.querySelector('form');
submitForm.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const inputEmailValue = event.target.elements.email.value.trim();
    const inputPasswordValue = event.target.elements.password.value.trim();
    if( inputEmailValue === '' || inputPasswordValue === '') {
        alert('All form fields must be filled in');
        return
    } 
    const info = {
            email:inputEmailValue,
            password:inputPasswordValue,
        }
        console.log(info);
        submitForm.reset();
    };

