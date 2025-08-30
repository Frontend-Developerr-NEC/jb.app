import "./globals.css";

import Header from "../components/header/header";

export default function HomeLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
