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
import SVG from "../"

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
        href: "/notre-vision"
      },
      {
        id: 2,
        name: "NOTRE EQUIPE",
        href: "/notre-equipe"
      },
      {
        id: 3,
        name: "DEMANDE DE DEVIS",
        href: "/contact"
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
        href: "/contact"
      },
      {
        id: 2,
        name: "SUKU CONTACT",
        href: "/contact"
      },
      {
        id: 3,
        name: "SYSYEM IA CONTACT",
        href: "/contact"
      },
      {
        id: 4,
        name: "SOLAR CONTACT",
        href: "/contact"
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
    text: "Nous croyons en la création de solutions intelligentes et durables. Nous mettons à profit notre expertise en automatisation, en câblage, en énergie solaire et en éducation pour offrir des produits et des services personnalisés et innovants qui répondent aux besoins et aux préférences variés de nos clients. Nous sommes engagés envers l'excellence, la satisfaction du client, la responsabilité sociale et la protection de l'environnement. Notre vision est d'être le fournisseur leader de systèmes intégrés qui rendent les maisons, les soins de santé et l'éducation plus accessibles, efficaces et agréables."
  }
]