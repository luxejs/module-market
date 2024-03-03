"use client"

import Image from "next/image"
import React from "react"

interface ModuleCardInterface {
  url: string
  name: string
  image: string
  description: string
}
const ModuleCard = ({ url, name, image, description }: ModuleCardInterface) => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl m-4">
      <div className="mockup-browser border bg-base-300 h-full">
        <div className="mockup-browser-toolbar">
          <a href={url} target="_blank" className="input">
            {url}
          </a>
        </div>
        <div className="justify-center card-title">{name}</div>
        <div className="flex justify-center px-4 py-16 bg-base-200">
          <div className="relative min-h-64 min-w-64">
            <Image fill src={image} alt="module-image" />
          </div>
        </div>
        <div className="card-body">
          <div className="card-text line-clamp-5 font-500 h-16">
            {description}
          </div>
          <div className="card-actions justify-center mt-4">
            <button className="btn btn-primary">Stake</button>
            <button className="btn btn-error">Unstake</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModuleCard
