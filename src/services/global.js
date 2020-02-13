import axios from 'axios';

export function login(params) {
  return Promise.resolve({
    data: {
      respCode: 0,
      data: {
        name: '盎司12094304912',
        phone: '1289284434',
      },
    },
  });
  // return axios({
  //   url: '/api/yxb/login',
  //   method: 'POST',
  //   data: params,
  // });
}
