---
layout: archive
title: "SPARKS Lab"
permalink: /spark/
author_profile: true
---

<style>
  /* ===== HEADER ===== */
  .sparks-header {
    text-align: center;
    margin-bottom: 2.5em;
    padding: 2.5em 1.5em 2em;
    background: linear-gradient(135deg, #0a0e1a 0%, #111827 100%);
    border-radius: 20px;
    border: 1px solid rgba(245, 158, 11, 0.15);
  }
  .sparks-header img {
    width: 260px;
    margin-bottom: 1em;
    filter: drop-shadow(0 0 20px rgba(245, 158, 11, 0.15));
  }
  .sparks-header h2 {
    color: #F59E0B;
    font-size: 1.05em;
    font-weight: 400;
    letter-spacing: 2.5px;
    margin: 0;
    text-transform: uppercase;
  }
  .sparks-header p {
    color: #94A3B8;
    font-size: 0.88em;
    margin-top: 0.5em;
  }

  /* ===== RESEARCH AREAS ===== */
  .research-areas {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 16px;
    margin: 1.5em 0 2em;
  }
  .area-card {
    padding: 20px;
    border-radius: 12px;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    transition: all 0.2s ease;
  }
  .area-card:hover {
    border-color: #F59E0B;
    box-shadow: 0 4px 12px rgba(245, 158, 11, 0.1);
    transform: translateY(-2px);
  }
  .area-card .emoji { font-size: 1.5em; margin-bottom: 8px; }
  .area-card h4 { margin: 0 0 6px; font-size: 0.95em; color: #1e293b; }
  .area-card p { margin: 0; font-size: 0.82em; color: #64748b; line-height: 1.5; }

  /* ===== TEAM — HIERARCHY ===== */
  .team-tier {
    margin-bottom: 2em;
  }
  .tier-label {
    font-size: 0.78em;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    color: #94A3B8;
    margin-bottom: 12px;
    padding-left: 4px;
  }
  .tier-label.pi { color: #F59E0B; border-left: 3px solid #F59E0B; padding-left: 10px; }
  .tier-label.grad { color: #06B6D4; border-left: 3px solid #06B6D4; padding-left: 10px; }
  .tier-label.ugrad { color: #8B5CF6; border-left: 3px solid #8B5CF6; padding-left: 10px; }
  .tier-label.alumni { color: #64748B; border-left: 3px solid #94A3B8; padding-left: 10px; }

  /* PI card — larger, centered */
  .pi-card {
    max-width: 420px;
    margin: 0 auto 8px;
    padding: 28px;
    border-radius: 16px;
    background: linear-gradient(135deg, #fffbeb, #fef3c7);
    border: 2px solid rgba(245, 158, 11, 0.3);
    text-align: center;
  }
  .pi-card .pi-photo {
    width: 110px; height: 110px;
    border-radius: 50%;
    margin: 0 auto 14px;
    overflow: hidden;
    border: 3px solid #F59E0B;
  }
  .pi-card .pi-photo img {
    width: 100%; height: 100%;
    object-fit: cover;
  }
  .pi-card .pi-avatar {
    width: 110px; height: 110px;
    border-radius: 50%;
    background: linear-gradient(135deg, #F59E0B, #EF4444);
    margin: 0 auto 14px;
    display: flex; align-items: center; justify-content: center;
    color: white; font-weight: 700; font-size: 2em;
    border: 3px solid #F59E0B;
  }
  .pi-card h4 { margin: 0 0 4px; font-size: 1.15em; color: #1e293b; }
  .pi-card .role { font-size: 0.85em; color: #F59E0B; font-weight: 600; margin-bottom: 6px; }
  .pi-card .info { font-size: 0.82em; color: #64748b; line-height: 1.6; }
  .pi-card .info a { color: #d97706; }

  /* Member grid — grad & undergrad */
  .member-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px;
    margin: 0 0 8px;
  }
  .member-card {
    padding: 22px 18px;
    border-radius: 14px;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    text-align: center;
    transition: all 0.2s ease;
  }
  .member-card:hover {
    border-color: rgba(6, 182, 212, 0.3);
    transform: translateY(-2px);
  }
  .member-card .member-photo {
    width: 90px; height: 90px;
    border-radius: 50%;
    margin: 0 auto 12px;
    overflow: hidden;
    border: 3px solid #e2e8f0;
  }
  .member-card .member-photo img {
    width: 100%; height: 100%;
    object-fit: cover;
  }
  .member-card .member-avatar {
    width: 90px; height: 90px;
    border-radius: 50%;
    margin: 0 auto 12px;
    display: flex; align-items: center; justify-content: center;
    color: white; font-weight: 700; font-size: 1.4em;
  }
  .member-card h4 { margin: 0 0 4px; font-size: 0.95em; color: #1e293b; }
  .member-card .role { font-size: 0.8em; font-weight: 500; margin-bottom: 6px; }
  .member-card .role.grad-role { color: #06B6D4; }
  .member-card .role.ugrad-role { color: #8B5CF6; }
  .member-card .info { font-size: 0.78em; color: #64748b; line-height: 1.4; }
  .member-card .quote {
    font-size: 0.76em;
    color: #475569;
    font-style: italic;
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid #e2e8f0;
    line-height: 1.4;
  }

  /* Open position cards */
  .open-card {
    border: 2px dashed;
  }
  .open-card.grad-open { border-color: #06B6D4; background: #f0fdfa; }
  .open-card.ugrad-open { border-color: #8B5CF6; background: #f5f3ff; }
  .open-card .member-avatar.grad-placeholder { background: linear-gradient(135deg, #e2e8f0, #cffafe); color: #06B6D4; }
  .open-card .member-avatar.ugrad-placeholder { background: linear-gradient(135deg, #e2e8f0, #ede9fe); color: #8B5CF6; }

  /* ===== PUBLICATIONS ===== */
  .pub-highlight {
    padding: 14px 18px;
    border-left: 3px solid #F59E0B;
    background: #fffbeb;
    border-radius: 0 8px 8px 0;
    margin-bottom: 12px;
  }
  .pub-highlight .pub-title { font-weight: 600; font-size: 0.9em; color: #1e293b; margin-bottom: 4px; }
  .pub-highlight .pub-venue { font-size: 0.8em; color: #F59E0B; }
  .pub-highlight .pub-authors { font-size: 0.78em; color: #64748b; }

  /* ===== JOIN BOX ===== */
  .join-box {
    padding: 1.5em;
    border-radius: 14px;
    background: linear-gradient(135deg, #fffbeb, #f0fdfa);
    border: 1px solid #F59E0B;
    text-align: center;
    margin: 2em 0;
  }
  .join-box h3 { color: #92400e; margin-bottom: 0.5em; }
  .join-box p { color: #475569; font-size: 0.9em; }
  .join-box a.join-btn {
    display: inline-block;
    margin-top: 10px;
    padding: 10px 24px;
    background: #F59E0B;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.9em;
  }
  .join-box a.join-btn:hover { background: #d97706; }

  /* ===== COLLABORATORS ===== */
  .collab-logos {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
    justify-content: center;
    margin: 1em 0 2em;
  }
  .collab-logos span {
    font-size: 0.82em;
    color: #475569;
    padding: 8px 16px;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    background: #f8fafc;
    transition: all 0.2s ease;
  }
  .collab-logos span:hover {
    border-color: #F59E0B;
    background: #fffbeb;
  }

  /* ===== ORG CHART CONNECTOR ===== */
  .org-connector {
    width: 2px;
    height: 20px;
    background: linear-gradient(to bottom, #F59E0B, #06B6D4);
    margin: 0 auto;
    opacity: 0.3;
  }
  .org-connector.grad-to-ugrad {
    background: linear-gradient(to bottom, #06B6D4, #8B5CF6);
  }
</style>

<!-- ========================================= -->
<!-- SPARKS HEADER with BIGGER LOGO -->
<!-- ========================================= -->
<div class="sparks-header">
  <img src="/images/sparks_logo.svg" alt="SPARKS Lab Logo">
  <h2>Scientific Prediction through AI Research, Knowledge & Simulation</h2>
  <p>Department of Computer Science · Texas State University · San Marcos, TX</p>
</div>

## About SPARKS

The **SPARKS Lab** (**S**cientific **P**rediction through **A**I **R**esearch, **K**nowledge & **S**imulation) develops next-generation AI methods that are grounded in scientific principles. We build machine learning algorithms that don't just fit data — they respect the laws of physics, scale to real-world complexity, and provide interpretable insights for scientific discovery.

Our work spans **physics-informed neural networks**, **neural operators**, **generative AI for science**, and **hybrid modeling** — with applications ranging from climate modeling and turbulence to nanoscale heat conduction and metamaterial design.

---

## Research Areas

<div class="research-areas">
  <div class="area-card">
    <div class="emoji">🧠</div>
    <h4>Scientific Machine Learning</h4>
    <p>Physics-Informed Neural Networks (PINNs), DeepONets, and deep neural operators for solving complex PDEs and multiphysics problems.</p>
  </div>
  <div class="area-card">
    <div class="emoji">🌍</div>
    <h4>Climate & Earth System Modeling</h4>
    <p>Neural operator-based bias corrections, nudging strategies for E3SM, and hybrid approaches for weather and climate prediction.</p>
  </div>
  <div class="area-card">
    <div class="emoji">🌊</div>
    <h4>Turbulence & Fluid Dynamics</h4>
    <p>Generative models and diffusion-based neural operators for super-resolution, forecasting, and sparse reconstruction of turbulent flows.</p>
  </div>
  <div class="area-card">
    <div class="emoji">🔬</div>
    <h4>Nanoscale Heat Conduction</h4>
    <p>Neural network methods for ultrashort-pulsed laser heating, parabolic two-temperature models, and multi-layer thin film thermal analysis.</p>
  </div>
  <div class="area-card">
    <div class="emoji">⚡</div>
    <h4>Neural Operators & Spectral Methods</h4>
    <p>Mitigating spectral bias, high-frequency scaling, multi-fidelity operator learning for physical systems.</p>
  </div>
  <div class="area-card">
    <div class="emoji">🛡️</div>
    <h4>Engineering & Inverse Design</h4>
    <p>MOSFET heat sink optimization, PIER routing, mechanical metamaterial characterization, and inverse design via neural operators.</p>
  </div>
</div>

---

## Team

<!-- ===== TIER 1: PRINCIPAL INVESTIGATOR ===== -->
<div class="team-tier">
  <div class="tier-label pi">PRINCIPAL INVESTIGATOR</div>
  <div class="pi-card">
    <!-- OPTION A: Use your photo (recommended) -->
    <div class="pi-photo">
      <img src="/images/profile_2.png" alt="Dr. Aniruddha Bora">
    </div>
    <!-- OPTION B: If no photo, use avatar instead — delete OPTION A and uncomment below:
    <div class="pi-avatar">AB</div>
    -->
    <h4>Dr. Aniruddha Bora</h4>
    <div class="role">Assistant Professor, Computer Science</div>
    <div class="info">
      Texas State University<br>
      Ph.D., Louisiana Tech University<br>
      Postdoc, Brown University <br>
      <a href="mailto:aniruddha_bora@txstate.edu">aniruddha_bora@txstate.edu</a>
    </div>
  </div>
</div>

<div class="org-connector"></div>

<div class="team-tier">
  <div class="tier-label grad">GRADUATE STUDENTS</div>
  <div class="member-grid">
    <div class="member-card">
      <div class="member-photo">
        <img src="/images/rajnish.jpg" alt="Rajnish Kumar">
      </div>
      <h4>Rajnish Kumar</h4>
      <div class="role grad-role">Ph.D. Student (Part-time)</div>
      <div class="info">Department of Computer Science<br>Texas State University</div>
    </div>
  </div>
</div>

<div class="org-connector grad-to-ugrad"></div>

<!-- ===== TIER 3: UNDERGRADUATE STUDENTS ===== -->
<div class="team-tier">
  <div class="tier-label ugrad">UNDERGRADUATE RESEARCHERS</div>
  <div class="member-grid">

    <!-- ======================================================== -->
    <!-- UNDERGRAD 1: Replace placeholders with actual info        -->
    <!-- To add photo: save image to /images/ folder, then update  -->
    <!-- the <img src="..."> path below                            -->
    <!-- ======================================================== -->
    <div class="member-card">
      <div class="member-photo">
        <img src="/images/student1.jpeg" alt="Student 1 Name">
      </div>
      <!-- If no photo, use avatar instead — delete member-photo div above and uncomment:
      <div class="member-avatar" style="background: linear-gradient(135deg, #8B5CF6, #06B6D4);">S1</div>
      -->
      <h4>Student 1 Pawan Pradhan </h4>
      <div class="role ugrad-role">Undergraduate Researcher</div>
      <div class="info">Mechanical engineering, Texas State University</div>
      <div class="quote">"I transform ideas into real-world systems."</div>
    </div>

    <!-- ======================================================== -->
    <!-- UNDERGRAD 2: Replace placeholders with actual info        -->
    <!-- ======================================================== -->
    <div class="member-card">
      <div class="member-photo">
        <img src="/images/student2.png" alt="Student 2 Name">
      </div>
      <!-- If no photo, use avatar instead — delete member-photo div above and uncomment:
      <div class="member-avatar" style="background: linear-gradient(135deg, #8B5CF6, #F59E0B);">S2</div>
      -->
      <h4>Student 2 Arjun Gyawali</h4>
      <div class="role ugrad-role">Undergraduate Researcher</div>
      <div class="info">Computer Science, Texas State University</div>
      <div class="quote">"I don't just call APIs and tune hyperparameters, I trace the math down to the gradient, because black boxes don't teach you anything."</div>
    </div>

  </div>
</div>

<div class="org-connector grad-to-ugrad"></div>

<!-- ===== TIER 4: ALUMNI / PAST MENTEES ===== -->
<div class="team-tier">
  <div class="tier-label alumni">ALUMNI & PAST MENTEES</div>

* **Sotos Lois** (Imperial College London, 2022–2023) — Mathematical finance using PINNs and operator learning
</div>

---

## Selected Publications

<div class="pub-highlight">
  <div class="pub-title">Learning bias corrections for climate models using deep neural operators</div>
  <div class="pub-authors">A. Bora, K. Shukla, S. Zhang, R. Leung, G.E. Karniadakis</div>
  <div class="pub-venue">AAAI 2023</div>
</div>

<div class="pub-highlight">
  <div class="pub-title">Integrating Neural Operators with Diffusion Models Improves Spectral Representation in Turbulence Modeling</div>
  <div class="pub-authors">V. Oommen, A. Bora, Z. Zhang, G.E. Karniadakis</div>
  <div class="pub-venue">Proceedings of the Royal Society A, 2025</div>
</div>

<div class="pub-highlight">
  <div class="pub-title">Characterization and Inverse Design of Stochastic Mechanical Metamaterials Using Neural Operators</div>
  <div class="pub-authors">H. Jin, B. Zhang, Q. Cao, E. Zhang, A. Bora, et al.</div>
  <div class="pub-venue">Advanced Materials, 2025</div>
</div>

<div class="pub-highlight">
  <div class="pub-title">Neural network method for solving nonlocal two-temperature nanoscale heat conduction in gold films</div>
  <div class="pub-authors">A. Bora, W. Dai, J.P. Wilson, J.C. Boyt, S.L. Sobolev</div>
  <div class="pub-venue">International Journal of Heat and Mass Transfer, 2022</div>
</div>

<div class="pub-highlight">
  <div class="pub-title">XAI4Extremes: An interpretable ML framework for understanding extreme-weather precursors</div>
  <div class="pub-authors">J. Wei, A. Bora, V. Oommen, et al.</div>
  <div class="pub-venue">ICLR 2025 Workshop</div>
</div>

👉 **[See all publications →](/publications/)**

---


## Grants & Funding

* **PIER: Physics-Informed, Energy-efficient, Risk-aware Routing** — Texas State University, $12,000 (2026–Present)
* **ALCF Director's Discretionary Allocation** — Physics-Informed Generative AI (Argonne)
* **ALCF Director's Discretionary Allocation** — Extreme Weather via Neural Operator Approximation (Argonne)
* **MURI Program (ONR)** — ML Methods for Phase Change Heat Transfer Modeling and Design (Brown, contributor)

---

## HPC Resources

The SPARKS Lab has access to world-class computing infrastructure:

* **ALCF Polaris** — HPE Cray EX (AMD EPYC + NVIDIA A100)
* **ALCF Aurora** — HPE Cray EX (Intel Sapphire Rapids + Intel Data Center GPU Max)
* **OSCAR** — Brown University HPC Cluster

---

<div class="join-box">
  <h3>🔥 Join the SPARKS Lab!</h3>
  <p>I am recruiting <strong>one funded Ph.D. student</strong> for Fall 2026 and welcome motivated Master's and undergraduate researchers.<br>
  Looking for students with backgrounds in <strong>CS, Applied Math, Physics, or Engineering</strong> interested in:</p>
  <p><strong>Machine learning for physical systems · Scientific & interpretable AI · Computational modeling using AI</strong></p>
  <a class="join-btn" href="mailto:aniruddha_bora@txstate.edu">📧 Apply Now — aniruddha_bora@txstate.edu</a>
</div>

---

## Contact

**Dr. Aniruddha Bora**  
Department of Computer Science  
310D COMAL, Texas State University  
San Marcos, TX 78666  

📧 [aniruddha_bora@txstate.edu](mailto:aniruddha_bora@txstate.edu)  
🌐 [aniruddhabora.github.io](https://aniruddhabora.github.io)  
🔗 [LinkedIn](https://www.linkedin.com/in/aniruddha-bora-49b73a80/)  
📚 [Google Scholar](https://scholar.google.com/citations?user=4OMm56YAAAAJ&hl=en)
