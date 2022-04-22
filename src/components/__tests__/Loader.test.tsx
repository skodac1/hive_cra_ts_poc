import * as React from 'react';
import { render } from '@testing-library/react';
import Loader from "../Loader";

describe('<Loader />', () => {
    it('matches snapshot', () => {
        const { baseElement } = render(<Loader />);
        expect(baseElement).toMatchSnapshot();
    });
})