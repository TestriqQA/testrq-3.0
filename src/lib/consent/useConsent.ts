"use client";

import { useSyncExternalStore } from "react";
import {
  getConsentSnapshot,
  getConsentServerSnapshot,
  subscribeConsent,
  type ConsentState,
} from "./consentStore";

/**
 * Reactive read of the consent state. Re-renders the calling leaf component when
 * the user accepts or declines, without a page reload — so ApolloTracking can start
 * loading the moment consent is granted, and the banner can dismiss itself.
 */
export function useConsent(): ConsentState {
  return useSyncExternalStore(
    subscribeConsent,
    getConsentSnapshot,
    getConsentServerSnapshot
  );
}
