
export const resolveLocale = (destination, { locale, defaultLocale }) => {
  return locale != defaultLocale ? `/${locale}${destination}` : destination;
};

export const resolveRoute = (route, ...args) => {
  const isAbsoluteUrl = new RegExp('^(?:[a-z+]+:)?//', 'i');
  if (isAbsoluteUrl.test(route)) {
    const absUrl = new URL(route);
    return `${absUrl.protocol}//${absUrl.host}${replacePathParams(
      absUrl.pathname,
      ...args
    )}`;
  } else {
    return replacePathParams(route, ...args);
  }
};

const replacePathParams = (path, ...args) => {
  return args.reduce(
    // replace each path pattern
    (url, replaceString) => url.replace(/:\w+/, replaceString),
    path
  );
};
