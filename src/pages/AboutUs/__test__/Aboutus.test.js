import { render, screen, fireEvent, cleanup } from '@testing-library/react';
    import ReactDOM from 'react-dom'
    // import React , { useState }from 'react'
    import renderer from 'react-test-renderer'
import AboutUs from './../AboutUs';
    // import DesignSide from './../DesignSide'
    import Capabilities from './../AboutUs'

    test('Tests the rendering of AboutUs', () => {
        const div = document.createElement("div")
        const tree = renderer.create(<AboutUs></AboutUs>).toJSON();
        expect(tree).toMatchSnapshot();
       });