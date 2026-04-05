/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // Since this is a multi-page vanilla JS app, we just redirect to index.html
    // if the user hits the root. Vite will serve index.html by default anyway.
    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
      // Already at root
    }
  }, []);

  return null; // The HTML files are served directly by Vite
}
