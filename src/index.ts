/**
 * @creadev.org/framework
 *
 * Runtime framework - all-in-one creadev package.
 *
 * EXAMPLES:
 * ```typescript
 * import { Framework } from '@creadev.org/framework';
 * ```
 * ============================================================================
 */

// ============================================================================
// FRAMEWORK
// ============================================================================

export class Framework {
  /** Version */
  static VERSION = '0.3.1';
  
  /** Get all module versions */
  static getVersions() {
    return {
      framework: '0.3.1',
      security: '^0.3.1',
      qos: '^0.3.1',
      network: '^0.3.1',
      escrow: '^0.3.1',
      lock: '^0.3.1',
    };
  }
}

// Re-export from qos (available on npm)
export { withRetry, CircuitBreaker } from '@creadev.org/qos/retry';
export { withTimeout } from '@creadev.org/qos/timeout';

export type { RetryOptions, CircuitBreakerOptions } from '@creadev.org/qos/retry';
export type { TimeoutOptions } from '@creadev.org/qos/timeout';