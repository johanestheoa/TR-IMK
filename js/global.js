/* ===========================================================
   SIA.Sat — Global JS
   Satu file ini dipakai di semua halaman: membangun header +
   sidebar secara dinamis, navigasi antar halaman, toggle menu
   mobile, dan interaksi ringan tiap halaman.
=========================================================== */

(function () {
  "use strict";

  /* ---------- Icon set (feather-style inline SVG) ---------- */
  const ICONS = {
    cap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/></svg>',
    user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/></svg>',
    profil: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h4"/></svg>',
    jadwal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M8 3v3M16 3v3"/><circle cx="16" cy="15" r="2.3"/></svg>',
    transkrip: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>',
    presensi: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.3 2.3L15.5 9.6"/></svg>',
    keaktifan: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h5"/><path d="M14 15.5h4M16 13.5v4" stroke-linecap="round"/></svg>',
    skripsi: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5c3-1.5 6-1.5 8 0v14c-2-1.5-5-1.5-8 0V5Z"/><path d="M20 5c-3-1.5-6-1.5-8 0v14c2-1.5 5-1.5 8 0V5Z"/></svg>',
    registrasi: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>',
    tagihan: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h6"/></svg>',
    pembayaran: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="14" rx="2"/><path d="M3 9h18"/><path d="M7 21h10"/></svg>',
    lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>',
    help: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9.3 9a2.7 2.7 0 1 1 3.9 2.4c-.9.5-1.2 1-1.2 1.9"/><path d="M12 17h.01"/></svg>',
    logout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 16v-5M12 8h.01"/></svg>',
    qris: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM19 14h2v2h-2zM14 19h2v2h-2zM19 19h2v2h-2z"/></svg>',
    bank: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10 12 4l9 6"/><path d="M5 10v9M9 10v9M15 10v9M19 10v9"/><path d="M3 21h18"/></svg>',
    card: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>',
    va: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h4"/></svg>'
  };

  /* ---------- Navigation model ---------- */
  const NAV = [
    { key: "profil_mahasiswa",     label: "Profil Mahasiswa",     href: "profil_mahasiswa.html",     icon: "profil" },
    { key: "jadwal_kuliah",        label: "Jadwal Kuliah",        href: "jadwal_kuliah.html",        icon: "jadwal" },
    { key: "transkrip_nilai",      label: "Transkrip Nilai",      href: "transkrip_nilai.html",      icon: "transkrip" },
    { key: "absensi",              label: "Presensi",             href: "absensi.html",              icon: "presensi" },
    { key: "kredit_poin",          label: "Keaktifan Mahasiswa",  href: "kredit_poin.html",          icon: "keaktifan" },
    { key: "pendaftaran_skripsi",  label: "Pendaftaran Skripsi",  href: "pendaftaran_skripsi.html",  icon: "skripsi" },
    { key: "registrasi_matakuliah",label: "Registrasi Matakuliah",href: "registrasi_matakuliah.html",icon: "registrasi" },
    { key: "tagihan",              label: "Tagihan",              href: "tagihan.html",              icon: "tagihan" },
    { key: "pembayaran_tagihan",   label: "Pembayaran",           href: "pembayaran_tagihan.html",   icon: "pembayaran" }
  ];
  const NAV_SETTINGS = [
    { key: "ganti_password",       label: "Ganti Password",       href: "ganti_password.html",       icon: "lock" },
    { key: "pengajuan_dispensasi", label: "Pengajuan Dispen",     href: "pengajuan_dispensasi.html",  icon: "help" },
    { key: "logout",               label: "Keluar",               href: "login.html",                icon: "logout", danger: true }
  ];

  function navItemHTML(item, current) {
    const active = item.key === current ? " active" : "";
    const danger = item.danger ? " danger" : "";
    return `<a class="nav-item${active}${danger}" href="${item.href}">${ICONS[item.icon]}<span>${item.label}</span></a>`;
  }

  function buildTopbar() {
    const el = document.getElementById("topbar");
    if (!el) return;
    el.innerHTML = `
      <a class="topbar-brand" href="dashboard.html">${ICONS.cap}<span>SIA.Sat</span></a>
      <button class="topbar-burger" id="burgerBtn" aria-label="Buka menu">${ICONS.menu}</button>
    `;
  }

  function buildSidebar() {
    const el = document.getElementById("sidebar");
    if (!el) return;
    const current = document.body.getAttribute("data-page") || "";
    el.innerHTML = `
      <button class="sidebar-close" id="sidebarClose" aria-label="Tutup menu">${ICONS.close}</button>
      <div class="sidebar-user">
        <div class="sidebar-avatar">${ICONS.user}</div>
        <div class="sidebar-user-name">User</div>
        <div class="switch" id="themeSwitch" role="button" aria-label="Toggle"></div>
      </div>
      <nav class="nav-group">
        ${NAV.map(i => navItemHTML(i, current)).join("")}
        <div class="nav-label">Pengaturan</div>
        ${NAV_SETTINGS.map(i => navItemHTML(i, current)).join("")}
      </nav>
    `;
  }

  function wireMobileMenu() {
    const sidebar = document.getElementById("sidebar");
    const burger = document.getElementById("burgerBtn");
    const closeBtn = document.getElementById("sidebarClose");
    if (!sidebar || !burger) return;

    let backdrop = document.querySelector(".sidebar-backdrop");
    if (!backdrop) {
      backdrop = document.createElement("div");
      backdrop.className = "sidebar-backdrop";
      document.body.appendChild(backdrop);
    }

    function openMenu() {
      sidebar.classList.add("open");
      backdrop.classList.add("show");
    }
    function closeMenu() {
      sidebar.classList.remove("open");
      backdrop.classList.remove("show");
    }
    burger.addEventListener("click", openMenu);
    if (closeBtn) closeBtn.addEventListener("click", closeMenu);
    backdrop.addEventListener("click", closeMenu);
  }

  function applySidebarCollapsed(collapsed) {
    const sidebar = document.getElementById("sidebar");
    const sw = document.getElementById("themeSwitch");
    if (!sidebar) return;
    sidebar.classList.toggle("collapsed", collapsed);
    if (sw) sw.classList.toggle("on", collapsed);
  }

  function wireThemeSwitch() {
    const sw = document.getElementById("themeSwitch");
    if (!sw) return;
    const stored = localStorage.getItem("sidebarCollapsed") === "true";
    applySidebarCollapsed(stored);
    sw.addEventListener("click", () => {
      const collapsed = !document.getElementById("sidebar").classList.contains("collapsed");
      applySidebarCollapsed(collapsed);
      localStorage.setItem("sidebarCollapsed", collapsed);
    });
  }

  /* ---------- Page-specific light interactions ---------- */

  function wireForgotForm() {
    const form = document.getElementById("forgotForm");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Link reset password telah dikirim ke email Anda (simulasi).");
      window.location.href = "login.html";
    });
  }

  function wireGantiPassword() {
    const form = document.getElementById("gantiPasswordForm");
    if (!form) return;
    const newPass = document.getElementById("passwordBaru");
    const rules = document.querySelectorAll(".pw-rule");
    function evaluate() {
      const val = newPass.value || "";
      rules.forEach((rule) => {
        const type = rule.getAttribute("data-rule");
        const checkbox = rule.querySelector('input[type="checkbox"]');
        let ok = false;
        if (type === "length") ok = val.length >= 8;
        if (type === "case") ok = /[a-z]/.test(val) && /[A-Z]/.test(val);
        if (type === "number") ok = /[0-9]/.test(val);
        if (type === "symbol") ok = /[^A-Za-z0-9]/.test(val);
        checkbox.checked = ok;
      });
    }
    if (newPass) newPass.addEventListener("input", evaluate);
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Password berhasil diperbarui (simulasi).");
      window.location.href = "dashboard.html";
    });
  }

  function wireDashboardForm() {
    const form = document.getElementById("dataForm");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Data berhasil disimpan (simulasi).");
    });
  }

  function wireDispensasiForm() {
    const form = document.getElementById("dispensasiForm");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Pengajuan dispensasi berhasil dikirim (simulasi).");
      form.reset();
    });
  }

  function wireAbsensiButtons() {
    document.querySelectorAll(".presensi-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const cell = btn.closest("tr").querySelector(".status-cell");
        if (cell) cell.textContent = "Hadir";
        btn.textContent = "Terisi";
        btn.style.pointerEvents = "none";
        btn.style.opacity = ".6";
      });
    });
  }

  function wirePaymentButtons() {
    document.querySelectorAll(".bayar-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        alert("Mengarahkan ke metode pembayaran (simulasi).");
      });
    });
  }

  function wireTabs() {
    document.querySelectorAll(".tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
      });
    });
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    buildTopbar();
    buildSidebar();
    wireMobileMenu();
    wireThemeSwitch();
    wireLoginForm();
    wireForgotForm();
    wireGantiPassword();
    wireDashboardForm();
    wireDispensasiForm();
    wireAbsensiButtons();
    wirePaymentButtons();
    wireTabs();
  });
})();
