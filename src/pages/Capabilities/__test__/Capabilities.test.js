import { render, screen, fireEvent, cleanup } from '@testing-library/react';
    import ReactDOM from 'react-dom'
    // import React , { useState }from 'react'
    import renderer from 'react-test-renderer'
    // import DesignSide from './../DesignSide'
    import Capabilities from './../Capabilities'

    test('Tests the rendering of Capabilities', () => {
        const div = document.createElement("div")
        const tree = renderer.create(<Capabilities></Capabilities>).toJSON();
        expect(tree).toMatchSnapshot();
       });