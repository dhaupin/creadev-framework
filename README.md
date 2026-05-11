# @creadev.org/framework

> Framework - all-in-one package

[![npm](https://img.shields.io/npm/v/@creadev.org/framework)](https://www.npmjs.com/package/@creadev.org/framework)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Install

```bash
npm install @creadev.org/framework
```

## Usage

```typescript
import { Framework } from '@creadev.org/framework';

// Re-exports all packages
import { Runtime, Storage, Config, Cache, Lock, Network, Sandbox } from '@creadev.org/framework';
```

## Includes

- runtime - think, act, state
- storage - brain, memory
- config - environment config
- cache - LRU, TTL
- lock - mutex, sync
- encrypt - crypto
- qos - retry, timeout
- network - HTTP, SSE
- sandbox - code isolation
- event - emitter, queue
- escrow - quotas
- auth - sessions
- api - client wrapper
- server - HTTP server

## License

MIT
trigger
