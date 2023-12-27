import { test, expect } from '@jest/globals';
import TaskModel from '../TaskModel';

test("TaskModel create a new task", () => {
  const task = new TaskModel(
    1,
    "Problème de test",
    "description",
    "01/01/2024",
    "02/01/2024",
    "02/01/2024",
    "Romain",
    "feature",
    "#000000",
    "todo",
    "note"
  );

  expect(task.name).toEqual("Problème de test");
  expect(task.description).toEqual("description");
  expect(task.startDate).toEqual("01/01/2024");
  expect(task.endDate).toEqual("02/01/2024");
  expect(task.completeDate).toEqual("02/01/2024");
  expect(task.assignments).toEqual("Romain");
  expect(task.tags).toEqual("feature");
  expect(task.codeColor).toEqual("#000000");
  expect(task.status).toEqual("todo");
  expect(task.note).toEqual("note");
});
