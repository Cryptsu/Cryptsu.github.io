export const setLocalStorage = (key: string, value: object | string | number | null): void => {
  if (typeof window !== 'undefined')
    localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key: string, defaultValue = null): (object | string | number | null) => {
  if (typeof window === 'undefined')
    return null;

  let JSONedValue = localStorage.getItem(key);
  return JSONedValue ? JSON.parse(JSONedValue) : defaultValue;
};

export const rmLocalStorage = (key: string): void => {
  if (typeof window !== 'undefined')
    localStorage.removeItem(key);
};