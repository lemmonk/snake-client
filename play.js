const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
const c = connect();

setupInput(c);
