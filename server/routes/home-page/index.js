import { nodeFetch } from '../../utils/fetch';
const { API_METHODS } = require('../../../src/config/constants');
const { API_URL } = require('../../config/constants');

export const reqHomePage = async (req, res, next) => {

  const prevInitialState = req.reduxInitialState || {};

  const getCoursesPopularUrl = `${API_URL}${API_METHODS.COURSES}/Popular`;
  const responsePopularCourses = await nodeFetch({ url: getCoursesPopularUrl });

  const getCoursesUrl = `${API_URL}${API_METHODS.COURSES}/Development`;
  const responseCourses = await nodeFetch({ url: getCoursesUrl });

  const getCategoriesUrl = `${API_URL}${API_METHODS.CATEGORIES}`;
  const responseCategories = await nodeFetch({ url: getCategoriesUrl });

  const getComments = `${API_URL}${API_METHODS.COMMENTS}`;
  const responseComments = await nodeFetch({ url: getComments });

  req.reduxInitialState = {
    ...prevInitialState,
    coursesState: {
      payload: {
        ...responseCourses,
      },
      payloadPopular: {
        ...responsePopularCourses,
      }
    },
    categoriesState: {
      payload: responseCategories,
    },
    commentsState: {
      payload: responseComments,
    }
  };

  next();
};
