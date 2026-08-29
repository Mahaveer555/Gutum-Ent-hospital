import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { TopContactBar } from './components/TopContactBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BottomMobileActionBar } from './components/BottomMobileActionBar';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';
import { ScrollToTop } from './components/ScrollToTop';
import { PageLoader } from './components/PageLoader';
import { PageTransition } from './components/PageTransition';

import { Home } from './pages/Home';

// Route-based lazy loading for optimal performance
const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })));
const Services = lazy(() => import('./pages/Services').then((m) => ({ default: m.Services })));
const Doctors = lazy(() => import('./pages/Doctors').then((m) => ({ default: m.Doctors })));
const Gallery = lazy(() => import('./pages/Gallery').then((m) => ({ default: m.Gallery })));
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then((m) => ({ default: m.PrivacyPolicy })));
const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })));

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-soft text-darktext relative">
      <ScrollToTop />
      <Toaster position="top-right" richColors />

      {/* Top Header Bar & Sticky Navigation */}
      <TopContactBar />
      <Navbar />

      {/* Main Content Area with Page Transitions */}
      <main className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTransition>
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating & Mobile Action Bars */}
      <BottomMobileActionBar />
      <FloatingWhatsAppButton />
    </div>
  );
}

export default App;
