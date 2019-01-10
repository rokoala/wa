const Authenticator = (io, options) => {
  const defaultOptions = {
    // timeout: undefined,
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
      config.authenticate(
        socket,
        { username, password },
        (err, successData) => {
          if (err) {
            socket.emit(
              'unauthorized',
              { message: 'Authentication failure' },
              () => {
                socket.disconnect();
              }
            );
          }

          if (successData) {
            socket.auth = true;
            socket.emit('authenticated', successData);

            // Retrieve user to client
            cb(null, successData);

            return config.onSuccess(socket, successData);
          }
        }
      );
    });

    socket.on('disconnect', function() {
      return config.disconnect ? config.disconnect(socket) : null;
    });

    // if (config.timeout !== 'none') {
    //   setTimeout(function() {
    //     if (!socket.auth) {
    //       socket.disconnect('unauthorized');
    //     }
    //   }, config.timeout);
    // }
  });
};

module.exports = Authenticator;
