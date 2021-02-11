let connection;

const setupInput = function(conn) {

  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  
  stdin.on('data',  (key) => {

    handleUserInput(key);
  });

 
  return stdin;
};


const handleUserInput = (key) =>{

  if (key === '\u0003') {
    
    process.exit();
  }

  switch (key) {
  case 'w':
    connection.write('Move: up');
    break;
  case 'a':
    connection.write('Move: left');
    break;
  case 's':
    connection.write('Move: down');
    connection.write('Say: Snake Slithers Silly');
    break;
  case 'd':
    connection.write('Move: right');
    break;
  case 'm':
    connection.write('Say: Coding Magic');
    break;
  default:
    connection.write('Say: Mervvv...');
  }



};

module.exports = {setupInput};