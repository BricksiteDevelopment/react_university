export const {
  API_URL = 'https://magora-react-university.herokuapp.com/',
  API_VERSION = '1',
  LOCAL_STORAGE_PREFIX = '@REACT_TEMPLATE_APP',
  NODE_ENV,
  REDUX_LOGGER_IS_ENABLED = false,
} = process.env || {};

export const ROUTES = {
  HOME_PAGE: '/',
};

export const API_METHODS = {
  COURSES: '/courses',
  CATEGORIES: '/categories',
  COMMENTS: '/comments',
};

export const ACTIONS_CONSTANTS_COURSES = {
  COURSES_GET_SUCCESS: 'COURSES_GET_SUCCESS',
  COURSES_POPULAR_GET_SUCCESS: 'COURSES_POPULAR_GET_SUCCESS',
};

export const ACTIONS_CONSTANTS_CATEGORIES = {
  CATEGORIES_GET_SUCCESS: 'CATEGORIES_GET_SUCCESS',
};

export const ACTIONS_CONSTANTS_COMMENTS = {
  COMMENTS_GET_SUCCESS: 'COMMENTS_GET_SUCCESS',
};

export const ACTIONS_CONSTANTS_LANGUAGE = {
  CURRENT_LANGUAGE: 'CURRENT_LANGUAGE',
};
