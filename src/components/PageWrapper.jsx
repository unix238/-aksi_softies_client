import React from 'react';
import { NavBar } from './NavBar/NavBar';

export const PageWrapper = ({ Page }) => {
  return (
    <div>
      <NavBar />
      {<Page />}
    </div>
  );
};
