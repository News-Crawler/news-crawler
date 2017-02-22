import { REGISTER, LOGIN } from '../sagas/auth';

const auth = (state = {}, { type, status, response }) => {
  if (status === 'success' && (type === REGISTER || type === LOGIN)){
    return response;
  }
  return state;
}

export default auth;
