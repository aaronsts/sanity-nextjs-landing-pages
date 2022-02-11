import React, {useEffect, Component} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {withRouter} from 'next/router'
import SVG from 'react-inlinesvg'
import styles from './Header.module.css'
import HamburgerIcon from './icons/Hamburger'
import {getPathFromSlug, slugParamToPath} from '../utils/urls'

class Header extends Component {
  state = {
    showNav: false,
    color: 'white',
    textColor: 'text-white',
    backgroundColor: 'hsla(0,0%,0%,0)',
    scrollPosition: '',
  }

  // static propTypes = {
  //   router: PropTypes.shape({
  //     pathname: PropTypes.string,
  //     query: PropTypes.shape({
  //       slug: PropTypes.string,
  //     }),
  //     events: PropTypes.any,
  //   }),
  //   title: PropTypes.string,
  //   navItems: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       title: PropTypes.string.isRequired,
  //       slug: PropTypes.arrayOf(PropTypes.string),
  //     })
  //   ),
  //   logo: PropTypes.shape({
  //     asset: PropTypes.shape({
  //       url: PropTypes.string,
  //     }),
  //     logo: PropTypes.string,
  //   }),
  // }

  componentDidMount() {
    const {router} = this.props
    router.events.on('routeChangeComplete', this.hideMenu)
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    this.setState({scrollPosition: window.scrollY})
    if (window.scrollY > 20) {
      this.setState({color: `hsl(0, 0%, ${0}%)`, textColor: 'text-black'})
      this.setState({backgroundColor: `hsla(0, 0%, ${100}%,1)`})
    }
    if (window.scrollY <= 20) {
      this.setState({color: `hsl(0, 0%, 100%)`, textColor: 'text-white'})
      this.setState({backgroundColor: `hsla(0, 0%, ${0}%,0)`})
    }
  }

  componentWillUnmount() {
    const {router} = this.props
    router.events.off('routeChangeComplete', this.hideMenu)
  }

  hideMenu = () => {
    this.setState({showNav: false})
  }

  handleMenuToggle = () => {
    const {showNav} = this.state
    this.setState({
      showNav: !showNav,
    })
  }

  renderLogo = (logo, color) => {
    if (!logo || !logo.asset) {
      return null
    }

    if (logo.asset.extension === 'svg') {
      return (
        <SVG
          src={logo.asset.url}
          description={logo.title}
          fill={color}
          className="transition-colors"
        />
      )
    }

    return <Image src={logo.asset.url} alt={logo.title} />
  }

  render() {
    const {title = 'Missing title', navItems, router, logo} = this.props
    const {showNav, color, backgroundColor, scrollPosition, textColor} = this.state

    return (
      <div
        id="navigation"
        className={`h-20 w-full ${
          scrollPosition > 20 ? 'shadow-lg' : ''
        } flex items-center wrapper fixed top-0 z-50 transition-colors`}
        style={{backgroundColor: backgroundColor}}
        data-show-nav={showNav}
      >
        <h1 className="h-full p-2 m-0">
          <Link href={'/'}>
            <a title={title}>{this.renderLogo(logo, color)}</a>
          </Link>
        </h1>
        <nav className={styles.nav}>
          <ul className={styles.navItems}>
            {navItems &&
              navItems.map((item) => {
                const {slug, title, _id} = item
                const isActive = slugParamToPath(router.query.slug) === slug.current
                return (
                  <li key={_id} className={styles.navItem}>
                    <Link href={getPathFromSlug(slug.current)}>
                      <a
                        className={`hover:text-amber-400  ${textColor}`}
                        data-is-active={isActive ? 'true' : 'false'}
                        aria-current={isActive}
                      >
                        {title}
                      </a>
                    </Link>
                  </li>
                )
              })}
          </ul>
          <button className={styles.showNavButton} onClick={this.handleMenuToggle}>
            <HamburgerIcon className={styles.hamburgerIcon} />
          </button>
        </nav>
      </div>
    )
  }
}

export default withRouter(Header)
