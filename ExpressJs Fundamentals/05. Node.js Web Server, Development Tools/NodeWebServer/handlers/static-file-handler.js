const fs = require('fs');

module.exports = (req, res) => {
    if (req.path.startsWith('/content')) {
        fs.readFile('.' + req.path, (err, data) => {
            if (err) {
                console.log(err.message);
                return
            }

            if (req.path.endsWith('.css')) {
                res.writeHead(200, {
                    'content-type': 'text/css'
                });

            }
            else if (req.path.endsWith('.js')) {
                res.writeHead(200, {
                    'content-type': 'application/javascript'
                });

            }
            res.write(data);
            res.end();
        });
    }

    else {
        fs.readFile('./error.html', (err, data) => {
            if (err) {
                console.log(err.message);
                return
            }

            res.writeHead(200, {
                'content-type': 'text/html'
            });
            res.write(data);
            res.end();
        })
    }
};