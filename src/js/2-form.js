const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector('.login-form');
let formData = {};

form.addEventListener('input', () => {
  formData = {
    email: form.elements.email.value,
    password: form.elements.password.value
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

const saved = localStorage.getItem(STORAGE_KEY);
if (saved) {
  const parsed = JSON.parse(saved);
  form.elements.email.value = parsed.email || "";
  form.elements.password.value = parsed.password || "";
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!form.elements.email.value || !form.elements.password.value) {
    alert("Fill please all fields");
    return;
  }

  console.log({
    email: form.elements.email.value,
    password: form.elements.password.value
  });

  form.reset();
  localStorage.removeItem(STORAGE_KEY);
});
