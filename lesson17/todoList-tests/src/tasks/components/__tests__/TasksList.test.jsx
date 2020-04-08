import React from "react";
import { shallow } from "enzyme";
import TasksList from "../TasksList";
import * as actions from "../../tasks.actions";
import { Provider } from "react-redux";
import store from "../../../store";
import { sortedTasksSelector, tasksListSelector } from "../../tasks.selectors";

describe("<TasksList />", () => {
  it("should set all tasks to the store", () => {
    const tasks = [
      { text: "Task-1", done: false, id: "task-id-1" },
      { text: "Task-4", done: true, id: "task-id-4" },
      { text: "Task-3", done: false, id: "task-id-3" },
      { text: "Task-2", done: true, id: "task-id-2" },
    ];
    const expectedAction = {
      type: actions.SET_TASKS_LIST,
      payload: {
        tasksList: tasks,
      },
    };
    expect(actions.setTaskList(tasks)).toEqual(expectedAction);
  });

  it("should return a list of tasks", () => {
    const state = {
      tasksList: {
        tasks: [
          { text: "Task-1", done: false, id: "task-id-1" },
          { text: "Task-4", done: true, id: "task-id-4" },
          { text: "Task-3", done: false, id: "task-id-3" },
          { text: "Task-2", done: true, id: "task-id-2" },
        ],
      },
    };
    expect(tasksListSelector(state)).toEqual(
      expect.arrayContaining(state.tasksList.tasks)
    );
  });
});
