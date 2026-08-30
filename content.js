// ============================================================
// CONTENT.JS - Master content file for Merushka Francis website
// Update any text here and it will reflect across all pages
// ============================================================

const content = {
  // ==========================================================
  // NAVIGATION
  // ==========================================================
  nav: {
    brand: "Merushka Francis",
    brandSub: "| Clinical Psychologist",  // Changed: include the pipe here
    links: [
      { href: "about.html", label: "About" },
      { href: "approach.html", label: "Approach" },
      { href: "areas.html", label: "Areas of Interest" },
      { href: "services.html", label: "Services" },
      { href: "contact.html", label: "Contact" }
    ]
  },

  // ==========================================================
  // HOME PAGE (index.html)
  // ==========================================================
  home: {
    hero: {
      quote: [
        "Not everything that is faced can be changed,",
        "but nothing can be changed",
        "until it is faced."
      ],
      author: "James Baldwin"
    }
  },

  // ==========================================================
  // ABOUT PAGE (about.html)
  // ==========================================================
  about: {
    title: "About",
    paragraphs: [
      "I am a registered Clinical Psychologist with the Health Professions Council of South Africa (HPCSA) and the Board of Healthcare Funders (BHF). I completed my undergraduate and honours training at the University of the Witwatersrand (WITS), followed by a master's degree at the University of Cape Town (UCT).",
      "Before training in psychology, I worked as an architect. My shift from external structures to internal ones was born out of my involvement in community-based projects, where built form alone could not address deep internal struggles. This fuelled my interest in the architecture of the psyche: the inner workings of human experience, identity, and the social world we are embedded in."
    ],
    qualifications: {
      title: "Qualifications:",
      list: [
        "Master of Arts specialising in Clinical Psychology [University of Cape Town]",
        "Bachelor of Art Honours in Psychology [University of Witwatersrand]",
        "Master of Architecture Professional [University of Witwatersrand]",
        "Bachelor of Architectural Studies with Honours [University of Witwatersrand]",
        "Bachelor of Architectural Studies [University of Witwatersrand]"
      ]
    },
    registrations: {
      title: "Registrations:",
      list: [
        { label: "HPCSA:", value: "PS 0163040" },
        { label: "BHF:", value: "PR 1346008" }
      ]
    }
  },

  // ==========================================================
  // APPROACH PAGE (approach.html)
  // ==========================================================
  approach: {
    title: "Approach",
    paragraphs: [
      "My approach is rooted in psychodynamic theory, understanding that the difficulties people face in the present are often connected to, or shaped by, earlier experiences.",
      "I view therapy as a collaborative partnership between a therapist and an individual, one that offers a safe, non-judgmental space for a client to explore their emotions, thoughts, ways of relating, and any questions that arise, at their own pace.",
      "Where required, I may draw on skills-based approaches such as Dialectical Behaviour Therapy (DBT) to support clients in managing intense emotions and impulsivity, coping with distress and improving communication.",
      "In-depth exploration of this kind has the power to move beyond symptom relief, fostering meaningful insight and laying the foundation for deeper understanding, a shift that may continue to serve long after therapy ends."
    ]
  },

  // ==========================================================
  // AREAS OF INTEREST PAGE (areas.html)
  // ==========================================================
  areas: {
    title: "Areas of Interest",
    paragraphs: [
      "I have a keen interest in working with individuals navigating life transitions, including periods of uncertainty and the exploration of one's identity and sense of self. This may look like stepping into a new phase of life, such as changing schools, starting university, leaving home, becoming a parent, changing careers, or moving into retirement. It can also include navigating one's racial identity, adjusting to living with a chronic illness, dealing with loss, divorce or feelings of meaninglessness.",
      "as a result, I work with various emotional difficulties including, but not limited to:"
    ],
    difficulties: [
      "Anxiety",
      "Stress",
      "Burnout",
      "Depression",
      "Grief",
      "Loneliness",
      "Anger",
      "Low self-esteem",
      "Suicidal thoughts &amp; urges",
      "Impact of traumatic experiences"
    ],
    closingParagraphs: [
      "Relationships often shift alongside these struggles and therapy may assist with understanding and working through relational tension, conflict, and communication difficulties as they arise.",
      "In addition, I focus on a range of mental health concerns, particularly when thoughts, feelings or behaviours begin to affect how someone engages at home, at work or socially. This may include navigating neurodiversity, a decline in mental and emotional wellbeing connected to aging or a medical diagnosis, managing difficulties with addiction, eating patterns, dissociation or psychosis.",
      "There is no uniform approach to therapy and taking that first step may feel daunting. If any of these feelings or experiences resonate with what you are going through, or if you feel drawn to explore your inner world, I invite you to reach out for an initial session."
    ]
  },

  // ==========================================================
  // SERVICES PAGE (services.html)
  // ==========================================================
  services: {
    title: "Services",
    intro: "I offer psychotherapy for adolescents (13–18 years old), adults, and couples.",
    services: [
      {
        name: "Individual Therapy",
        details: ["In Person | Online", "50 minutes"],
        description: "Tailored psychodynamic and skills-based psychotherapy for adolescents and adults dealing with emotional difficulties, life transitions, or mental health concerns. A safe space to explore your inner world at your own pace."
      },
      {
        name: "Couples Therapy",
        details: ["In Person", "50 minutes | 90 minutes"],
        description: "A dedicated space to explore relational tension, rebuild communication pathways, and work through conflicts collaboratively. I help couples develop deeper understanding and connection."
      }
    ],
    rates: "Session fees are in line with standard medical aid rates for psychotherapy. Please get in touch to discuss any questions you may have around rates, medical aids or prescribed minimum benefits (PMBs)."
  },

  // ==========================================================
  // CONTACT PAGE (contact.html)
  // ==========================================================
  contact: {
   
    practiceDetails: {
      title: "Practice Details",
      address: [
        "1st Floor, Dunkeld Medical and Dental Centre",
        "257 Jan Smuts Ave, Dunkeld West,",
        "Johannesburg, 2196"
      ],
      hours: "Monday – Friday: 08h00 – 18h00",
      notice: "Please Note: Sessions are booked by appointment."
    },
    contactInfo: {
      title: "Contact",
      email: "talk@mfrancispsychology.co.za",
      phone: "+27 77 368 7497"
    },
    emergency: {
      lead: "If you or a loved one are in immediate distress or crisis, please go to your nearest emergency room or contact one of the services below:",
      contacts: [
        { label: "Suicide Crisis Line", number: "0800 567 567" },
        { label: "Lifeline South Africa", number: "0861 322 322" },
        { label: "Emergency Services", number: "10177 / 082 911" }
      ]
    }
  },

  // ==========================================================
  // FOOTER (shared across all pages)
  // ==========================================================
  footer: {
    brand: "Merushka Francis Psychology",
    registrations: "PS 0163040 | PR 1346008",
    getInTouch: {
      title: "Get in Touch",
      phone: "+27 77 368 7497",
      email: "talk@mfrancispsychology.co.za"
    },
    connect: {
      title: "Connect",
      linkedin: "https://www.linkedin.com/in/merushka-francis-9903a924",
      linkedinLabel: "LinkedIn",
      psychologyToday: "https://www.psychologytoday.com/profile/1806420",
      psychologyTodayLabel: "Psychology Today"
    },
    practiceDetails: {
      title: "Practice Details",
      address: [
        "Dunkeld Medical and Dental Centre",
        "257 Jan Smuts Ave, Dunkeld West",
        "Johannesburg, 2196"
      ]
    },
    copyright: "&copy; 2026 All Rights Reserved | Merushka Francis"
  }
};

// ============================================================
// EXPORT (if using modules) or make available globally
// ============================================================
if (typeof module !== 'undefined' && module.exports) {
  module.exports = content;
}