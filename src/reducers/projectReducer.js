import {
  ADD_PROJECT,
  GET_PROJECT,
  GET_PROJECTS,
  ASSIGN_PROJECT,
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
    case GET_PROJECTS:
      return { ...state, projects: [...action.projects] };

    case ASSIGN_PROJECT: {
      return {
        ...state,
        executors: [
          ...state.executors,
          { developerId: action.executor, projectId: action.project },
        ],
      };
    }
    default:
      return state;
  }
};

export default ProjectsReducer;
