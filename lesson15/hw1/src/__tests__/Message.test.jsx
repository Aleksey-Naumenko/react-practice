import React from "react";
import Message from '../Message';
import { shallow } from 'enzyme';

describe('<Message />', () => {
    it ('should render text passed', () => {
        const props = { text: 'Hello' }
        const wrappedComponent = shallow(<Message {...props} />);
        expect(wrappedComponent).toMatchSnapshot();
    }),

    it ('component should hide - no text passed', () => {
        const props = { text: null }
        const wrappedComponent = shallow(<Message {...props} />);
        expect(wrappedComponent).toMatchSnapshot();
    })
    
})