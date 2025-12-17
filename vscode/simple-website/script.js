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

  // Tabs functionality
  const tabButtons = document.querySelectorAll('.tab-btn');
  const homeWrapper = document.getElementById('home');
  const aboutSection = document.getElementById('about');

  function showTab(name) {
    if (name === 'home') {
      homeWrapper.classList.remove('hidden');
      aboutSection.classList.add('hidden');
      aboutSection.setAttribute('aria-hidden', 'true');
    } else if (name === 'about') {
      homeWrapper.classList.add('hidden');
      aboutSection.classList.remove('hidden');
      aboutSection.setAttribute('aria-hidden', 'false');
    }
    tabButtons.forEach(btn => {
      const active = btn.dataset.target === name;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-selected', String(active));
    });
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => showTab(btn.dataset.target));
  });

  // Initialize default tab
  showTab('home');
});