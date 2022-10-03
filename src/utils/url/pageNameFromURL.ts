export const getPathFromURL = (url: string): string | null => {
  const match = url.match(/\w+/);
  let path;

  if (match) {
    path = match[0];
  }

  return path ? path : null;
};
