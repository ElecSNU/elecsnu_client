import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
// import Voting from './../Elections'
import { toast } from 'react-toastify';
import React, { useEffect, useState } from 'react';
// import Elections from './../Elections';
// import ParticleBackground from '../../components/ParticleBackground/ParticleBackground';


test('Tests the rendering of the Elections', () => {
    const div = document.createElement("div")
    const tree = renderer.create(<index></index>).toJSON();
    expect(tree).toMatchSnapshot(); 
   });