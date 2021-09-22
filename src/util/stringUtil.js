const toSnakeCase = value =>
  value.length > 0
    ? `${value[0].toLowerCase()}${value
        .substring(1)
        .replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`)}`.replace(
        /\s/g,
        ''
      )
    : ''

export { toSnakeCase }
