/**
 * @creadev.org/framework
 *
 * Runtime framework - all-in-one creadev package.
 * Re-exports all packages in hierarchy.
 *
 * USAGE:
 *   import { Framework, RateLimiter, withRetry } from '@creadev.org/framework';
 *
 * ============================================================================
 */

export class Framework {
  static VERSION = '0.3.1';

  static getVersions() {
    return {
      framework: '0.3.1',
      security: '0.3.1',
      qos: '0.3.1',
      storage: '^0.3.1',
      cache: '^0.3.1',
      network: '^0.3.1',
      api: '^0.3.1',
      server: '^0.3.1',
      auth: '^0.3.1',
      event: '^0.3.1',
      encrypt: '^0.3.1',
      config: '^0.3.1',
      lock: '^0.3.1',
      escrow: '^0.3.1',
      sandbox: '^0.3.1',
      runtime: '^0.3.1',
    };
  }

  static async init() {
    console.log('[Framework] Init v' + this.VERSION);
    return this;
  }
}

// Re-export from published packages
export { RateLimiter, sanitizePath } from '@creadev.org/security';
export { withRetry, CircuitBreaker, withTimeout } from '@creadev.org/qos';
