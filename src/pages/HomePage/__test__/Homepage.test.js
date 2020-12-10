import { render, screen, fireEvent } from '@testing-library/react';
import Elections from './../index';
import index from './../index';
import ReactDOM from 'react-dom'
import React , { useState }from 'react'
import renderer from 'react-test-renderer'
import HomePage from './../index';


test('Tests the rendering of the page', () => {
    const div = document.createElement("div")
    const tree = renderer.create(<HomePage></HomePage>).toJSON();
    expect(tree).toMatchSnapshot();
   });
   