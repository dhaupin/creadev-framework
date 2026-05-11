/**
 * @creadev.org/framework
 *
 * Runtime framework - all-in-one creadev package.
 * Matches Vant lib/ load sequence for parity.
 *
 * Load order (matches vant.js):
 *   runtime → storage → config → cache → lock → encrypt
 *   → qos → network → sandbox → event → escrow
 *
 * USAGE:
 *   import { Framework, init, think, act } from '@creadev.org/framework';
 *
 * ============================================================================
 */

export class Framework {
  static VERSION = '0.3.1';

  static getVersions() {
    return {
      framework: '0.3.1',
      // Match vant.js load order
      runtime: '^0.3.1',
      storage: '^0.3.1',
      config: '^0.3.1',
      cache: '^0.3.1',
      lock: '^0.3.1',
      encrypt: '^0.3.1',
      qos: '^0.3.1',
      network: '^0.3.1',
      sandbox: '^0.3.1',
      event: '^0.3.1',
      escrow: '^0.3.1',
      // Plus our extras
      api: '^0.3.1',
      server: '^0.3.1',
      auth: '^0.3.1',
      security: '^0.3.1',
    };
  }

  static async init() {
    console.log('[Framework] Init v' + this.VERSION);
    return this;
  }
}

// ==================== MATCH VANT LOAD ORDER ====================

// 1. RUNTIME (core - vant.js equivalent)
export { Runtime, runtime, createRuntime, init, think, act, getState } from '@creadev.org/runtime';

// 2. STORAGE (brain, memory, islands)
export { Storage, Brain, createStorage, createBrain, get, set, list } from '@creadev.org/storage';

// 3. CONFIG (environment config)
export { Config, createConfig, get, set, getDefault } from '@creadev.org/config';

// 4. CACHE (LRU, TTL)
export { Cache, createCache, createLRU, get, set, has } from '@creadev.org/cache';

// 5. LOCK (mutex)
export { Lock, createLock, acquire, release } from '@creadev.org/lock';

// 6. ENCRYPT (crypto)
export { generateId, hash, encrypt, decrypt, createCipher } from '@creadev.org/encrypt';

// 7. QOS (retry, timeout, breaker)
export { withRetry, CircuitBreaker, withTimeout } from '@creadev.org/qos';

// 8. NETWORK (fetch, sse)
export { NetworkClient, createNetwork, fetch, sse } from '@creadev.org/network';

// 9. SANDBOX (isolate)
export { Sandbox, createSandbox, run, isolate } from '@creadev.org/sandbox';

// 10. EVENT (emitter, pubsub, queue)
export { EventEmitter, Queue, PubSub, createEvent, createQueue, createPubSub } from '@creadev.org/event';

// 11. ESCROW (quotas)
export { Escrow, createEscrow, checkQuota, reserve, release } from '@creadev.org/escrow';

// ==================== PLUS AUTH (extra) ====================

// AUTH (sessions)
export { Auth, createAuth, createSession, validateSession, validateToken } from '@creadev.org/auth';

// API (client wrapper)
export { ApiClient, createApi, get, post, put, del } from '@creadev.org/api';

// SERVER (HTTP)
export { Server, createServer, Request, Response } from '@creadev.org/server';

// SECURITY (rate limit, sanitize)
export { RateLimiter, sanitizePath } from '@creadev.org/security';
