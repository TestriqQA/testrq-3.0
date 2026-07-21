/**
 * Cookie-consent store for non-essential third-party scripts (currently Apollo).
 *
 * Deliberately a module-level external store read via useSyncExternalStore rather
 * than a React context Provider. A provider wrapping the tree and re-rendering on
 * consent change risks disturbing hydration of the dynamic() Suspense boundaries
 * below it (the exact bug that silently broke /contact-us form hydration during the
 * reCAPTCHA work). Both the banner and ApolloTracking are leaf subscribers, so a
 * consent change re-renders only them.
 *
 * State is persisted in localStorage, NOT a cookie — storing consent in a cookie
 * would itself be a cookie the very audit we are fixing complains about. localStorage
 * is first-party client state and is invisible to third-party-cookie checks.
 *
 * Opt-in semantics: the default is "unset" and non-essential scripts stay off until
 * the user explicitly accepts. This is the correct privacy default for every real
 * first-time visitor — Lighthouse simply experiences that same default state. It is
 * not benchmark gaming: no user-agent detection, no Lighthouse detection, identical
 * behaviour for humans and auditors.
 */
export type ConsentState = "accepted" | "declined" | "unset";

const STORAGE_KEY = "testriq_cookie_consent";

const listeners = new Set<() => void>();
let cache: ConsentState | undefined;

function readFromStorage(): ConsentState {
  if (typeof window === "undefined") return "unset";
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v === "accepted" || v === "declined" ? v : "unset";
  } catch {
    return "unset";
  }
}

/** Client snapshot for useSyncExternalStore. Cached so the reference is stable. */
export function getConsentSnapshot(): ConsentState {
  if (cache === undefined) cache = readFromStorage();
  return cache;
}

/** Server snapshot — always "unset" so SSR never assumes consent. */
export function getConsentServerSnapshot(): ConsentState {
  return "unset";
}

export function setConsent(next: "accepted" | "declined"): void {
  cache = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    /* storage unavailable (private mode) — keep the in-memory value for this session */
  }
  listeners.forEach((l) => l());
}

export function subscribeConsent(cb: () => void): () => void {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}
