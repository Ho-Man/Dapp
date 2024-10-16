import { TonConnectButton, TonConnectUIProvider } from '@tonconnect/ui-react';
import { createRoot } from 'react-dom/client';
import BalanceUI from './components/balance';

document.body.innerHTML = '<div id="app"></div>';

const root = createRoot(document.getElementById('app'));
root.render(
  <TonConnectUIProvider manifestUrl='https://localhost:3000/tonconnect-manifest.json'>

    <h1>Hello, Youtube</h1>
    <div style={{ padding: "10rem" }}>
      <TonConnectButton />
      <BalanceUI />
    </div>
  </TonConnectUIProvider>
);
