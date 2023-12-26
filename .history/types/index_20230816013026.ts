import { StaticImageData, StaticImport } from "next/dist/shared/lib/get-img-props";

export interface TeamDataProps {
  id: number,
  name: string,
  post: string,
  post2: string,
  image: StaticImageData
}