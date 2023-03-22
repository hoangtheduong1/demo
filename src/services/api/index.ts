// import axios from 'axios';

// const client = axios.create({
//   baseURL: 'http://api.pinnacle-qa.server2div3.pgtest.co/api',
//   timeout: 100000,
// });

// client.interceptors.request.use(
//   async config => {
//     if (config.method === 'get') {
//       const currentTime = new Date().getTime();
//       const oldUrl: any = config.url;
//       let newUrl = config.url;
//       if (oldUrl.includes('?')) {
//         newUrl = `${oldUrl}&time=${currentTime}`;
//       } else {
//         newUrl = `${oldUrl}?time=${currentTime}`;
//       }
//       config.url = newUrl;
//     }
//     const accessToken = localStorage.getItem('accessToken');
//     const cloneConfig: any = { ...config };
//     if (accessToken) {
//       cloneConfig.headers['Auth'] = `bearer ${accessToken}`;
//     }

//     return cloneConfig;
//   },
//   error => Promise.reject(error),
// );

// client.interceptors.response.use(
//   response => response,
//   error => responseErrorHandler(error),
// );

// const responseErrorHandler = async (error: any) => {
//   if (error.response.status === 401) {
//     localStorage.clear();
//     window.location.href = '/login';
//   }
//   return Promise.reject(error.response.data);
// };

// export default client;
