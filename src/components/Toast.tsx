import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, X, Send, Clock, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export interface ToastProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  clientName?: string;
  preferredChannel?: string;
  duration?: number; // duration in ms, default 6000
}

export const Toast: React.FC<ToastProps> = ({
  isOpen,
  onClose,
  title,
  description,
  clientName,
  preferredChannel = 'Telegram',
  duration = 6000,
}) => {
  const { t } = useLanguage();
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(100);
  const startTimeRef = useRef<number>(0);
  const remainingTimeRef = useRef<number>(duration);
  const animationFrameRef = useRef<number | null>(null);

  // Auto-dismiss logic with pause on hover
  useEffect(() => {
    if (!isOpen || duration <= 0) return;

    remainingTimeRef.current = duration;
    startTimeRef.current = performance.now();
    setProgress(100);

    const step = (now: number) => {
      if (!isPaused) {
        const elapsed = now - startTimeRef.current;
        const remaining = Math.max(0, remainingTimeRef.current - elapsed);
        const nextProgress = (remaining / duration) * 100;
        setProgress(nextProgress);

        if (remaining <= 0) {
          onClose();
          return;
        }
      } else {
        startTimeRef.current = now;
      }
      animationFrameRef.current = requestAnimationFrame(step);
    };

    animationFrameRef.current = requestAnimationFrame(step);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isOpen, isPaused, duration, onClose]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const defaultTitle = t('Заявка успешно отправлена!', 'Inquiry Successfully Sent!');
  const defaultDesc = clientName
    ? t(
        `Спасибо, ${clientName}! Ваша заявка передана Ульяне. Ответ поступит в течение 15–30 минут в ${preferredChannel}.`,
        `Thank you, ${clientName}! Your inquiry has reached Ulyana. You will receive a response within 15–30 minutes via ${preferredChannel}.`
      )
    : t(
        `Оповещение доставлено на рабочую почту и в Telegram разработчика. Ульяна ответит в течение 15–30 минут.`,
        `Notification dispatched to developer email & Telegram. Ulyana will reply within 15–30 minutes.`
      );

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          id="toast-notification-wrapper"
          className="fixed z-50 top-4 right-3 left-3 sm:left-auto sm:right-6 sm:top-6 sm:max-w-md pointer-events-none"
        >
          <motion.div
            id="contact-success-toast"
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: -25, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -18, scale: 0.94 }}
            transition={{ type: 'spring', damping: 24, stiffness: 320 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="pointer-events-auto relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#0e1d3e] to-[#0a152e] border border-emerald-500/50 shadow-2xl shadow-emerald-950/60 backdrop-blur-xl p-4 sm:p-5 text-white"
          >
            {/* Soft background ambient glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-blue-500/15 rounded-full blur-xl pointer-events-none" />

            <div className="relative flex items-start gap-3.5">
              {/* Animated Success Badge Icon */}
              <div className="relative flex-shrink-0">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-emerald-500/20 border border-emerald-400/60 flex items-center justify-center text-emerald-300 shadow-lg shadow-emerald-500/20">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#0a152e] border border-emerald-500/60 flex items-center justify-center">
                  <Sparkles className="w-2.5 h-2.5 text-emerald-300" />
                </div>
              </div>

              {/* Text content */}
              <div className="flex-1 pr-6 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/40">
                    {t('Статус: Принято', 'Status: Received')}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-slate-400">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    <span>15–30 {t('мин', 'min')}</span>
                  </span>
                </div>

                <h4 className="text-sm sm:text-base font-extrabold text-white tracking-tight leading-snug">
                  {title || defaultTitle}
                </h4>

                <p className="text-xs sm:text-[13px] text-slate-300 mt-1 leading-relaxed">
                  {description || defaultDesc}
                </p>

                {/* Instant Telegram Quick Action Button */}
                <div className="mt-3 flex items-center gap-2">
                  <a
                    id="toast-telegram-link"
                    href="https://t.me/u_ulyana_dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-xs font-semibold transition-colors"
                  >
                    <Send className="w-3 h-3" />
                    <span>{t('Написать в Telegram', 'Open Telegram')}</span>
                  </a>
                  <button
                    id="toast-dismiss-button"
                    type="button"
                    onClick={onClose}
                    className="px-2.5 py-1.5 rounded-lg text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {t('Закрыть', 'Dismiss')}
                  </button>
                </div>
              </div>

              {/* Close (X) icon */}
              <button
                id="toast-close-x-btn"
                type="button"
                onClick={onClose}
                aria-label={t('Закрыть оповещение', 'Close notification')}
                className="absolute top-0 right-0 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Countdown Progress Bar */}
            {duration > 0 && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-950/60 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-300 transition-all duration-75 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
