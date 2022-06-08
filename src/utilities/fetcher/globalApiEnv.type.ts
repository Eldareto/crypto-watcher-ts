const servicePath = {
  SERVICE_ROOT: 'https://api.coincap.io/',
  SERVICE_VERSION_ROOT: 'v2/assets',
};

export const constantEnv = {
  NODE_ENV: process.env.NODE_ENV,
  MAIN_SERVICE: `${servicePath.SERVICE_ROOT}${servicePath.SERVICE_VERSION_ROOT}`,
};
