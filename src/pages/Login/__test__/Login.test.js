import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom'
// import React , { useState }from 'react'
import renderer from 'react-test-renderer'
import DesignSide from './../DesignSide'
import AuthSide from './../AuthSide'
import Login from './../Login'
import React, { useRef, useEffect, useState } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import Hooks from './../../../hooks/useFirstore'
// import { useState, useEffect } from 'react';
import { fire_store } from './../../../configs/firebase/config';


afterEach(cleanup)
test('Tests the rendering of the Design side', () => {
    const div = document.createElement("div")
    const tree = renderer.create(<DesignSide></DesignSide>).toJSON();
    expect(tree).toMatchSnapshot();
   });
   
// test('Tests the rendering of the Authentication side', () => {
//     const div = document.createElement("div")
//     const tree = renderer.create(<AuthSide showPasswordless={false} setShowPasswordless={() => {}} ></AuthSide>).toJSON();
//     expect(tree).toMatchSnapshot();
//    });   

// test('Tests the rendering of whole login', () => {
//     const div = document.createElement("div")
//     const DesignSide = React.lazy(() => import('./../DesignSide'));
//     const AuthSide = React.lazy(() => import('./../AuthSide'));
//     const tree = renderer.create(<Login></Login>).toJSON();
//     expect(tree).toMatchSnapshot();
// });   