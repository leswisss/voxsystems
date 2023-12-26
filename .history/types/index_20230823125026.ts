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
    text2: string,
    image: StaticImageData,
    background: string,
    outline: boolean,
    link: string
}

interface VideoJsOptions {
  controls: boolean;
  sources: Array<{
    src: string;
    type: string;
  }>;
}

