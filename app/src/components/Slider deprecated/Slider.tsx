'use strict'
import { Splide, SplideTrack, Options } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { ReactElement } from 'react'

interface SliderProps {
  children: React.ReactNode
  options: Options
  playPauseButton?: ReactElement<any>
  arrowIcon?: ReactElement<any>
  playIcon?: ReactElement<any>
  pauseIcon?: ReactElement<any>
  autoplay?: boolean
  pagination?: boolean
  arrows?: boolean
  progressBar?: boolean
  arrowStyle?: string
  prevArrowStyle?: string
  nextArrowStyle?: string
  autoplayStyle?: string
  playIconStyle?: string
  pgStyle?: string
  pauseIconStyle?: string
  paginationStyle?: React.CSSProperties // Make sure this is an object for custom styles
}

export const Slider: React.FC<SliderProps> = ({
  children,
  options,
  arrowIcon,
  playIcon,
  pauseIcon,
  autoplay,
  pagination = true,
  arrows = true,
  pgStyle = '',
  progressBar,
  arrowStyle = '',
  prevArrowStyle = '',
  nextArrowStyle = '',
  autoplayStyle = '',
  playIconStyle = '',
  pauseIconStyle = '',
  paginationStyle,
  ...rest
}) => {
  var pgStyles = ''
  if (pgStyle) {
    var style = pgStyle.split(' ') // split by blank space if multiple spaces
    for (let i = 0; i < style.length; i++) {
      if (style[i] != '') {
        pgStyles += `[&_li_.splide\_\_pagination\_\_page]:${style[i]} `
      }
    }
  }

  // Function to generate CSS string from pagination style object
  // const generateCSSFromStyle = (style: any) => {
  //   return Object.entries(style)
  //     .map(([key, value]) => {
  //       // Convert camelCase to kebab-case for CSS properties
  //       const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
  //       return `${cssKey}: ${value};`;
  //     })
  //     .join(' ');
  // };

  // Generate the CSS string based on the passed paginationStyle
  // const paginationStyleCSS = generateCSSFromStyle(paginationStyle);

  return (
    <div className='uid relative'>
      <Splide
        hasTrack={false}
        className=''
        aria-label='My Favorite Images'
        options={options}
        {...rest}
      >
        <SplideTrack>{children}</SplideTrack>
        {arrows && (
          <div className={`${arrowStyle} splide__arrows`}>
            <button
              className={`${prevArrowStyle} splide__arrow splide__arrow--prev`}
              type='button'
              aria-label='Previous slide'
            >
              {arrowIcon && arrowIcon != undefined ? arrowIcon : '<'}
            </button>
            <button
              className={`${nextArrowStyle} splide__arrow splide__arrow--next`}
              type='button'
              aria-label='Next slide'
            >
              {arrowIcon && arrowIcon != undefined ? arrowIcon : '>'}
            </button>
          </div>
        )}
        {autoplay && (
          <>
            <button className={`${autoplayStyle} splide__toggle`} type='button'>
              <span className={`${playIconStyle} splide__toggle__play`}>
                {playIcon || 'play'}
              </span>
              <span className={`${pauseIconStyle} splide__toggle__pause`}>
                {pauseIcon || 'pause'}
              </span>
            </button>
            {progressBar && (
              <div className='splide__progress'>
                <div className='splide__progress__bar' />
              </div>
            )}
          </>
        )}
        {pagination && (
          <ul className={`splide__pagination ${pgStyles}`}>
            <li role='presentation'>
              <button className='splide__pagination__page'>
                {/* <style jsx>{`
        .uid {
          background-color: red;
        }
        .uid .splide__pagination li .splide__pagination__page {
            background-color: blue;
          }
        `}</style> */}
              </button>
            </li>
          </ul>
        )}
        {/* Dynamically applying styles */}
      </Splide>
    </div>
  )
}
