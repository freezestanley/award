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
