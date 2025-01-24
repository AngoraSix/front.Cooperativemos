export const getEnv = () => {
  const COOP_APP_PREFIX = 'COOP_APP_';
  const AN_ENV_KEYS = Object.keys(process.env).filter((key) =>
    key.toLowerCase().startsWith(COOP_APP_PREFIX.toLowerCase())
  );

  const AN_ENV = AN_ENV_KEYS.reduce((prev, currentKey) => {
    prev[currentKey] = process.env[currentKey];
    prev[currentKey.slice(COOP_APP_PREFIX.length)] = process.env[currentKey];
    return prev;
  }, {});

  return AN_ENV;
};
