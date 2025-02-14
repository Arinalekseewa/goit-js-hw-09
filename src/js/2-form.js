const formData = {
    email: "",
    message: ""
};
const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

form.addEventListener("input", (event) => {
  if (event.target.name in formData) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
  }
});

const savedData = localStorage.getItem(localStorageKey);
if (savedData) {
    Object.assign(formData, JSON.parse(savedData));
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!formData.email.trim() || !formData.message.trim()) {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

  localStorage.removeItem(localStorageKey);
  formData.email = "";
  formData.message = "";
  form.reset();
});
