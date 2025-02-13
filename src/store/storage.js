import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV();

export const setToken = (token) => storage.set('token', token);
export const getToken = () => storage.getString('token');
export const removeToken = () => storage.delete('token');
