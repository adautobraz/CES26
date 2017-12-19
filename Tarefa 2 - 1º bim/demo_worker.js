self.addEventListener('message', function(e) {
  var data = e.data;
  switch (data.cmd) {
    case 'start':
      self.postMessage('WORKER INICIADO: ' + data.msg);
      break;
    case 'stop':
      self.postMessage('WORKER TERMINADO: ' + data.msg +
                       '. (botoes nao funcionam mais)');
      self.close(); // Terminates the worker.
      break;
    default:
      self.postMessage('Comando desconhecido: ' + data.msg);
  };
}, false);