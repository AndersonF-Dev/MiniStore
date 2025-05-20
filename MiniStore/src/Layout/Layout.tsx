// import React from 'react'
import Navbar from '../components/Nav/Nav'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* Aqui será renderizado o conteúdo da rota atual */}
    </>
  )
}

export default Layout
