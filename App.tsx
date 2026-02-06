import React from 'react';

import Hero from './components/Hero.tsx';
import TargetAudience from './components/TargetAudience.tsx';
import GuideContent from './components/GuideContent.tsx';
import HowItWorks from './components/HowItWorks.tsx';
import FAQ from './components/FAQ.tsx';
import LeadForm from './components/LeadForm.tsx';
import StickyCTA from './components/StickyCTA.tsx';
import ExitIntentPopup from './components/ExitIntentPopup.tsx';
import ProgressBar from './components/ProgressBar.tsx';

const RESULTS = [
  'Бизнес упакован',
  'Каналы работают',
  'Бот продает',
  'Есть прибыль',
];

function App() {
  return (
    <>
      <ProgressBar />

      <Hero />

      <section id="results" className="results-section">
        <div className="container">
          <h2>Твой результат через 30 дней</h2>
          <ul className="results-list">
            {RESULTS.map((item) => (
              <li key={item} className="results-item">
                <span className="results-check">✓</span>
                <span className="results-text">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <TargetAudience />
      <GuideContent />
      <HowItWorks />
      <FAQ />
      <LeadForm />
      <StickyCTA />
      <ExitIntentPopup />
    </>
  );
}

export default App;
