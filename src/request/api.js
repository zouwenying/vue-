import { get } from './http'

// 登录接口
export const login = p => get("login", p);