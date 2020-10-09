import {
  SET_STATUS,
  GET_PROJECT_TASKS,
  GET_ASSIGN_TASKS,
  ADD_TASK,
  EDIT_TASK,
  DELETE_TASK,
  ASSIGN_TASK,
} from "../actions/task.actions";

let initialState = {
  projectTasks: [],
  userTasks: [],
  current: null,
  executors: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      return { ...state, projectTasks: [...state.projectTasks, action.task] };
    }
    case GET_PROJECT_TASKS: {
      return { ...state, projectTasks: action.tasks };
    }
    case GET_ASSIGN_TASKS: {
      return { ...state, userTasks: action.tasks };
    }
    case EDIT_TASK: {
      return Object.assign({}, state, {
        projectTasks: state.projectTasks.map((task) => {
          if (task._id === action.task._id) {
            return Object.assign({}, task, { content: action.task.content });
          }
          return task;
        }),
      });
    }

    case DELETE_TASK: {
      return Object.assign({}, state, {
        projectTasks: state.projectTasks.filter(
          (task) => task._id !== action.task._id
        ),
      });
    }
    case ASSIGN_TASK: {
      return Object.assign({}, state, {
        projectTasks: state.projectTasks.map((task) => {
          if (task._id === action.taskId) {
            return Object.assign({}, task, { executor: action.executor });
          }
          return task;
        }),
      });
    }
    case SET_STATUS: {
      return Object.assign({}, state, {
        projectTasks: state.projectTasks.map((task) => {
          if (task._id === action.task.id) {
            return Object.assign({}, task, { status: action.task.status });
          }
          return task;
        }),
      });
    }
    default:
      return state;
  }
};

export default taskReducer;
