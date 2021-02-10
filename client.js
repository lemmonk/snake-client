const net = require('net');

const connect = function() {
  
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });
  conn.on('data', (data) => {
    console.log(data.toString());
    conn.end();
  });
  conn.on('connect', () => {
   
    console.log('Server connection established.');
    conn.write('Name: KJL');
  });
  conn.on('end', () => {
    console.log('disconnected from server');
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  
  return conn;
}


module.exports = {
  connect
};