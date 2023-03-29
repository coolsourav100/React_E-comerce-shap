import React from 'react'
import FacebookIcon from '../UI/FacebookIcon'
import SpotifyIcon from '../UI/SpotifyIcon'
import YoutubeIcon from '../UI/YoutubeIcon'

const Footer = () => {
  return (
    <div className='container mw-100 p-5 d-flex justify-content-between bg-info'>
    <div className='  d-flex justify-content-between mt-4'>
        <h1 className='text-white text-center display-4'>The Generics</h1>
        </div>
        <div className='d-flex justify-content-between mt-4'>
        <YoutubeIcon/>
        <FacebookIcon/>
        <SpotifyIcon/>
        </div>
        </div>
  )
}

export default Footer