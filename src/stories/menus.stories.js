import React from 'react';
import {storiesOf} from '@storybook/react';
import {withSmartKnobs} from 'storybook-addon-smart-knobs'
import {withKnobs, text, boolean, number} from '@storybook/addon-knobs';
import {MemoryRouter} from 'react-router';
import Footer from "../js/components/menus/Footer";
import Header from "../js/components/menus/Header";

const stories = storiesOf('menus', module);

stories
    .addDecorator(withSmartKnobs)
    .addDecorator(withKnobs)
    .addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>));

stories
    .add('Footer', () => <Footer />);

stories
    .add('Header', () => <Header />);

