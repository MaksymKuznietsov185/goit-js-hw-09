const STORAGE_KEY = "feedback-form-state";
let formData = { email: "", message: "" };
const form = document.querySelector('.feedback-form');

function saveToStorage() {
  formData.email = form.elements.email.value.trim();
  formData.message = form.elements.message.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function loadFromStorage() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    try {
      const parsedData = JSON.parse(savedData);
      formData.email = parsedData.email?.trim() || "";
      formData.message = parsedData.message?.trim() || "";
      form.elements.email.value = formData.email;
      form.elements.message.value = formData.message;
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }
}

loadFromStorage();
form.addEventListener('input', saveToStorage);
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData = { email: "", message: "" };
});
