import StatusEnum from "./StatusEnum";

export default class TaskModel {
  constructor(
    id,
    name,
    description,
    startDate,
    endDate,
    assignments,
    tags,
    codeColor,
    status = StatusEnum.TODO,
    note = "",
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
    this.assignments = assignments;
    this.tags = tags;
    this.codeColor = codeColor;
    this.status = status
    this.note = note;
  }
}