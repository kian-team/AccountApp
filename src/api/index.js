import { post} from '../http/axios';
const BASE_URL = '/api'
const Login = p =>post(`${BASE_URL}/oa/login`, p);

export {
  Login
}