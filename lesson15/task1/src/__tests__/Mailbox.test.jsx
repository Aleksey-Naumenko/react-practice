import React from "react";
import Mailbox from '../Mailbox';
import { shallow } from 'enzyme';

describe('<Mailbox />', () => {
    it ('should render unread messages', () => {
        const props = { unreadMessages: 3 }
        const wrappedComponent = shallow(<Mailbox {...props} />);
        expect(wrappedComponent).toMatchSnapshot();
    }),
    
    it ('should not render unread messages', () => {
        const props = { unreadMessages: '' }
        const wrappedComponent = shallow(<Mailbox {...props} />);
        expect(wrappedComponent).toMatchSnapshot();
    })
})