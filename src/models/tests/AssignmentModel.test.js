import { test } from 'vitest';
import { assert } from 'chai'; 
import AssignmentModel from '../AssignmentModel';

test('AssignmentModel create a new assignment name', () => {
  const assignment = new AssignmentModel('Romain');
  assert.equal(assignment.name, 'Romain');
});