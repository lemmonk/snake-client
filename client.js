const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  conn.on('data', (data) => {
    console.log(data.toString());
    conn.end();
  });
  conn.on('connect', () => {
   
    console.log('Server connection established.');
    conn.write('Name: KJL');
   
    
  });
 
  // interpret incoming data as text
  conn.setEncoding('utf8');

  
  return conn;
}


module.exports = {
  connect,
};