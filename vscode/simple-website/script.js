document.addEventListener('DOMContentLoaded', () => {
  const helloBtn = document.getElementById('hello-btn');
  const themeToggle = document.getElementById('theme-toggle');
  const form = document.getElementById('contact-form');
  const formMsg = document.getElementById('form-msg');

  helloBtn.addEventListener('click', () => {
    const name = document.getElementById('name').value || 'friend';
    alert(`Hello, ${name}! 👋`);
  });

  themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    themeToggle.textContent = isDark ? 'Light' : 'Dark';
    themeToggle.setAttribute('aria-pressed', String(isDark));
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      formMsg.textContent = 'Please complete all fields.';
      formMsg.style.color = 'salmon';
      return;
    }

    // Simulate success
    formMsg.style.color = 'lightgreen';
    formMsg.textContent = `Thanks, ${name}! Your message has been sent.`;
    form.reset();
  });
});