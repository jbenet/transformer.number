var transformer = require('dat-transformer');

module.exports = new transformer.Type({
  // @context and type filled in automatically.
  'id': 'number',
  'description': 'number',
  'schema': "string"
});
