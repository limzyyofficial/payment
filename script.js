const PAYMENT_METHODS = [
  {
    id: 'gopay',
    name: 'GOPAY',
    accountNumber: '0852-8001-9052',
    accountName: 'Priadi',
    iconUrl: 'https://raw.githubusercontent.com/LimzyyEzy/webimage/refs/heads/main/icon%20gopay.png',
  },
  {
    id: 'dana',
    name: 'DANA',
    accountNumber: '0852-8001-9052',
    accountName: 'Priadi',
    iconUrl: 'https://raw.githubusercontent.com/LimzyyEzy/webimage/refs/heads/main/icon%20dana.png',
  },
  {
    id: 'ovo',
    name: 'OVO',
    accountNumber: '0852-8001-9052',
    accountName: 'Sukmala Sari',
    iconUrl: 'https://raw.githubusercontent.com/LimzyyEzy/webimage/refs/heads/main/icon%20ovo.png',
  },
  {
    id: 'shopeepay',
    name: 'Binance',
    accountNumber: '1067125846',
    accountName: 'Priadi',
    iconUrl: 'https://raw.githubusercontent.com/LimzyyEzy/webimage/refs/heads/main/icon.png',
  },
  {
    id: 'seabank',
    name: 'SeaBank',
    accountNumber: '901713874089',
    accountName: 'Priadi',
    iconUrl: 'https://raw.githubusercontent.com/LimzyyEzy/webimage/refs/heads/main/icon%20seabank.png',
  },
];

const QRIS_DATA = {
  id: 'qris',
  name: 'QRIS',
  accountNumber: 'Scan QR Code Below',
  iconUrl: 'https://raw.githubusercontent.com/LimzyyEzy/webimage/refs/heads/main/QRIS.png',
  isQris: true,
};

const CONTACT_INFO = {
  whatsapp: 'https://wa.me/6285173360622',
};

const TERMS = [
  'Transfer sesuai nominal total pesanan Anda.',
  'Setelah pembayaran, kirim bukti transfer ke Admin melalui WhatsApp atau Telegram.',
  'Pesanan diproses setelah verifikasi berhasil.',
  'Pastikan hanya transfer ke rekening/nomor yang tertera di halaman ini.',
];

const STATS = [
  { label: 'Active Users', value: '10K+' },
  { label: 'Success Rate', value: '99.9%' },
  { label: 'Processing Time', value: '< 1 Min' },
  { label: 'Support', value: '24/7' },
];

const FEATURES = [
  { icon: 'zap', color: 'text-neon-cyan', title: 'Instant Processing', desc: 'Transactions are processed automatically within seconds.' },
  { icon: 'shield-check', color: 'text-neon-blue', title: 'Secure Gateway', desc: 'End-to-end encryption ensures your data remains private.' },
  { icon: 'clock-3', color: 'text-purple-400', title: '24/7 Availability', desc: 'Our automated systems work round the clock, anytime.' },
  { icon: 'globe', color: 'text-emerald-400', title: 'Universal Access', desc: 'Accessible from any device, anywhere in the world.' },
  { icon: 'smartphone', color: 'text-yellow-400', title: 'Mobile First', desc: 'Optimized interface for seamless mobile experience.' },
  { icon: 'lock', color: 'text-red-400', title: 'Anti-Fraud', desc: 'Advanced detection systems to prevent unauthorized access.' },
];

const AUDIO_URL = 'https://cdn.pixabay.com/audio/2022/01/18/audio_d0a13f69d2.mp3';

let selectedMethod = null;
let toastTimer;
let audio;
let isPlaying = false;

const navScrolledClasses = ['bg-dark-900/90', 'backdrop-blur-lg', 'border-b', 'border-white/5', 'py-4', 'shadow-xl'];
const navDefaultClasses = ['bg-transparent', 'py-6'];

document.addEventListener('DOMContentLoaded', () => {
  setSupportLink();
  populateStats();
  populateFeatures();
  populatePayments();
  populateTerms();
  setFooterYear();
  setupNavbar();
  setupMobileMenu();
  setupModal();
  setupRevealOnScroll();
  setupAudio();
  setupParticles();
  refreshIcons();
});

function refreshIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

function setSupportLink() {
  const link = document.getElementById('support-link');
  if (link) {
    link.href = CONTACT_INFO.whatsapp;
  }
}

function populateStats() {
  const grid = document.getElementById('stats-grid');
  if (!grid) return;
  grid.innerHTML = '';
  STATS.forEach((stat) => {
    const item = document.createElement('div');
    item.className = 'flex flex-col items-center justify-center p-2 text-center';
    item.innerHTML = `
      <span class="text-3xl font-extrabold text-white md:text-4xl drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">${stat.value}</span>
      <span class="mt-1 text-sm font-medium text-slate-400 uppercase tracking-wider">${stat.label}</span>
    `;
    grid.appendChild(item);
  });
}

function populateFeatures() {
  const grid = document.getElementById('features-grid');
  if (!grid) return;
  grid.innerHTML = '';
  FEATURES.forEach((feature, index) => {
    const card = document.createElement('div');
    card.className = 'group h-full rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/10 hover:-translate-y-2 hover:animate-head-shake';
    card.dataset.animate = 'animate-fade-in-up';
    card.dataset.delay = String(index * 100);
    card.innerHTML = `
      <div class="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-dark-900 border border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-300 group-hover:animate-swing">
        <i data-lucide="${feature.icon}" class="h-6 w-6 ${feature.color}"></i>
      </div>
      <h3 class="mb-3 text-xl font-bold text-white group-hover:text-neon-cyan transition-colors">${feature.title}</h3>
      <p class="text-slate-400 leading-relaxed">${feature.desc}</p>
    `;
    grid.appendChild(card);
  });
}

function createPaymentCard(method) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'group relative flex flex-col items-center justify-center gap-4 w-full overflow-hidden rounded-2xl border border-neon-cyan/10 bg-dark-800/40 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-3 hover:bg-dark-700/60 hover:shadow-[0_15px_30px_-5px_rgba(100,255,218,0.2)] active:scale-95 text-center cursor-pointer perspective-1000 animate-glow-border';
  button.innerHTML = `
    <div class="absolute inset-0 bg-gradient-to-br from-neon-cyan/0 via-neon-cyan/0 to-neon-cyan/0 opacity-0 transition-all duration-700 group-hover:from-neon-cyan/5 group-hover:to-neon-blue/10 group-hover:opacity-100 transform scale-150 group-hover:scale-100"></div>
    <div class="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl bg-white/95 p-2 shadow-lg transition-all duration-500 ease-in-out group-hover:animate-rubber-band group-hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] animate-float">
      <img src="${method.iconUrl}" alt="${method.name}" class="h-full w-full object-contain" onerror="this.src='https://placehold.co/100x100?text=PAY'" />
    </div>
    <div class="relative z-10 flex items-center justify-center gap-2 transform transition-all duration-300 group-hover:translate-x-1">
      <h3 class="text-xl font-bold text-white tracking-wide transition-colors group-hover:text-neon-cyan group-hover:drop-shadow-[0_0_8px_rgba(100,255,218,0.5)]">${method.name}</h3>
      <i data-lucide="chevron-right" class="w-5 h-5 text-slate-500 opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-neon-cyan animate-pulse"></i>
    </div>
  `;
  button.addEventListener('click', () => openModal(method));
  return button;
}

function populatePayments() {
  const grid = document.getElementById('payment-grid');
  if (!grid) return;
  grid.innerHTML = '';
  [...PAYMENT_METHODS, QRIS_DATA].forEach((method, index) => {
    const card = createPaymentCard(method);
    card.dataset.animate = 'animate-fade-in-up';
    card.dataset.delay = String(index * 150);
    grid.appendChild(card);
  });
}

function populateTerms() {
  const list = document.getElementById('terms-list');
  if (!list) return;
  list.innerHTML = '';
  TERMS.forEach((term, index) => {
    const item = document.createElement('li');
    item.className = 'flex items-start gap-3 text-slate-300';
    item.innerHTML = `
      <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neon-cyan/10 text-xs font-bold text-neon-cyan">${index + 1}</span>
      <p class="text-sm md:text-base leading-relaxed">${term}</p>
    `;
    list.appendChild(item);
  });
}

function setupNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const setNavStyles = () => {
    if (window.scrollY > 20) {
      navbar.classList.add(...navScrolledClasses);
      navbar.classList.remove(...navDefaultClasses);
    } else {
      navbar.classList.remove(...navScrolledClasses);
      navbar.classList.add(...navDefaultClasses);
    }
  };

  setNavStyles();
  window.addEventListener('scroll', setNavStyles);

  document.querySelectorAll('.scroll-link').forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      const target = document.querySelector(href);
      if (!target) return;
      event.preventDefault();
      const navHeight = navbar.offsetHeight || 80;
      const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      closeMobileMenu();
    });
  });
}

function setupMobileMenu() {
  const button = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (!button || !menu) return;

  button.addEventListener('click', () => {
    const isOpen = !menu.classList.contains('hidden');
    if (isOpen) {
      closeMobileMenu();
    } else {
      menu.classList.remove('hidden');
      button.setAttribute('aria-expanded', 'true');
      button.innerHTML = '<i data-lucide="x"></i>';
      refreshIcons();
    }
  });
}

function closeMobileMenu() {
  const button = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (!button || !menu) return;
  menu.classList.add('hidden');
  button.setAttribute('aria-expanded', 'false');
  button.innerHTML = '<i data-lucide="menu"></i>';
  refreshIcons();
}

function setupModal() {
  const modal = document.getElementById('payment-modal');
  const overlay = modal?.querySelector('.modal-overlay');
  const closeButton = document.getElementById('modal-close');

  overlay?.addEventListener('click', closeModal);
  closeButton?.addEventListener('click', closeModal);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}

function openModal(method) {
  selectedMethod = method;
  const modal = document.getElementById('payment-modal');
  const title = document.getElementById('modal-title');
  const logo = document.getElementById('modal-icon');
  if (!modal || !title || !logo) return;

  title.textContent = method.name;
  logo.setAttribute('src', method.iconUrl);
  logo.setAttribute('alt', method.name);

  renderModalBody(method);

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  const content = modal.querySelector('.modal-content');
  if (content) {
    content.classList.remove('animate-bounce-in');
    void content.getClientRects();
    content.classList.add('animate-bounce-in');
  }
  refreshIcons();
}

function renderModalBody(method) {
  const body = document.getElementById('modal-body');
  if (!body) return;

  if (method.isQris) {
    body.innerHTML = `
      <div class="space-y-6 animate-fade-in-up" style="animation-delay:300ms">
        <div class="rounded-xl overflow-hidden border border-white/10 bg-white p-3 transform transition-transform hover:scale-105 duration-300">
          <img src="${method.iconUrl}" alt="QRIS Code" class="w-full h-auto rounded-lg" onerror="this.src='https://placehold.co/300x300?text=QRIS'" />
        </div>
        <p class="text-center text-sm text-slate-400">Scan QR code using your preferred payment app</p>
        <div class="flex justify-center">
          <a href="${method.iconUrl}" download="QRIS_${method.name}.png" target="_blank" rel="noreferrer" class="flex w-full items-center justify-center gap-2 rounded-xl border border-neon-cyan/20 bg-neon-cyan/10 px-4 py-3 text-sm font-semibold text-neon-cyan transition-all hover:bg-neon-cyan/20 hover:border-neon-cyan/40 hover:shadow-lg hover:shadow-neon-cyan/10 hover:-translate-y-1 hover:animate-pulse">
            <i data-lucide="download" class="w-4 h-4"></i>
            Download QR Image
          </a>
        </div>
      </div>
    `;
  } else {
    body.innerHTML = `
      <div class="space-y-6 animate-fade-in-up" style="animation-delay:300ms">
        <div class="rounded-xl bg-dark-900/50 p-6 text-center border border-white/5 hover:border-neon-cyan/30 transition-colors duration-500 hover:animate-pulse-slow">
          <p class="text-sm text-slate-400 mb-2">Account Number</p>
          <p class="font-mono text-2xl font-bold text-neon-cyan tracking-wider break-all mb-4 drop-shadow-[0_0_10px_rgba(100,255,218,0.3)]">${method.accountNumber}</p>
          ${method.accountName ? `<div class="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10"><p class="text-sm text-slate-300 font-medium">A/N ${method.accountName}</p></div>` : ''}
        </div>
        <div class="flex items-center justify-center gap-2">
          <span class="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-400 uppercase tracking-wider animate-pulse">
            <i data-lucide="check-circle" class="w-3 h-3"></i> System Ready
          </span>
        </div>
        <button data-copy-number class="group flex w-full items-center justify-center gap-2 rounded-xl border border-neon-cyan/20 bg-neon-cyan px-4 py-3 text-sm font-bold text-dark-900 uppercase tracking-widest transition-all hover:bg-neon-cyan/90 hover:shadow-[0_0_20px_rgba(100,255,218,0.4)] hover:-translate-y-1 active:scale-95 active:translate-y-1 hover:animate-tada">
          <i data-lucide="copy" class="w-4 h-4 transition-transform group-hover:rotate-12 group-hover:scale-110"></i>
          Copy Number
        </button>
      </div>
    `;
    body.querySelector('[data-copy-number]')?.addEventListener('click', () => copyNumber(method.accountNumber));
  }

  refreshIcons();
}

function closeModal() {
  const modal = document.getElementById('payment-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  selectedMethod = null;
}

function copyNumber(text) {
  const cleanText = text.replace(/-/g, '').replace(/\\s/g, '');
  if (!navigator.clipboard) {
    showToast('Clipboard not available', 'error');
    return;
  }
  navigator.clipboard
    .writeText(cleanText)
    .then(() => showToast('Number copied successfully!', 'success'))
    .catch(() => showToast('Failed to copy', 'error'));
}

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  container.innerHTML = '';
  const toast = document.createElement('div');
  toast.className = `flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl backdrop-blur-md border border-white/10 transition-all duration-300 ${
    type === 'success'
      ? 'bg-emerald-900/80 text-emerald-100 border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.2)]'
      : 'bg-red-900/80 text-red-100 border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.2)]'
  } animate-slide-in-right`;
  toast.innerHTML = `
    <i data-lucide="${type === 'success' ? 'check-circle' : 'alert-circle'}" class="w-5 h-5 ${type === 'success' ? 'text-emerald-400' : 'text-red-400'}"></i>
    <span class="font-medium tracking-wide">${message}</span>
  `;

  container.appendChild(toast);
  refreshIcons();

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('animate-slide-in-right');
    toast.classList.add('animate-slide-out-right');
    setTimeout(() => toast.remove(), 500);
  }, 3000);
}

function setupRevealOnScroll() {
  const elements = document.querySelectorAll('[data-animate]');
  if (!elements.length) return;

  elements.forEach((el) => {
    const animation = el.dataset.animate || 'animate-fade-in-up';
    const delay = Number(el.dataset.delay || 0);
    const threshold = Number(el.dataset.threshold || 0.15);

    el.style.opacity = '0';
    el.style.visibility = 'hidden';

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.animationDelay = `${delay}ms`;
          el.style.opacity = '1';
          el.style.visibility = 'visible';
          el.classList.add(animation);
        } else {
          el.style.opacity = '0';
          el.style.visibility = 'hidden';
          el.classList.remove(animation);
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(el);
  });
}

function setupAudio() {
  const button = document.getElementById('audio-toggle');
  if (!button) return;

  audio = new Audio(AUDIO_URL);
  audio.loop = true;
  audio.volume = 0.5;

  const tryPlay = () => {
    audio
      .play()
      .then(() => {
        isPlaying = true;
        updateAudioButton();
      })
      .catch(() => {
        isPlaying = false;
        updateAudioButton();
      });
  };

  button.addEventListener('click', () => {
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      isPlaying = false;
      showToast('Music Paused', 'success');
    } else {
      audio
        .play()
        .then(() => {
          isPlaying = true;
          showToast('Music Playing', 'success');
        })
        .catch(() => {
          isPlaying = false;
          showToast('Failed to play audio', 'error');
        });
    }
    updateAudioButton();
  });

  tryPlay();
}

function updateAudioButton() {
  const iconHolder = document.querySelector('[data-audio-icon]');
  const label = document.querySelector('[data-audio-label]');
  if (!iconHolder || !label) return;

  const iconName = isPlaying ? 'volume-2' : 'volume-x';
  const iconColor = isPlaying ? 'text-neon-cyan animate-pulse' : 'text-slate-400';
  iconHolder.innerHTML = `<i data-lucide="${iconName}" class="h-5 w-5 ${iconColor}"></i>`;
  label.textContent = isPlaying ? 'Mute Sound' : 'Play Sound';
  refreshIcons();
}

function setupParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let particles = [];
  let animationId;
  const mouse = { x: -1000, y: -1000, radius: 150 };

  const init = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particles = [];

    const particleCount = Math.min(100, (canvas.width * canvas.height) / 15000);

    for (let i = 0; i < particleCount; i += 1) {
      const radius = Math.random() * 2 + 1;
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius,
        baseRadius: radius,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        density: Math.random() * 30 + 1,
        color: `rgba(100, 255, 218, ${Math.random() * 0.5 + 0.1})`,
      });
    }
  };

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, index) => {
      p.x += p.dx;
      p.y += p.dy;

      if (p.x < 0 || p.x > canvas.width) p.dx = -p.dx;
      if (p.y < 0 || p.y > canvas.height) p.dy = -p.dy;

      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < mouse.radius) {
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const force = (mouse.radius - distance) / mouse.radius;
        const directionX = forceDirectionX * force * p.density * 0.6;
        const directionY = forceDirectionY * force * p.density * 0.6;

        p.x -= directionX;
        p.y -= directionY;
        p.radius = p.baseRadius * 1.5;
      } else {
        p.radius = p.baseRadius;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();

      for (let j = index; j < particles.length; j += 1) {
        const p2 = particles[j];
        const dx2 = p.x - p2.x;
        const dy2 = p.y - p2.y;
        const dist = Math.sqrt(dx2 * dx2 + dy2 * dy2);

        if (dist < 100) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(100, 255, 218, ${0.15 * (1 - dist / 100)})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    });

    animationId = requestAnimationFrame(draw);
  };

  const handleResize = () => init();
  const handleMouseMove = (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
  };

  window.addEventListener('resize', handleResize);
  window.addEventListener('mousemove', handleMouseMove);

  init();
  draw();

  return () => {
    window.removeEventListener('resize', handleResize);
    window.removeEventListener('mousemove', handleMouseMove);
    cancelAnimationFrame(animationId);
  };
}

function setFooterYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
}
