import { StaticImageData } from "next/dist/shared/lib/get-img-props";

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