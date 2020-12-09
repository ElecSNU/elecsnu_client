import { render, screen } from '@testing-library/react';
import App from './App';
import ReactDOM from 'react-dom'
test('renders the app', () => {
    const div = document.createElement("div")
    ReactDOM.render(<App/>,div)
});
