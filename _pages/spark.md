---
layout: archive
title: "SPARKS Lab"
permalink: /spark/
author_profile: true
---

<style>
  /* =========================================================
     SPARKS LAB — PROFESSIONAL RESEARCH GROUP PAGE
     ========================================================= */

  :root {
    --sparks-navy: #0f172a;
    --sparks-navy-2: #172033;
    --sparks-amber: #d97706;
    --sparks-amber-light: #f59e0b;
    --sparks-cyan: #0891b2;
    --sparks-purple: #7c3aed;

    --text-main: #1e293b;
    --text-muted: #64748b;
    --text-soft: #94a3b8;
    --surface: #ffffff;
    --surface-soft: #f8fafc;
    --border: #e2e8f0;

    --radius-sm: 10px;
    --radius-md: 16px;
    --radius-lg: 24px;

    --shadow-sm: 0 8px 24px rgba(15, 23, 42, 0.06);
    --shadow-md: 0 16px 40px rgba(15, 23, 42, 0.10);

    --accent: var(--sparks-amber);
    --accent-strong: #b45309;
    --accent-soft: rgba(217, 119, 6, 0.10);
  }

  .page__title {
    display: none;
  }

  .sparks-page {
    font-size: 0.98rem;
    color: var(--text-main);
  }

  .sparks-page * {
    box-sizing: border-box;
  }

  .sparks-page a {
    text-decoration-thickness: 1px;
    text-underline-offset: 3px;
  }

  .sparks-page h2 {
    margin: 0;
  }

  /* =========================
     HERO
     ========================= */

  .sparks-hero {
    position: relative;
    overflow: hidden;
    padding: 3.5rem 2rem 3rem;
    margin-bottom: 2.8rem;
    border-radius: var(--radius-lg);
    color: white;
    background:
      radial-gradient(circle at 84% 15%, rgba(245, 158, 11, 0.14), transparent 30%),
      radial-gradient(circle at 10% 90%, rgba(8, 145, 178, 0.12), transparent 32%),
      linear-gradient(135deg, #0b1120 0%, #101827 58%, #172033 100%);
    border: 1px solid rgba(255,255,255,0.08);
    box-shadow: var(--shadow-md);
  }

  .sparks-hero::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-image:
      linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
    background-size: 34px 34px;
    mask-image: linear-gradient(to bottom, rgba(0,0,0,0.65), transparent 85%);
  }

  .hero-inner {
    position: relative;
    z-index: 2;
    max-width: 860px;
    margin: 0 auto;
    text-align: center;
  }


  /* =========================
     ANIMATED SPARKS LOGO
     Two glowing particles spiral inward, collide, then reveal the logo.
     ========================= */

  .logo-stage {
    position: relative;
    display: inline-block;
    width: min(360px, 82%);
    margin: 0 auto 1.15rem;
    line-height: 0;
  }

  .logo-stage .hero-logo {
    width: 100%;
    margin: 0;
  }

  .spark-logo {
    position: relative;
    z-index: 2;
    display: block;
    filter: drop-shadow(0 10px 22px rgba(0,0,0,0.28))
            drop-shadow(0 0 18px rgba(245,158,11,0.10));
  }

  .orbit {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    z-index: 5;
    pointer-events: none;
  }

  .orb {
    position: absolute;
    top: 0;
    left: 0;
    width: 58px;
    height: 58px;
    margin: -29px 0 0 -29px;
    border-radius: 50%;
    opacity: 0;
    filter: blur(1px);
  }

  .c-left {
    background: radial-gradient(circle at 35% 35%, #fde68a, #f59e0b);
    box-shadow: 0 0 26px 4px rgba(245,158,11,0.72);
  }

  .c-right {
    background: radial-gradient(circle at 35% 35%, #a5f3fc, #06b6d4);
    box-shadow: 0 0 26px 4px rgba(6,182,212,0.72);
  }

  .spark-burst {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 46px;
    height: 46px;
    margin: -23px 0 0 -23px;
    border-radius: 50%;
    opacity: 0;
    z-index: 6;
    pointer-events: none;
    background:
      radial-gradient(
        circle,
        #ffffff 0%,
        #fde68a 38%,
        rgba(245,158,11,0.15) 58%,
        rgba(245,158,11,0) 75%
      );
  }

  @media (prefers-reduced-motion: no-preference) {
    .orbit-a {
      animation: sparksSpinA 1.15s cubic-bezier(.45,0,.55,1) 0.10s forwards;
    }

    .orbit-b {
      animation: sparksSpinB 1.15s cubic-bezier(.45,0,.55,1) 0.10s forwards;
    }

    .orb {
      animation: sparksReelIn 1.15s cubic-bezier(.45,0,.55,1) 0.10s forwards;
    }

    .spark-burst {
      animation: sparksBurst 0.60s ease-out 1.15s forwards;
    }

    .spark-logo {
      opacity: 0;
      transform: scale(0.40);
      animation: sparksLogoReveal 0.90s ease-out 1.10s forwards;
    }

    @keyframes sparksSpinA {
      from { transform: rotate(0deg); }
      to   { transform: rotate(740deg); }
    }

    @keyframes sparksSpinB {
      from { transform: rotate(180deg); }
      to   { transform: rotate(920deg); }
    }

    @keyframes sparksReelIn {
      0% {
        opacity: 0;
        transform: translateX(150px) scale(0.80);
      }
      12% {
        opacity: 1;
      }
      80% {
        opacity: 1;
        transform: translateX(26px) scale(1);
      }
      94% {
        opacity: 1;
        transform: translateX(0) scale(1.15);
      }
      100% {
        opacity: 0;
        transform: translateX(0) scale(0.20);
      }
    }

    @keyframes sparksBurst {
      0% {
        opacity: 0;
        transform: scale(0.20);
      }
      30% {
        opacity: 1;
        transform: scale(1.40);
      }
      100% {
        opacity: 0;
        transform: scale(2.80);
      }
    }

    @keyframes sparksLogoReveal {
      0% {
        opacity: 0;
        transform: scale(0.40);
      }
      60% {
        opacity: 1;
        transform: scale(1.06);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .spark-logo {
      opacity: 1;
      transform: none;
    }

    .orbit,
    .spark-burst {
      display: none;
    }
  }

  .hero-logo {
    display: block;
  }

  .hero-kicker {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
    padding: 0.38rem 0.75rem;
    border: 1px solid rgba(245, 158, 11, 0.3);
    border-radius: 999px;
    color: #fcd34d;
    background: rgba(245, 158, 11, 0.08);
    font-size: 0.74rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .hero-title {
    margin: 0;
    color: white;
    font-size: clamp(1.5rem, 3vw, 2.25rem);
    line-height: 1.18;
    letter-spacing: -0.025em;
  }

  .hero-subtitle {
    max-width: 760px;
    margin: 1rem auto 0;
    color: #cbd5e1;
    font-size: 1rem;
    line-height: 1.7;
  }

  .hero-meta {
    margin-top: 1.25rem;
    color: #94a3b8;
    font-size: 0.86rem;
  }

  .hero-nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.55rem;
    margin-top: 1.45rem;
  }

  .hero-nav a {
    display: inline-block;
    padding: 0.5rem 0.8rem;
    border-radius: 999px;
    color: #e2e8f0;
    border: 1px solid rgba(255,255,255,0.10);
    background: rgba(255,255,255,0.04);
    font-size: 0.78rem;
    font-weight: 600;
    text-decoration: none;
    transition: 0.2s ease;
  }

  .hero-nav a:hover {
    color: white;
    border-color: rgba(245,158,11,0.45);
    background: rgba(245,158,11,0.10);
    transform: translateY(-1px);
  }

  /* =========================
     SHARED SECTION STYLING
     ========================= */

  .lab-section {
    margin: 3.2rem 0;
    scroll-margin-top: 90px;
  }

  .section-heading {
    margin-bottom: 1.35rem;
  }

  .section-eyebrow {
    color: var(--sparks-amber);
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .section-title {
    margin-top: 0.25rem !important;
    color: var(--text-main);
    font-size: clamp(1.35rem, 2.4vw, 1.8rem);
    letter-spacing: -0.02em;
  }

  .section-rule {
    width: 46px;
    height: 3px;
    margin-top: 0.7rem;
    border-radius: 99px;
    background: var(--sparks-amber);
  }

  .section-intro {
    max-width: 820px;
    margin-top: 0.85rem;
    color: var(--text-muted);
    line-height: 1.75;
  }

  /* =========================
     ABOUT
     ========================= */

  .about-panel {
    padding: 1.7rem 1.8rem;
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    background: linear-gradient(180deg, #ffffff, #fbfdff);
    box-shadow: var(--shadow-sm);
  }

  .about-panel p {
    margin: 0;
    color: #475569;
    line-height: 1.82;
  }

  .about-panel p + p {
    margin-top: 0.9rem;
  }

  .about-panel strong {
    color: var(--text-main);
  }

  /* =========================
     RESEARCH AREAS
     ========================= */

  .research-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
  }

  .research-card {
    position: relative;
    min-height: 205px;
    padding: 1.35rem;
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    background: var(--surface);
    box-shadow: 0 2px 10px rgba(15,23,42,0.025);
    transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
  }

  .research-card:hover {
    transform: translateY(-3px);
    border-color: rgba(217,119,6,0.32);
    box-shadow: var(--shadow-sm);
  }

  .research-index {
    width: 34px;
    height: 34px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    border-radius: 9px;
    color: #92400e;
    background: #fffbeb;
    border: 1px solid #fde68a;
    font-size: 0.74rem;
    font-weight: 800;
    letter-spacing: 0.04em;
  }

  .research-card h3 {
    margin: 0 0 0.55rem;
    color: var(--text-main);
    font-size: 1rem;
    line-height: 1.35;
  }

  .research-card p {
    margin: 0;
    color: var(--text-muted);
    font-size: 0.84rem;
    line-height: 1.65;
  }

  /* =========================
     TEAM
     ========================= */

  .team-block + .team-block {
    margin-top: 2.2rem;
  }

  .team-label {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    margin-bottom: 0.85rem;
    color: var(--text-soft);
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.13em;
    text-transform: uppercase;
  }

  .team-label::after {
    content: "";
    height: 1px;
    flex: 1;
    background: var(--border);
  }

  .pi-card {
    display: grid;
    grid-template-columns: 132px 1fr;
    gap: 1.5rem;
    align-items: center;
    max-width: 760px;
    padding: 1.55rem;
    border: 1px solid #fde68a;
    border-radius: var(--radius-md);
    background: linear-gradient(135deg, #fffbeb 0%, #ffffff 72%);
    box-shadow: var(--shadow-sm);
  }

  .pi-photo {
    width: 132px;
    height: 132px;
    overflow: hidden;
    border-radius: 18px;
    border: 1px solid #fcd34d;
    background: #f8fafc;
  }

  .pi-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .pi-content h3 {
    margin: 0;
    color: var(--text-main);
    font-size: 1.2rem;
  }

  .pi-role {
    margin-top: 0.25rem;
    color: var(--sparks-amber);
    font-size: 0.86rem;
    font-weight: 700;
  }

  .pi-details {
    margin-top: 0.65rem;
    color: var(--text-muted);
    font-size: 0.84rem;
    line-height: 1.65;
  }

  .pi-links {
    margin-top: 0.75rem;
    font-size: 0.82rem;
  }

  .people-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
  }

  .person-card {
    padding: 1.25rem 1.1rem;
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    background: var(--surface);
    text-align: center;
    transition: 0.18s ease;
  }

  .person-card:hover {
    transform: translateY(-2px);
    border-color: #cbd5e1;
    box-shadow: var(--shadow-sm);
  }

  .person-photo {
    width: 92px;
    height: 92px;
    margin: 0 auto 0.85rem;
    overflow: hidden;
    border-radius: 50%;
    border: 3px solid #f1f5f9;
    background: #f8fafc;
  }

  .person-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .person-card h3 {
    margin: 0;
    color: var(--text-main);
    font-size: 0.95rem;
  }

  .person-role {
    margin-top: 0.25rem;
    font-size: 0.78rem;
    font-weight: 700;
  }

  .grad-role {
    color: var(--sparks-cyan);
  }

  .ugrad-role {
    color: var(--sparks-purple);
  }

  .person-affiliation {
    margin-top: 0.45rem;
    color: var(--text-muted);
    font-size: 0.77rem;
    line-height: 1.5;
  }

  .person-focus {
    margin-top: 0.75rem;
    padding-top: 0.7rem;
    border-top: 1px solid #f1f5f9;
    color: #64748b;
    font-size: 0.74rem;
    line-height: 1.5;
  }

  .alumni-row {
    padding: 0.95rem 1rem;
    border: 1px solid var(--border);
    border-left: 3px solid #94a3b8;
    border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
    background: var(--surface-soft);
    color: #475569;
    font-size: 0.84rem;
    line-height: 1.55;
  }

  /* =========================
     PUBLICATIONS
     ========================= */

  .publication-list {
    border-top: 1px solid var(--border);
  }

  .publication-item {
    display: grid;
    grid-template-columns: 74px 1fr;
    gap: 1rem;
    padding: 1.05rem 0;
    border-bottom: 1px solid var(--border);
  }

  .pub-year {
    align-self: start;
    display: inline-flex;
    justify-content: center;
    padding: 0.28rem 0.4rem;
    border-radius: 7px;
    background: #f1f5f9;
    color: #475569;
    font-size: 0.74rem;
    font-weight: 800;
  }

  .pub-title {
    color: var(--text-main);
    font-size: 0.9rem;
    font-weight: 700;
    line-height: 1.48;
  }

  .pub-authors {
    margin-top: 0.24rem;
    color: var(--text-muted);
    font-size: 0.78rem;
    line-height: 1.5;
  }

  .pub-venue {
    margin-top: 0.22rem;
    color: var(--sparks-amber);
    font-size: 0.76rem;
    font-weight: 700;
  }

  .section-link {
    display: inline-block;
    margin-top: 1rem;
    font-size: 0.84rem;
    font-weight: 700;
  }

  /* =========================
     FUNDING + HPC
     ========================= */

  .info-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }

  .info-card {
    padding: 1.2rem 1.25rem;
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    background: var(--surface-soft);
  }

  .info-card h3 {
    margin: 0 0 0.55rem;
    color: var(--text-main);
    font-size: 0.94rem;
  }

  .info-card p {
    margin: 0;
    color: var(--text-muted);
    font-size: 0.81rem;
    line-height: 1.58;
  }

  .info-card .tag {
    display: inline-block;
    margin-top: 0.65rem;
    color: var(--sparks-amber);
    font-size: 0.72rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  /* =========================
     JOIN CTA
     ========================= */

  .join-panel {
    position: relative;
    overflow: hidden;
    padding: 2rem;
    border-radius: var(--radius-lg);
    background:
      radial-gradient(circle at 90% 20%, rgba(245,158,11,0.14), transparent 28%),
      linear-gradient(135deg, #0f172a, #172033);
    color: white;
    box-shadow: var(--shadow-md);
  }

  .join-panel h2 {
    color: white;
    font-size: 1.4rem;
  }

  .join-panel p {
    max-width: 760px;
    margin: 0.75rem 0 0;
    color: #cbd5e1;
    font-size: 0.88rem;
    line-height: 1.7;
  }

  .join-fields {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .join-field {
    padding: 0.36rem 0.6rem;
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 999px;
    background: rgba(255,255,255,0.045);
    color: #e2e8f0;
    font-size: 0.75rem;
  }

  .join-button {
    display: inline-block;
    margin-top: 1.15rem;
    padding: 0.68rem 1rem;
    border-radius: 9px;
    background: var(--sparks-amber);
    color: white !important;
    font-size: 0.82rem;
    font-weight: 800;
    text-decoration: none !important;
    transition: 0.18s ease;
  }

  .join-button:hover {
    background: #b45309;
    transform: translateY(-1px);
  }

  /* =========================
     CONTACT
     ========================= */

  .contact-card {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 1rem;
    align-items: center;
    padding: 1.3rem 1.4rem;
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    background: var(--surface-soft);
  }

  .contact-main {
    color: var(--text-muted);
    font-size: 0.83rem;
    line-height: 1.65;
  }

  .contact-main strong {
    color: var(--text-main);
  }

  .contact-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 0.5rem;
  }

  .contact-links a {
    padding: 0.45rem 0.65rem;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: white;
    font-size: 0.74rem;
    font-weight: 700;
    text-decoration: none;
  }

  /* =========================
     DARK MODE
     ========================= */

  html[data-theme="dark"] .sparks-page {
    --text-main: #f1f5f9;
    --text-muted: #a8b3c4;
    --text-soft: #94a3b8;
    --surface: #171d2a;
    --surface-soft: #1d2432;
    --border: rgba(255,255,255,0.09);
  }

  html[data-theme="dark"] .about-panel,
  html[data-theme="dark"] .pi-card {
    background: #171d2a;
  }

  html[data-theme="dark"] .about-panel p,
  html[data-theme="dark"] .alumni-row {
    color: #a8b3c4;
  }

  html[data-theme="dark"] .research-index {
    background: rgba(245,158,11,0.10);
    color: #fbbf24;
    border-color: rgba(245,158,11,0.18);
  }

  html[data-theme="dark"] .person-focus,
  html[data-theme="dark"] .publication-list,
  html[data-theme="dark"] .publication-item {
    border-color: rgba(255,255,255,0.08);
  }

  html[data-theme="dark"] .pub-year {
    background: #242c3b;
    color: #cbd5e1;
  }

  html[data-theme="dark"] .contact-links a {
    background: #171d2a;
    border-color: rgba(255,255,255,0.10);
  }

  /* =========================
     RESPONSIVE
     ========================= */

  @media (max-width: 920px) {
    .research-grid,
    .people-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 680px) {
    .sparks-hero {
      padding: 2.5rem 1.15rem 2.25rem;
      border-radius: 18px;
    }

    .research-grid,
    .people-grid,
    .info-grid {
      grid-template-columns: 1fr;
    }

    .pi-card {
      grid-template-columns: 1fr;
      text-align: center;
    }

    .pi-photo {
      margin: 0 auto;
    }

    .publication-item {
      grid-template-columns: 56px 1fr;
      gap: 0.75rem;
    }

    .contact-card {
      grid-template-columns: 1fr;
    }

    .contact-links {
      justify-content: flex-start;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .research-card,
    .person-card,
    .hero-nav a,
    .join-button {
      transition: none;
    }
  }
</style>

<div class="sparks-page">

  <!-- ===================================================== -->
  <!-- HERO -->
  <!-- ===================================================== -->
  <header class="sparks-hero">
    <div class="hero-inner">
      <div class="hero-kicker">Texas State University · Computer Science</div>
      <div class="logo-stage" aria-label="SPARKS Lab animated logo">
        <span class="orbit orbit-a"><span class="orb c-left"></span></span>
        <span class="orbit orbit-b"><span class="orb c-right"></span></span>
        <span class="spark-burst"></span>
        <img src="/images/sparks_logo.svg" alt="SPARKS Lab" class="hero-logo spark-logo">
      </div>

      <h1 class="hero-title">
        Scientific Prediction through AI Research, Knowledge &amp; Simulation
      </h1>

      <p class="hero-subtitle">
        Developing physics-grounded artificial intelligence and scientific machine learning
        methods for prediction, discovery, optimization, and engineering design.
      </p>

      <div class="hero-meta">
        Department of Computer Science · Texas State University · San Marcos, Texas
      </div>

      <nav class="hero-nav" aria-label="SPARKS Lab page sections">
        <a href="#about">About</a>
        <a href="#research">Research</a>
        <a href="#team">Team</a>
        <a href="#publications">Publications</a>
        <a href="#funding">Funding &amp; Computing</a>
        <a href="#join">Join Us</a>
      </nav>
    </div>
  </header>


  <!-- ===================================================== -->
  <!-- ABOUT -->
  <!-- ===================================================== -->
  <section class="lab-section" id="about">
    <div class="section-heading">
      <div class="section-eyebrow">About the Lab</div>
      <h2 class="section-title">AI grounded in scientific principles</h2>
      <div class="section-rule"></div>
    </div>

    <div class="about-panel">
      <p>
        The <strong>SPARKS Lab</strong> (<strong>S</strong>cientific <strong>P</strong>rediction through
        <strong>A</strong>I <strong>R</strong>esearch, <strong>K</strong>nowledge &amp; <strong>S</strong>imulation)
        develops next-generation AI methods for scientific and engineering systems. Our goal is to build
        machine learning models that do more than fit data: they incorporate physical structure, scale to
        complex systems, and provide useful representations for scientific discovery and decision-making.
      </p>

      <p>
        Our research spans <strong>physics-informed learning</strong>, <strong>neural operators</strong>,
        <strong>generative AI for science</strong>, and <strong>hybrid physics–ML modeling</strong>, with
        applications in climate and Earth systems, turbulence, nanoscale heat transport, inverse design,
        and engineering optimization.
      </p>
    </div>
  </section>


  <!-- ===================================================== -->
  <!-- RESEARCH -->
  <!-- ===================================================== -->
  <section class="lab-section" id="research">
    <div class="section-heading">
      <div class="section-eyebrow">Research</div>
      <h2 class="section-title">Research areas</h2>
      <div class="section-rule"></div>
      <p class="section-intro">
        We develop computational methods at the intersection of machine learning, applied mathematics,
        physics, and high-performance scientific computing.
      </p>
    </div>

    <div class="research-grid">

      <article class="research-card">
        <div class="research-index">01</div>
        <h3>Scientific Machine Learning</h3>
        <p>
          Physics-Informed Neural Networks (PINNs), DeepONets, and neural operators for solving
          PDEs, inverse problems, and multiphysics systems.
        </p>
      </article>

      <article class="research-card">
        <div class="research-index">02</div>
        <h3>Climate &amp; Earth System Modeling</h3>
        <p>
          Neural-operator bias correction, nudging strategies for E3SM, and hybrid AI–physics
          approaches for weather and climate prediction.
        </p>
      </article>

      <article class="research-card">
        <div class="research-index">03</div>
        <h3>Turbulence &amp; Fluid Dynamics</h3>
        <p>
          Generative and diffusion-based operator models for forecasting, super-resolution,
          and sparse reconstruction of turbulent flow fields.
        </p>
      </article>

      <article class="research-card">
        <div class="research-index">04</div>
        <h3>Nanoscale Heat Conduction</h3>
        <p>
          Learning-based methods for ultrashort-pulsed laser heating, two-temperature models,
          and thermal transport in multilayer thin-film systems.
        </p>
      </article>

      <article class="research-card">
        <div class="research-index">05</div>
        <h3>Neural Operators &amp; Spectral Learning</h3>
        <p>
          High-frequency representation, spectral-bias mitigation, multi-fidelity learning,
          and operator learning for complex physical systems.
        </p>
      </article>

      <article class="research-card">
        <div class="research-index">06</div>
        <h3>Engineering &amp; Inverse Design</h3>
        <p>
          Physics-informed optimization for thermal systems, risk-aware routing, mechanical
          metamaterials, and inverse design using neural operators.
        </p>
      </article>

    </div>
  </section>


  <!-- ===================================================== -->
  <!-- TEAM -->
  <!-- ===================================================== -->
  <section class="lab-section" id="team">
    <div class="section-heading">
      <div class="section-eyebrow">People</div>
      <h2 class="section-title">SPARKS Lab team</h2>
      <div class="section-rule"></div>
    </div>

    <div class="team-block">
      <div class="team-label">Principal Investigator</div>

      <div class="pi-card">
        <div class="pi-photo">
          <img src="/images/profile_2.png" alt="Dr. Aniruddha Bora">
        </div>

        <div class="pi-content">
          <h3>Dr. Aniruddha Bora</h3>
          <div class="pi-role">Assistant Professor of Computer Science</div>
          <div class="pi-details">
            Texas State University<br>
            Ph.D., Louisiana Tech University<br>
            Former Postdoctoral Research Associate, Brown University
          </div>
          <div class="pi-links">
            <a href="mailto:aniruddha_bora@txstate.edu">Email</a>
            &nbsp;·&nbsp;
            <a href="https://aniruddhabora.github.io">Website</a>
            &nbsp;·&nbsp;
            <a href="https://scholar.google.com/citations?user=4OMm56YAAAAJ&hl=en">Google Scholar</a>
          </div>
        </div>
      </div>
    </div>


    <div class="team-block">
      <div class="team-label">Graduate Students</div>

      <div class="people-grid">

        <article class="person-card">
          <div class="person-photo">
            <img src="/images/coov_txstate.jpg" alt="Christopher M. Coovrey">
          </div>
          <h3>Christopher M. Coovrey</h3>
          <div class="person-role grad-role">Ph.D. Student</div>
          <div class="person-affiliation">
            Department of Computer Science<br>
            Texas State University
          </div>
        </article>

        <article class="person-card">
          <div class="person-photo">
            <img src="/images/collin_txst.jpg" alt="Collin Reisman">
          </div>
          <h3>Collin Reisman</h3>
          <div class="person-role grad-role">Ph.D. Student</div>
          <div class="person-affiliation">
            Department of Computer Science<br>
            Texas State University
          </div>
        </article>

        <article class="person-card">
          <div class="person-photo">
            <img src="/images/keerth.jpg" alt="Keerthana Sunil">
          </div>
          <h3>Keerthana Sunil</h3>
          <div class="person-role grad-role">Ph.D. Student</div>
          <div class="person-affiliation">
            Department of Computer Science<br>
            Texas State University
          </div>
        </article>

      </div>
    </div>


    <div class="team-block">
      <div class="team-label">Undergraduate Researchers</div>

      <div class="people-grid">

        <article class="person-card">
          <div class="person-photo">
            <img src="/images/student1.jpeg" alt="Pawan Pradhan">
          </div>
          <h3>Pawan Pradhan</h3>
          <div class="person-role ugrad-role">Undergraduate Researcher</div>
          <div class="person-affiliation">
            Mechanical Engineering<br>
            Texas State University
          </div>
        </article>

        <article class="person-card">
          <div class="person-photo">
            <img src="/images/student2.png" alt="Arjun Gyawali">
          </div>
          <h3>Arjun Gyawali</h3>
          <div class="person-role ugrad-role">Undergraduate Researcher</div>
          <div class="person-affiliation">
            Computer Science<br>
            Texas State University
          </div>
        </article>

        <article class="person-card">
          <div class="person-photo">
            <img src="/images/prakriti.jpg" alt="Prakriti Gautam">
          </div>
          <h3>Prakriti Gautam</h3>
          <div class="person-role ugrad-role">Undergraduate Researcher</div>
          <div class="person-affiliation">
            Computer Science<br>
            Texas State University
          </div>
        </article>

      </div>
    </div>


    <div class="team-block">
      <div class="team-label">Alumni &amp; Past Mentees</div>
      <div class="alumni-row">
        <strong>Sotos Lois</strong> — Imperial College London, 2022–2023 ·
        Mathematical finance using PINNs and operator learning
      </div>
    </div>
  </section>


  <!-- ===================================================== -->
  <!-- PUBLICATIONS -->
  <!-- ===================================================== -->
  <section class="lab-section" id="publications">
    <div class="section-heading">
      <div class="section-eyebrow">Scholarship</div>
      <h2 class="section-title">Selected publications</h2>
      <div class="section-rule"></div>
    </div>

    <div class="publication-list">

      <article class="publication-item">
        <div class="pub-year">2025</div>
        <div>
          <div class="pub-title">
            Integrating Neural Operators with Diffusion Models Improves Spectral Representation in Turbulence Modeling
          </div>
          <div class="pub-authors">V. Oommen, A. Bora, Z. Zhang, G.E. Karniadakis</div>
          <div class="pub-venue">Proceedings of the Royal Society A</div>
        </div>
      </article>

      <article class="publication-item">
        <div class="pub-year">2025</div>
        <div>
          <div class="pub-title">
            Characterization and Inverse Design of Stochastic Mechanical Metamaterials Using Neural Operators
          </div>
          <div class="pub-authors">H. Jin, B. Zhang, Q. Cao, E. Zhang, A. Bora, et al.</div>
          <div class="pub-venue">Advanced Materials</div>
        </div>
      </article>

      <article class="publication-item">
        <div class="pub-year">2025</div>
        <div>
          <div class="pub-title">
            XAI4Extremes: An interpretable ML framework for understanding extreme-weather precursors
          </div>
          <div class="pub-authors">J. Wei, A. Bora, V. Oommen, et al.</div>
          <div class="pub-venue">ICLR 2025 Workshop</div>
        </div>
      </article>

      <article class="publication-item">
        <div class="pub-year">2023</div>
        <div>
          <div class="pub-title">
            Learning bias corrections for climate models using deep neural operators
          </div>
          <div class="pub-authors">A. Bora, K. Shukla, S. Zhang, R. Leung, G.E. Karniadakis</div>
          <div class="pub-venue">AAAI 2023</div>
        </div>
      </article>

      <article class="publication-item">
        <div class="pub-year">2022</div>
        <div>
          <div class="pub-title">
            Neural network method for solving nonlocal two-temperature nanoscale heat conduction in gold films
          </div>
          <div class="pub-authors">A. Bora, W. Dai, J.P. Wilson, J.C. Boyt, S.L. Sobolev</div>
          <div class="pub-venue">International Journal of Heat and Mass Transfer</div>
        </div>
      </article>

    </div>

    <a class="section-link" href="/publications/">View all publications →</a>
  </section>


  <!-- ===================================================== -->
  <!-- FUNDING + HPC -->
  <!-- ===================================================== -->
  <section class="lab-section" id="funding">
    <div class="section-heading">
      <div class="section-eyebrow">Support &amp; Infrastructure</div>
      <h2 class="section-title">Funding and computing resources</h2>
      <div class="section-rule"></div>
    </div>

    <div class="info-grid">

      <div class="info-card">
        <h3>PIER: Physics-Informed, Energy-efficient, Risk-aware Routing</h3>
        <p>
          Texas State University research support for physics-informed and data-driven
          methods for intelligent routing and decision-making.
        </p>
        <div class="tag">$12,000 · 2026–Present</div>
      </div>

      <div class="info-card">
        <h3>ALCF Director's Discretionary Allocation</h3>
        <p>
          High-performance computing allocations supporting physics-informed generative AI
          and extreme-weather modeling with neural operator methods.
        </p>
        <div class="tag">Argonne Leadership Computing Facility</div>
      </div>

      <div class="info-card">
        <h3>MURI Program (ONR)</h3>
        <p>
          Machine-learning methods for phase-change heat-transfer modeling and design,
          with contributions developed during work at Brown University.
        </p>
        <div class="tag">Research Contributor</div>
      </div>

      <div class="info-card">
        <h3>Leadership-Class Computing</h3>
        <p>
          SPARKS research uses ALCF Polaris and Aurora, along with Brown University's
          OSCAR cluster, for large-scale scientific machine learning experiments.
        </p>
        <div class="tag">Polaris · Aurora · OSCAR</div>
      </div>

    </div>
  </section>


  <!-- ===================================================== -->
  <!-- JOIN -->
  <!-- ===================================================== -->
  <section class="lab-section" id="join">
    <div class="join-panel">
      <div class="section-eyebrow">Opportunities</div>
      <h2>Join the SPARKS Lab</h2>

      <p>
        We welcome motivated graduate and undergraduate researchers interested in developing
        rigorous machine-learning methods for scientific and engineering systems. Students with
        backgrounds in computer science, applied mathematics, physics, and engineering are encouraged
        to get in touch.
      </p>

      <div class="join-fields">
        <span class="join-field">Scientific Machine Learning</span>
        <span class="join-field">Physics-Informed AI</span>
        <span class="join-field">Neural Operators</span>
        <span class="join-field">Generative AI for Science</span>
        <span class="join-field">Computational Modeling</span>
      </div>

      <a class="join-button" href="mailto:aniruddha_bora@txstate.edu">
        Contact Dr. Bora
      </a>
    </div>
  </section>


  <!-- ===================================================== -->
  <!-- CONTACT -->
  <!-- ===================================================== -->
  <section class="lab-section" id="contact">
    <div class="section-heading">
      <div class="section-eyebrow">Contact</div>
      <h2 class="section-title">Get in touch</h2>
      <div class="section-rule"></div>
    </div>

    <div class="contact-card">
      <div class="contact-main">
        <strong>Dr. Aniruddha Bora</strong><br>
        Department of Computer Science<br>
        310D COMAL, Texas State University<br>
        San Marcos, TX 78666
      </div>

      <div class="contact-links">
        <a href="mailto:aniruddha_bora@txstate.edu">Email</a>
        <a href="https://aniruddhabora.github.io">Website</a>
        <a href="https://www.linkedin.com/in/aniruddha-bora-49b73a80/">LinkedIn</a>
        <a href="https://scholar.google.com/citations?user=4OMm56YAAAAJ&hl=en">Google Scholar</a>
      </div>
    </div>
  </section>

</div>
