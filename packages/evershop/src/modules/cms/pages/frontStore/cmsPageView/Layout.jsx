import React from 'react';
import Area from '@components/common/Area';
import './Layout.scss';

export default function Layout() {
  return (
    <>
      <div className="header flex justify-between">
        <Area id="header" noOuter />
      </div>
      <main className="content">
        <Area id="content" className="" noOuter />
      </main>
    </>
  );
}

export const layout = {
  id: 'layout',
  areaId: 'body',
  sortOrder: 1
};
