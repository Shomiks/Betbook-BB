import { configure, addParameters } from '@storybook/react';

// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.js$/), module);

// const newViewports = {
//     kindleFire2: {
//         name: 'Kindle Fire 2',
//         styles: {
//             width: '600px',
//             height: '963px',
//         },
//     },
//     kindleFireHD: {
//         name: 'Kindle Fire HD',
//         styles: {
//             width: '533px',
//             height: '801px',
//         },
//     },
// };
//
// addParameters({
//     viewport: { viewports: newViewports }
// });