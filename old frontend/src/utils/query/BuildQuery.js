export const buildParams = (params) => {
    const query = [];
    for (const key in params) {
      if (params[key] !== undefined && params[key] !== null) {
        query.push(`${encodeURIComponent(key)}=${encodeURIComponent(params[key]).replace(/%20/g, '+')}`);
      }
    }
    return query.length > 0 ? `?${query.join('&')}` : '';
  }