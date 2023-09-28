## What is this?

This is a simple Node.js application that acts as API for a [web application](https://github.com/jaravad/fe-search-challenge-client) built with Next.js.
This Node.js API was built with Express.js and it fetches data from a MongoDB database created specifically for this application.

This API can be accessed through this url: https://fe-search-challenge-server.onrender.com.

The web app that uses this API can be accessed through this url: https://fe-search-challenge-client.vercel.app/

The data stored in the database was taken from this API: [colombia-api](https://github.com/Mteheran/api-colombia).

### Local development

To start the app locally run the following commands:

```bash
npm install
```

and then

```bash
npm start
```

The local address is based on the `PORT` configured in the environments variable, for example: [http://localhost:8080](http://localhost:8080) with your browser to see the result.
