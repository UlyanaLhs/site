import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import { CLIENT_REVIEWS } from '../data/cases';
import { useLanguage } from '../context/LanguageContext';

export const ReviewsSection: React.FC = () => {
  const { language, t } = useLanguage();

  const reviewsEn: Record<string, { role: string; text: string; highlight: string }> = {
    'rev-1': {
      role: 'FinTech Founder, ApexPay Solutions (London / Dubai)',
      text: 'Collaborating directly with a solo practitioner of Ulyana’s caliber was a game-changer. No "let me check with the account manager" friction. Strategic iterations were tackled immediately. The web platform paid for itself during our pre-order window.',
      highlight: 'ROI achieved within 14 days'
    },
    'rev-2': {
      role: 'Owner, Glow Aesthetic Studio (Limassol, Cyprus)',
      text: 'We were losing up to a third of inbound leads due to delayed WhatsApp responses after hours. Ulyana’s interactive booking engine lifted booking conversion by +74%. Our staff is completely relieved from manual messaging.',
      highlight: '+74% booking conversion'
    },
    'rev-3': {
      role: 'Chief Operating Officer, Chisto Plus Hub (Vilnius)',
      text: 'Automating cleaning dispatch and migrating clients to recurring subscription schedules yielded phenomenal results. We scaled to 340+ active recurring subscriptions in under two months.',
      highlight: '340+ active recurring clients'
    }
  };

  return (
    <section id="reviews" className="py-20 md:py-32 bg-[#f8fafc] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold text-blue-700 mb-4 shadow-sm">
            <Star className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
            <span>{t('Социальное доказательство & доверие', 'Verified Client Endorsements')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071329] tracking-tight mb-4 leading-tight">
            {language === 'ru' ? (
              <>
                Что говорят{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-emerald-600">
                  основатели и предприниматели
                </span>
              </>
            ) : (
              <>
                What business founders say about{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-emerald-600">
                  direct collaboration with Ulyana
                </span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed">
            {t(
              'Реальные отзывы основателей и руководителей о совместной работе и достигнутых бизнес-метриках.',
              'Unfiltered feedback from international business owners on delivery speed and proven financial impact.'
            )}
          </p>
        </div>

        {/* Reviews Grid in Double-Bezel Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {CLIENT_REVIEWS.map((rev, idx) => {
            const enData = reviewsEn[rev.id];
            const text = language === 'en' && enData ? enData.text : rev.text;
            const role = language === 'en' && enData ? enData.role : `${rev.role}, ${rev.company}`;
            const highlight = language === 'en' && enData ? enData.highlight : rev.highlightMetric;

            return (
              <motion.div
                key={rev.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="double-bezel flex flex-col justify-between transition-shadow hover:shadow-xl"
              >
                <div className="inner-card p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  
                  <div>
                    {/* Rating & Highlight Pill */}
                    <div className="flex items-center justify-between gap-2 mb-6">
                      <div className="flex items-center gap-1">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-xs font-bold text-emerald-800 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80">
                        {highlight}
                      </span>
                    </div>

                    {/* Review Text */}
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-8">
                      &ldquo;{text}&rdquo;
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="pt-5 border-t border-slate-100 flex items-center gap-3.5">
                    <img
                      src={rev.avatar}
                      alt={rev.author}
                      className="w-11 h-11 rounded-full object-cover border border-slate-200 shadow-sm"
                    />
                    <div>
                      <div className="text-sm font-black text-slate-900 leading-tight">
                        {rev.author}
                      </div>
                      <div className="text-xs text-slate-500 leading-tight mt-0.5">
                        {role}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5">
                        {rev.location}
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
