const galleryItems = [
  {
    image: "/labmate 2026.jpeg",
    title: "Research Presentation at RPGR 2023",
    description:
      "Presenting research on two-dimensional materials at the Recent Progress in Graphene and 2D Materials Research conference, Bengaluru, India.",
    category: "Conference Presentation",
  },

 {
    image: "/covocation 2025.jpg",
    title: "IIT Guwahati Convocation, 2025",
    description:
      "Receiving my PhD degree certificate during the 2025 Convocation of IIT Guwahati from Prof. Arun Tej Mallajosyula, representing the Centre for Nanotechnology, Guwahati, India.",
    category: "IITG Convacation",
  },
 {
    image: "/Image with wife.jpg",
    title: "IIT Guwahati Convocation, 2025",
    description:
      "A memorable moment with my wife and labmates after receiving our degree certificates in Guwahati, India.",
    category: "IITG Convacation",
  },
 {
    image: "/PhD Lab members.jpg",
    title: "Research Presentation at RPGR 2023",
    description:
      "Presenting research on two-dimensional materials at the Recent Progress in Graphene and 2D Materials Research conference, Bengaluru, India.",
    category: "Last photo with PhD Labmates",
  },
 {
    image: "/defenceday.jpg",
    title: "Research Presentation at RPGR 2023",
    description:
      "Presenting research on two-dimensional materials at the Recent Progress in Graphene and 2D Materials Research conference, Bengaluru, India.",
    category: "Moments with Defence members",
  },
  {
    image: "/Defence image.jpg",
    title: "Research Presentation at RPGR 2023",
    description:
      "Presenting research on two-dimensional materials at the Recent Progress in Graphene and 2D Materials Research conference, Bengaluru, India.",
    category: "Moments with Defence members",
  },
{
    image: "/FINS 2024.jpg",
    title: "Research Presentation at RPGR 2023",
    description:
      "Presenting research on two-dimensional materials at the Recent Progress in Graphene and 2D Materials Research conference, Bengaluru, India.",
    category: "Conference Presentation",
  },
 {
    image: "/Teachers day 2023.jpg",
    title: "Research Presentation at RPGR 2023",
    description:
      "Presenting research on two-dimensional materials at the Recent Progress in Graphene and 2D Materials Research conference, Bengaluru, India.",
    category: "Conference Presentation",
  },

 {
    image: "/rpgr-conference.JPG",
    title: "Research Presentation at RPGR 2023",
    description:
      "Presenting research on two-dimensional materials at the Recent Progress in Graphene and 2D Materials Research conference, Bengaluru, India.",
    category: "Conference Presentation",
  },
 {
    image: "/Sarath Home Visit Chennia.jpg",
    title: "Visited my frind Sarath's Home",
    description:
      "Enjoing Fresh coconut water with my frind Dr. Sarath, Chennai, India.",
    category: "Out of research",
  },
 {
    image: "/First IISc visit.jpg",
    title: "IISC Visit During INUP Program, 2018",
    description:
      "Presenting research on two-dimensional materials at the Recent Progress in Graphene and 2D Materials Research conference, Bengaluru, India.",
    category: "Hands on Training",
  },
 {
    image: "/SRM IST.jpg",
    title: "Departmental colloquium at SRM IST, 2018",
    description:
      "Presenting research on my Research work on Organic/Inorganic heterostructure for VOC detection, Chennai, India.",
    category: "Departmental Colloquium",
  },

];

export default function Gallery() {
  return (
    <main>

      {/* HEADER */}
      <header className="site-header">
        <div className="nav-container">

          <a href="/" className="brand">
            <span className="brand-mark">AKM</span>
            <span className="brand-name">
              Abdul Kaium Mia
            </span>
          </a>

          <nav className="navigation">
            <a href="/">About</a>
            <a href="/#research">Research</a>
            <a href="/#experience">Experience</a>
            <a href="/#publications">Publications</a>
            <a href="/gallery">Gallery</a>
            <a href="/#contact">Contact</a>
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


      {/* GALLERY HERO */}
      <section className="gallery-page">

        <div className="section-container">

          <p className="section-label">
            RESEARCH GALLERY
          </p>

          <h1>
            Moments from my
            <br />
            <span>research journey.</span>
          </h1>

          <p className="gallery-intro">
            A collection of photographs from research presentations,
            conferences, scientific events and other moments from my
            academic journey.
          </p>


          {/* GALLERY GRID */}
          <div className="gallery-grid">

            {galleryItems.map((item, index) => (
              <article
                className="gallery-card"
                key={index}
              >

                <div className="gallery-image">
                  <img
                    src={item.image}
                    alt={item.title}
                  />
                </div>

                <div className="gallery-card-content">

                  <span>
                    {item.category}
                  </span>

                  <h2>
                    {item.title}
                  </h2>

                  <p>
                    {item.description}
                  </p>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* FOOTER */}
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