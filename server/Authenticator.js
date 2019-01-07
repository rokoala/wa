const Authenticator = (io, options) => {
  const defaultOptions = {
    timeout: 5000,
    onSuccess: undefined,
    disconnect: undefined
  };

  const config = {
    ...defaultOptions,
    ...options
  };

  io.on('connection', socket => {
    socket.auth = false;
    socket.on('login', (username, password, cb) => {
      config.authenticate(socket, { username, password }, (err, success) => {
        if (err) {
          socket.emit(
            'unauthorized',
            { message: 'Authentication failure' },
            () => {
              socket.disconnect();
            }
          );
        }

        if (success) {
          socket.auth = true;
          socket.emit('authenticated', success);

          // return data
          cb(null, username);

          return config.onSuccess(socket, { username, password });
        }
      });
    });

    socket.on('disconnect', function() {
      return config.disconnect ? config.disconnect(socket) : null;
    });

    if (config.timeout !== 'none') {
      setTimeout(function() {
        if (!socket.auth) {
          socket.disconnect('unauthorized');
        }
      }, config.timeout);
    }
  });
};

module.exports = Authenticator;
