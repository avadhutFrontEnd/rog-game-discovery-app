import React, { Component } from "react";

type LayoutProps = {
  children: {
    nav: React.ReactNode;
    aside: React.ReactNode;
    main: React.ReactNode;
  };
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layoutGrid">
      <header className="nav">{children.nav}</header>
      <aside className="aside">{children.aside}</aside>
      <main className="main">{children.main}</main>
    </div>
  );
};

export default Layout;