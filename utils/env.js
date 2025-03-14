export const getPublicEnv = () => {
  const COOP_APP_PREFIX = 'COOP_PUBLIC_APP_';
  const COOP_ENV_KEYS = Object.keys(process.env).filter((key) =>
    key.toLowerCase().startsWith(COOP_APP_PREFIX.toLowerCase())
  );

  const COOP_ENV = COOP_ENV_KEYS.reduce((prev, currentKey) => {
    prev[currentKey] = process.env[currentKey];
    return prev;
  }, {});

  return COOP_ENV;
};


const SECRETS_PATTERNS = ['SECRET', 'PASS', 'APIKEY'];

export const removeSecrets = (env) => {
  const safeEnvEntries = Object.entries(env).filter(([key]) => {
    return !SECRETS_PATTERNS.some(secretKeyPattern => key.toLowerCase().includes(secretKeyPattern.toLowerCase()))
  });

  // regenerate object from entries
  return Object.fromEntries(safeEnvEntries);
}