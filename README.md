## nodejs-reverse-proxy
This project was created as a simple solution to simulate ssl supported environments without modifying the target
application that will run behind a reverse proxy on the live server.

###Prerequisites
This project was built and tested with `node v16.14.2` and `npm 8.5.0`. Using the latest Node.js LTS version is recommended

The reverse proxy can be accessed via any URL that points to `127.0.0.1` or `localhost` in the default settings.
###Installation
This project delivers a `package-lock.json` to ensure the right packages are installed.
```bash
npm ci
```

If you want the latest packages instead of the tested ones use 
```bash
npm install
```

###Startup
```bash
npm run start
```

###Config
The current default config is:
```json
{
  "target": {
    "host": "example.com",
    "port": 3000
  },
  "ssl": {
    "enabled": true,
    "cert": "cert.pem",
    "key": "key.pem",
    "port": 443
  },
  "host": "127.0.0.1",
  "port": 80
}
```
All settings that are currently used are listed, there are no hidden ones, this project also does not use defaults so
deleting any line from it may cause crashes.

#### Target
Set the reverse proxy target aka the URL and port of the other project you want to show in the end.

#### SSL
Set if and with which key, cert and port SSL should be used.

#### Host
Set what address to bind.

#### Port
What port should your reverse proxy use to be accessible.