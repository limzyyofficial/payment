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
  iconUrl: 'https://raw.githubusercontent.com/LimzyyEzy/webimage/refs/heads/main/qr_ID1026517728527_11.05.26_1778502192_1778502192495.jpeg',
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
  { label: 'Pengguna Aktif', value: '10K+' },
  { label: 'Tingkat Berhasil', value: '99.9%' },
  { label: 'Waktu Proses', value: '< 1 Menit' },
  { label: 'Dukungan', value: '24/7' },
];

const FEATURES = [
  { icon: 'zap', title: 'Diproses Otomatis', desc: 'Verifikasi dan pemrosesan berjalan cepat begitu bukti transfer masuk.' },
  { icon: 'shield-check', title: 'Jalur Aman', desc: 'Data dan nomor transaksi Anda tidak dibagikan ke pihak lain.' },
  { icon: 'clock-3', title: 'Buka Setiap Saat', desc: 'Loket ini beroperasi 24 jam, kapan pun Anda perlu bertransaksi.' },
  { icon: 'smartphone', title: 'Dari HP Mana Pun', desc: 'Tidak perlu aplikasi tambahan, cukup buka dari browser ponsel.' },
  { icon: 'search-check', title: 'Riwayat Jelas', desc: 'Setiap transaksi punya nomor tiket agar mudah ditelusuri.' },
  { icon: 'lock', title: 'Anti Duplikat', desc: 'Sistem menandai transaksi ganda sebelum diverifikasi admin.' },
];

const AUDIO_URL = 'https://cdn.pixabay.com/audio/2022/01/18/audio_d0a13f69d2.mp3';

let selectedMethod = null;
let toastTimer;
let audio;
let isPlaying = false;

const navScrolledClasses = ['shadow-sm'];

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
    item.className = 'border-line flex flex-col items-center justify-center p-5 text-center';
    item.innerHTML = `
      <span class="font-mono-ticket text-2xl font-bold text-ink md:text-3xl">${stat.value}</span>
      <span class="mt-1 text-xs font-medium text-ink-faint uppercase tracking-wide">${stat.label}</span>
    `;
    grid.appendChild(item);
  });
}

function populateFeatures() {
  const grid = document.getElementById('features-grid');
  if (!grid) return;
  grid.innerHTML = '';
  FEATURES.forEach((feature) => {
    const card = document.createElement('div');
    card.className = 'reveal border border-line bg-paper-panel p-6 transition-colors hover:border-stamp';
    card.innerHTML = `
      <i data-lucide="${feature.icon}" class="h-5 w-5 text-stamp"></i>
      <h3 class="mt-4 text-base font-bold text-ink">${feature.title}</h3>
      <p class="mt-2 text-sm text-ink-soft leading-relaxed">${feature.desc}</p>
    `;
    grid.appendChild(card);
  });
}

function createPaymentCard(method) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'stub-card group flex items-center gap-4 w-full p-4 text-left cursor-pointer';
  button.innerHTML = `
    <div class="h-12 w-12 flex-shrink-0 overflow-hidden border border-line bg-white p-1.5">
      <img src="${method.iconUrl}" alt="${method.name}" class="h-full w-full object-contain" onerror="this.src='https://placehold.co/100x100?text=PAY'" />
    </div>
    <div class="flex-1 min-w-0">
      <h3 class="font-mono-ticket text-sm font-bold text-ink tracking-wide truncate">${method.name}</h3>
    </div>
    <i data-lucide="chevron-right" class="w-4 h-4 text-ink-faint transition-transform group-hover:translate-x-1 group-hover:text-stamp"></i>
  `;
  button.addEventListener('click', () => openModal(method));
  return button;
}

function populatePayments() {
  const grid = document.getElementById('payment-grid');
  if (!grid) return;
  grid.innerHTML = '';
  [...PAYMENT_METHODS, QRIS_DATA].forEach((method) => {
    const card = createPaymentCard(method);
    grid.appendChild(card);
  });
}

function populateTerms() {
  const list = document.getElementById('terms-list');
  if (!list) return;
  list.innerHTML = '';
  TERMS.forEach((term, index) => {
    const item = document.createElement('li');
    item.className = 'flex items-start gap-3';
    item.innerHTML = `
      <span class="font-mono-ticket flex h-6 w-6 shrink-0 items-center justify-center border border-stamp/40 text-xs font-bold text-stamp">${String(index + 1).padStart(2, '0')}</span>
      <p class="text-sm md:text-base leading-relaxed text-ink-soft">${term}</p>
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
    } else {
      navbar.classList.remove(...navScrolledClasses);
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
    content.classList.remove('animate-modal-print');
    void content.getClientRects();
    content.classList.add('animate-modal-print');
  }
  refreshIcons();
}

function renderModalBody(method) {
  const body = document.getElementById('modal-body');
  if (!body) return;

  if (method.isQris) {
    body.innerHTML = `
      <div class="space-y-5">
        <div class="border border-line bg-white p-3">
          <img src="${method.iconUrl}" alt="QRIS Code" class="w-full h-auto" onerror="this.src='https://placehold.co/300x300?text=QRIS'" />
        </div>
        <p class="text-center text-sm text-ink-soft">Scan kode QR menggunakan aplikasi e-wallet favorit Anda</p>
        <a href="${method.iconUrl}" download="QRIS_${method.name}.png" target="_blank" rel="noreferrer" class="flex w-full items-center justify-center gap-2 border-2 border-ink px-4 py-3 text-sm font-bold text-ink transition-colors hover:border-stamp hover:text-stamp">
          <i data-lucide="download" class="w-4 h-4"></i>
          Unduh Gambar QR
        </a>
      </div>
    `;
  } else {
    body.innerHTML = `
      <div class="space-y-5">
        <div class="border border-dashed border-line p-5 text-center">
          <p class="text-xs uppercase tracking-wide text-ink-faint mb-2">Nomor Tujuan</p>
          <p class="font-mono-ticket text-xl font-bold text-ink tracking-wider break-all mb-3">${method.accountNumber}</p>
          ${method.accountName ? `<div class="inline-block px-3 py-1 border border-line"><p class="text-sm text-ink-soft font-medium">a.n ${method.accountName}</p></div>` : ''}
        </div>
        <div class="flex items-center justify-center gap-2">
          <span class="inline-flex items-center gap-1.5 border border-verified/30 bg-verified/10 px-3 py-1 text-xs font-bold text-verified">
            <i data-lucide="check-circle" class="w-3 h-3"></i> Siap Menerima
          </span>
        </div>
        <button data-copy-number class="flex w-full items-center justify-center gap-2 bg-ink px-4 py-3 text-sm font-bold text-paper-panel transition-colors hover:bg-stamp">
          <i data-lucide="copy" class="w-4 h-4"></i>
          Salin Nomor
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
  const cleanText = text.replace(/-/g, '').replace(/\s/g, '');
  if (!navigator.clipboard) {
    showToast('Clipboard tidak tersedia', 'error');
    return;
  }
  navigator.clipboard
    .writeText(cleanText)
    .then(() => showToast('Nomor berhasil disalin!', 'success'))
    .catch(() => showToast('Gagal menyalin', 'error'));
}

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  container.innerHTML = '';
  const toast = document.createElement('div');
  toast.className = `toast-slip flex items-center gap-3 px-5 py-4 animate-slip-in ${type === 'error' ? 'is-error' : ''}`;
  toast.innerHTML = `
    <i data-lucide="${type === 'success' ? 'check-circle' : 'alert-circle'}" class="w-5 h-5 ${type === 'success' ? 'text-verified' : 'text-stamp'}"></i>
    <span class="text-sm font-medium text-ink">${message}</span>
  `;

  container.appendChild(toast);
  refreshIcons();

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('animate-slip-in');
    toast.classList.add('animate-slip-out');
    setTimeout(() => toast.remove(), 250);
  }, 3000);
}

function setupRevealOnScroll() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach((el) => observer.observe(el));
}

function setupAudio() {
  const button = document.getElementById('audio-toggle');
  if (!button) return;

  audio = new Audio(AUDIO_URL);
  audio.loop = true;
  audio.volume = 0.5;

  button.addEventListener('click', () => {
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      isPlaying = false;
      showToast('Musik dijeda', 'success');
    } else {
      audio
        .play()
        .then(() => {
          isPlaying = true;
          showToast('Musik diputar', 'success');
        })
        .catch(() => {
          isPlaying = false;
          showToast('Gagal memutar audio', 'error');
        });
    }
    updateAudioButton();
  });
}

function updateAudioButton() {
  const iconHolder = document.querySelector('[data-audio-icon]');
  const label = document.querySelector('[data-audio-label]');
  if (!iconHolder || !label) return;

  const iconName = isPlaying ? 'volume-2' : 'volume-x';
  const iconColor = isPlaying ? 'text-stamp' : 'text-ink-faint';
  iconHolder.innerHTML = `<i data-lucide="${iconName}" class="h-4 w-4 ${iconColor}"></i>`;
  label.textContent = isPlaying ? 'Matikan Musik' : 'Putar Musik';
  refreshIcons();
}

function setFooterYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
}
