const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'react-task-app',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

