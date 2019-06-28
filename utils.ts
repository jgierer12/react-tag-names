export const noop: (...args: any[]) => any = () => {};

export const bail = (cb = noop) => (err: Error, ...args: any[]) => {
  if (err) throw err;
  cb(...args);
};
