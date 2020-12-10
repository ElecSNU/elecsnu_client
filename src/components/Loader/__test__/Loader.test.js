import { render, screen, fireEvent} from '@testing-library/react';
import Loader from './../Loader';
import ReactDOM from 'react-dom'
import React from 'react'
import renderer from 'react-test-renderer'
import { useStoreActions, useStoreState } from 'easy-peasy';

test('renders the Loader correctly', () => {
    //    const abs = () => {const loader_shown = useStoreState(
    //     (store) => store.loaderModel.loader_shown
    // );}
    const div = document.createElement("div")
     render(<index></index>,div);
    //  const tree = renderer.create(<Loader></Loader>).toJSON();
    //  expect(tree).toMatchSnapshot();

});
