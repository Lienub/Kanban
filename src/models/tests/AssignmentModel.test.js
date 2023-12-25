import { test, expect } from '@jest/globals';
import AssignmentModel from '../AssignmentModel';

test('AssignmentModel create a new assignment name', () => {
  const assignment = new AssignmentModel('Romain');
  expect(assignment.name).toEqual('Romain');
});
