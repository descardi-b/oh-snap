import React from 'react';

import { render, cleanup } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import Nav from '..';



afterEach(cleanup);

describe('Nav component', () => {
    // First Test
    it('renders', () => {
        render(<Nav />)
    })

    // Second Test
})