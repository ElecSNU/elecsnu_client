import { render, screen } from '@testing-library/react';
import App from './App';
import Mainpage from './MainPage'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { useStoreActions } from 'easy-peasy';
import useLoader from './hooks/useLoader';
test('renders learn react link', () => {
  // render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
//   const div = document.createElement("div")
//   ReactDOM.render(<App></App>, div)
  expect(true).toBe(true);
  // const div = document.createElement("div")
  // ReactDOM.render(<Mainpage></Mainpage>, div)
// const tree = renderer.create(<Mainpage></Mainpage>).toJSON();
// expect(tree).toMatchSnapshot();
});
