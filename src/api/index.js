import { get, post } from '../http/axios';
const BASE_URL = '/api'
const MOCK_URL = '/mock/api'
const Login = p => post(`${BASE_URL}/oa/login`, p);
const AccountList = p => get(`${BASE_URL}/oa/user/list`, p);
const LoginX = p => get(`${BASE_URL}/github/login`, p);
const LoginCallBack = p => get(`${BASE_URL}/github/oauth/callback`, p);
const GetList = p => get(`${MOCK_URL}/data`, p);
const GetIcon = p => get(`${MOCK_URL}/icon`, p);
export {
  Login,
  AccountList,
  LoginX,
  LoginCallBack,
  GetList,
  GetIcon
}