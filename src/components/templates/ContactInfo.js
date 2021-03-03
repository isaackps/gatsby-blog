import React from "react"

const ContactInfo = ({ info }) => {
  const { logo, title, description, link } = info

  console.log(logo)
  return (
    <>
      <a
        className="flex items-center mb-4 w-full"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={logo}
          alt="contact-info"
          className="ww-8 h-8 mr-4 xl:h-12 xl:w-12"
        />
        <div className="">
          <div className="font-medium text-md break-all">{title}</div>
          <div className="text-gray-600 text-sm break-all">{description}</div>
          <div className="text-gray-600 text-xs break-all">{link}</div>
        </div>
      </a>
    </>
  )
}

export default ContactInfo
