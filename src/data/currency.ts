export type CurrencyCode = 'RUB' | 'BYN' | 'USD' | 'EUR';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  nameRu: string;
  nameEn: string;
  shortName: string;
  rateToUsd: number; // For dynamic conversion reference
}

export const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  BYN: {
    code: 'BYN',
    symbol: 'Br',
    nameRu: 'Белорусские рубли',
    nameEn: 'Belarusian Rubles',
    shortName: 'BYN (Br)',
    rateToUsd: 0.31 // 1 BYN ≈ 0.31 USD / 1 USD ≈ 3.25 BYN
  },
  RUB: {
    code: 'RUB',
    symbol: '₽',
    nameRu: 'Российские рубли',
    nameEn: 'Russian Rubles',
    shortName: 'RUB (₽)',
    rateToUsd: 0.011 // 1 USD ≈ 90 RUB
  },
  USD: {
    code: 'USD',
    symbol: '$',
    nameRu: 'Доллары США',
    nameEn: 'US Dollars',
    shortName: 'USD ($)',
    rateToUsd: 1.0
  },
  EUR: {
    code: 'EUR',
    symbol: '€',
    nameRu: 'Евро',
    nameEn: 'Euros',
    shortName: 'EUR (€)',
    rateToUsd: 1.08
  }
};

export interface PackagePricing {
  landing: Record<CurrencyCode, { amount: number; display: string }>;
  automation: Record<CurrencyCode, { amount: number; display: string }>;
  telegram: Record<CurrencyCode, { amount: number; display: string }>;
  ecosystem: Record<CurrencyCode, { amount: number; display: string }>;
}

export function convertUsdAmount(usdAmount: number, currency: CurrencyCode): number {
  if (currency === 'USD') return usdAmount;
  if (currency === 'EUR') {
    return Math.round(usdAmount / CURRENCIES.EUR.rateToUsd / 10) * 10;
  }
  if (currency === 'BYN') {
    return Math.round((usdAmount / CURRENCIES.BYN.rateToUsd) / 50) * 50;
  }
  if (currency === 'RUB') {
    return Math.round((usdAmount / 0.0105) / 1000) * 1000;
  }
  return usdAmount;
}

export function formatFixedPrice(usdAmount: number, currency: CurrencyCode, language: 'ru' | 'en' = 'ru'): string {
  const converted = convertUsdAmount(usdAmount, currency);
  const locale = language === 'en' ? 'en-US' : 'ru-RU';
  const numStr = converted.toLocaleString(locale);

  if (currency === 'USD') return `$${numStr}`;
  if (currency === 'EUR') return language === 'en' ? `€${numStr}` : `${numStr} €`;
  if (currency === 'BYN') return `${numStr} Br`;
  if (currency === 'RUB') return `${numStr} ₽`;
  return `${numStr} ${currency}`;
}

export function formatPriceRange(minUsd: number, maxUsd: number, currency: CurrencyCode, language: 'ru' | 'en' = 'ru'): string {
  const minConverted = convertUsdAmount(minUsd, currency);
  const maxConverted = convertUsdAmount(maxUsd, currency);
  const locale = language === 'en' ? 'en-US' : 'ru-RU';
  const minStr = minConverted.toLocaleString(locale);
  const maxStr = maxConverted.toLocaleString(locale);

  if (currency === 'USD') return `$${minStr}–$${maxStr}`;
  if (currency === 'EUR') return language === 'en' ? `€${minStr}–€${maxStr}` : `${minStr}–${maxStr} €`;
  if (currency === 'BYN') return `${minStr}–${maxStr} Br`;
  if (currency === 'RUB') return `${minStr}–${maxStr} ₽`;
  return `${minStr}–${maxStr} ${currency}`;
}

export function formatPackagePrice(usdAmount: number, currency: CurrencyCode, language: 'ru' | 'en' = 'ru'): string {
  const prefix = language === 'en' ? 'from ' : 'от ';
  const fixed = formatFixedPrice(usdAmount, currency, language);
  return `${prefix}${fixed}`;
}


export const PACKAGE_PRICING: PackagePricing = {
  landing: {
    BYN: { amount: 1650, display: formatPackagePrice(500, 'BYN') },
    RUB: { amount: 48000, display: formatPackagePrice(500, 'RUB') },
    USD: { amount: 500, display: formatPackagePrice(500, 'USD') },
    EUR: { amount: 460, display: formatPackagePrice(500, 'EUR') }
  },
  automation: {
    BYN: { amount: 2600, display: formatPackagePrice(800, 'BYN') },
    RUB: { amount: 76000, display: formatPackagePrice(800, 'RUB') },
    USD: { amount: 800, display: formatPackagePrice(800, 'USD') },
    EUR: { amount: 740, display: formatPackagePrice(800, 'EUR') }
  },
  telegram: {
    BYN: { amount: 3250, display: formatPackagePrice(1000, 'BYN') },
    RUB: { amount: 95000, display: formatPackagePrice(1000, 'RUB') },
    USD: { amount: 1000, display: formatPackagePrice(1000, 'USD') },
    EUR: { amount: 920, display: formatPackagePrice(1000, 'EUR') }
  },
  ecosystem: {
    BYN: { amount: 6500, display: formatPackagePrice(2000, 'BYN') },
    RUB: { amount: 190000, display: formatPackagePrice(2000, 'RUB') },
    USD: { amount: 2000, display: formatPackagePrice(2000, 'USD') },
    EUR: { amount: 1850, display: formatPackagePrice(2000, 'EUR') }
  }
};

export const BUDGET_OPTIONS: Record<CurrencyCode, string[]> = {
  BYN: [
    'От 1 650 Br (Базовый старт от $500)',
    '1 650 – 3 500 Br',
    '3 500 – 7 000 Br',
    'Индивидуальный бюджет (обсуждается)'
  ],
  RUB: [
    'От 48 000 ₽ (Базовый старт от $500)',
    '48 000 – 100 000 ₽',
    '100 000 – 200 000 ₽',
    'Индивидуальный бюджет (обсуждается)'
  ],
  USD: [
    'From $500 (Base package start)',
    '$500 – $1,200',
    '$1,200 – $2,500',
    'Custom budget (Discuss with Ulyana)'
  ],
  EUR: [
    'From 460 € (Base start from $500)',
    '460 – 1,100 €',
    '1,100 – 2,300 €',
    'Custom budget (Discuss with Ulyana)'
  ]
};

export function formatCurrencyValue(value: number, currency: CurrencyCode): string {
  const formatted = Math.round(value).toLocaleString();
  switch (currency) {
    case 'BYN':
      return `${formatted} Br`;
    case 'RUB':
      return `${formatted} ₽`;
    case 'USD':
      return `$${formatted}`;
    case 'EUR':
      return `€${formatted}`;
    default:
      return `${formatted} ${currency}`;
  }
}
