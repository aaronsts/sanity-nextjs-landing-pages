import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import styles from './Cta.module.css'

function cta(props) {
  const {title, route, link} = props

  if (route && route.slug && route.slug.current) {
    return (
      <Link
        href={{
          pathname: '/LandingPage',
          query: {slug: route.slug.current},
        }}
        as={`/${route.slug.current}`}
      >
        <a className=" m-8 w-40 h-14  text-white  grid group transition-colors ">
          <span className="h-full flex items-center relative z-20 justify-center col-start-1 row-start-1 text-2xl font-medium uppercase">
            {title}
          </span>
          <span className="h-full flex items-center justify-center relative z-10 text-white  bg-amber-500  col-start-1 row-start-1 scale-100 -translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform ease-in-out duration-200"></span>
          <span className="h-full flex items-center justify-center relative z-10 text-white  border-2 border-white   col-start-1 row-start-1 scale-100 translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform ease-in-out duration-200"></span>
        </a>
      </Link>
    )
  }

  if (link) {
    return (
      <a
        className=" m-2 w-24 h-12 border-b-2 border-slate-700 text-slate-500 hover:text-slate-50 grid group overflow-hidden transition-colors "
        href={link}
      >
        <span className="h-full flex items-center relative z-20 justify-center bg-transparent col-start-1 row-start-1">
          {title}
        </span>
        <span className="h-full flex items-center justify-center relative z-10 text-slate-50 bg-slate-700 col-start-1 row-start-1 translate-y-full group-hover:translate-y-0 transition-transform ease-in-out duration-200"></span>
      </a>
    )
  }

  return (
    <a className=" m-2 w-24 h-12 border-b-2 border-slate-700 text-slate-500 hover:text-slate-50 grid group overflow-hidden transition-colors ">
      <span className="h-full flex items-center relative z-20 justify-center bg-transparent col-start-1 row-start-1">
        {title}
      </span>
      <span className="h-full flex items-center justify-center relative z-10 text-slate-50 bg-slate-700 col-start-1 row-start-1 translate-y-full group-hover:translate-y-0 transition-transform ease-in-out duration-200"></span>
    </a>
  )
}

cta.propTypes = {
  title: PropTypes.string.isRequired,
  route: PropTypes.shape({
    slug: PropTypes.shape({
      current: PropTypes.string,
    }),
  }),
  link: PropTypes.string,
}

export default cta
