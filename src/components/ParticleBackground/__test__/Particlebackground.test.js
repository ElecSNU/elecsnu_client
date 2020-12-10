  
   import { render, screen, fireEvent } from '@testing-library/react';
   import ReactDOM from 'react-dom'
   import React , { useState }from 'react'
   import renderer from 'react-test-renderer'
   import ParticleBackground from './../ParticleBackground';
   
   
   test('Tests the rendering of the page', () => {
       const div = document.createElement("div")
   const tree = renderer.create(<ParticleBackground child={"<index></index>"} ></ParticleBackground>).toJSON();
       expect(tree).toMatchSnapshot();
      });