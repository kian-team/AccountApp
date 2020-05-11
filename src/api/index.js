import { get, post } from '../http/axios';
const BASE_URL = '/api'
const Login = p => post(`${BASE_URL}/oa/login`, p);
const AccountList = p => get(`${BASE_URL}/oa/user/list`, p);
const LoginX = p => get(`${BASE_URL}/github/login`, p);

export {
  Login,
  AccountList,
  LoginX
}