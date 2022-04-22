import * as React from 'react';
import { render } from '@testing-library/react';
import Link from "../Link";

describe('<Sidebar />', () => {
    it('matches snapshot', () => {
        const { baseElement } = render(<Link text="text" url="url" />);
        expect(baseElement).toMatchSnapshot();
    });
})