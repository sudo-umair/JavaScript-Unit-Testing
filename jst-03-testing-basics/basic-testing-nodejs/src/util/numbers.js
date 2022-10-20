function transformToNumber(value) {
  if (value === undefined) {
    throw new Error('No value passed to function.');
  }

  return +value;
}

exports.transformToNumber = transformToNumber;
