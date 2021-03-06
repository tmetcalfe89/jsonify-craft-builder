const toSnakeCase = (value) =>
  value.length > 0
    ? `${value[0].toLowerCase()}${value
        .substring(1)
        .replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)}`
        .replace(/\s/g, "_")
        .replace(/__/g, "_")
    : "";

const sortKeyByLetter = (key, a, b) =>
  a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0;

export { toSnakeCase, sortKeyByLetter };
