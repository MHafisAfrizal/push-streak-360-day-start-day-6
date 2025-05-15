<script>
  fetch('services.json')
    .then(response => response.json())
    .then(data => {
      const container = document.querySelector('.service-cards');
      container.innerHTML = ''; // kosongin dulu
      data.forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.innerHTML = `
          <i class="fa-solid ${service.icon}"></i>
          <h3>${service.title}</h3>
          <p>${service.description}</p>
        `;
        container.appendChild(card);
      });
    })
    .catch(error => console.error('Gagal load layanan:', error));
</script>
