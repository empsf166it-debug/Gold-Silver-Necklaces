/**
 * AURELIA FINE JEWELRY - CORE APPLICATION ENGINE
 * Global Header, Footer, Drawers, Theme/RTL Controllers, 3D Interactions, and Modals
 */

const AureliaApp = {
  activeCurrency: "$",
  currencyRate: 1,

  init() {
    this.initThemeAndRTL();
    this.renderGlobalHeader();
    this.renderGlobalFooter();
    this.renderModalsAndDrawers();
    this.bindGlobalEvents();
    this.initAOS();
    this.init3DTilt();
    this.updateCounters();
  },

  /* -------------------------------------------------------------
     THEME & RTL CONTROLLERS
  ------------------------------------------------------------- */
  initThemeAndRTL() {
    // Theme
    const savedTheme = localStorage.getItem("aurelia_theme") || "light";
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // RTL
    const savedRTL = localStorage.getItem("aurelia_rtl") === "true";
    document.documentElement.setAttribute("dir", savedRTL ? "rtl" : "ltr");
    if (savedRTL) {
      document.documentElement.classList.add("rtl");
    } else {
      document.documentElement.classList.remove("rtl");
    }
  },

  toggleTheme() {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("aurelia_theme", isDark ? "dark" : "light");
    this.showToast(isDark ? "Switched to Deep Charcoal Dark Mode" : "Switched to Warm Ivory Light Mode", "gold");
    this.updateThemeIcons();
  },

  toggleRTL() {
    const current = document.documentElement.getAttribute("dir") === "rtl";
    const nextRtl = !current;
    document.documentElement.setAttribute("dir", nextRtl ? "rtl" : "ltr");
    localStorage.setItem("aurelia_rtl", nextRtl ? "true" : "false");
    this.showToast(nextRtl ? "RTL Layout Activated" : "LTR Layout Activated", "silver");
    this.updateRTLButton();
  },

  updateThemeIcons() {
    const isDark = document.documentElement.classList.contains("dark");
    const icons = document.querySelectorAll(".theme-toggle-icon");
    icons.forEach(el => {
      el.innerHTML = isDark
        ? `<svg class="w-4 h-4 text-[#ECC880]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`
        : `<svg class="w-4 h-4 text-[#C6A15B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>`;
    });
  },

  updateRTLButton() {
    const isRtl = document.documentElement.getAttribute("dir") === "rtl";
    const labels = document.querySelectorAll(".rtl-toggle-text");
    labels.forEach(el => {
      el.textContent = isRtl ? "LTR" : "RTL";
    });
  },

  /* -------------------------------------------------------------
     GLOBAL HEADER
  ------------------------------------------------------------- */
  renderGlobalHeader() {
    const headerContainer = document.getElementById("aurelia-header");
    if (!headerContainer) return;

    const currentPath = window.location.pathname.toLowerCase();
    const isHome = currentPath.endsWith("index.html") || currentPath.endsWith("/") || currentPath === "";
    const isShop = currentPath.includes("shop.html");
    const isProduct = currentPath.includes("product.html");
    const isCollections = currentPath.includes("collections.html");
    const isCustomStudio = currentPath.includes("custom-studio.html");
    const isAbout = currentPath.includes("about.html");
    const isLogin = currentPath.includes("login.html");

    headerContainer.innerHTML = `
      <header id="main-header" class="fixed top-0 left-0 w-full z-40 transition-all duration-300 ${isHome ? 'header-transparent' : 'glass-header shadow-sm'}">
        <!-- Main Navigation Bar -->
        <div class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-20">
            <!-- Left: Brand Logo & Name -->
            <div class="flex items-center flex-shrink-0">
              <a href="index.html" class="group flex flex-col items-start text-left rtl:text-right">
                <div class="flex items-center gap-2 sm:gap-2.5">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-gold)] transition-transform duration-500 group-hover:rotate-45 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12,2 22,12 12,22 2,12" stroke="currentColor" stroke-width="1.2" fill="none"/>
                    <circle cx="12" cy="12" r="2.5" fill="currentColor"/>
                  </svg>
                  <span class="header-logo-text font-serif text-xl sm:text-2xl md:text-3xl tracking-[0.2em] sm:tracking-[0.25em] font-bold transition-colors">AURELIA</span>
                </div>
                <span class="font-sans text-[8px] sm:text-[9px] tracking-[0.35em] sm:tracking-[0.45em] uppercase text-[var(--color-gold)] -mt-1 pl-7 sm:pl-8 rtl:pl-0 rtl:pr-7 sm:rtl:pr-8 font-medium">Fine Jewelry</span>
              </a>
            </div>

            <!-- Center: Desktop Navigation Links (Desktop View Only: lg and above) -->
            <nav class="hidden lg:flex items-center space-x-6 xl:space-x-10 rtl:space-x-reverse font-sans text-xs uppercase tracking-[0.2em] font-medium">
              <a href="index.html" class="header-nav-link transition-colors py-2 ${isHome ? 'active font-bold text-[var(--color-gold)]' : ''}">Home</a>
              <a href="about.html" class="header-nav-link transition-colors py-2 ${isAbout ? 'active font-bold text-[var(--color-gold)]' : ''}">About</a>
              <a href="shop.html" class="header-nav-link transition-colors py-2 ${isShop ? 'active font-bold text-[var(--color-gold)]' : ''}">Shop</a>
              <a href="collections.html" class="header-nav-link transition-colors py-2 ${isCollections ? 'active font-bold text-[var(--color-gold)]' : ''}">Collections</a>
              <a href="custom-studio.html" class="header-nav-link transition-colors py-2 flex items-center gap-1.5 group ${isCustomStudio ? 'active font-bold text-[var(--color-gold)]' : ''}">
                <span>Custom Studio</span>
                <span class="text-[9px] px-1.5 py-0.5 rounded bg-[var(--color-gold)] text-black font-bold tracking-wider leading-none">3D</span>
              </a>
            </nav>

            <!-- Right: Action Controls (Desktop + Tablet + Mobile) -->
            <div class="flex items-center space-x-1 sm:space-x-2 md:space-x-3 rtl:space-x-reverse flex-shrink-0">
              <!-- Quick Action Icons (Visible on desktop; on mobile & tablet these are accessible inside the hamburger menu) -->
              <div class="hidden lg:flex items-center space-x-1 sm:space-x-1.5 lg:space-x-2 rtl:space-x-reverse">
                <button onclick="AureliaApp.openSearch()" aria-label="Search" class="header-icon-btn p-2 hover:text-[var(--color-gold)] transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                </button>

                <button onclick="AureliaApp.openWishlist()" aria-label="Wishlist" class="header-icon-btn p-2 hover:text-[var(--color-gold)] transition-colors relative">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                  <span class="wishlist-badge-count absolute -top-1 -right-1 bg-[var(--color-gold)] text-black text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
                </button>

                <button onclick="AureliaApp.openCart()" aria-label="Shopping Bag" class="header-icon-btn p-2 hover:text-[var(--color-gold)] transition-colors relative">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                  <span class="cart-badge-count absolute -top-1 -right-1 bg-[var(--color-gold)] text-black text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
                </button>

                <a href="login.html" aria-label="Account" class="header-icon-btn p-2 hover:text-[var(--color-gold)] transition-colors relative ${isLogin ? 'text-[var(--color-gold)]' : ''}">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                  <span class="auth-status-indicator hidden absolute top-1 right-1 w-2 h-2 rounded-full bg-emerald-500"></span>
                </a>
              </div>

              <!-- Theme Toggle Button with Highlighted Shape Badge -->
              <button id="header-theme-btn" onclick="AureliaApp.toggleTheme()" aria-label="Toggle Light/Dark Theme" class="header-icon-btn hover:text-[var(--color-gold)] transition-all">
                <span class="theme-toggle-icon flex items-center justify-center"></span>
              </button>

              <!-- Hamburger Menu Icon (Tablet & Mobile: visible up to lg breakpoint) -->
              <button id="mobile-menu-btn" onclick="AureliaApp.openMobileMenu()" aria-label="Open Navigation Menu" class="lg:hidden header-icon-btn p-2 hover:text-[var(--color-gold)] transition-colors flex items-center justify-center">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M4 6h16M4 12h16M4 18h16"/></svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <!-- Scroll Spacer for Fixed Header -->
      <div class="h-20"></div>
    `;

    // Dynamic scroll styling
    const handleScroll = () => {
      const header = document.getElementById("main-header");
      if (!header) return;
      if (window.scrollY > 40) {
        header.classList.remove("header-transparent");
        header.classList.add("glass-header", "shadow-sm");
      } else if (isHome) {
        header.classList.add("header-transparent");
        header.classList.remove("glass-header", "shadow-sm");
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    this.updateThemeIcons();
    this.updateRTLButton();
    this.updateAuthIndicator();
    this.updateCounters();
  },

  updateAuthIndicator() {
    const indicators = document.querySelectorAll(".auth-status-indicator, #auth-status-indicator");
    const user = StorageManager.getUser();
    indicators.forEach(indicator => {
      if (user) {
        indicator.classList.remove("hidden");
      } else {
        indicator.classList.add("hidden");
      }
    });
  },

  /* -------------------------------------------------------------
     GLOBAL FOOTER (Shared across all 5 pages)
  ------------------------------------------------------------- */
  renderGlobalFooter() {
    const footerContainer = document.getElementById("aurelia-footer");
    if (!footerContainer) return;

    footerContainer.innerHTML = `
      <footer class="bg-[var(--bg-secondary)] border-t border-[var(--border-color)] text-[var(--text-secondary)] pt-16 pb-6 transition-colors duration-400">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <!-- Top Footer Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[var(--border-subtle)]">
            <!-- Brand Column -->
            <div class="lg:col-span-2 space-y-5">
              <a href="index.html" class="inline-flex items-center gap-2 group cursor-pointer" aria-label="AURELIA Home">
                <svg class="w-6 h-6 text-[var(--color-gold)] transition-transform duration-500 group-hover:rotate-45 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12,2 22,12 12,22 2,12" stroke="currentColor" stroke-width="1.2" fill="none"/>
                  <circle cx="12" cy="12" r="2.5" fill="currentColor"/>
                </svg>
                <span class="font-serif text-3xl tracking-[0.2em] font-bold text-[var(--text-primary)] group-hover:text-[var(--color-gold)] transition-colors">AURELIA</span>
              </a>
              <p class="text-sm font-light leading-relaxed max-w-sm text-[var(--text-secondary)]">
                Purveyors of master-crafted 18K solid gold and 925 sterling silver necklaces. Forged with architectural integrity and eternal radiance at our Geneva ateliers since 1994.
              </p>
              <div class="flex items-center space-x-4 rtl:space-x-reverse pt-2">
                <a href="#" class="w-9 h-9 rounded-full border border-[var(--border-color)] flex items-center justify-center hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors" aria-label="Instagram">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" class="w-9 h-9 rounded-full border border-[var(--border-color)] flex items-center justify-center hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors" aria-label="Pinterest">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.357-.053.218-.174.265-.402.16-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
                </a>
                <a href="#" class="w-9 h-9 rounded-full border border-[var(--border-color)] flex items-center justify-center hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors" aria-label="Facebook">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                </a>
              </div>
            </div>

            <!-- Col 2: The Collections -->
            <div class="space-y-4">
              <h4 class="font-serif text-lg font-bold text-[var(--text-primary)] tracking-wider uppercase">Collections</h4>
              <ul class="space-y-2.5 text-xs uppercase tracking-widest">
                <li><a href="about.html" class="hover:text-[var(--color-gold)] font-semibold transition-colors">About Our Atelier</a></li>
                <li><a href="shop.html?metal=gold" class="hover:text-[var(--color-gold)] transition-colors">18K Gold Classics</a></li>
                <li><a href="shop.html?metal=silver" class="hover:text-[var(--color-silver)] transition-colors">925 Sterling Silver</a></li>
                <li><a href="shop.html?style=pendant" class="hover:text-[var(--color-gold)] transition-colors">Pendant Medallions</a></li>
                <li><a href="shop.html?style=layered" class="hover:text-[var(--color-gold)] transition-colors">Layered Cascades</a></li>
                <li><a href="custom-studio.html" class="hover:text-[var(--color-gold)] text-[var(--color-gold)] font-medium transition-colors">Bespoke 3D Studio</a></li>
              </ul>
            </div>

            <!-- Col 3: Client Care -->
            <div class="space-y-4">
              <h4 class="font-serif text-lg font-bold text-[var(--text-primary)] tracking-wider uppercase">Client Care</h4>
              <ul class="space-y-2.5 text-xs uppercase tracking-widest">
                <li><a href="product.html?id=aurelia-solitaire-gold#sizing-guide" class="hover:text-[var(--color-gold)] transition-colors">Necklace Sizing Guide</a></li>
                <li><a href="login.html" class="hover:text-[var(--color-gold)] transition-colors">Order Tracking</a></li>
                <li><a href="product.html?id=aurelia-solitaire-gold#jewelry-care" class="hover:text-[var(--color-gold)] transition-colors">Precious Metal Care</a></li>
                <li><a href="collections.html#gift-guide" class="hover:text-[var(--color-gold)] transition-colors">Bespoke Gift Service</a></li>
                <li><a href="login.html?tab=admin" class="hover:text-[var(--color-gold)] text-[var(--text-muted)] transition-colors">Atelier Staff Access</a></li>
              </ul>
            </div>

            <!-- Col 4: Atelier Newsletter -->
            <div class="space-y-4">
              <h4 class="font-serif text-lg font-bold text-[var(--text-primary)] tracking-wider uppercase">Atelier Gazette</h4>
              <p class="text-xs leading-relaxed text-[var(--text-secondary)]">
                Receive private invitations to preview limited edition seasonal releases and bespoke salon appointments.
              </p>
              <form id="newsletter-form" onsubmit="AureliaApp.handleNewsletter(event)" class="space-y-2">
                <div class="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    class="w-full bg-[var(--bg-surface)] border border-[var(--border-color)] px-4 py-2.5 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--color-gold)] transition-colors"
                  />
                  <button type="submit" class="absolute right-1 top-1 bottom-1 px-3 bg-[var(--color-gold)] text-black text-xs font-semibold uppercase tracking-wider hover:bg-[#ECC880] transition-colors rtl:right-auto rtl:left-1">
                    Join
                  </button>
                </div>
                <p class="text-[10px] text-[var(--text-muted)]">By subscribing, you agree to our Privacy Policy & Salon Etiquette.</p>
              </form>
            </div>
          </div>

          <!-- Bottom Footer Details -->
          <div class="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[var(--text-muted)] gap-4">
            <div class="flex flex-wrap items-center gap-3 sm:gap-6 rtl:space-x-reverse justify-center md:justify-start">
              <span>© ${new Date().getFullYear()} AURELIA HAUTE JOAILLERIE. All Rights Reserved.</span>
              <span class="hidden md:inline">•</span>
              <span class="hidden md:inline">Hallmarked & Assayed in Geneva</span>
            </div>
            <div class="flex items-center space-x-4 rtl:space-x-reverse">
              <span class="text-[var(--color-gold)] text-[11px] font-medium">100% CONFLICT-FREE GEMS &amp; ETHICAL GOLD</span>
              <button
                id="back-to-top-btn"
                type="button"
                aria-label="Back to top"
                title="Back to top"
                onclick="window.scrollTo({ top: 0, behavior: 'smooth' })"
                class="group w-10 h-10 rounded-full border border-[var(--color-gold)] text-[var(--color-gold)] flex items-center justify-center hover:bg-[var(--color-gold)] hover:text-black hover:-translate-y-1 transition-all duration-300"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/></svg>
              </button>
            </div>
          </div>
        </div>
      </footer>
    `;
  },

  handleNewsletter(e) {
    e.preventDefault();
    const input = e.target.querySelector("input[type='email']");
    if (input && input.value) {
      this.showToast(`Thank you for subscribing to the Aurelia Gazette: ${input.value}`, "gold");
      input.value = "";
    }
  },

  /* -------------------------------------------------------------
     MODALS & DRAWERS (Search, Cart, Wishlist, QuickView, Checkout, Mobile Menu)
  ------------------------------------------------------------- */
  renderModalsAndDrawers() {
    let container = document.getElementById("aurelia-interactive-overlays");
    if (!container) {
      container = document.createElement("div");
      container.id = "aurelia-interactive-overlays";
      document.body.appendChild(container);
    }

    const currentPath = window.location.pathname.toLowerCase();
    const isHome = currentPath.endsWith("index.html") || currentPath.endsWith("/") || currentPath === "";
    const isShop = currentPath.includes("shop.html");
    const isCollections = currentPath.includes("collections.html");
    const isCustomStudio = currentPath.includes("custom-studio.html");
    const isLogin = currentPath.includes("login.html");

    container.innerHTML = `
      <!-- BACKDROP -->
      <div id="drawer-backdrop" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 opacity-0 pointer-events-none transition-opacity duration-300"></div>

      <!-- SEARCH DRAWER / MODAL -->
      <div id="search-modal" class="fixed top-0 left-0 w-full bg-[var(--bg-surface)] border-b border-[var(--border-color)] z-50 transform -translate-y-full transition-transform duration-400 shadow-2xl">
        <div class="max-w-4xl mx-auto px-6 py-8">
          <div class="flex items-center justify-between border-b border-[var(--border-color)] pb-4">
            <div class="flex items-center gap-3 w-full">
              <svg class="w-6 h-6 text-[var(--color-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              <input
                id="search-input"
                type="text"
                placeholder="Search gold & silver necklaces, pendants, chokers..."
                class="w-full bg-transparent text-xl font-serif text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none"
              />
            </div>
            <button onclick="AureliaApp.closeSearch()" class="p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
          <div id="search-results-box" class="pt-6 max-h-[60vh] overflow-y-auto space-y-3">
            <p class="text-xs uppercase tracking-widest text-[var(--text-muted)]">Type above or browse popular tags:</p>
            <div class="flex flex-wrap gap-2 pt-2">
              <button onclick="AureliaApp.quickSearch('gold')" class="px-3 py-1 text-xs border border-[var(--border-color)] hover:border-[var(--color-gold)] text-[var(--text-secondary)]">18K Gold</button>
              <button onclick="AureliaApp.quickSearch('silver')" class="px-3 py-1 text-xs border border-[var(--border-color)] hover:border-[var(--color-silver)] text-[var(--text-secondary)]">925 Silver</button>
              <button onclick="AureliaApp.quickSearch('choker')" class="px-3 py-1 text-xs border border-[var(--border-color)] hover:border-[var(--color-gold)] text-[var(--text-secondary)]">Chokers</button>
              <button onclick="AureliaApp.quickSearch('diamond')" class="px-3 py-1 text-xs border border-[var(--border-color)] hover:border-[var(--color-gold)] text-[var(--text-secondary)]">Diamond Solitaire</button>
              <button onclick="AureliaApp.quickSearch('layered')" class="px-3 py-1 text-xs border border-[var(--border-color)] hover:border-[var(--color-gold)] text-[var(--text-secondary)]">Layered Chains</button>
            </div>
          </div>
        </div>
      </div>

      <!-- SHOPPING CART SLIDE-OUT DRAWER -->
      <div id="cart-drawer" class="fixed top-0 right-0 w-full sm:w-[460px] h-full bg-[var(--bg-surface)] border-l border-[var(--border-color)] z-50 transform translate-x-full transition-transform duration-400 flex flex-col shadow-2xl drawer-slide-right">
        <!-- Cart Header -->
        <div class="p-6 border-b border-[var(--border-subtle)] flex items-center justify-between">
          <div class="flex items-center gap-3">
            <span class="font-serif text-2xl font-bold tracking-wider text-[var(--text-primary)]">Shopping Bag</span>
            <span id="cart-drawer-count" class="text-xs px-2 py-0.5 rounded-full bg-[var(--border-color)] text-[var(--color-gold)] font-bold">0</span>
          </div>
          <button onclick="AureliaApp.closeCart()" class="p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)]">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>

        <!-- Free Insured Delivery Progress Indicator -->
        <div class="bg-[var(--bg-secondary)] px-6 py-3 border-b border-[var(--border-subtle)]">
          <div class="flex items-center justify-between text-xs mb-1.5">
            <span id="shipping-progress-text" class="text-[var(--text-secondary)] font-medium">Spend $500 for Free Armored Express</span>
            <span id="shipping-progress-percent" class="text-[var(--color-gold)] font-bold">0%</span>
          </div>
          <div class="w-full bg-[var(--border-color)] h-1 rounded-full overflow-hidden">
            <div id="shipping-progress-bar" class="bg-[var(--color-gold)] h-full transition-all duration-500" style="width: 0%"></div>
          </div>
        </div>

        <!-- Cart Items List -->
        <div id="cart-items-container" class="flex-1 overflow-y-auto p-6 space-y-6">
          <!-- Dynamically populated -->
        </div>

        <!-- Cart Footer / Subtotal / Checkout -->
        <div id="cart-footer" class="p-6 border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)] space-y-4">
          <div class="flex items-center justify-between text-sm">
            <span class="text-[var(--text-secondary)] tracking-wider uppercase text-xs">Subtotal</span>
            <span id="cart-subtotal" class="font-serif text-xl font-bold text-[var(--text-primary)]">$0.00</span>
          </div>
          <p class="text-[11px] text-[var(--text-muted)] text-center">Taxes & customs duties calculated upon checkout.</p>
          <button onclick="AureliaApp.openCheckoutModal()" class="w-full py-3.5 btn-luxury-gold text-xs font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-2">
            <span>Proceed to Secure Checkout</span>
            <svg class="w-4 h-4 rtl-mirror" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </button>
        </div>
      </div>

      <!-- WISHLIST SLIDE-OUT DRAWER -->
      <div id="wishlist-drawer" class="fixed top-0 right-0 w-full sm:w-[460px] h-full bg-[var(--bg-surface)] border-l border-[var(--border-color)] z-50 transform translate-x-full transition-transform duration-400 flex flex-col shadow-2xl drawer-slide-right">
        <div class="p-6 border-b border-[var(--border-subtle)] flex items-center justify-between">
          <div class="flex items-center gap-3">
            <span class="font-serif text-2xl font-bold tracking-wider text-[var(--text-primary)]">My Wishlist</span>
            <span id="wishlist-drawer-count" class="text-xs px-2 py-0.5 rounded-full bg-[var(--border-color)] text-[var(--color-gold)] font-bold">0</span>
          </div>
          <button onclick="AureliaApp.closeWishlist()" class="p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)]">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
        <div id="wishlist-items-container" class="flex-1 overflow-y-auto p-6 space-y-4">
          <!-- Dynamically populated -->
        </div>
      </div>

      <!-- HAMBURGER MENU DRAWER (Opens from Right) -->
      <div id="mobile-menu-drawer" class="fixed top-0 right-0 w-80 sm:w-96 max-w-[85vw] h-full bg-[var(--bg-surface)] border-l border-[var(--border-color)] z-50 transform translate-x-full transition-transform duration-400 flex flex-col shadow-2xl drawer-slide-right">
        <div class="p-6 border-b border-[var(--border-subtle)] flex items-center justify-between">
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-[var(--color-gold)]" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="12,2 22,12 12,22 2,12" stroke="currentColor" stroke-width="1.2" fill="none"/>
              <circle cx="12" cy="12" r="2.5" fill="currentColor"/>
            </svg>
            <span class="font-serif text-xl tracking-widest font-bold text-[var(--text-primary)]">AURELIA</span>
          </div>
          <button onclick="AureliaApp.closeMobileMenu()" aria-label="Close Menu" class="p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>

        <!-- Quick Action Icons Strip (Search, Wishlist, Bag, Account) -->
        <div class="px-6 py-4 border-b border-[var(--border-subtle)] bg-[var(--bg-secondary)] flex items-center justify-between text-[var(--text-primary)]">
          <button id="mobile-search-btn" onclick="AureliaApp.closeMobileMenu(); AureliaApp.openSearch()" aria-label="Search Fine Necklaces" class="p-2 hover:text-[var(--color-gold)] transition-colors flex flex-col items-center gap-1">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            <span class="text-[10px] uppercase tracking-wider font-semibold">Search</span>
          </button>

          <button id="mobile-wishlist-btn" onclick="AureliaApp.closeMobileMenu(); AureliaApp.openWishlist()" aria-label="View Wishlist" class="p-2 hover:text-[var(--color-gold)] transition-colors flex flex-col items-center gap-1 relative">
            <div class="relative">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
              <span class="wishlist-badge-count absolute -top-1.5 -right-2 bg-[var(--color-gold)] text-black text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </div>
            <span class="text-[10px] uppercase tracking-wider font-semibold">Wishlist</span>
          </button>

          <button id="mobile-cart-btn" onclick="AureliaApp.closeMobileMenu(); AureliaApp.openCart()" aria-label="View Shopping Cart" class="p-2 hover:text-[var(--color-gold)] transition-colors flex flex-col items-center gap-1 relative">
            <div class="relative">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
              <span class="cart-badge-count absolute -top-1.5 -right-2 bg-[var(--color-gold)] text-black text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </div>
            <span class="text-[10px] uppercase tracking-wider font-semibold">Bag</span>
          </button>

          <a href="login.html" id="mobile-account-btn" aria-label="Customer or Admin Account" class="p-2 hover:text-[var(--color-gold)] transition-colors flex flex-col items-center gap-1 relative">
            <div class="relative">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
              <span class="auth-status-indicator hidden absolute top-0 right-0 w-2 h-2 rounded-full bg-emerald-500"></span>
            </div>
            <span class="text-[10px] uppercase tracking-wider font-semibold">Account</span>
          </a>
        </div>

        <!-- Navigation Links -->
        <nav class="p-6 space-y-5 text-sm uppercase tracking-[0.2em] font-medium text-[var(--text-primary)] flex-1 overflow-y-auto">
          <a href="index.html" class="flex items-center justify-between py-2 transition-colors ${isHome ? 'text-[var(--color-gold)] font-bold' : 'hover:text-[var(--color-gold)]'}">
            <span>Home</span>
            ${isHome ? '<span class="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]"></span>' : ''}
          </a>
          <a href="about.html" class="flex items-center justify-between py-2 transition-colors ${isAbout ? 'text-[var(--color-gold)] font-bold' : 'hover:text-[var(--color-gold)]'}">
            <span>About</span>
            ${isAbout ? '<span class="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]"></span>' : ''}
          </a>
          <a href="shop.html" class="flex items-center justify-between py-2 transition-colors ${isShop ? 'text-[var(--color-gold)] font-bold' : 'hover:text-[var(--color-gold)]'}">
            <span>Shop</span>
            ${isShop ? '<span class="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]"></span>' : ''}
          </a>
          <a href="collections.html" class="flex items-center justify-between py-2 transition-colors ${isCollections ? 'text-[var(--color-gold)] font-bold' : 'hover:text-[var(--color-gold)]'}">
            <span>Collections</span>
            ${isCollections ? '<span class="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]"></span>' : ''}
          </a>
          <a href="custom-studio.html" class="flex items-center justify-between py-2 transition-colors ${isCustomStudio ? 'text-[var(--color-gold)] font-bold' : 'hover:text-[var(--color-gold)]'}">
            <div class="flex items-center gap-2">
              <span>Custom Studio</span>
              <span class="text-[9px] px-1.5 py-0.5 rounded bg-[var(--color-gold)] text-black font-bold tracking-wider leading-none">3D</span>
            </div>
            ${isCustomStudio ? '<span class="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]"></span>' : ''}
          </a>
        </nav>

        <!-- Footer inside drawer -->
        <div class="mt-auto p-5 border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
          <div class="text-[10px] text-[var(--text-muted)] tracking-widest uppercase text-center">
            Haute Joaillerie Atelier • Geneva
          </div>
        </div>
      </div>

      <!-- QUICK VIEW PRODUCT MODAL -->
      <div id="quick-view-modal" class="fixed inset-0 z-50 flex items-center justify-center p-4 opacity-0 pointer-events-none transition-opacity duration-300">
        <div class="bg-[var(--bg-surface)] border border-[var(--border-color)] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-none shadow-2xl relative p-6 sm:p-8">
          <button onclick="AureliaApp.closeQuickView()" class="absolute top-4 right-4 rtl:right-auto rtl:left-4 p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] z-10">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
          <div id="quick-view-content" class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <!-- Dynamically populated -->
          </div>
        </div>
      </div>

      <!-- CHECKOUT MODAL (DEMO WORKFLOW) -->
      <div id="checkout-modal" class="fixed inset-0 z-50 flex items-center justify-center p-4 opacity-0 pointer-events-none transition-opacity duration-300">
        <div class="bg-[var(--bg-surface)] border border-[var(--border-color)] w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-10">
          <button onclick="AureliaApp.closeCheckoutModal()" class="absolute top-4 right-4 rtl:right-auto rtl:left-4 p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)]">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>

          <!-- Clear Demo Notice -->
          <div class="mb-6 p-3.5 bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs flex items-start gap-2.5">
            <svg class="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <div>
              <strong class="font-bold tracking-wider uppercase">Atelier Demonstration Mode:</strong>
              This checkout simulates real fine jewelry ordering, inventory deduction, and customer tracking without charging credit cards.
            </div>
          </div>

          <div id="checkout-body">
            <!-- Form populated by checkout renderer -->
          </div>
        </div>
      </div>

      <!-- TOAST CONTAINER -->
      <div id="aurelia-toast-container"></div>
    `;
  },

  /* -------------------------------------------------------------
     EVENT BINDINGS
  ------------------------------------------------------------- */
  bindGlobalEvents() {
    // Backdrop click
    const backdrop = document.getElementById("drawer-backdrop");
    if (backdrop) {
      backdrop.addEventListener("click", () => {
        this.closeAllDrawers();
      });
    }

    // Header buttons
    const searchBtn = document.getElementById("header-search-btn");
    if (searchBtn) searchBtn.addEventListener("click", () => this.openSearch());

    const cartBtn = document.getElementById("header-cart-btn");
    if (cartBtn) cartBtn.addEventListener("click", () => this.openCart());

    const wishlistBtn = document.getElementById("header-wishlist-btn");
    if (wishlistBtn) wishlistBtn.addEventListener("click", () => this.openWishlist());

    const mobileBtn = document.getElementById("mobile-menu-btn");
    if (mobileBtn) mobileBtn.addEventListener("click", () => this.openMobileMenu());

    // Search input listener
    const searchInput = document.getElementById("search-input");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => this.handleSearchInput(e.target.value));
    }

    // Storage listeners
    window.addEventListener("aurelia:cart-updated", () => {
      this.updateCounters();
      this.renderCartDrawer();
    });

    window.addEventListener("aurelia:wishlist-updated", () => {
      this.updateCounters();
      this.renderWishlistDrawer();
    });

    window.addEventListener("aurelia:auth-changed", () => {
      this.updateAuthIndicator();
    });
  },

  /* -------------------------------------------------------------
     SEARCH LOGIC
  ------------------------------------------------------------- */
  openSearch() {
    this.closeAllDrawers();
    const modal = document.getElementById("search-modal");
    const backdrop = document.getElementById("drawer-backdrop");
    if (modal && backdrop) {
      backdrop.classList.remove("opacity-0", "pointer-events-none");
      modal.classList.remove("-translate-y-full");
      setTimeout(() => document.getElementById("search-input")?.focus(), 150);
    }
  },

  closeSearch() {
    const modal = document.getElementById("search-modal");
    const backdrop = document.getElementById("drawer-backdrop");
    if (modal && backdrop) {
      backdrop.classList.add("opacity-0", "pointer-events-none");
      modal.classList.add("-translate-y-full");
    }
  },

  quickSearch(term) {
    const input = document.getElementById("search-input");
    if (input) {
      input.value = term;
      this.handleSearchInput(term);
    }
  },

  handleSearchInput(query) {
    const resultsBox = document.getElementById("search-results-box");
    if (!resultsBox) return;

    const trimmed = query.trim().toLowerCase();
    if (!trimmed) {
      resultsBox.innerHTML = `
        <p class="text-xs uppercase tracking-widest text-[var(--text-muted)]">Type above or browse popular tags:</p>
        <div class="flex flex-wrap gap-2 pt-2">
          <button onclick="AureliaApp.quickSearch('gold')" class="px-3 py-1 text-xs border border-[var(--border-color)] hover:border-[var(--color-gold)] text-[var(--text-secondary)]">18K Gold</button>
          <button onclick="AureliaApp.quickSearch('silver')" class="px-3 py-1 text-xs border border-[var(--border-color)] hover:border-[var(--color-silver)] text-[var(--text-secondary)]">925 Silver</button>
          <button onclick="AureliaApp.quickSearch('choker')" class="px-3 py-1 text-xs border border-[var(--border-color)] hover:border-[var(--color-gold)] text-[var(--text-secondary)]">Chokers</button>
          <button onclick="AureliaApp.quickSearch('pendant')" class="px-3 py-1 text-xs border border-[var(--border-color)] hover:border-[var(--color-gold)] text-[var(--text-secondary)]">Pendants</button>
        </div>
      `;
      return;
    }

    const products = StorageManager.getProducts();
    const matches = products.filter(p =>
      p.name.toLowerCase().includes(trimmed) ||
      p.metal.toLowerCase().includes(trimmed) ||
      p.style.toLowerCase().includes(trimmed) ||
      p.description.toLowerCase().includes(trimmed)
    );

    if (matches.length === 0) {
      resultsBox.innerHTML = `
        <div class="text-center py-8 text-[var(--text-muted)]">
          <p class="font-serif text-lg">No fine necklaces matching "${query}"</p>
          <p class="text-xs mt-1">Try searching for "Gold", "Silver", "Choker", or "Solitaire"</p>
        </div>
      `;
      return;
    }

    resultsBox.innerHTML = `
      <div class="text-xs text-[var(--text-muted)] mb-3 uppercase tracking-wider">${matches.length} Necklaces Found</div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        ${matches.map(p => `
          <a href="product.html?id=${p.id}" class="flex items-center gap-4 p-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-[var(--color-gold)] transition-colors group">
            <img src="${p.image}" alt="${p.name}" class="w-16 h-16 object-cover object-center flex-shrink-0" />
            <div>
              <div class="text-[10px] uppercase tracking-wider text-[var(--color-gold)] font-medium">${p.metalType}</div>
              <h5 class="font-serif text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--color-gold)] transition-colors">${p.name}</h5>
              <div class="text-xs font-semibold text-[var(--text-primary)] mt-1">$${p.price.toLocaleString()}</div>
            </div>
          </a>
        `).join('')}
      </div>
    `;
  },

  /* -------------------------------------------------------------
     CART LOGIC & DRAWER
  ------------------------------------------------------------- */
  openCart() {
    this.closeAllDrawers();
    this.renderCartDrawer();
    const drawer = document.getElementById("cart-drawer");
    const backdrop = document.getElementById("drawer-backdrop");
    if (drawer && backdrop) {
      backdrop.classList.remove("opacity-0", "pointer-events-none");
      drawer.classList.remove("translate-x-full");
    }
  },

  closeCart() {
    const drawer = document.getElementById("cart-drawer");
    const backdrop = document.getElementById("drawer-backdrop");
    if (drawer && backdrop) {
      backdrop.classList.add("opacity-0", "pointer-events-none");
      drawer.classList.add("translate-x-full");
    }
  },

  renderCartDrawer() {
    const container = document.getElementById("cart-items-container");
    const countEl = document.getElementById("cart-drawer-count");
    const subtotalEl = document.getElementById("cart-subtotal");
    const footerEl = document.getElementById("cart-footer");
    if (!container) return;

    const cart = StorageManager.getCart();
    const subtotal = StorageManager.getCartSubtotal();
    const count = StorageManager.getCartCount();

    if (countEl) countEl.textContent = count;
    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;

    // Update free delivery indicator ($500 threshold)
    const threshold = 500;
    const progressPercent = Math.min(100, Math.round((subtotal / threshold) * 100));
    const progressBar = document.getElementById("shipping-progress-bar");
    const progressText = document.getElementById("shipping-progress-text");
    const progressPercentEl = document.getElementById("shipping-progress-percent");

    if (progressBar) progressBar.style.width = `${progressPercent}%`;
    if (progressPercentEl) progressPercentEl.textContent = `${progressPercent}%`;
    if (progressText) {
      if (subtotal >= threshold) {
        progressText.innerHTML = `✓ <strong>Qualified for Free Armored Express Shipping</strong>`;
      } else {
        const remaining = threshold - subtotal;
        progressText.textContent = `Add $${remaining.toLocaleString(undefined, { minimumFractionDigits: 2 })} more for Free Armored Express`;
      }
    }

    if (cart.length === 0) {
      container.innerHTML = `
        <div class="text-center py-16 text-[var(--text-muted)] space-y-4">
          <svg class="w-12 h-12 mx-auto stroke-current text-[var(--border-color)]" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
          <p class="font-serif text-xl text-[var(--text-primary)]">Your shopping bag is empty</p>
          <p class="text-xs max-w-xs mx-auto">Explore our master-crafted 18K gold and 925 silver necklaces to begin your curated collection.</p>
          <a href="shop.html" onclick="AureliaApp.closeCart()" class="inline-block mt-2 px-6 py-2.5 btn-luxury-gold text-xs font-bold uppercase tracking-widest">
            Discover Necklaces
          </a>
        </div>
      `;
      if (footerEl) footerEl.classList.add("opacity-50", "pointer-events-none");
      return;
    }

    if (footerEl) footerEl.classList.remove("opacity-50", "pointer-events-none");

    container.innerHTML = cart.map(item => `
      <div class="flex gap-4 pb-6 border-b border-[var(--border-subtle)] items-start">
        <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover object-center border border-[var(--border-color)] flex-shrink-0" />
        <div class="flex-1 min-w-0">
          <div class="flex items-start justify-between">
            <h5 class="font-serif text-base font-bold text-[var(--text-primary)] truncate">${item.name}</h5>
            <button onclick="StorageManager.removeFromCart('${item.cartItemId}')" class="text-[var(--text-muted)] hover:text-red-500 transition-colors p-1" title="Remove item">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </div>
          <div class="text-xs text-[var(--color-gold)] font-medium mt-0.5">${item.metal} • ${item.length}</div>
          ${item.customSpecs ? `<div class="text-[11px] text-[var(--text-muted)] italic mt-1">${item.customSpecs}</div>` : ''}
          <div class="flex items-center justify-between mt-3">
            <!-- Qty Stepper -->
            <div class="flex items-center border border-[var(--border-color)] bg-[var(--bg-primary)]">
              <button onclick="StorageManager.updateCartQty('${item.cartItemId}', ${item.qty - 1})" class="px-2 py-0.5 text-xs text-[var(--text-primary)] hover:bg-[var(--border-color)]">-</button>
              <span class="px-3 py-0.5 text-xs font-semibold text-[var(--text-primary)]">${item.qty}</span>
              <button onclick="StorageManager.updateCartQty('${item.cartItemId}', ${item.qty + 1})" class="px-2 py-0.5 text-xs text-[var(--text-primary)] hover:bg-[var(--border-color)]">+</button>
            </div>
            <!-- Item Price -->
            <div class="text-sm font-bold text-[var(--text-primary)]">
              $${(item.price * item.qty).toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </div>
          </div>
        </div>
      </div>
    `).join('');
  },

  /* -------------------------------------------------------------
     WISHLIST LOGIC & DRAWER
  ------------------------------------------------------------- */
  openWishlist() {
    this.closeAllDrawers();
    this.renderWishlistDrawer();
    const drawer = document.getElementById("wishlist-drawer");
    const backdrop = document.getElementById("drawer-backdrop");
    if (drawer && backdrop) {
      backdrop.classList.remove("opacity-0", "pointer-events-none");
      drawer.classList.remove("translate-x-full");
    }
  },

  closeWishlist() {
    const drawer = document.getElementById("wishlist-drawer");
    const backdrop = document.getElementById("drawer-backdrop");
    if (drawer && backdrop) {
      backdrop.classList.add("opacity-0", "pointer-events-none");
      drawer.classList.add("translate-x-full");
    }
  },

  renderWishlistDrawer() {
    const container = document.getElementById("wishlist-items-container");
    const countEl = document.getElementById("wishlist-drawer-count");
    if (!container) return;

    const wishlistIds = StorageManager.getWishlist();
    if (countEl) countEl.textContent = wishlistIds.length;

    if (wishlistIds.length === 0) {
      container.innerHTML = `
        <div class="text-center py-16 text-[var(--text-muted)] space-y-4">
          <svg class="w-12 h-12 mx-auto stroke-current text-[var(--border-color)]" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
          <p class="font-serif text-xl text-[var(--text-primary)]">Your wishlist is empty</p>
          <p class="text-xs max-w-xs mx-auto">Click the heart icon on any necklace to save your cherished pieces for later.</p>
        </div>
      `;
      return;
    }

    const products = StorageManager.getProducts();
    const items = wishlistIds.map(id => products.find(p => p.id === id)).filter(Boolean);

    container.innerHTML = items.map(p => `
      <div class="flex gap-4 p-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] items-center">
        <img src="${p.image}" alt="${p.name}" class="w-16 h-16 object-cover object-center flex-shrink-0" />
        <div class="flex-1 min-w-0">
          <h5 class="font-serif text-sm font-bold text-[var(--text-primary)] truncate">${p.name}</h5>
          <div class="text-xs font-semibold text-[var(--text-primary)]">$${p.price.toLocaleString()}</div>
          <div class="flex items-center gap-2 mt-2">
            <button onclick="AureliaApp.moveToCartFromWishlist('${p.id}')" class="px-2.5 py-1 bg-[var(--color-gold)] text-black text-[11px] font-bold uppercase tracking-wider hover:bg-[#ECC880] transition-colors">
              Move to Bag
            </button>
            <button onclick="StorageManager.toggleWishlist('${p.id}')" class="text-xs text-[var(--text-muted)] hover:text-red-500 transition-colors">
              Remove
            </button>
          </div>
        </div>
      </div>
    `).join('');
  },

  moveToCartFromWishlist(productId) {
    StorageManager.addToCart(productId, 1);
    StorageManager.toggleWishlist(productId);
    this.showToast("Necklace moved to your Shopping Bag", "gold");
  },

  /* -------------------------------------------------------------
     MOBILE MENU
  ------------------------------------------------------------- */
  openMobileMenu() {
    this.closeSearch();
    this.closeCart();
    this.closeWishlist();
    this.closeQuickView();
    this.closeCheckoutModal();

    const drawer = document.getElementById("mobile-menu-drawer");
    const backdrop = document.getElementById("drawer-backdrop");
    if (drawer && backdrop) {
      backdrop.classList.remove("opacity-0", "pointer-events-none");
      drawer.classList.remove("translate-x-full");
      drawer.classList.add("open");
    }
  },

  closeMobileMenu() {
    const drawer = document.getElementById("mobile-menu-drawer");
    const backdrop = document.getElementById("drawer-backdrop");
    if (drawer && backdrop) {
      backdrop.classList.add("opacity-0", "pointer-events-none");
      drawer.classList.add("translate-x-full");
      drawer.classList.remove("open");
    }
  },

  closeAllDrawers() {
    this.closeSearch();
    this.closeCart();
    this.closeWishlist();
    this.closeMobileMenu();
    this.closeQuickView();
    this.closeCheckoutModal();
  },

  /* -------------------------------------------------------------
     QUICK VIEW MODAL
  ------------------------------------------------------------- */
  openQuickView(productId) {
    const modal = document.getElementById("quick-view-modal");
    const backdrop = document.getElementById("drawer-backdrop");
    const content = document.getElementById("quick-view-content");
    const product = StorageManager.getProductById(productId);
    if (!product || !modal || !content) return;

    content.innerHTML = `
      <div class="relative group overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-color)]">
        <img id="qv-main-img" src="${product.image}" alt="${product.name}" class="w-full h-80 sm:h-96 object-cover object-center transition-transform duration-500 group-hover:scale-105" />
        <div class="absolute top-3 left-3 bg-black/70 backdrop-blur-sm px-2.5 py-1 text-[10px] uppercase font-bold tracking-widest text-[var(--color-gold)]">
          ${product.metalType}
        </div>
      </div>
      <div class="space-y-4">
        <div class="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)] font-medium">${product.subtitle || 'Haute Joaillerie'}</div>
        <h3 class="font-serif text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">${product.name}</h3>
        <div class="flex items-center gap-3">
          <span class="font-serif text-2xl font-bold text-[var(--text-primary)]">$${product.price.toLocaleString()}</span>
          ${product.originalPrice ? `<span class="text-sm line-through text-[var(--text-muted)]">$${product.originalPrice.toLocaleString()}</span>` : ''}
          <span class="text-xs px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-semibold">In Stock (${product.stockCount} available)</span>
        </div>
        <p class="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
          ${product.description}
        </p>
        <div class="pt-2 border-t border-[var(--border-subtle)] space-y-3">
          <div class="flex items-center justify-between text-xs">
            <span class="text-[var(--text-muted)]">Craftsmanship:</span>
            <span class="text-[var(--text-primary)] font-medium">${product.details?.origin || 'Handcrafted in Italy'}</span>
          </div>
          <div class="flex items-center justify-between text-xs">
            <span class="text-[var(--text-muted)]">Specifications:</span>
            <span class="text-[var(--text-primary)] font-medium">${product.details?.karat || product.metalType}</span>
          </div>
        </div>
        <div class="flex items-center gap-3 pt-4">
          <button onclick="StorageManager.addToCart('${product.id}', 1); AureliaApp.closeQuickView(); AureliaApp.showToast('Added to bag', 'gold')" class="flex-1 py-3 btn-luxury-gold text-xs font-bold uppercase tracking-widest">
            Add to Bag
          </button>
          <a href="product.html?id=${product.id}" class="px-5 py-3 btn-luxury-ghost text-xs font-bold uppercase tracking-widest text-center">
            Full Details
          </a>
        </div>
      </div>
    `;

    backdrop.classList.remove("opacity-0", "pointer-events-none");
    modal.classList.remove("opacity-0", "pointer-events-none");
  },

  closeQuickView() {
    const modal = document.getElementById("quick-view-modal");
    if (modal) {
      modal.classList.add("opacity-0", "pointer-events-none");
    }
  },

  /* -------------------------------------------------------------
     CHECKOUT FLOW (DEMO INTEGRATION)
  ------------------------------------------------------------- */
  openCheckoutModal() {
    this.closeCart();
    const modal = document.getElementById("checkout-modal");
    const backdrop = document.getElementById("drawer-backdrop");
    const body = document.getElementById("checkout-body");
    const cart = StorageManager.getCart();
    const subtotal = StorageManager.getCartSubtotal();
    if (!modal || !body || cart.length === 0) return;

    body.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Order Items Summary -->
        <div class="space-y-4">
          <h4 class="font-serif text-xl font-bold text-[var(--text-primary)]">Order Summary (${cart.length} items)</h4>
          <div class="max-h-60 overflow-y-auto space-y-3 pr-2">
            ${cart.map(i => `
              <div class="flex items-center gap-3 text-xs">
                <img src="${i.image}" class="w-12 h-12 object-cover border border-[var(--border-color)] flex-shrink-0" />
                <div class="flex-1 min-w-0">
                  <div class="font-bold text-[var(--text-primary)] truncate">${i.name}</div>
                  <div class="text-[var(--text-muted)]">Qty: ${i.qty} × $${i.price.toLocaleString()}</div>
                </div>
                <div class="font-semibold text-[var(--text-primary)]">$${(i.qty * i.price).toLocaleString()}</div>
              </div>
            `).join('')}
          </div>
          <div class="pt-4 border-t border-[var(--border-subtle)] space-y-2 text-xs">
            <div class="flex justify-between text-[var(--text-secondary)]">
              <span>Subtotal:</span>
              <span>$${subtotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
            </div>
            <div class="flex justify-between text-[var(--text-secondary)]">
              <span>Armored Courier Shipping:</span>
              <span class="text-emerald-600 font-semibold">COMPLIMENTARY</span>
            </div>
            <div class="flex justify-between text-base font-bold text-[var(--text-primary)] pt-2 border-t border-[var(--border-subtle)]">
              <span>Total:</span>
              <span class="font-serif text-xl text-[var(--color-gold)]">$${subtotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
            </div>
          </div>
        </div>

        <!-- Checkout Form -->
        <form id="checkout-form" onsubmit="AureliaApp.processDemoOrder(event)" class="space-y-3.5">
          <h4 class="font-serif text-xl font-bold text-[var(--text-primary)]">Delivery Information</h4>
          <div class="grid grid-cols-2 gap-3">
            <input type="text" required placeholder="First Name" value="Eleanor" class="bg-[var(--bg-secondary)] border border-[var(--border-color)] px-3 py-2 text-xs focus:outline-none focus:border-[var(--color-gold)]" />
            <input type="text" required placeholder="Last Name" value="Vance" class="bg-[var(--bg-secondary)] border border-[var(--border-color)] px-3 py-2 text-xs focus:outline-none focus:border-[var(--color-gold)]" />
          </div>
          <input type="email" required placeholder="Email for Insured Tracking" value="eleanor.vance@luxury.com" class="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] px-3 py-2 text-xs focus:outline-none focus:border-[var(--color-gold)]" />
          <input type="text" required placeholder="Street Address" value="740 Fifth Avenue, Suite 12" class="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] px-3 py-2 text-xs focus:outline-none focus:border-[var(--color-gold)]" />
          <div class="grid grid-cols-2 gap-3">
            <input type="text" required placeholder="City" value="New York" class="bg-[var(--bg-secondary)] border border-[var(--border-color)] px-3 py-2 text-xs focus:outline-none focus:border-[var(--color-gold)]" />
            <input type="text" required placeholder="Postal Code" value="10019" class="bg-[var(--bg-secondary)] border border-[var(--border-color)] px-3 py-2 text-xs focus:outline-none focus:border-[var(--color-gold)]" />
          </div>

          <!-- Demo Payment Section -->
          <div class="pt-2">
            <label class="block text-[11px] uppercase tracking-wider text-[var(--text-muted)] mb-1.5 font-bold">Demo Payment Method</label>
            <div class="p-3 border border-[var(--color-gold)] bg-[var(--bg-secondary)] text-xs flex items-center justify-between">
              <span class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-[var(--color-gold)]"></span>
                <span>Demo Black Card (•••• 8921)</span>
              </span>
              <span class="text-[10px] uppercase tracking-wider text-[var(--color-gold)] font-bold">Simulated</span>
            </div>
          </div>

          <button type="submit" id="submit-order-btn" class="w-full mt-4 py-3.5 btn-luxury-gold text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2">
            <span>Confirm & Place Order ($${subtotal.toLocaleString()})</span>
          </button>
        </form>
      </div>
    `;

    backdrop.classList.remove("opacity-0", "pointer-events-none");
    modal.classList.remove("opacity-0", "pointer-events-none");
  },

  processDemoOrder(e) {
    e.preventDefault();
    const btn = document.getElementById("submit-order-btn");
    if (btn) {
      btn.innerHTML = `<span class="animate-spin inline-block w-4 h-4 border-2 border-black border-t-transparent rounded-full mr-2"></span> Securing Order in Atelier...`;
      btn.disabled = true;
    }

    setTimeout(() => {
      const cart = StorageManager.getCart();
      const subtotal = StorageManager.getCartSubtotal();
      const orderId = "AUR-" + Math.floor(10000 + Math.random() * 90000);

      const newOrder = {
        id: orderId,
        date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
        customerName: "Eleanor Vance",
        customerEmail: "eleanor.vance@luxury.com",
        status: "Crafting in Atelier",
        total: subtotal,
        trackingNumber: "FDX-" + Math.floor(100000000 + Math.random() * 900000000) + "US",
        carrier: "FedEx International Armored Priority",
        items: [...cart],
        shippingAddress: {
          street: "740 Fifth Avenue, Suite 12",
          city: "New York",
          state: "NY",
          zip: "10019",
          country: "United States"
        }
      };

      StorageManager.addOrder(newOrder);
      StorageManager.clearCart();

      const body = document.getElementById("checkout-body");
      if (body) {
        body.innerHTML = `
          <div class="text-center py-8 space-y-4">
            <div class="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            </div>
            <h3 class="font-serif text-3xl font-bold text-[var(--text-primary)]">Acquisition Confirmed</h3>
            <div class="text-xs uppercase tracking-widest text-[var(--color-gold)] font-semibold">Order Reference: ${orderId}</div>
            <p class="text-sm text-[var(--text-secondary)] max-w-md mx-auto leading-relaxed">
              Your bespoke commission has been transmitted to our Geneva goldsmiths. An insured tracking manifest will be delivered to <strong>eleanor.vance@luxury.com</strong>.
            </p>
            <div class="p-4 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-xs text-left max-w-md mx-auto space-y-1">
              <div><strong>Status:</strong> Crafting in Atelier (Hallmarking Pending)</div>
              <div><strong>Carrier:</strong> FedEx International Armored Priority</div>
              <div><strong>Estimated Delivery:</strong> 3 Business Days via Private Courier</div>
            </div>
            <div class="flex items-center justify-center gap-4 pt-4">
              <a href="login.html" class="px-6 py-2.5 btn-luxury-gold text-xs font-bold uppercase tracking-wider">
                View in Client Dashboard
              </a>
              <button onclick="AureliaApp.closeCheckoutModal()" class="px-6 py-2.5 btn-luxury-ghost text-xs font-bold uppercase tracking-wider">
                Continue Browsing
              </button>
            </div>
          </div>
        `;
      }
    }, 1200);
  },

  closeCheckoutModal() {
    const modal = document.getElementById("checkout-modal");
    const backdrop = document.getElementById("drawer-backdrop");
    if (modal && backdrop) {
      backdrop.classList.add("opacity-0", "pointer-events-none");
      modal.classList.add("opacity-0", "pointer-events-none");
    }
  },

  /* -------------------------------------------------------------
     3D INTERACTIVE TILT EFFECT
  ------------------------------------------------------------- */
  init3DTilt() {
    const cards = document.querySelectorAll(".tilt-card");
    cards.forEach(card => {
      let ticking = false;
      let rect = null;

      card.addEventListener("mouseenter", () => {
        rect = card.getBoundingClientRect();
      });

      card.addEventListener("mousemove", (e) => {
        if (!rect) rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (!ticking) {
          requestAnimationFrame(() => {
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -9; // Max 9 deg
            const rotateY = ((x - centerX) / centerX) * 9;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            ticking = false;
          });
          ticking = true;
        }
      }, { passive: true });

      card.addEventListener("mouseleave", () => {
        rect = null;
        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      });
    });
  },

  /* -------------------------------------------------------------
     AOS INITIALIZATION
  ------------------------------------------------------------- */
  initAOS() {
    if (window.AOS) {
      AOS.init({
        duration: 800,
        once: true,
        offset: 40,
        easing: 'ease-out-cubic'
      });
      setTimeout(() => {
        try { AOS.refresh(); } catch(e) {}
      }, 100);
    }
  },

  /* -------------------------------------------------------------
     COUNTERS (Cart & Wishlist Badges)
  ------------------------------------------------------------- */
  updateCounters() {
    const cartCount = StorageManager.getCartCount();
    const wishlistCount = StorageManager.getWishlist().length;

    const cartBadges = document.querySelectorAll(".cart-badge-count, #cart-badge");
    cartBadges.forEach(cartBadge => {
      cartBadge.textContent = cartCount;
      cartBadge.classList.toggle("scale-125", cartCount > 0);
      setTimeout(() => cartBadge.classList.remove("scale-125"), 250);
    });

    const wishlistBadges = document.querySelectorAll(".wishlist-badge-count, #wishlist-badge");
    wishlistBadges.forEach(wishlistBadge => {
      wishlistBadge.textContent = wishlistCount;
    });
  },

  /* -------------------------------------------------------------
     TOAST ENGINE
  ------------------------------------------------------------- */
  showToast(message, type = "gold") {
    const container = document.getElementById("aurelia-toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `aurelia-toast ${
      type === 'gold'
        ? 'bg-[#191816] text-[#FAF7F0] border border-[#C6A15B]'
        : type === 'silver'
        ? 'bg-[#191816] text-[#FAF7F0] border border-[#C8CCD0]'
        : 'bg-[#191816] text-[#FAF7F0] border border-emerald-500'
    }`;

    toast.innerHTML = `
      <svg class="w-4 h-4 text-[var(--color-gold)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
      </svg>
      <span class="font-medium">${message}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(-10px)";
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }
};

// Auto-run on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  AureliaApp.init();
});
