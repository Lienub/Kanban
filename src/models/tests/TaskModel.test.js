import { test } from "vitest";
import { assert } from "chai";
import TaskModel from "../TaskModel";

test("TaskModel create a new task", () => {
  const task = new TaskModel(
    1,
    "Problème de test",
    "description",
    "01/01/2024",
    "02/01/2024",
    "Romain",
    "feature",
    "#000000",
    "todo"
  );
  assert.equal(task.name, "Problème de test");
  assert.equal(task.description, "description");
  assert.equal(task.startDate, "01/01/2024");
  assert.equal(task.endDate, "02/01/2024");
  assert.equal(task.assignments, "Romain");
  assert.equal(task.tags, "feature");
  assert.equal(task.codeColor, "#000000");
});
