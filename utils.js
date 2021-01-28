function toJSON(data = {}, message = 'success', status = '200', code = '0') {
  return { data, message, status, code };
}

module.exports = toJSON;
