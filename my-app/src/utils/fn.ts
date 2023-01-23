export const getDate = () => new Date().toISOString().slice(5, 10).split('-').reverse().join('/');

export const cutText = (text: string, size: number) => text.length > size ? text.slice(0, size - 3) + '...' : text;

