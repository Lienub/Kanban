import { test } from 'vitest';
import { assert } from 'chai'; 
import TagModel from '../TagModel';

test('TagModel create a new tag name', () => {
  const tag = new TagModel('feature');
  assert.equal(tag.name, 'feature');
});