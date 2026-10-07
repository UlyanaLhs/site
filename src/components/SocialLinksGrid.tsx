import React from 'react';
import { 
  Send, 
  Instagram, 
  Linkedin, 
  Youtube, 
  AtSign, 
  ExternalLink,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { ULYANA_SOCIALS, SocialLink } from '../data/socials';
import { useLanguage } from '../context/LanguageContext';

export const SocialLinksGrid: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { language, t } = useLanguage();

  const getIcon = (iconName: SocialLink['iconName']) => {
    switch (iconName) {
      case 'instagram':
        return <Instagram className="w-5 h-5 text-pink-400" />;
      case 'threads':
        return <AtSign className="w-5 h-5 text-slate-200" />;
      case 'telegram':
        return <Send className="w-5 h-5 text-cyan-400" />;
      case 'linkedin':
        return <Linkedin className="w-5 h-5 text-blue-400" />;
      case 'youtube':
        return <Youtube className="w-5 h-5 text-red-400" />;
    }
  };

  if (compact) {
    return (
      <div className="flex flex-wrap items-center gap-2">
        {ULYANA_SOCIALS.map((social) => (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            title={`${social.name}: ${social.handle}`}
            className="p-2.5 rounded-xl bg-blue-950/80 border border-blue-800/60 text-slate-300 hover:text-white hover:border-emerald-400/60 transition-all duration-200 hover:scale-105"
          >
            {getIcon(social.iconName)}
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span>{t('Мои соцсети и каналы', 'Social Media & Direct Channels')}</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
              {t('Ульяна в сети', 'Ulyana Online')}
            </span>
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            {t(
              'Подписывайтесь на инсайты или пишите лично для оперативной связи',
              'Follow for development insights or reach out directly for instant chat'
            )}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {ULYANA_SOCIALS.map((social) => {
          const isDirect = social.id === 'telegram-direct';
          const badge = language === 'en' ? social.badgeEn : social.badgeRu;
          const desc = language === 'en' ? social.descriptionEn : social.descriptionRu;
          const name = language === 'en' ? social.nameEn : social.name;

          return (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-2xl bg-[#091530] border border-blue-900/50 hover:border-emerald-500/50 transition-all duration-300 group flex flex-col justify-between shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${
                isDirect ? 'ring-1 ring-cyan-400/40 bg-gradient-to-br from-[#0a1a3e] to-[#071329]' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-800/60 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(social.iconName)}
                  </div>
                  {badge && (
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isDirect 
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' 
                        : 'bg-blue-950 text-slate-300 border border-blue-800/60'
                    }`}>
                      {badge}
                    </span>
                  )}
                </div>

                <div className="font-bold text-sm text-white group-hover:text-emerald-300 transition-colors flex items-center justify-between">
                  <span>{name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                
                <div className="text-xs font-semibold text-emerald-400/90 mt-0.5">
                  {social.handle}
                </div>

                <p className="text-[11px] text-slate-400 mt-2 leading-relaxed line-clamp-2">
                  {desc}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-blue-900/30 text-[11px] font-semibold text-slate-300 group-hover:text-white flex items-center gap-1">
                <span>{isDirect ? t('Написать сообщение', 'Send message') : t('Перейти в профиль', 'Open profile')}</span>
                <span className="text-emerald-400">→</span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};
