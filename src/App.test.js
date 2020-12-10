import { render, screen } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer'

test('checks the working of the website', () => {
    const div = document.createElement("div")
    const tree = renderer.create(<index/>).toJSON();
    expect(tree).toMatchSnapshot();
});
