let backendHost;
const apiVersion = 'v1';

const hostname = window && window.location && window.location.hostname;

if(hostname === 'https://mytechhigh.yoda.com') {
  backendHost = 'https://mytechhigh.yoda.com';
} else if(hostname === 'https://mytechhigh.yoda-beta.com') {
  backendHost = 'https://mytechhigh.yoda-beta.com';
} else if(/^qa/.test(hostname)) {
  backendHost = `https://${hostname}`;
} else {
  backendHost = process.env.REACT_APP_BACKEND_HOST || 'http://localhost:8000';
}

export const API_ROOT = `${backendHost}/api`;