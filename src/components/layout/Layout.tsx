import { Box } from '@chakra-ui/react';

import Footer from './Footer';
import Navbar from './Navbar';
import Seo from '../Seo';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Seo />
      <Box maxWidth='1280px' m='auto'>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </>
  );
}
