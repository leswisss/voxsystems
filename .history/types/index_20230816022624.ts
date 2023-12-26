import { StaticImageData } from "next/dist/shared/lib/get-img-props";

/**TEAM INTERFACES */
export interface TeamDataProps {
  id: number,
  name: string,
  post: string,
  post2: string,
  image: StaticImageData
}

export interface TeamListProps {
  
}

export interface ActiveTeamProps{
  active: boolean,
  index: number
}