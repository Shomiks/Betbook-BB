import React from 'react';
import {storiesOf} from '@storybook/react';
import {withSmartKnobs} from 'storybook-addon-smart-knobs'
import {withKnobs, text, boolean, number} from '@storybook/addon-knobs';
import BB_Logo from "../js/components/other/BB_Logo";
import Loader from "../js/components/other/Loader";
import {MemoryRouter} from "react-router";
const stories = storiesOf('other', module);

stories
    .addDecorator(withSmartKnobs)
    .addDecorator(withKnobs)
    .addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>));

stories
    .add('Logo', () => <BB_Logo />);

stories
    .add('Loader', () => <Loader />);
