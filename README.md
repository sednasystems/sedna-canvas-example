# Canvas Server Guide

This project contains a simple example server built with the Express framework written in Typescript. The server acts as a gateway for multiple Canvas apps - see `getController` in `src/server.ts`.

You're free to build your own implementation that suits your needs, however, as long as the response conforms to the [Canvas schema](https://canvas.sedna.email/canvas-response-schema-2024-06-01.json).

**NOTE** This server is useful for getting quickly up and running, so there is no checking of the API key (in the HTTP `Authorization` header) by default, or validation of the correct app ID (in the request body `appId` property). To make it production-ready these things would need to be added.

## Quick Start

- Use the Node version found in the .nvmrc file.
- `pnpm install`
- `pnpm dev` to start the Express server (this updates on changes via `nodemon`)
