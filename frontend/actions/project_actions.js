import * as APIUtil from '../util/project_api_util';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_GIF = 'RECEIVE_GIF';

export const scrapeGif = () => dispatch => (
  APIUtil.scrapeGif()
    .then((gif) => (dispatch(receiveGif(gif))))
    .fail((errors) => (dispatch(receiveErrors(errors.responseJSON))))
);

export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});

export const receiveGif = gif => ({
  type: RECEIVE_GIF,
  gif
});
