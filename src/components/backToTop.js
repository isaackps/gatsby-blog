import FeatherIcon from "feather-icons-react"
import React, { useState } from "react"

const BackToTop = () => {
  const [showScroll, setShowScroll] = useState(false)
  const hasWindow = typeof window !== "undefined" ? true : false

  const checkScrollTop = () => {
    if (hasWindow) {
      if (!showScroll && window.pageYOffset > 320) {
        setShowScroll(true)
      } else if (showScroll && window.pageYOffset <= 320) {
        setShowScroll(false)
      }
    }
  }
  if (hasWindow) window.addEventListener("scroll", checkScrollTop)

  const scrollTop = () => {
    if (showScroll && hasWindow) {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const displayBackToTop = showScroll
    ? "opacity-100 border border-solid border-gray-100 transition rounded shadow-md bg-white w-12 h-12 md:flex justify-center items-center cursor-pointer focus:outline-none hidden"
    : "opacity-0 border border-solid border-gray-100 transition rounded shadow-md bg-white w-12 h-12 flex justify-center items-center cursor-default focus:outline-none"

  return (
    <div className="relative z-20">
      <div className="fixed bottom-20 right-20">
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        <div
          className={displayBackToTop}
          onClick={scrollTop}
          disable={!showScroll}
          role="button"
          tabIndex={0}
        >
          <FeatherIcon icon="arrow-up" className="text-black" />
        </div>
      </div>
    </div>
  )
}

export default BackToTop
