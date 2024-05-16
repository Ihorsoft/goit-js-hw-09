const formData = {
    email: "",
    message: "",
};

const form = document.querySelector(".feedback-form");
form.addEventListener("input", handleInput);
form.addEventListener("submit", handleSubmit);

populateText();


function handleInput(event) {
   // console.log(event.target);
    const key = event.target.name;
    formData[key] = event.target.value;
    console.log(formData);
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

function populateText() {
    const data = JSON.parse(localStorage.getItem("feedback-form-state"));
    //  const key = Object.keys(data);
    console.log("Local Storage prewie ", data);
    if (!data) {
        console.log("in local Storage clear. Latest input has submit")
        return;
    }
    const { email, message } = form.elements;
    email.value = data.email;
    message.value = data.message;
    return;
}
function handleSubmit(event) {
    event.preventDefault();
    if (event.target.elements.email.value.trim() == "" || 
        event.target.elements.message.value.trim() == "")
       {
        alert("All form fields and message fields be filled in"); 
        return;
    }
    
    const info = {
        email: event.target.elements.email.value.trim(),
        message: event.target.elements.message.value.trim()
    };
    console.log("Submit sucsess", info);
    form.reset();
    localStorage.removeItem("feedback-form-state");
    console.log("local Storage clear");
    return;

    
}
