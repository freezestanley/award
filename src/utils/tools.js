import router from 'umi/router';

export const checkLogin = cb => {
  if (!!window.sessionStorage.getItem('user')) {
    cb();
  } else {
    router.push('/login');
  }
};

export const getUserInfo = () => {
  const data = window.sessionStorage.getItem('user');
  if (data) {
    return JSON.parse(data);
  }
};

export const formatNumber = num => num.toLocaleString('en-US');
