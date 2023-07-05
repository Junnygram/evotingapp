import React from 'react';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex font-press-start justify-center items-center my-4">
      <p>Copyright © {year} </p>
    </footer>
  );
}

export default Footer;
