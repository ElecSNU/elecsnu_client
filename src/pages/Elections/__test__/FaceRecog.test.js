import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
// import Voting from './../Elections'
import { toast } from 'react-toastify';
import React, { useEffect, useState } from 'react';
// import Face from './../FaceRecog';
// import FaceRecog from './../FaceRecog';
// import ParticleBackground from '../../components/ParticleBackground/ParticleBackground';


test('Tests the rendering of Face recognition component in all its entirety', () => {
    const div = document.createElement("div")
    const tree = renderer.create(<index/>).toJSON();
    expect(tree).toMatchSnapshot(); 
   });