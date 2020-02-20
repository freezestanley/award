import router from 'umi/router';
import moment from 'moment';
import numeral from 'numeral';
import cookie from './cookie';

export const checkLogin = cb => {
  // if (!!window.sessionStorage.getItem('user')) {
  if (!!cookie.get('user')) {
    cb();
  } else {
    router.push('/login');
  }
};

export const getUserInfo = () => {
  // const data = window.sessionStorage.getItem('user');
  const data = cookie.get('user');
  if (data) {
    return JSON.parse(data);
  }
};

export const formatNumber = num => num.toLocaleString('en-US');

export const Query = {
  parse(search = window.location.search) {
    if (!search) return;
    const hashes = search.slice(search.indexOf('?') + 1).split('&');
    return hashes.reduce((acc, hash) => {
      const [key, val] = hash.split('=');
      return { ...acc, [key]: decodeURIComponent(val) };
    }, {});
  },

  get(key) {
    const params = this.parse(window.location.search);
    if (params) {
      return params[key];
    }
  },

  stringify(query) {
    const str = Object.keys(query)
      .map(key => `${key}=${encodeURIComponent(query[key] || '')}`)
      .join('&');
    return str;
  },
};

export const formatDate = (data, format = 'YYYY-MM-DD') => {
  if (data) {
    return moment(data).format(format);
  } else {
    return '';
  }
};

export const toThousands = value => {
  return numeral(value || 0).format('0,0.00');
};
