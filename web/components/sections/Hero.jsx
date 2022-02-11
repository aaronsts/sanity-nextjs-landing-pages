import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../client'
import SimpleBlockContent from '../SimpleBlockContent'
import Cta from '../Cta'

import Image from 'next/image'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

function Hero(props) {
  const {heading, backgroundImage, tagline, ctas} = props

  const style = backgroundImage
    ? {
        backgroundImage: `url("${urlFor(backgroundImage).width(2000).auto('format').url()}")`,
      }
    : {}

  return (
    <div className="bg-black relative h-screen px-2 sm:px-8 lg:px-16 flex flex-col justify-center">
      <div className="relative z-10 text-neutral-50 mx-4 flex flex-col items-center text-center">
        <h1 className="lg:w-1/2">{heading}</h1>
        <div className="">{tagline && <SimpleBlockContent blocks={tagline} />}</div>
        {ctas && (
          <div className="w-full flex justify-center">
            {ctas.map((cta) => (
              <Cta {...cta} key={cta._key} />
            ))}
          </div>
        )}
      </div>
      <div className="opacity-60">
        <Image
          src={urlFor(backgroundImage).width(2000).auto('format').url()}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
    </div>
  )
}

Hero.propTypes = {
  heading: PropTypes.string,
  backgroundImage: PropTypes.object,
  tagline: PropTypes.array,
  ctas: PropTypes.arrayOf(PropTypes.object),
}

export default Hero
