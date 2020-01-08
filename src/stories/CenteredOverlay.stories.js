import React from 'react';
import CenteredOverlay from "../CenteredOverlay"

export default { title: 'CenteredOverlay' };

export const main = () => (
  <div
    className="relative"
    style={{ width: '100%', height: 300, backgroundColor: '#333333' }}
  >
    <CenteredOverlay className="text-white">
      Centered vertically and horizontally
    </CenteredOverlay>
  </div>
)
