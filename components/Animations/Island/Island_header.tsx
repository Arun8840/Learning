import React from "react"
import SuccessAnime from "../../../public/SuccessAnime.gif"
interface Proptypes {
  title?: React.ReactNode | string | null | undefined
}
function Island_header({ title }: Proptypes) {
  let AnimeImage: any = SuccessAnime?.src
  return <h1 className="font-medium">{title}</h1>
}

export default Island_header
