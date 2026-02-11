---
layout: archive
title: "SPARK Lab"
permalink: /spark/
author_profile: true
---

<style>
  .spark-header {
    text-align: center;
    margin-bottom: 2em;
    padding: 2em 1.5em;
    background: linear-gradient(135deg, #0a0e1a 0%, #111827 100%);
    border-radius: 16px;
    border: 1px solid rgba(245, 158, 11, 0.15);
  }
  .spark-header img {
    width: 180px;
    margin-bottom: 0.8em;
  }
  .spark-header h2 {
    color: #F59E0B;
    font-size: 1.1em;
    font-weight: 400;
    letter-spacing: 2px;
    margin: 0;
  }
  .spark-header p {
    color: #94A3B8;
    font-size: 0.9em;
    margin-top: 0.5em;
  }
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
  }
  .area-card .emoji { font-size: 1.5em; margin-bottom: 8px; }
  .area-card h4 { margin: 0 0 6px; font-size: 0.95em; color: #1e293b; }
  .area-card p { margin: 0; font-size: 0.82em; color: #64748b; line-height: 1.5; }
  .member-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px;
    margin: 1em 0 2em;
  }
  .member-card {
    padding: 20px;
    border-radius: 12px;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    text-align: center;
  }
  .member-card .member-avatar {
    width: 80px; height: 80px;
    border-radius: 50%;
    background: linear-gradient(135deg, #F59E0B, #06B6D4);
    margin: 0 auto 12px;
    display: flex; align-items: center; justify-content: center;
    color: white; font-weight: 700; font-size: 1.4em;
  }
  .member-card h4 { margin: 0 0 4px; font-size: 0.95em; }
  .member-card .role { font-size: 0.8em; color: #F59E0B; margin-bottom: 4px; }
  .member-card .info { font-size: 0.78em; color: #64748b; }
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
  .join-box {
    padding: 1.5em;
    border-radius: 12px;
    background: linear-gradient(135deg, #fffbeb, #f0fdfa);
    border: 1px solid #F59E0B;
    text-align: center;
    margin: 2em 0;
  }
  .join-box h3 { color: #92400e; margin-bottom: 0.5em; }
  .join-box p { color: #475569; font-size: 0.9em; }
  .join-box a {
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
  .join-box a:hover { background: #d97706; }
  .collab-logos {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    align-items: center;
    justify-content: center;
    margin: 1em 0 2em;
    opacity: 0.7;
  }
  .collab-logos span {
    font-size: 0.85em;
    color: #475569;
    padding: 8px 16px;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    background: #f8fafc;
  }
</style>

<!-- SPARK Header -->
<div class="spark-header">
  <img src="/images/spark_logo.svg" alt="SPARK Lab Logo">
  <h2>SCIENTIFIC PREDICTION THROUGH AI RESEARCH & KNOWLEDGE</h2>
  <p>Department of Computer Science · Texas State University · San Marcos, TX</p>
</div>

## About SPARK

The **SPARK Lab** (Scientific Prediction through AI Research & Knowledge) develops next-generation AI methods that are grounded in scientific principles. We build machine learning algorithms that don't just fit data — they respect the laws of physics, scale to real-world complexity, and provide interpretable insights for scientific discovery.

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

<div class="member-grid">
  <div class="member-card">
    <div class="member-avatar">AB</div>
    <h4>Dr. Aniruddha Bora</h4>
    <div class="role">Principal Investigator</div>
    <div class="info">Assistant Professor, Computer Science<br>Texas State University<br>
    <a href="mailto:aniruddha_bora@txstate.edu">aniruddha_bora@txstate.edu</a></div>
  </div>
  <div class="member-card" style="border: 2px dashed #F59E0B; background: #fffbeb;">
    <div class="member-avatar" style="background: linear-gradient(135deg, #e2e8f0, #cbd5e1); color: #94a3b8;">?</div>
    <h4>Open Position</h4>
    <div class="role">Ph.D. Student (Fall 2026)</div>
    <div class="info">Funded position available!<br>See details below.</div>
  </div>
  <div class="member-card" style="border: 2px dashed #06B6D4; background: #f0fdfa;">
    <div class="member-avatar" style="background: linear-gradient(135deg, #e2e8f0, #cbd5e1); color: #94a3b8;">?</div>
    <h4>Open Position</h4>
    <div class="role">Master's / Undergraduate RA</div>
    <div class="info">Motivated students welcome<br>to reach out.</div>
  </div>
</div>

### Past Mentees

* **Sotos Lois** (Imperial College London, 2022–2023) — Mathematical finance using PINNs and operator learning

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
  <div class="pub-title">XAI4Climate: Attributing the role of climate change on extreme-weather precursors</div>
  <div class="pub-authors">J. Wei, A. Bora, V. Oommen, et al.</div>
  <div class="pub-venue">ICLR 2025 Workshop</div>
</div>

👉 **[See all publications →](/publications/)**

---

## Collaborators

<div class="collab-logos">
  <span>🟤 Brown University</span>
  <span>🟢 Argonne National Lab (ALCF)</span>
  <span>🔵 Pacific Northwest National Lab</span>
  <span>🔴 Louisiana Tech University</span>
  <span>🟠 MIT</span>
  <span>🟣 Northwestern University</span>
</div>

---

## Grants & Funding

* **PIER: Physics-Informed, Energy-efficient, Risk-aware Routing** — Texas State University, $12,000 (2026–Present)
* **ALCF Director's Discretionary Allocation** — Physics-Informed Generative AI (Argonne)
* **ALCF Director's Discretionary Allocation** — Extreme Weather via Neural Operator Approximation (Argonne)
* **MURI Program (ONR)** — ML Methods for Phase Change Heat Transfer Modeling and Design (Brown, contributor)

---

## HPC Resources

The SPARK Lab has access to world-class computing infrastructure:

* **ALCF Polaris** — HPE Cray EX (AMD EPYC + NVIDIA A100)
* **ALCF Aurora** — HPE Cray EX (Intel Sapphire Rapids + Intel Data Center GPU Max)
* **OSCAR** — Brown University HPC Cluster

---

<div class="join-box">
  <h3>🔥 Join the SPARK Lab!</h3>
  <p>I am recruiting <strong>one funded Ph.D. student</strong> for Fall 2026 and welcome motivated Master's and undergraduate researchers.<br>
  Looking for students with backgrounds in <strong>CS, Applied Math, Physics, or Engineering</strong> interested in:</p>
  <p><strong>Machine learning for physical systems · Scientific & interpretable AI · Computational modeling using AI</strong></p>
  <a href="mailto:aniruddha_bora@txstate.edu">📧 Apply Now — aniruddha_bora@txstate.edu</a>
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
