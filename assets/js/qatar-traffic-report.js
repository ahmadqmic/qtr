/* ── Fullscreen chart ── */
let fsChartInstance = null;

function openFullscreen(chartId, title) {
  const overlay = document.getElementById('fsOverlay');
  const body    = document.getElementById('fsBody');
  const titleEl = document.getElementById('fsTitle');

  // Find parent card block
  const originalChart = document.getElementById(chartId);
  const parentBlock   = originalChart ? originalChart.closest('.c-block') : null;

  // Grab header peaks row (exclude the fullscreen button itself)
  const headerEl  = parentBlock ? parentBlock.querySelector('.c-head') : null;
  const peaksEl   = headerEl ? headerEl.querySelector('.peaks') : null;
  const peaksHTML = peaksEl ? peaksEl.outerHTML : '';

  // Grab footer
  const footerEl   = parentBlock ? parentBlock.querySelector('.c-foot') : null;
  const footerHTML = footerEl ? footerEl.innerHTML : '';

  // Update modal title
  titleEl.textContent = title;

  // Inject peaks into modal header if any
  const modalHead = document.getElementById('fsModalHead');
  const peaksSlot = document.getElementById('fsPeaksSlot');
  if (peaksSlot) peaksSlot.innerHTML = peaksHTML;

  // Build modal body: chart + footer
  body.innerHTML = `
    <div id="fs-chart-inner" style="flex:1;width:100%;min-height:400px;padding:8px 8px 0;"></div>
    ${footerHTML ? `
      <div style="border-top:1px solid rgba(255,255,255,0.08);padding:16px 28px;display:flex;flex-wrap:wrap;gap:0;">
        ${footerHTML}
      </div>` : ''}
  `;
  body.style.display = 'flex';
  body.style.flexDirection = 'column';

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  setTimeout(() => {
    if (window._chartConfigs && window._chartConfigs[chartId]) {
      const cfg = JSON.parse(JSON.stringify(window._chartConfigs[chartId]));
      cfg.chart.height = '100%';
      cfg.chart.width  = '100%';
      if (fsChartInstance) { fsChartInstance.destroy(); }
      fsChartInstance = new ApexCharts(document.getElementById('fs-chart-inner'), cfg);
      fsChartInstance.render();
    }
  }, 60);
}

function closeFullscreen() {
  document.getElementById('fsOverlay').classList.remove('open');
  document.body.style.overflow = '';
  if (fsChartInstance) { fsChartInstance.destroy(); fsChartInstance = null; }
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById('fsOverlay')) closeFullscreen();
}

// Close on Escape key
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeFullscreen(); });

  /* ── Year switcher with loading overlay ── */
function switchYear(year) {
  const current = window.location.pathname.includes('qtr2025') ? 2025 : 2024;
  if (year === current) return;

  const target  = year === 2025 ? 'qtr2025.html' : 'index.html';
  const overlay = document.getElementById('yearOverlay');

  // Update buttons
  document.querySelectorAll('.year-btn').forEach(b => {
    b.classList.toggle('active', b.textContent.trim() === String(year));
  });

  // Set year in gauge centre
  const lbl = document.getElementById('yoYearLabel');
  if (lbl) lbl.textContent = String(year);

  if (!overlay) {
    window.location.href = target;
    return;
  }

  // Reset arc animation
  const arc = overlay.querySelector('.yo-arc');
  if (arc) { arc.style.animation = 'none'; void arc.offsetHeight; arc.style.animation = ''; }

  // Show overlay
  overlay.classList.add('show');

  // Redirect after arc completes
  setTimeout(() => {
    sessionStorage.setItem('yearSwitch', '1');
    window.location.href = target;
  }, 580);
}

/* ── Entry: fade out overlay if arriving from year switch ── */
(function() {
  if (sessionStorage.getItem('yearSwitch')) {
    sessionStorage.removeItem('yearSwitch');
    const overlay = document.getElementById('yearOverlay');
    if (!overlay) return;
    const arc = overlay.querySelector('.yo-arc');
    if (arc) { arc.style.animation = 'none'; void arc.offsetHeight; arc.style.animation = ''; }
    const lbl = document.getElementById('yoYearLabel');
    const yr = window.location.pathname.includes('qtr2025') ? '2025' : '2024';
    if (lbl) lbl.textContent = yr;
    overlay.classList.add('show');
    setTimeout(() => {
      overlay.style.transition = 'opacity .45s ease';
      overlay.classList.remove('show');
      overlay.classList.add('hide');
    }, 300);
  }
})();

/* ── Hamburger menu ── */
const hamburger = document.getElementById('navHamburger');
const drawer = document.getElementById('navDrawer');
function closeDrawer() {
  if (drawer) drawer.classList.remove('open');
}

function updateNav() {
  if (!hamburger || !drawer) return;
  if (window.innerWidth <= 1024) {
    hamburger.style.display = 'flex';
  } else {
    hamburger.style.display = 'none';
    closeDrawer();
  }
}
updateNav();
window.addEventListener('resize', updateNav);

if (hamburger && drawer) {
  hamburger.addEventListener('click', () => drawer.classList.toggle('open'));
  document.addEventListener('click', e => {
    if (!hamburger.contains(e.target) && !drawer.contains(e.target)) closeDrawer();
  });
}

/* ── Scroll reveal ── */
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

/* ── Shared hour labels ── */
const hours = ['12 AM','1 AM','2 AM','3 AM','4 AM','5 AM','6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM','8 PM','9 PM','10 PM','11 PM'];

/* ── Count-up on scroll ── */
(function() {
  function run(el) {
    if (el.dataset.counted) return;
    el.dataset.counted = '1';
    var target = parseFloat(el.dataset.target);
    var dec    = parseInt(el.dataset.decimals || '0');
    var dur    = 1400;
    var t0     = null;
    el.textContent = (0).toFixed(dec);
    function frame(ts) {
      if (!t0) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1);
      var e = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * e).toFixed(dec);
      if (p < 1) requestAnimationFrame(frame);
      else el.textContent = target.toFixed(dec);
    }
    requestAnimationFrame(frame);
  }
  function check() {
    var els = document.querySelectorAll('.count-up');
    els.forEach(function(el) {
      if (el.dataset.counted) return;
      var r = el.getBoundingClientRect();
      if (r.top < window.innerHeight - 50 && r.bottom > 0) run(el);
    });
  }
  window.addEventListener('scroll', check, { passive: true });
  window.addEventListener('resize', check, { passive: true });
  window.addEventListener('load',   function() { setTimeout(check, 300); });
  document.addEventListener('DOMContentLoaded', function() { setTimeout(check, 300); });
})();

/* ── Copy email ── */
function doCopy() {
  var input = document.getElementById('rf-email-text');
  var btn   = document.getElementById('rf-copy-btn');
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(input.value).then(function() {
      showCopied(btn, 'Copied!');
    }).catch(function() { fallbackCopy(input, btn); });
  } else {
    fallbackCopy(input, btn);
  }
}
function fallbackCopy(input, btn) {
  input.select();
  input.setSelectionRange(0, 99999);
  var ok = false;
  try { ok = document.execCommand('copy'); } catch(e) {}
  showCopied(btn, ok ? 'Copied!' : 'Ctrl+C to copy');
}
function showCopied(btn, msg) {
  btn.textContent = msg;
  btn.style.background = '#22c55e';
  btn.style.borderColor = '#22c55e';
  setTimeout(function() {
    btn.textContent = 'Copy';
    btn.style.background = 'var(--red)';
    btn.style.borderColor = '';
  }, 2500);
}

// Private Qatar Traffic Report request form validation and submission
(function () {

const bannedDomains = new Set([
  "126.com",
  "139.com",
  "163.com",
  "1und1.de",
  "21cn.com",
  "aapt.net.au",
  "absamail.co.za",
  "airmail.cc",
  "alice.it",
  "aol.com",
  "arabianlinks.com",
  "arabs.com",
  "arcor.de",
  "au.com",
  "bbox.fr",
  "bell.net",
  "bigmir.net",
  "bigpond.com",
  "bk.ru",
  "blueyonder.co.uk",
  "bol.com.br",
  "bouyguestelecom.fr",
  "btinternet.com",
  "centrum.cz",
  "citromail.hu",
  "club-internet.fr",
  "cock.li",
  "cogeco.ca",
  "dataone.in",
  "daum.net",
  "discard.email",
  "dispostable.com",
  "docomo.ne.jp",
  "dodo.com.au",
  "eastlink.ca",
  "email.com",
  "email.cz",
  "email.it",
  "emirates.net.ae",
  "ezweb.ne.jp",
  "fakeinbox.com",
  "fastmail.com",
  "fastmail.fm",
  "fastweb.it",
  "filzmail.com",
  "foxmail.com",
  "free.fr",
  "freemail.hu",
  "freenet.de",
  "freeserve.co.uk",
  "fsnet.co.uk",
  "getnada.com",
  "globo.com",
  "gmail.com",
  "gmx.at",
  "gmx.com",
  "gmx.de",
  "gmx.net",
  "gmx.org",
  "gmx.us",
  "googlemail.com",
  "guerrillamail.com",
  "hanmail.net",
  "hotmail.ca",
  "hotmail.co.in",
  "hotmail.co.uk",
  "hotmail.com",
  "hotmail.com.ar",
  "hotmail.com.au",
  "hotmail.com.mx",
  "hotmail.de",
  "hotmail.es",
  "hotmail.fr",
  "hotmail.it",
  "hushmail.com",
  "i.softbank.jp",
  "i.ua",
  "icloud.com",
  "ig.com.br",
  "iinet.net.au",
  "in.com",
  "inbox.com",
  "inbox.ru",
  "indiatimes.com",
  "infinito.it",
  "interia.pl",
  "internode.on.net",
  "inwind.it",
  "iol.it",
  "jazztel.es",
  "kakao.com",
  "korea.com",
  "lantic.net",
  "laposte.net",
  "libero.it",
  "lineone.net",
  "list.ru",
  "live.co.uk",
  "live.com",
  "live.com.mx",
  "live.de",
  "live.fr",
  "live.it",
  "mac.com",
  "mail.com",
  "mail.ru",
  "mailbox.org",
  "maildrop.cc",
  "mailexpire.com",
  "mailfence.com",
  "mailinator.com",
  "mailnull.com",
  "maktoob.com",
  "me.com",
  "meta.ua",
  "msn.com",
  "mweb.co.za",
  "mytrashmail.com",
  "nate.com",
  "naver.com",
  "neuf.fr",
  "ntlworld.com",
  "numericable.fr",
  "o2.pl",
  "o2online.de",
  "onet.pl",
  "online.de",
  "onliner.by",
  "ono.com",
  "optusnet.com.au",
  "orange.es",
  "orange.fr",
  "orange.net",
  "outlook.com",
  "outlook.de",
  "outlook.fr",
  "pm.me",
  "polka.co.za",
  "post.cz",
  "poste.it",
  "posteo.de",
  "proton.me",
  "protonmail.ch",
  "protonmail.com",
  "qq.com",
  "r7.com",
  "rambler.ru",
  "rediffmail.com",
  "rocketmail.com",
  "rogers.com",
  "runbox.com",
  "seznam.cz",
  "sfr.fr",
  "sharklasers.com",
  "shaw.ca",
  "sify.com",
  "sina.cn",
  "sina.com",
  "sky.com",
  "softbank.ne.jp",
  "sohu.com",
  "spam.la",
  "spam4.me",
  "spamfree24.org",
  "spamgourmet.com",
  "spamhereplease.com",
  "startmail.com",
  "supanet.com",
  "supereva.it",
  "sympatico.ca",
  "t-online.de",
  "talktalk.net",
  "telefonica.net",
  "telkomsa.net",
  "telus.net",
  "tempmail.com",
  "terra.com.br",
  "terra.es",
  "throwam.com",
  "tin.it",
  "tiscali.co.uk",
  "tiscali.it",
  "tlen.pl",
  "tom.com",
  "tpg.com.au",
  "trashmail.at",
  "trashmail.com",
  "trashmail.io",
  "tut.by",
  "tuta.io",
  "tutamail.com",
  "tutanota.com",
  "tutanota.de",
  "ukr.net",
  "uol.com.br",
  "videotron.ca",
  "vip.163.com",
  "vip.qq.com",
  "vip.sina.com",
  "virgilio.it",
  "virgin.net",
  "virginmedia.com",
  "vodafone.de",
  "vodamail.co.za",
  "vsnl.net",
  "wanadoo.co.uk",
  "wanadoo.fr",
  "web.de",
  "webmail.co.za",
  "westnet.com.au",
  "wp.pl",
  "ya.com",
  "yahoo.ca",
  "yahoo.co.in",
  "yahoo.co.jp",
  "yahoo.co.uk",
  "yahoo.co.za",
  "yahoo.com",
  "yahoo.com.ar",
  "yahoo.com.au",
  "yahoo.com.co",
  "yahoo.com.eg",
  "yahoo.com.hk",
  "yahoo.com.mx",
  "yahoo.com.my",
  "yahoo.com.ph",
  "yahoo.com.sg",
  "yahoo.com.tw",
  "yahoo.com.vn",
  "yahoo.de",
  "yahoo.es",
  "yahoo.fr",
  "yahoo.it",
  "yandex.by",
  "yandex.com",
  "yandex.kz",
  "yandex.ru",
  "yandex.ua",
  "yeah.net",
  "ymail.com",
  "yopmail.com",
  "zoho.com"
]);
const form = document.getElementById('requestForm');
if (!form) return;
const fields = {
  name: document.getElementById('name'),
  organization: document.getElementById('organization'),
  email: document.getElementById('email'),
  terms: document.getElementById('terms')
};
const errors = {
  name: document.getElementById('nameError'),
  organization: document.getElementById('organizationError'),
  email: document.getElementById('emailError'),
  terms: document.getElementById('termsError')
};
const globalError = document.getElementById('globalError');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clearErrors() {
  globalError.classList.remove('show');
  globalError.textContent = '';
  Object.values(errors).forEach(el => el.textContent = '');
}

function getDomain(email) {
  return email.trim().toLowerCase().split('@').pop().replace(/\.$/, '');
}

function isBlockedDomain(domain) {
  if (!domain) return true;
  if (bannedDomains.has(domain)) return true;
  for (const blocked of bannedDomains) {
    if (domain.endsWith('.' + blocked)) return true;
  }
  return false;
}

function validateForm() {
  clearErrors();
  let valid = true;

  if (!fields.name.value.trim()) {
    errors.name.textContent = 'User name is required.';
    valid = false;
  }

  if (!fields.organization.value.trim()) {
    errors.organization.textContent = 'Organization / Entity is required.';
    valid = false;
  }

  const email = fields.email.value.trim();
  const domain = getDomain(email);
  if (!email) {
    errors.email.textContent = 'Work email address is required.';
    valid = false;
  } else if (!emailRegex.test(email)) {
    errors.email.textContent = 'Please enter a valid email address.';
    valid = false;
  } else if (isBlockedDomain(domain)) {
    errors.email.textContent = 'Please use an official work email address. Personal, ISP, and disposable email domains are not accepted.';
    valid = false;
  }

  if (!fields.terms.checked) {
    errors.terms.textContent = 'Please accept the terms and conditions to submit the request.';
    valid = false;
  }

  if (!valid) {
    globalError.textContent = 'Please complete all required fields, use a valid work email address, and accept the terms and conditions.';
    globalError.classList.add('show');
  }

  return valid;
}

form.addEventListener('submit', async function(e) {
  e.preventDefault();

  if (!validateForm()) {
    return;
  }

  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;

  const now = new Date();
  document.getElementById('submittedAt').value = now.toLocaleString();
  document.getElementById('nextUrl').value = new URL('thank-you.html', window.location.href).href;

  const formData = new FormData(form);
  formData.set('access_key', '1b2ba46c-eeff-48ce-ac63-16761f4490c6');

  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();

    if (response.ok && data.success) {
      window.location.href = 'thank-you.html';
    } else {
      globalError.textContent = data.message || 'Submission failed. Please try again.';
      globalError.classList.add('show');
    }
  } catch (error) {
    globalError.textContent = 'Something went wrong. Please check your connection and try again.';
    globalError.classList.add('show');
  } finally {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }
});

})();
