import {
  ADD_PROJECT,
  GET_PROJECT,
  GET_PROJECTS,
  ASSIGN_PROJECT,
  EDIT_PROJECT,
  DELETE_PROJECT,
} from "../actions/project.actions";

let initialState = {
  projects: [],
  currentProject: null,
  executors: [],
};

const ProjectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.project],
      };
    case GET_PROJECT:
      return {
        ...state,
        current: action.project,
      };
    case GET_PROJECTS: {
      return { ...state, projects: [...action.projects] };
    }
    case ASSIGN_PROJECT: {
      return Object.assign({}, state, {
        projects: state.projects.map((project) => {
          if (project._id === action.projectId) {
            return Object.assign({}, project, {
              developers: [...project.developers, action.executor],
            });
          }
          return project;
        }),
      });
    }

    case EDIT_PROJECT: {
      return Object.assign({}, state, {
        projects: state.projects.map((project) => {
          if (project._id === action.project._id) {
            return Object.assign({}, project, {
              content: action.project.content,
            });
          }
          return project;
        }),
      });
    }
    case DELETE_PROJECT: {
      return Object.assign({}, state, {
        projects: state.projects.filter(
          (project) => project._id !== action.project._id
        ),
      });
    }
    default:
      return state;
  }
};

export default ProjectsReducer;
