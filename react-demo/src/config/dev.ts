import { getExploreName } from '../utils/platform';

export const devConfig = {
  sdkKey: 'jJ6Daa8ZEd8rGoGEmfgC7eqTv96RJ0X6rhSj',
  topic: 'videosdk sample',
  name: `${getExploreName()}-${Math.floor(Math.random() * 1000)}`,
  password: '123',
  signature: 'https://kelvsdksignature.herokuapp.com/',
};
