import { StaticImageData, StaticImport } from "next/dist/shared/lib/get-img-props";

/**TEAM INTERFACES */
export interface TeamDataProps {
  id: number,
  name: string,
  post: string,
  post2: string,
  image: StaticImageData
}


export interface ActiveTeamProps{
  active: boolean,
  index: number
}

export interface AccordionDataProps {
  id: number,
  name: string,
  text: string;
  image: StaticImageData
}

export interface ServiceCardData {
    id: number,
    name: string,
    text: string,
    slogan: string,
    text2: "Avec nos services d'installation d'energie solaire, vous pouvez profiter d'une energie propre et renouvelable qui est bonne pour l'environement.",
    image: StaticImageData,
    background: string
}
