import StatusEnum from "./StatusEnum";

export default class TaskModel {
  constructor(
    id,
    name,
    description,
    startDate,
    endDate,
    completeDate,
    assignments,
    tags,
    codeColor,
    status = StatusEnum.TODO,
    note = "",
    workDaysCount = 0,
    businessDaysCount = 0
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
    this.endDate = endDate;
    this.completeDate = completeDate;
    this.assignments = assignments;
    this.tags = tags;
    this.codeColor = codeColor;
    this.status = status
    this.note = note;
    this.workDaysCount = workDaysCount;
    this.businessDaysCount = businessDaysCount;
  }
}