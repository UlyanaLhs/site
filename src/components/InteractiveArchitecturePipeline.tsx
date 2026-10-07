import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Layers, 
  Cpu, 
  Workflow, 
  Send, 
  Database, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Terminal,
  Zap,
  Globe,
  Sliders,
  ExternalLink
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export interface ArchitectureNode {
  id: 'design' | 'frontend' | 'backend' | 'automation' | 'client';
  labelRu: string;
  labelEn: string;
  sublabelRu: string;
  sublabelEn: string;
  tech: string[];
  metricRu: string;
  metricEn: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  codeSnippet: string;
}

export const ARCHITECTURE_NODES: ArchitectureNode[] = [
  {
    id: 'design',
    labelRu: '01. UI/UX & Tokens',
    labelEn: '01. UI/UX & Tokens',
    sublabelRu: 'Figma-архитектура, дизайн-система и CRO-психология',
    sublabelEn: 'Figma architecture, design tokens & conversion UX',
    tech: ['Figma Tokens', 'Fluid Typography', 'Micro-interactions', 'WCAG AA'],
    metricRu: 'x2.4 конверсия воронки',
    metricEn: '2.4x conversion lift',
    icon: Layers,
    color: '#2563eb',
    codeSnippet: `// Design Tokens: Color & Type Matrix
export const theme = {
  colors: {
    navy: '#071329',
    blue: '#2563eb',
    mint: '#059669',
    canvas: '#fafcfe'
  },
  typography: { display: 'Plus Jakarta Sans', code: 'JetBrains Mono' },
  rhythm: { base: 4, grid: 12, maxContainer: 1280 }
};`
  },
  {
    id: 'frontend',
    labelRu: '02. Reactive Frontend',
    labelEn: '02. Reactive Frontend',
    sublabelRu: 'React 19, TypeScript, Tailwind v4 & Vite',
    sublabelEn: 'React 19, TypeScript, Tailwind v4 & Vite',
    tech: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion'],
    metricRu: '< 0.8с загрузка • PageSpeed 98',
    metricEn: '< 0.8s load • PageSpeed 98',
    icon: Code2,
    color: '#0284c7',
    codeSnippet: `// Zero-lag Reactive Component
export const ProductionCheckout = ({ intent, orderId }: CheckoutProps) => {
  const [status, setStatus] = useState<'idle' | 'executing' | 'confirmed'>('idle');
  return (
    <motion.div animate={{ opacity: 1, scale: 1 }} className="checkout-portal">
      <PaymentGateway intent={intent} onComplete={() => setStatus('confirmed')} />
    </motion.div>
  );
};`
  },
  {
    id: 'backend',
    labelRu: '03. High-Load Backend',
    labelEn: '03. High-Load Backend',
    sublabelRu: 'Node.js, REST API, Webhooks & PostgreSQL',
    sublabelEn: 'Node.js, REST API, Webhooks & PostgreSQL',
    tech: ['Node.js', 'Express', 'Telegram Bot API', 'PostgreSQL'],
    metricRu: '< 120 мс ответ API • 99.9% uptime',
    metricEn: '< 120ms latency • 99.9% uptime',
    icon: Database,
    color: '#059669',
    codeSnippet: `// High-Throughput Webhook Controller
app.post('/api/v1/telemetry/lead', async (req, res) => {
  const { lead, channel, orderTotal } = req.body;
  const verifiedLead = await leadScoringEngine.evaluate(lead);
  await Promise.all([
    crmSync.dispatch(verifiedLead),
    telegramBot.notifyHighTicketDeal(verifiedLead, orderTotal)
  ]);
  return res.status(200).json({ status: 'dispatched', code: 'OK_200' });
});`
  },
  {
    id: 'automation',
    labelRu: '04. n8n & AI Workflows',
    labelEn: '04. n8n & AI Workflows',
    sublabelRu: 'Автономная маршрутизация лидов и CRM',
    sublabelEn: 'Autonomous lead routing, CRM & AI logic',
    tech: ['n8n Self-Hosted', 'CRM Webhooks', 'OpenAI/Claude APIs', 'Instant Alerts'],
    metricRu: '-65% рутины • до 25 ч/нед экономии',
    metricEn: '-65% routine • 25 hrs/wk saved',
    icon: Workflow,
    color: '#047857',
    codeSnippet: `// n8n Automated Orchestration Pipeline
{
  "nodes": [
    { "name": "Webhook Inbound", "type": "n8n-nodes-base.webhook" },
    { "name": "AI Lead Classifier", "type": "n8n-nodes-base.openAi" },
    { "name": "Sync CRM Deal", "type": "n8n-nodes-base.amoCrm" },
    { "name": "Alert Founder Telegram", "type": "n8n-nodes-base.telegram" }
  ],
  "sla": "instant_300ms_dispatch"
}`
  },
  {
    id: 'client',
    labelRu: '05. Live Product & Impact',
    labelEn: '05. Live Product & Impact',
    sublabelRu: 'Работающий продукт с чистой окупаемостью',
    sublabelEn: 'Deployed product driving measurable revenue',
    tech: ['Web Platform', 'Telegram Mini App', 'Live Analytics', '30-Day SLA'],
    metricRu: '100% зафиксировано в договоре',
    metricEn: '100% locked by contract',
    icon: Globe,
    color: '#2563eb',
    codeSnippet: `// Production Health & Revenue Metrics
export const verifiedMetrics = {
  averageTurnaround: '15-30 minutes',
  productionLaunch: '7-14 business days',
  guaranteeSLA: '30 days free warranty',
  contractPricing: 'Fixed 50/50 staged terms'
};`
  }
];

export const InteractiveArchitecturePipeline: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeNodeId, setActiveNodeId] = useState<ArchitectureNode['id']>('frontend');
  const [isAutoCycling, setIsAutoCycling] = useState<boolean>(true);

  // Auto-cycle through nodes unless user explicitly hovers or clicks
  useEffect(() => {
    if (!isAutoCycling) return;
    const interval = setInterval(() => {
      setActiveNodeId(prev => {
        const currentIndex = ARCHITECTURE_NODES.findIndex(n => n.id === prev);
        const nextIndex = (currentIndex + 1) % ARCHITECTURE_NODES.length;
        return ARCHITECTURE_NODES[nextIndex].id;
      });
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoCycling]);

  const activeNode = ARCHITECTURE_NODES.find(n => n.id === activeNodeId) || ARCHITECTURE_NODES[1];

  return (
    <div 
      className="relative rounded-3xl bg-slate-900 border border-slate-800 text-slate-100 p-5 sm:p-7 shadow-2xl overflow-hidden"
      onMouseEnter={() => setIsAutoCycling(false)}
      onMouseLeave={() => setIsAutoCycling(true)}
    >
      {/* Background glow and subtle circuit mesh */}
      <div 
        className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-[100px] pointer-events-none opacity-25 transition-colors duration-700"
        style={{ backgroundColor: activeNode.color }}
      />
      <div className="absolute inset-0 bg-blueprint-grid opacity-[0.04] pointer-events-none" />

      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="ml-2 font-mono text-[11px] sm:text-xs text-slate-400 font-medium">
            ulyana-core-pipeline.ts
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-[10px] sm:text-[11px] font-mono font-bold text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>LIVE SYSTEM</span>
          </span>
          <span className="text-[10px] text-slate-500 font-mono hidden sm:inline">
            React 19 • TS • n8n
          </span>
        </div>
      </div>

      {/* Pipeline Stages Stepper: Clickable Interactive Nodes */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-5">
        {ARCHITECTURE_NODES.map((node, idx) => {
          const Icon = node.icon;
          const isActive = node.id === activeNodeId;
          const label = language === 'ru' ? node.labelRu : node.labelEn;

          return (
            <button
              key={node.id}
              onClick={() => {
                setIsAutoCycling(false);
                setActiveNodeId(node.id);
              }}
              data-cursor="button"
              className={`flex flex-col items-start p-2.5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                idx === 4 ? 'col-span-2 sm:col-span-1' : ''
              } ${
                isActive 
                  ? 'bg-slate-800 border-blue-500/60 shadow-md shadow-blue-500/10' 
                  : 'bg-slate-900/60 border-slate-800 hover:bg-slate-800/50 hover:border-slate-700 text-slate-400'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-1">
                <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-blue-400' : 'text-slate-500'}`}>
                  0{idx + 1}
                </span>
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-400' : 'text-slate-500'}`} />
              </div>
              <span className={`text-xs font-bold truncate w-full ${isActive ? 'text-white' : 'text-slate-300'}`}>
                {label.split('. ')[1] || label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Stage Details & Live Code Inspector */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeNode.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="space-y-4"
        >
          {/* Node Summary Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/60">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeNode.color }} />
                <h4 className="text-sm sm:text-base font-extrabold text-white">
                  {language === 'ru' ? activeNode.labelRu : activeNode.labelEn}
                </h4>
              </div>
              <p className="text-xs text-slate-300 font-normal">
                {language === 'ru' ? activeNode.sublabelRu : activeNode.sublabelEn}
              </p>
            </div>

            <div className="self-start sm:self-auto px-3 py-1.5 rounded-xl bg-blue-950/60 border border-blue-500/30 text-right">
              <div className="text-[10px] text-blue-300 uppercase tracking-wider font-mono">
                {t('Метрика окупаемости', 'Performance Metric')}
              </div>
              <div className="text-xs sm:text-sm font-black text-emerald-400 font-mono">
                {language === 'ru' ? activeNode.metricRu : activeNode.metricEn}
              </div>
            </div>
          </div>

          {/* Code Sandbox View with Syntax Highlighting Tone */}
          <div className="relative rounded-2xl bg-black/70 border border-slate-800 p-4 font-mono text-[11px] sm:text-xs text-slate-200 overflow-x-auto leading-relaxed shadow-inner">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/70 text-[10px] text-slate-500">
              <span>TypeScript • Strict Architecture</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                <span>Verified Zero-Error</span>
              </span>
            </div>
            <pre className="text-slate-300">
              <code>{activeNode.codeSnippet}</code>
            </pre>
          </div>

          {/* Integrated Technology Tags */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider font-mono mr-1">
              Stack:
            </span>
            {activeNode.tech.map((tItem, i) => (
              <span 
                key={i}
                className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700/80 text-[11px] font-mono text-slate-300 hover:text-white transition-colors"
              >
                {tItem}
              </span>
            ))}
          </div>

        </motion.div>
      </AnimatePresence>
    </div>
  );
};
