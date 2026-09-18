const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#inquiry-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const lines = [
    'Hello Velvet Events, I would like to enquire about an event.',
    '',
    `Name: ${data.get('name')}`,
    `Email: ${data.get('email')}`,
    `Event type: ${data.get('eventType')}`,
    `Guests: ${data.get('guests') || 'Not specified'}`,
    `Event date: ${data.get('date') || 'Not specified'}`,
    `Details: ${data.get('message') || 'Not specified'}`
  ];
  window.open(`https://wa.me/919744836870?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
  document.querySelector('.form-message').textContent = 'Opening WhatsApp with your event details…';
});
