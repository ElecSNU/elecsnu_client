import { render, screen, fireEvent} from '@testing-library/react';
import Navbar from './../index';
import ReactDOM from 'react-dom'
import React from 'react'
import renderer from 'react-test-renderer'
import HomePage from './../../../pages/HomePage/index';
import { useStoreActions, useStoreState } from 'easy-peasy';

test('renders the without crashing', () => {
    const div = document.createElement("div")
    ReactDOM.render(<index></index>, div)
});

// test('opens the ElecSNU page',()=>{
//     // render(<Navbar></Navbar>);
//     const div = document.createElement("div")
//     const tree = renderer.create(<index></index>).toJSON();
//     expect(tree).toMatchSnapshot();
//     fireEvent.click(getByTestId('ElecSNU'))
//     expect(tree).toMatchSnapshot();

// });

// describe("<NavLink  />", () => {
//     it("1.contains correct passed prop", () => {
//         const comp = (
//             <NavLink
//                     className='normal-text logout'
//                     to='/'
//                 >
//                     ElecSNU
//                 </NavLink>
//         );
//         const wrapper = shallow( comp );
//         expect(wrapper.instance().prop().to).to.equal("/");
//     });
// });    