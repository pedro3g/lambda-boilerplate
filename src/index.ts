import env from './env';
import { Callback } from './types/handler';

export default async function handler(
  event: any,
  context: any,
  callback: Callback
) {
  console.log('Hello, World!', env);

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello, World!',
    }),
  });
}
