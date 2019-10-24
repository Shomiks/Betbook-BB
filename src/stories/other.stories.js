import React from 'react';
import {storiesOf} from '@storybook/react';
import {withSmartKnobs} from 'storybook-addon-smart-knobs'
import {withKnobs, text, boolean, number} from '@storybook/addon-knobs';
import BB_Logo from "../js/components/other/BB_Logo";
import Loader from "../js/components/other/Loader";

const stories = storiesOf('other', module);


// stories
//     .addDecorator(withSmartKnobs)
//     .addDecorator(withKnobs)
//     .addDecorator(story => (
//         <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>))
//     .add('League Logo', () => <BB_HS_League_Logo />);

stories
    .addDecorator(withSmartKnobs)
    .addDecorator(withKnobs)
    .add('Logo', () => <BB_Logo />);

stories
    .addDecorator(withSmartKnobs)
    .addDecorator(withKnobs)
    .add('Loader', () => <Loader />);
