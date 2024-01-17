const { JSDOM } = require('jsdom');

// Mock TextEncoder
global.TextEncoder = require('util').TextEncoder;

// Create a JSDOM environment
const dom = new JSDOM('<!doctype html><html><body></body></html>');

// Mock global objects
global.window = dom.window;
global.document = dom.window.document;
global.localStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
