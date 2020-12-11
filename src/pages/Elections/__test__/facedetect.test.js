import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Choosing from '../Share'
import { toast } from 'react-toastify';
import React, { useEffect, useState } from 'react';
import Share from '../FaceDetect';
import FaceDetect from '../FaceDetect';
// import Elections from './../Elections';
// import ParticleBackground from '../../components/ParticleBackground/ParticleBackground';


test('Tests the Sharing ability', () => {
    const div = document.createElement("div")
    const tree = renderer.create(<FaceDetect></FaceDetect>).toJSON();
    expect(tree).toMatchSnapshot(); 
   });