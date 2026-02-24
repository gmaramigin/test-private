const videos = [
  {
    title: 'Pipedrive setup from zero: pipeline + custom fields',
    duration: '8:42',
    platform: 'Pipedrive',
    type: 'Setup',
    topics: 'setup pipeline custom fields reporting',
    package: 'Implementation',
    article: 'CRM setup checklist for first launch',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    title: 'Attio admin: deduplication workflow that keeps data clean',
    duration: '6:13',
    platform: 'Attio',
    type: 'Admin',
    topics: 'deduplication data hygiene admin',
    package: 'Administration',
    article: 'How to keep CRM clean after go-live',
    url: 'https://www.youtube.com/embed/ysz5S6PUM-U'
  },
  {
    title: 'Lead routing automation with Make + webhooks',
    duration: '9:18',
    platform: 'Pipedrive',
    type: 'Integrations',
    topics: 'webhooks lead routing make integrations',
    package: 'AI / Automation',
    article: 'Webhook routing map template',
    url: 'https://www.youtube.com/embed/jNQXAC9IVRw'
  },
  {
    title: 'AI-assisted follow-up sequence with safe approval step',
    duration: '7:26',
    platform: 'Attio',
    type: 'AI',
    topics: 'ai follow-up sequences safety',
    package: 'AI / Automation',
    article: 'AI follow-up playbook',
    url: 'https://www.youtube.com/embed/oHg5SJYRHA0'
  }
];

const platformFilter = document.getElementById('platformFilter');
const typeFilter = document.getElementById('typeFilter');
const searchInput = document.getElementById('searchInput');
const videoGrid = document.getElementById('videoGrid');

document.getElementById('year').textContent = new Date().getFullYear();

function render() {
  const platform = platformFilter.value;
  const type = typeFilter.value;
  const query = searchInput.value.trim().toLowerCase();

  const filtered = videos.filter((video) => {
    const platformMatch = platform === 'all' || video.platform === platform;
    const typeMatch = type === 'all' || video.type === type;
    const queryMatch = !query || `${video.title} ${video.topics}`.toLowerCase().includes(query);
    return platformMatch && typeMatch && queryMatch;
  });

  if (!filtered.length) {
    videoGrid.innerHTML = '<p>No videos found for this filter set. Try broader terms.</p>';
    return;
  }

  videoGrid.innerHTML = filtered.map((video) => `
    <article class="video-card">
      <h3>${video.title}</h3>
      <p class="video-meta">${video.duration} • ${video.platform} • ${video.type}</p>
      <iframe class="embed" src="${video.url}" title="${video.title}" allowfullscreen loading="lazy"></iframe>
      <p><strong>Need this for your team?</strong> <a href="#contact">Book a call</a></p>
      <p class="package">Related service package: ${video.package}</p>
      <p class="related">Related article: ${video.article}</p>
    </article>
  `).join('');
}

[platformFilter, typeFilter, searchInput].forEach((element) => {
  element.addEventListener('input', render);
});

render();
