// import React from 'react';
import Nav from '../../components/Nav/Nav';
import Slider from '../../components/Slider/Slider';
import Features from '../../components/Features/Features';
import homeFeatures from '../../data/HomeFeaturesData';
import {
    Conteiner
} from './StyleHome';

const Home = () => {
  return (
    <Conteiner>
      <Nav />
      <Slider />
      <Features items={homeFeatures} />
        <h1>Home</h1>
    </Conteiner>
  )
}

export default Home