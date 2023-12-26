import IMAGE from "../public/images/vox.png"
import IMAGE2 from "../public/images/solar.png"
import SERVICE from "../public/images/voxlink.png"
import SERVICE2 from "../public/images/suku.jpg"
import SERVICE3 from "../public/images/mediapp.jpg"
import SERVICE4 from "../public/images/solar.jpg"
import TEAM from "../public/images/user2.jpg"
import TEAM2 from "../public/images/user.jpg"
import TEAM3 from "../public/images/user3.jpg"
import VISION from "../public/images/vision.jpg"
import MISSION from "../public/images/mission.jpg"
import SVG from "../public/automation.svg"
import SVG2 from "../public/cabling.svg"
import SVG3 from "../public/integration.svg"
import SVG4 from "../public/maintenance.svg"
import ACCORDION from "../public/images/accordion.jpg"
import ACCORDION2 from "../public/images/accordion2.jpg"
import SPAGE from "../public/images/voxhero2.jpg"
import SPAGE2 from "../public/images/accordion.jpg"
import SPAGE3 from "../public/images/ssuku.jpg"
import SPAGE4 from "../public/images/ssystem.jpg"
import ABOUT from "../public/images/about.jpg"
import ABOUT2 from "../public/images/about2.jpg"
import ABOUT3 from "../public/images/about3.jpg"
import ABOUT4 from "../public/images/about4.jpg"


export const SideBarData = [
  {
    name: "ACCEUIL",
    href: "/",
  },
  {
    name: "SERVICES",
    href: "/services",
  },
  {
    name: "À PROPOS",
    href: "/a-propos-de-nous",
  },
  {
    name: "CONTACT",
    href: "/contacts",
  }
]




export const FooterData = [
  {
    id: 1,
    name: "SERVICES",
    links: [
      {
        id: 1,
        name: "VOX LINK",
        href: "/services/vox-link"
      },
      {
        id: 2,
        name: "SUKU",
        href: "/services/suku"
      },
      {
        id: 3,
        name: "SYSTEM IA",
        href: "/services/system-ia"
      },
      {
        id: 4,
        name: "SOLAR",
        href: "/services/solar"
      },
    ]
  },
  {
    id: 2,
    name: "À PROPOS",
    links: [
      {
        id: 1,
        name: "NOTRE VISION",
        href: "/a-propos"
      },
      {
        id: 2,
        name: "NOTRE EQUIPE",
        href: "/notre-equipe"
      },
      {
        id: 3,
        name: "DEMANDE DE DEVIS",
        href: "/contacts"
      }
    ]
  },
  {
    id: 3,
    name: "SUPPORT",
    links: [
      {
        id: 1,
        name: "VOX CONTACT",
        href: "/contacts"
      },
      {
        id: 2,
        name: "SUKU CONTACT",
        href: "/contacts"
      },
      {
        id: 3,
        name: "SYSYEM IA CONTACT",
        href: "/contacts"
      },
      {
        id: 4,
        name: "SOLAR CONTACT",
        href: "/contacts"
      } 
    ]
  },

]

export const HeroData = [
  {
    id: 1,
    name: "VOX LINK",
    image: IMAGE,
    link: "/services/vox-link",
    image2: SERVICE,
    desc: "Contrôlez votre maison en toute simplicité avec VOX LINK, l'automatisation innovante."
  },
  {
    id: 2,
    name: "SUKU",
    image: IMAGE,
    link: "/services/suku",
    image2: SERVICE2,
    desc: "La plateforme éducative pour enrichir vos savoirs dans le domaine de votre choix."
  },
  {
    id: 3,
    name: "SYSTEM IA",
    image: IMAGE2,
    link: "/services/system-ia",
    image2: SERVICE3,
    desc: "Automatisez les tâches des patients en toute simplicité avec notre plateforme."
  },
  {
    id: 4,
    name: "SOLAR",
    image: IMAGE2,
    link: "/services/solar",
    image2: SERVICE4,
    desc: "Faites un choix éco-responsable avec nos services de panneaux solaires fiables."
  }
]


export const TeamData = [
  {
    id: 1,
    name: "DANIEL BAYECK",
    post: "INGENIEUR",
    post2: "ROBOTIQUE INDUSTRIELLE",
    image: TEAM,
  },
  {
    id: 2,
    name: "BAFRI SCHNEIDER",
    post: "INGENIEUR",
    post2: "ROBOTIQUE INDUSTRIELLE",
    image: TEAM2,
  },
  {
    id: 3,
    name: "HERVE NOUBOUOSSIE",
    post: "INGENIEUR",
    post2: "GENIE INFORMATIQUE",
    image: TEAM3,
  },
]


export const VisionData = [
  {
    id: 1,
    image: VISION,
    name: "NOTRE",
    name2: "VISION",
    text: "Chez SYSTEMS, nous croyons en la création de solutions intelligentes et durables qui améliorent la qualité de vie et d'apprentissage de nos clients. Nous mettons à profit notre expertise en automatisation, en câblage, en énergie solaire et en éducation pour offrir des produits et des services personnalisés et innovants qui répondent aux besoins et aux préférences variés de nos clients. Nous sommes engagés envers l'excellence, la satisfaction du client, la responsabilité sociale et la protection de l'environnement. Notre vision est d'être le fournisseur leader de systèmes intégrés qui rendent les maisons, les soins de santé et l'éducation plus accessibles, efficaces et agréables."
  }, 
  {
    id: 2,
    image: MISSION,
    name: "NOTRE",
    name2: "MISSION",
    text: "Notre mission chez SYSTEMS est de fournir des solutions innovantes et durables pour améliorer la vie quotidienne de nos clients. Nous nous engageons à offrir des produits et des services de qualité supérieure, adaptés aux besoins et aux préférences de chacun. Nous utilisons notre expertise en automatisation, en câblage, en énergie solaire et en éducation pour offrir des solutions intégrées qui améliorent l'efficacité et le confort de nos clients dans leur maison, leur santé et leur éducation. Nous sommes déterminés à atteindre l'excellence dans tout ce que nous faisons, en veillant à la satisfaction de nos clients, à notre responsabilité sociale et à la protection de l'environnement.",
  }
]


export const VoxServicesData = [
  {
    id: 1,
    svg: SVG,
    name: "Automatisation de la maison",
    desc: "Installation de systèmes pour contrôler la maison: lumières, sécurité, serrures, thermostats et divertissement."
  }, 
  {
    id: 2,
    svg: SVG2,
    name: "Câblage de maison intelligent",
    desc: "Installation de câblage intelligent pour soutenir les dispositifs sans fil et organiser les câbles."
  },
  {
    id: 3,
    svg: SVG3,
    name: "Integration des systèmes",
    desc: "Intégration de systèmes pour une expérience d'automatisation fluide et facile."
  },
  {
    id: 4,
    svg: SVG4,
    name: "Maintenance et support",
    desc: "Services de maintenance et support pour des systèmes d'automatisation et câblage fonctionnels."
  },

]

export const SolarAccordionData = [
  {
    id: 1,
    name: "RÉSIDENTIELS",
    text: "Pour les grandes entreprises, nous comprenons l'importance de solutions énergétiques fiables et rentables. Nos systèmes de panneaux solaires commerciaux sont conçus pour offrir un retour sur investissement élevé en réduisant les coûts énergétiques et en augmentant l'indépendance énergétique.",
    image: ACCORDION
  }, 
  {
    id: 2,
    name: "COMMERCIAUX",
    text: "Pour les grandes entreprises, nous comprenons l'importance de solutions énergétiques fiables et rentables. Nos systèmes de panneaux solaires commerciaux sont conçus pour offrir un retour sur investissement élevé en réduisant les coûts énergétiques et en augmentant l'indépendance énergétique.",
    image: ACCORDION2
  }, 
]


export const ServicePageData = [
  {
    id: 1,
    name: "VOX LINK",
    text: "L'un de nos services phares est VOX LINK",
    slogan: "LA TECHNOLOGIE AU SERVICE DE VOTRE MAISON",
    text2: "Avec nos services d'installation d'energie solaire, vous pouvez profiter d'une energie propre et renouvelable qui est bonne pour l'environement.",
    image: SPAGE,
    background: "#ffd2b340",
    outline: false,
    link: "services/vox-link",
  },
  {
    id: 2,
    name: "SOLAR",
    text: "L'un de nos services phares est VOX LINK",
    slogan: "INVESTISSEZ DANS LE SOLAIRE POUR UN AVENIR RADIEUX",
    text2: "Avec nos services d'installation d'energie solaire, vous pouvez profiter d'une energie propre et renouvelable qui est bonne pour l'environement.",
    image: SPAGE2,
    background: "#00000099",
    outline: true,
    link: "services/solar",
  },
  {
    id: 3,
    name: "SUKU",
    text: "L'un de nos services phares est VOX LINK",
    slogan: "APPRENDRE, GRANDIR, RÉUSSIR",
    text2: "Avec nos services d'installation d'energie solaire, vous pouvez profiter d'une energie propre et renouvelable qui est bonne pour l'environement.",
    image: SPAGE3,
    background: "#5b3d2a99",
    outline: true,
    link: "services/suku",
  },
  {
    id: 4,
    name: "SYSTEM IA",
    text: "L'un de nos services phares est VOX LINK",
    slogan: "LA TECHNOLOGIE AU SERVICE DE VOTRE SANTE",
    text2: "Avec nos services d'installation d'energie solaire, vous pouvez profiter d'une energie propre et renouvelable qui est bonne pour l'environement.",
    image: SPAGE4,
    background: "#263a5496",
    outline: false,
    link: "services/system-ia",
  }
]

export const AboutPageData = [
  {
    id: 1,
    normal: true,
    name: "NOTRE HISTOIRE",
    text: "En 2023, nous avons créé System avec une vision d'exploiter la puissance de la technologie pour créer un avenir meilleur pour tous. Notre passion pour l'innovation et notre désir de faire une différence nous ont poussés à créer une entreprise capable de fournir des solutions de pointe pour améliorer la vie des gens dans le monde entier",
    text2: "Chez System, nous aspirons à être un fournisseur leader de services innovants. Notre engagement envers l'excellence et notre dévouement envers nos clients nous poussent à explorer constamment de nouvelles façons d'innover et d'améliorer. Nous croyons que la technologie a le pouvoir de transformer les vies et sommes dédiés à l'utiliser pour avoir un impact positif sur le monde.",
    image: ABOUT,
  },
  {
    id: 2,
    normal: true,
    name: "NOTRE VISION",
    text: "Chez SYSTEMS, nous croyons en la création de solutions intelligentes et durables qui améliorent la qualité de vie et d'apprentissage de nos clients. Nous mettons à profit notre expertise en automatisation, en câblage, en énergie solaire et en éducation pour offrir des produits et des services personnalisés et innovants qui répondent aux besoins et aux préférences variés de nos clients",
    text2: "Nous sommes engagés envers l'excellence, la satisfaction du client, la responsabilité sociale et la protection de l'environnement. Notre vision est d'être le fournisseur leader de systèmes intégrés qui rendent les maisons, les soins de santé et l'éducation plus accessibles, efficaces et agréables.",
    image: ABOUT2,
  },
  {
    id: 3,
    normal: true,
    name: "NOTRE MISSION",
    text: "Notre mission chez SYSTEMS est de fournir des solutions innovantes et durables pour améliorer la vie quotidienne de nos clients. Nous nous engageons à offrir des produits et des services de qualité supérieure, adaptés aux besoins et aux préférences de chacun.",
    text2: "Nous utilisons notre expertise en automatisation, en câblage, en énergie solaire et en éducation pour offrir des solutions intégrées qui améliorent l'efficacité et le confort de nos clients dans leur maison, leur santé et leur éducation. Nous sommes déterminés à atteindre l'excellence dans tout ce que nous faisons, en veillant à la satisfaction de nos clients, à notre responsabilité sociale et à la protection de l'environnement.",
    image: ABOUT3,
  },
  {
    id: 4,
    normal: false,
    name: "NOS RÉSEAUX SOCIAUX",
    text: "System est plus qu'une simple innovation, nous sommes une communauté active de plus de 1000 membres et en constante augmentation. Suivez-nous sur nos réseaux sociaux et découvrez le style de vie de SYSTEMS.",
    hastag: "#JOINTHESYSTEM",
    links: [
      {
        id: 1,
        name: "FACEBOOK",
        href: "/"
      },
      {
        id: 2,
        name: "INSTAGRAM",
        href: "/"
      },
      {
        id: 3,
        name: "TWITTER",
        href: "/"
      },
      {
        id: 4,
        name: "YOUTUBE",
        href: "/"
      },
    ],
    image: ABOUT4,
  }
]

export const ContactSelection = [
  {
    id: 1,
    slug: "vox-link",
    mail: "info@vox-link.com",
  },
  {
    id: 2,
    slug: "solar",
    mail: "info@solar.com",
  },
  {
    id: 3,
    slug: "suki",
    mail: "info@vox-link.com",
  },
  {
    id: 4,
    slug: "vox-link",
    mail: "info@vox-link.com",
  },
  
]