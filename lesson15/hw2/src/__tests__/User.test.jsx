import React from "react";
import User from '../User';
import { shallow } from 'enzyme';

describe('<User />', () => {
    it ('should render passed name', () => {
        const props = { name: 'Tom', age: null }
        const wrappedComponent = shallow(<User {...props} />);
        expect(wrappedComponent).toMatchSnapshot();
    }),

    it ('should render passed age', () => {
        const props = { name: 'Tom', age: 100 }
        const wrappedComponent = shallow(<User {...props} />);
        expect(wrappedComponent).toMatchSnapshot();
    })
    
})