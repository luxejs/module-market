"use client"

import Image from "next/image"
import React from "react"
import Link from "next/link"
import { usePolkadot } from "@/src/context"
import { MdVerified } from "react-icons/md";
import classnames from 'classnames';

interface ModuleCardInterface {
  url: string
  name: string
  image: string
  description: string
  validatorKey: string
  verified: boolean
  tags: [string]
}
const ModuleCard = ({ url, name, image, description, validatorKey, verified, tags }: ModuleCardInterface) => {
  const { isConnected, addStake, removeStake } = usePolkadot()

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl m-4">
      <div className="mockup-browser border bg-base-300 h-full">
        <div className="mockup-browser-toolbar">
          <Link href={url} target="_blank" className="input">
            {url}
          </Link>
        </div>
        <Link href={url} target="_blank">

          <div className="justify-center card-title">{name}<MdVerified className="text-blue-500" /></div>
          <div className="flex justify-center px-4 py-16 bg-base-200">
            <div className="relative min-h-40 min-w-40">
              <Image fill src={image} alt="module-image" />
            </div>
          </div>
        </Link>

        <div className="card-body">
          <div className="flex gap-2">


            {tags.map((tag) => (
              <div key={tag} className={classnames('badge', 'badge-outline', {
                'badge-accent': tag === 'stats',
                'badge-primary': tag === 'staking',
                'badge-secondary': tag === 'wallet',
                'badge-success': tag === 'AI',
                'badge-warning': tag === 'chat' || tag === 'GPT',


              })}>{tag}</div>
            ))}

          </div>

          <div role="alert" className="alert">

            <div className="card-text line-clamp-5 font-500 h-16">
              {description}

            </div>

          </div>
          <div className="card-actions justify-center mt-4">
            <div className="flex flex-col w-full lg:flex-row">
              <div className="grid flex-grow h-20 card bg-base-300 rounded-box place-items-center">
                {<button disabled={!isConnected} onClick={() => { addStake({ validator: validatorKey, amount: "1" }) }} className="btn btn-primary w-full" >{isConnected ? 'stake' : 'connect to stake'}</button>}
              </div>
              <div className="divider lg:divider-horizontal">or</div>
              <div className="grid flex-grow h-20 card bg-base-300 rounded-box place-items-center">
                {<button disabled={!isConnected} onClick={() => { removeStake({ validator: validatorKey, amount: "1" }) }} className="btn btn-error w-full" >{isConnected ? 'unstake' : 'connect to unstake'}</button>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModuleCard
