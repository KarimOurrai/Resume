require('jest-canvas-mock'); // added to polyfill HTMLCanvasElement.getContext

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Optionally remove manual canvas polyfill below since jest-canvas-mock covers it
// HTMLCanvasElement.prototype.getContext = HTMLCanvasElement.prototype.getContext || function(type) {
//   if (type === '2d') {
//     return {
//       // ...implementation...
//     };
//   }
//   return null;
// };
