const formData = {
    email: "",
    message: "",
};


const form = document.querySelector(".feedback-form");
form.addEventListener("input", handleInput);
form.addEventListener("submit", handleSubmit);

populateText();


function handleInput(event) {
   
    const key = event.target.name;
    formData[key] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

function populateText() {
    const data = JSON.parse(localStorage.getItem("feedback-form-state"));
  
    if (!data) {
      return;
    }
     
    const { email, message } = form.elements;
    email.value = data.email || "";
    message.value = data.message || "";
    formData.email = data.email;
    formData.message = data.message;
    
    return;
}
function handleSubmit(event) {
    event.preventDefault();
    if (formData.email.trim() == "" || 
        formData.message.trim() == "")
       {
        alert("All form fields and message fields be filled in"); 
        return;
    }
    console.log("formData.email", formData.email, "formData.message", formData.message);
    formData.email = "";
    formData.message = "";
    form.reset();
    localStorage.removeItem("feedback-form-state");
    return;

    
}
