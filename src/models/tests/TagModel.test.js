import { test, expect } from '@jest/globals';
import TagModel from '../TagModel';

test('TagModel create a new tag name', () => {
  const tag = new TagModel('feature');
  expect(tag.name).toEqual('feature');
});
