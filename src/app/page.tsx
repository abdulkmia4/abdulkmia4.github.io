"use client";

import { useEffect, useState } from "react";
import ResearchImageCarousel from "./components/ResearchImageCarousel";


const cvdImages = [
  {
    src: "/research/cvd/cvd-01.jpg",
    description:
      "CVD growth of atomically thin transition-metal dichalcogenide materials.",
  },
  {
    src: "/research/cvd/cvd-02.jpg",
    description:
      "Controlled synthesis and optimization of 2D materials using CVD.",
  },
  {
    src: "/research/cvd/cvd-03.jpg",
    description:
      "Morphological and optical investigation of CVD-grown 2D materials.",
  },
];


const heterostructureImages = [
  {
    src: "/research/heterostructures/hetero-01.jpg",
    description:
      "In-situ growth of WS₂–MoS₂ lateral heterostructures with engineered interfaces.",
  },
  {
    src: "/research/heterostructures/hetero-02.jpg",
    description:
      "Characterization of the interface between two-dimensional semiconductor domains.",
  },
];


const optoelectronicsImages = [
  {
    src: "/research/optoelectronics/opto-01.jpg",
    description:
      "Fabricated 2D-material-based device for optoelectronic measurements.",
  },
  {
    src: "/research/optoelectronics/opto-02.jpg",
    description:
      "Photodetection and electrical characterization of a 2D semiconductor device.",
  },
];


const magneticImages = [
  {
    src: "/research/magnetic/magnetic-01.jpg",
    description:
      "CVD-grown magnetic 2D material investigated for its magnetic properties.",
  },
  {
    src: "/research/magnetic/magnetic-02.jpg",
    description:
      "Magnetotransport measurements of a magnetic 2D-material-based device.",
  },
];


/* =========================================
   PUBLICATIONS
========================================= */

const publications = [
  {
    number: 15,
    authors: (
      <>
        S. Aswal, <strong>A. K. Mia</strong>, S. Ghosal, and P. Giri
      </>
    ),
    title:
      "In situ chemical vapor deposition-grown trilayer ReSe₂/silicon-on-insulator (SOI) heterostructure for high performance broadband photodetection",
    journal: "Advanced Materials Technologies",
    details: "e71140, 2026",
    doi: "https://doi.org/10.1002/admt.71140",
  },
  {
    number: 14,
    authors: (
      <>
        S. Debnath, <strong>A. K. Mia</strong>, M. Meyyappan, and P. K. Giri
      </>
    ),
    title:
      "Superior performance of printed optoelectronic synapses based on defect-controlled monolayer MoS₂ with ultralow power consumption for neuromorphic computing",
    journal: "Nanoscale",
    details: "18, 242–259, 2026",
    doi: "https://doi.org/10.1039/D5NR03748D",
  },
  {
    number: 13,
    authors: (
      <>
        S. Dey, S. Ghosal, <strong>A. K. Mia</strong>, S. Debnath, M. Saifuddin,
        M. T. Hossain, et al.
      </>
    ),
    title:
      "Wavelength-selective bipolar photoresponse in CVD-grown β-Bi₂O₃ flakes for multi-logic functionality",
    journal: "Nanoscale",
    details: "18, 15728–15741, 2026",
    doi: "https://doi.org/10.1039/D6NR01763K",
  },
  {
    number: 12,
    authors: (
      <>
        <strong>A. K. Mia</strong>, S. Aswal, S. Debnath, V. Vretenar, and P.
        Giri
      </>
    ),
    title:
      "Semi-metallic Bi₂Se₃ contact-based interface engineering on monolayer MoS₂ for high-performance field-effect transistors and flexible photodetectors",
    journal: "Journal of Materials Chemistry C",
    details: "13, 22821–22831, 2025",
    doi: "https://doi.org/10.1039/D5TC03233D",
  },
  {
    number: 11,
    authors: (
      <>
        <strong>A. K. Mia</strong>, S. Dey, L. Vanco, V. Vretenar, and P. K.
        Giri
      </>
    ),
    title:
      "In-situ CVD grown WS₂–MoS₂ lateral heterostructure with alloyed interface: Strong photoluminescence enhancement and high on-off ratio field effect transistors",
    journal: "Materials Today Nano",
    details: "31, 100638, 2025",
    doi: "https://doi.org/10.1016/j.mtnano.2025.100638",
  },
  {
    number: 10,
    authors: (
      <>
        A. Bora, L. P. Mawlong, <strong>A. K. Mia</strong>, and P. K. Giri
      </>
    ),
    title:
      "Manipulating trion and biexciton emissions in monolayer WS₂ by sandwiching with ultrathin ZnO layers for excitonic light emission applications",
    journal: "ACS Applied Nano Materials",
    details: "7, 8612–8623, 2024",
    doi: "https://doi.org/10.1021/acsanm.3c06043",
  },
  {
    number: 9,
    authors: (
      <>
        R. Chahal, <strong>A. K. Mia</strong>, A. Bora, and P. K. Giri
      </>
    ),
    title:
      "Facile in situ synthesis of double perovskite Cs₂AgBiBr₆/WS₂ heterostructure and interfacial charge transfer mediated high-performance ultraviolet photodetection",
    journal: "Journal of Materials Chemistry C",
    details: "12, 12835–12846, 2024",
    doi: "https://doi.org/10.1039/D4TC02069C",
  },
  {
    number: 8,
    authors: (
      <>
        G. Marappan, <strong>A. K. Mia</strong>, K. Puspharaj, S. Vaidyanathan,
        Y. Kawazoe, Y. Sivalingam, et al.
      </>
    ),
    title:
      "Response to VOCs stimuli by triphenylamine derivatives functionalized zinc oxide nanorods: A promising material for food freshness monitoring",
    journal: "Surfaces and Interfaces",
    details: "44, 103648, 2024",
    doi: "https://doi.org/10.1016/j.surfin.2023.103648",
  },
  {
    number: 7,
    authors: (
      <>
        <strong>A. K. Mia</strong>, M. Meyyappan, and P. Giri
      </>
    ),
    title:
      "Asymmetric contact-induced selective doping of CVD-grown bilayer WS₂ and its application in high-performance photodetection with an ultralow dark current",
    journal: "Nanoscale",
    details: "16, 8583–8596, 2024",
    doi: "https://doi.org/10.1039/D3NR06118C",
  },
  {
    number: 6,
    authors: (
      <>
        <strong>A. K. Mia</strong>, S. Sinha, and P. Giri
      </>
    ),
    title:
      "Highly sensitive and selective optical detection of Staphylococcus aureus using thiol functionalized monolayer tungsten disulfide grown by chemical vapor deposition",
    journal: "Sensors and Actuators Reports",
    details: "8, 100214, 2024",
    doi: "https://doi.org/10.1016/j.snr.2024.100214",
  },
  {
    number: 5,
    authors: (
      <>
        N. S. Singh, <strong>A. K. Mia</strong>, and P. K. Giri
      </>
    ),
    title:
      "Role of oxygen functional groups and attachment of Au nanoparticles on graphene oxide sheets for improved photodetection performance",
    journal: "Nanoscale Advances",
    details: "6, 2136–2148, 2024",
    doi: "https://doi.org/10.1039/D3NA01120H",
  },
  {
    number: 4,
    authors: (
      <>
        <strong>A. K. Mia</strong>, A. Bora, M. T. Hossain, S. Sinha, and P. K.
        Giri
      </>
    ),
    title:
      "Fast detection of Staphylococcus aureus using thiol-functionalized WS₂ quantum dots and Bi₂O₂Se nanosheets hybrid through a fluorescence recovery mechanism",
    journal: "Journal of Materials Chemistry B",
    details: "11, 10206–10217, 2023",
    doi: "https://doi.org/10.1039/D3TB01465G",
  },
  {
    number: 3,
    authors: (
      <>
        <strong>A. K. Mia</strong>, M. Meyyappan, and P. K. Giri
      </>
    ),
    title:
      "Two-dimensional transition metal dichalcogenide based biosensors: From fundamentals to healthcare applications",
    journal: "Biosensors",
    details: "13, 169, 2023",
    doi: "https://doi.org/10.3390/bios13020169",
  },
  {
    number: 2,
    authors: (
      <>
        S. Paul, M. T. Hossain, <strong>A. K. Mia</strong>, and P. K. Giri
      </>
    ),
    title:
      "Ultrabroadband absorption and high-performance photodetection in europium-doped 2D topological insulator Bi₂Se₃ nanosheets",
    journal: "ACS Applied Nano Materials",
    details: "4, 12527–12540, 2021",
    doi: "https://doi.org/10.1021/acsanm.1c03055",
  },
];


export default function Home() {

  /* =========================================
     GOOGLE SCHOLAR METRICS
  ========================================= */

  const [scholarMetrics, setScholarMetrics] = useState({
    citations: null as number | null,
    hIndex: null as number | null,
    i10Index: null as number | null,
    updated: null as string | null,
  });

  useEffect(() => {
    fetch("/scholar-metrics.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not load Scholar metrics.");
        }

        return response.json();
      })
      .then((data) => {
        setScholarMetrics({
          citations:
            typeof data.citations === "number" ? data.citations : null,
          hIndex:
            typeof data.hIndex === "number" ? data.hIndex : null,
          i10Index:
            typeof data.i10Index === "number" ? data.i10Index : null,
          updated:
            typeof data.updated === "string" ? data.updated : null,
        });
      })
      .catch((error) => {
        console.error("Failed to load Scholar metrics:", error);
      });
  }, []);


  const formattedScholarUpdate = scholarMetrics.updated
    ? new Date(scholarMetrics.updated).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : null;


  return (
    <main>

      {/* =========================
          NAVIGATION
      ========================== */}

      <header className="site-header">
        <div className="nav-container">

          <a href="#" className="brand">
            <span className="brand-mark">AKM</span>
            <span className="brand-name">Abdul Kaium Mia</span>
          </a>

          <nav className="navigation">
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#research">Research</a>
            <a href="#experience">Experience</a>
            <a href="#publications">Publications</a>
            <a href="/gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            href="https://scholar.google.com/citations?user=LmleHyEAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-scholar"
          >
            Google Scholar ↗
          </a>

        </div>
      </header>


      {/* =========================
          HERO SECTION
      ========================== */}

      <section className="hero">
        <div className="hero-container">

          <div className="hero-content">

            <p className="eyebrow">
              2D MATERIALS · NANOTECHNOLOGY · DEVICES
            </p>

            <h1>
              Dr. Abdul
              <br />
              <span>Kaium Mia</span>
            </h1>

            <h2 className="hero-role">
              Postdoctoral Researcher
            </h2>

            <p className="hero-specialization">
              2D Materials <span>|</span> Semiconductor Devices{" "}
              <span>|</span> Nanotechnology
            </p>

            <p className="hero-description">
              Experimental researcher specializing in{" "}
              <strong>chemical vapor deposition (CVD)</strong> growth and
              interface engineering of two-dimensional semiconducting and
              magnetic materials. Experienced in controlled synthesis of{" "}
              <strong>
                WS<sub>2</sub>
              </strong>
              ,{" "}
              <strong>
                MoS<sub>2</sub>
              </strong>
              ,{" "}
              <strong>
                WS<sub>2</sub>–MoS<sub>2</sub>
              </strong>{" "}
              lateral heterostructures,{" "}
              <strong>
                CoS<sub>2</sub>
              </strong>{" "}
              and{" "}
              <strong>
                VS<sub>2</sub>
              </strong>
              , including in-situ <strong>vanadium</strong> doping of{" "}
              <strong>
                CoS<sub>2</sub>
              </strong>
              . Research expertise also includes semiconductor devices,
              photodetection, neuromorphic optoelectronics, and
              magnetotransport using 2D TMDs.
            </p>

            <div className="hero-buttons">

              <a href="#research" className="button button-primary">
                Explore Research
                <span>→</span>
              </a>

              <a href="#contact" className="button button-secondary">
                Get in Touch
              </a>

            </div>

            <div className="hero-links">

              <a
                href="https://scholar.google.com/citations?user=LmleHyEAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Scholar
              </a>

              <span>·</span>

              <a
                href="https://orcid.org/my-orcid?orcid=0000-0002-4375-377X/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ORCID
              </a>

              <span>·</span>

              <a href="mailto:kaiummia4@gmail.com">
                Get in Touch
              </a>

            </div>

          </div>


          <div className="hero-visual">

            <div className="rpgr-photo-card">

              <img
                src="/rpgr-presentation.jpg"
                alt="Dr. Abdul Kaium Mia presenting research at RPGR 2023"
              />

              <div className="photo-caption">
                <span>RESEARCH PRESENTATION</span>
                <strong>RPGR 2023 · Bengaluru, India</strong>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================
          RESEARCH AT A GLANCE
      ========================== */}

      <section className="research-glance">

        <div className="section-container">

          <div className="glance-item">

            <div className="glance-icon">◷</div>

            <div>
              <strong>5+ Years</strong>
              <span>Research Experience</span>
              <small>PhD · Postdoctoral Research</small>
            </div>

          </div>

          <div className="glance-divider"></div>

          <div className="glance-item">

            <div className="glance-icon">◇</div>

            <div>
              <strong>2D Materials</strong>
              <span>CVD Growth, In-situ doping</span>
              <small>WS₂ · MoS₂ · CoS₂ · VS₂</small>
            </div>

          </div>

          <div className="glance-divider"></div>

          <div className="glance-item">

            <div className="glance-icon">▣</div>

            <div>
              <strong>Device Engineering</strong>
              <span>Fabrication &amp; Characterization</span>
              <small>FETs · Photodetectors · Hall bar</small>
            </div>

          </div>

          <div className="glance-divider"></div>

          <div className="glance-item">

            <div className="glance-icon">♧</div>

            <div>
              <strong>Applications</strong>
              <span>Optoelectronics · Biosensing · Magnetic</span>
              <small>From fundamental science to real-world impact</small>
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          ABOUT
      ========================== */}

      <section id="about" className="section about-section">

        <div className="section-container two-column">

          <div>

            <p className="section-label">
              ABOUT ME
            </p>

            <h2>
              Exploring the possibilities of
              <span> atomically thin materials.</span>
            </h2>

          </div>


          <div className="about-text">

            <p>
              I am a researcher working at the intersection of
              <strong>
                {" "}
                nanomaterials, semiconductor physics and device engineering
              </strong>
              .
            </p>

            <p>
              My research focuses on understanding how controlled synthesis,
              interfaces and contacts can be engineered to translate the
              unique properties of two-dimensional materials into practical
              electronic, optoelectronic and sensing devices.
            </p>

            <p>
              My experience spans the complete research cycle—from
              <strong> CVD growth and materials characterization</strong> to
              <strong>
                {" "}
                cleanroom fabrication and electrical characterization
              </strong>
              .
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          EDUCATION
      ========================== */}

      <section id="education" className="section education-section">

        <div className="section-container">

          <div className="section-heading">

            <p className="section-label">
              EDUCATION
            </p>

            <h2>
              Academic journey from
              <span> physics to nanotechnology.</span>
            </h2>

          </div>


          <div className="education-timeline">

            {/* PhD */}

            <article className="education-item">

              <div className="education-year">
                2019 — 2025
              </div>

              <div className="education-content">

                <h3>
                  Ph.D. in Nanotechnology
                </h3>

                <p className="education-institution">
                  Centre for Nanotechnology, IIT Guwahati
                </p>

                <p className="education-description">
                  Doctoral research focused on the controlled CVD growth of
                  two-dimensional transition metal dichalcogenides, lateral
                  heterostructures, semiconductor devices, optoelectronics and
                  biosensing.
                </p>

              </div>

            </article>


            {/* M.Sc. */}

            <article className="education-item">

              <div className="education-year">
                2015 — 2017
              </div>

              <div className="education-content">

                <h3>
                  M.Sc. in Physics
                </h3>

                <p className="education-institution">
                  Indian Institute of Technology Kharagpur
                </p>

              </div>

            </article>


            {/* JRF */}

            <article className="education-item">

              <div className="education-year">
                2017 — 2019
              </div>

              <div className="education-content">

                <h3>
                  Junior Research Fellow
                </h3>

                <p className="education-institution">
                  SRM Institute of Science and Technology,
                  Kattankulathur, Chennai
                </p>

                <p className="education-description">
                  Research experience bridging postgraduate education and
                  doctoral research, with hands-on exposure to experimental
                  nanomaterials research.
                </p>

              </div>

            </article>


            {/* B.Sc. */}

            <article className="education-item">

              <div className="education-year">
                2012 — 2015
              </div>

              <div className="education-content">

                <h3>
                  B.Sc. in Physics
                </h3>

                <p className="education-institution">
                  Raiganj College (University College),
                  University of North Bengal
                </p>

              </div>

            </article>

          </div>

        </div>

      </section>


      {/* =========================
          RESEARCH
      ========================== */}

      <section id="research" className="section research-section">

        <div className="section-container">

          <div className="section-heading">

            <div>

              <p className="section-label">
                RESEARCH
              </p>

              <h2>
                Research interests
              </h2>

            </div>

            <p className="section-heading-text">
              Developing and understanding advanced 2D materials and their
              integration into next-generation semiconductor devices.
            </p>

          </div>


          <div className="research-grid">

            {/* 01 — CVD GROWTH */}

            <article className="research-card featured">

              <div className="card-number">
                01
              </div>

              <div className="card-icon">
                ◈
              </div>

              <ResearchImageCarousel images={cvdImages} />

              <h3>
                CVD Growth of 2D Materials
              </h3>

            </article>


            {/* 03 — HETEROSTRUCTURES */}

            <article className="research-card">

              <div className="card-number">
                03
              </div>

              <div className="card-icon">
                ⬡
              </div>

              <ResearchImageCarousel images={heterostructureImages} />

              <h3>
                2D Heterostructures
              </h3>

            </article>


            {/* 05 — OPTOELECTRONICS & BIOSENSING */}

            <article className="research-card">

              <div className="card-number">
                05
              </div>

              <div className="card-icon">
                ◎
              </div>

              <ResearchImageCarousel images={optoelectronicsImages} />

              <h3>
                Optoelectronics &amp; Biosensing
              </h3>

            </article>


            {/* 06 — MAGNETIC 2D MATERIALS */}

            <article className="research-card">

              <div className="card-number">
                06
              </div>

              <div className="card-icon">
                ✦
              </div>

              <ResearchImageCarousel images={magneticImages} />

              <h3>
                Magnetic 2D Materials
              </h3>

            </article>

          </div>

        </div>

      </section>


      {/* =========================
          EXPERIENCE
      ========================== */}

      <section id="experience" className="section experience-section">

        <div className="section-container">

          <h2 className="experience-main-heading">
            Research experience
          </h2>


          <div className="experience-header">

            <div className="experience-summary-left">
              <span>5+ YEARS</span>
              <span>EXPERIMENTAL RESEARCH</span>
              <span>2D MATERIALS &amp; DEVICES</span>
            </div>

            <div className="experience-summary-right">
              <span>MATERIALS → DEVICES</span>
              <span>SYNTHESIS → FABRICATION</span>
              <span>→ CHARACTERIZATION</span>
            </div>

          </div>


          <div className="experience-list">

            {/* POSTDOCTORAL RESEARCH */}

            <article className="experience-item">

              <div className="experience-year">
                <span>2025</span>
                <span>— Present</span>
              </div>

              <div className="experience-content">

                <div className="experience-title-row">

                  <h3>
                    Postdoctoral Research
                  </h3>

                  <span className="experience-index">
                    01
                  </span>

                </div>


                <div className="experience-tags">
                  <span>CVD</span>
                  <span>CoS₂</span>
                  <span>V-Doping</span>
                  <span>Magnetism</span>
                </div>


                <ul className="experience-points">

                  <li>
                    Developed and optimized CVD-based growth of controlled
                    2D CoS₂, investigating the influence of growth conditions
                    on composition, structure, and magnetic properties.
                  </li>

                  <li>
                    Developing CVD-based in-situ vanadium doping of 2D CoS₂
                    with controlled dopant concentration to investigate
                    process–composition–structure–property relationships.
                  </li>

                  <li>
                    Investigating the relationship between growth conditions,
                    composition, structure, and functional properties of
                    CVD-grown CoS₂.
                  </li>

                </ul>

              </div>

            </article>


            {/* Ph.D. RESEARCH */}

            <article className="experience-item">

              <div className="experience-year">
                <span>2019</span>
                <span>— 2025</span>
              </div>

              <div className="experience-content">

                <div className="experience-title-row">

                  <h3>
                    Ph.D. Research
                  </h3>

                  <span className="experience-index">
                    02
                  </span>

                </div>


                <div className="experience-tags">
                  <span>WS₂</span>
                  <span>MoS₂</span>
                  <span>Heterostructures</span>
                  <span>FETs</span>
                  <span>Photodetectors</span>
                </div>


                <ul className="experience-points">

                  <li>
                    Developed controlled CVD processes for monolayer and
                    bilayer WS₂ and MoS₂ through systematic optimization of
                    temperature, pressure, growth time, precursor conditions,
                    and catalyst-assisted growth.
                  </li>

                  <li>
                    Developed in-situ WS₂–MoS₂ lateral heterostructures with
                    controlled interfaces and investigated their structural
                    and optical properties.
                  </li>

                  <li>
                    Fabricated and characterized 2D semiconductor FETs and
                    photodetectors to establish relationships between material
                    properties, interfaces, and device performance.
                  </li>

                  <li>
                    Investigated contact and interface engineering, including
                    asymmetric contacts and Bi₂Se₃/MoS₂ interfaces, to
                    understand contact-induced doping and transport behavior.
                  </li>

                  <li>
                    Applied Raman, PL, AFM/KPFM, TEM, XPS, and electrical
                    measurements to correlate material structure, interfaces,
                    and device properties.
                  </li>

                </ul>

              </div>

            </article>

          </div>

        </div>

      </section>


      {/* =========================
          PUBLICATIONS
      ========================== */}

      <section id="publications" className="section publication-section">

        <div className="section-container">

          <div className="publication-heading">

            <div>

              <p className="section-label">
                PUBLICATIONS
              </p>

              <h2>
                Research published in
                <span> peer-reviewed journals.</span>
              </h2>

            </div>


            <div className="publication-heading-side">

              <p>
                My research has resulted in publications covering 2D
                materials, semiconductor devices, optoelectronics, biosensing
                and nanomaterials.
              </p>

              <a
                href="https://scholar.google.com/citations?user=LmleHyEAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                View Google Scholar profile →
              </a>

            </div>

          </div>


          {/* PUBLICATION METRICS */}

          <div className="publication-metrics">

            <div className="publication-metric">

              <strong>
                15
              </strong>

              <span>
                PUBLICATIONS
              </span>

            </div>


            <div className="publication-metric">

              <strong>
                {scholarMetrics.citations ?? "—"}
              </strong>

              <span>
                TOTAL CITATIONS
              </span>

            </div>


            <div className="publication-metric">

              <strong>
                {scholarMetrics.hIndex ?? "—"}
              </strong>

              <span>
                H-INDEX
              </span>

            </div>


            <div className="publication-metric">

              <strong>
                {scholarMetrics.i10Index ?? "—"}
              </strong>

              <span>
                I10-INDEX
              </span>

            </div>

          </div>


          {formattedScholarUpdate && (
            <p className="publication-metrics-updated">
              Scholar metrics updated {formattedScholarUpdate}
            </p>
          )}


          {/* PUBLICATION LIST */}

          <div className="publication-list">

            {publications.map((publication) => (

              <article
                className="publication-item"
                key={publication.number}
              >

                <div className="publication-number">
                  {publication.number}
                </div>


                <div className="publication-content">

                  <p className="publication-authors">
                    {publication.authors}
                  </p>


                  <h3>

                    <a
                      href={publication.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      “{publication.title}”
                    </a>

                  </h3>


                  <p className="publication-journal">

                    <em>
                      {publication.journal}
                    </em>

                    <span>
                      {" · "}
                    </span>

                    {publication.details}

                  </p>

                </div>

              </article>

            ))}

          </div>


          <div className="publication-footer">

            <span>
              15 peer-reviewed journal publications
            </span>

            <a
              href="https://scholar.google.com/citations?user=LmleHyEAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Full publication record on Google Scholar →
            </a>

          </div>

        </div>

      </section>


      {/* =========================
          CONTACT
      ========================== */}

      <section id="contact" className="contact-section">

        <div className="section-container contact-container">

          <p className="section-label">
            CONTACT
          </p>

          <h2>
            Let&apos;s discuss
            <br />
            <span>research &amp; collaboration.</span>
          </h2>

          <p>
            I am interested in research collaborations, postdoctoral
            opportunities and scientific discussions in 2D materials,
            nanotechnology and semiconductor devices.
          </p>

          <a
            href="mailto:kaiummia4@gmail.com"
            className="email-link"
          >
            kaiummia4@gmail.com
            <span>↗</span>
          </a>


          <div className="contact-links">

            <a
              href="https://scholar.google.com/citations?user=LmleHyEAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Scholar
            </a>

            <a
              href="https://fac.iitg.ac.in/giri/group/group.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>

            <span>
              +91 97329 30051
            </span>

          </div>

        </div>

      </section>


      {/* =========================
          FOOTER
      ========================== */}

      <footer className="site-footer">

        <div className="section-container footer-container">

          <span>
            © {new Date().getFullYear()} Dr. Abdul Kaium Mia
          </span>

          <span>
            2D Materials · Nanotechnology · Semiconductor Devices
          </span>

        </div>

      </footer>

    </main>
  );
}