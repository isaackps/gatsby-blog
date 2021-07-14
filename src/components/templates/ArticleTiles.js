import { Link } from "gatsby"
import Img from "gatsby-image"
import moment from "moment"
import React from "react"

const ArticleTiles = ({ post }) => {
  const { title, description, thumbnail, tag, date } = post

  const path = title.toLowerCase().replace(/ /g, "-")
  const tags = tag.split(" ")

  return (
    <div className="mb-8 font-sans">
      <Link to={`/${path}`} className="flex cursor-pointer">
        <div className="w-2/3">
          <div className="capitalize text-black text-2xl font-bold line-clamp-2">
            {title}
          </div>
          <div className="text-gray-500 text-sm line-clamp-2">
            {description}
          </div>
          <div className="flex mt-2">
            <div className="text-gray-500 text-xs">
              {moment(date).format("DD MMM YY")}
            </div>
            <div className="text-gray-400 mx-2 h-2 leading-3 -mt-0.5 font-sans">
              .
            </div>
            {tags.map((tagName, i) => (
              <div
                key={i}
                className="flex items-center text-gray-500 text-xs mx-1 px-2 py-1 rounded-full bg-blue-100"
              >
                {tagName}
              </div>
            ))}
          </div>
        </div>
        <Img fixed={thumbnail.childImageSharp.fixed} className="w-16 h-12" />
      </Link>
    </div>
  )
}

export default ArticleTiles
