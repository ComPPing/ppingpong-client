export const calculateStyle = (type: string, condition: object) => {
  const entries = Object.entries(condition);
  const className = entries.reduce((acc, [key, value]) => {
    return acc + (type === key ? value : '');
  }, '');
  return className;
};
