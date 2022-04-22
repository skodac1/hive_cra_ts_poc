import * as React from 'react';
import { render } from '@testing-library/react';
import NavLinkChildWrapper from "../NavLinkChildWrapper";

describe('<NavLinkChildWrapper />', () => {
    it('matches snapshot', () => {
        const { baseElement } = render(<NavLinkChildWrapper>children</NavLinkChildWrapper>);
        expect(baseElement).toMatchSnapshot();
    });
})