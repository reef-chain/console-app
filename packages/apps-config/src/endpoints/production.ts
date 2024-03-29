// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TFunction } from 'i18next';
import type { LinkOption } from './types';

import { expandEndpoints } from './util';

/* eslint-disable sort-keys */

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Polkadot) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   value: The actual hosted secure websocket endpoint

// alphabetical based on chain name
export function createProduction (t: TFunction, firstOnly?: boolean): LinkOption[] {
  return expandEndpoints(t, [
    {
      dnslink: 'reef',
      info: 'reef',
      text: t('rpc.prod.reef', 'Reef Mainnet', { ns: 'apps-config' }),
      providers: {
        'Reef Chain': 'wss://rpc.reefscan.com/ws'
      }
    }
  ], firstOnly);
}
