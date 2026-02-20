
import { ServiceData, HeroStyle, ProcessStyle } from '../types.ts';

export const ALL_SERVICES: ServiceData[] = [
  {
    id: 'swift',
    title: 'Direct Bank Transfer (SWIFT)',
    tagline: 'The Global Standard for High-Value Capital Routing',
    shortDescription: 'Leverage the SWIFT network for secure, standardized international financial transactions. Prominence Bank provides direct MT103 and MT202 messaging capabilities for institutional-grade capital movement.',
    benefits: [
      'Direct connectivity to 11,000+ banks',
      'Full end-to-end payment transparency',
      'Multi-currency settlement (G20+)',
      'Immutable audit trails'
    ],
    heroStyle: HeroStyle.DarkFinance,
    processStyle: ProcessStyle.Timeline,
    steps: [
      'Submission of MT103 payment instructions',
      'Automated AML and Sanctions screening',
      'Transmission via secure SWIFT gateway',
      'Correspondent bank verification and credit'
    ],
    useCases: [
      { title: 'Corporate Supplier Payments', description: 'Settling international manufacturing invoices.' },
      { title: 'Property Acquisitions', description: 'Cross-border real estate capital movement.' },
      { title: 'Interbank Funding', description: 'Managing liquidity between global subsidiaries.' },
      { title: 'M&A Settlement', description: 'High-value corporate acquisition funding.' }
    ],
    faqs: [
      { question: 'What is a SWIFT MT103?', answer: 'It is a standardized document used as a proof of payment for international wire transfers.', tags: ['swift', 'mt103', 'proof'] },
      { question: 'How long does settlement take?', answer: 'Typically 1-3 business days, depending on intermediary bank relationships.', tags: ['settlement', 'timing'] },
      { question: 'Are transfers tracked?', answer: 'Yes, we provide full SWIFT GPI tracking for every outbound transaction.', tags: ['tracking', 'gpi'] },
      { question: 'What are the fees?', answer: 'Fees are calculated based on volume and destination, detailed in our institutional schedule.', tags: ['fees', 'pricing'] },
      { question: 'Is there a limit?', answer: 'Institutional accounts have no hard ceiling, subject to liquidity and risk approval.', tags: ['limits', 'volume'] },
      { question: 'Can I send in any currency?', answer: 'We support 40+ major and emerging market currencies.', tags: ['forex', 'currency'] },
      { question: 'Is compliance mandatory?', answer: 'Yes, all transfers undergo real-time screening against OFAC and global lists.', tags: ['compliance', 'aml'] },
      { question: 'What happens if a bank is sanctioned?', answer: 'Transfers to restricted entities are automatically blocked by our secure gateway.', tags: ['security', 'sanctions'] }
    ],
    seo: {
      metaTitle: 'SWIFT Transfers | Institutional Banking | Prominence Bank',
      metaDescription: 'Direct SWIFT network access for global high-value payments. Secure, regulated, and transparent.',
      keywords: ['SWIFT', 'Wire Transfer', 'Institutional Banking', 'MT103'],
      slug: 'direct-bank-transfer-swift'
    },
    iconName: 'globe',
    heroImageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'cheque-payment',
    title: 'Cheque Payment',
    tagline: 'Legacy Reliability Meeting Modern Digital Clearing',
    shortDescription: 'Prominence Bank facilitates high-value cheque clearing and issuance, bridging the gap between traditional paper-based instruments and modern digital settlement systems.',
    benefits: [
      'Certified high-value issuance',
      'Digital clearing house integration',
      'Advanced fraud detection protocols',
      'Global courier collection services'
    ],
    heroStyle: HeroStyle.Split,
    processStyle: ProcessStyle.StepCards,
    steps: [
      'Physical or digital instrument verification',
      'Clearing house routing and validation',
      'Fund earmarking and hold period assessment',
      'Final ledger credit upon confirmation'
    ],
    useCases: [
      { title: 'Dividend Distribution', description: 'Mailing certified cheques to global shareholders.' },
      { title: 'Escrow Release', description: 'Using physical instruments for legal settlement finality.' },
      { title: 'Vendor Payments', description: 'Traditional payment methods for industrial suppliers.' },
      { title: 'Legacy Settlements', description: 'Resolving older financial obligations requiring physical trails.' }
    ],
    faqs: [
      { question: 'What is the clearing time for cheques?', answer: 'Typically 3-5 business days for domestic and 10+ for international instruments.', tags: ['clearing', 'cheque'] },
      { question: 'Can I deposit digital cheque scans?', answer: 'Yes, our mobile portal supports high-resolution remote deposit capture.', tags: ['digital', 'deposit'] },
      { question: 'Do you offer certified bank drafts?', answer: 'Yes, we issue bank-guaranteed cheques for institutional use.', tags: ['drafts', 'guarantee'] },
      { question: 'What are the fraud protection measures?', answer: 'We use multi-spectrum ink verification and Positive Pay systems.', tags: ['security', 'fraud'] },
      { question: 'Is there a limit on cheque value?', answer: 'Limits are based on account collateral and verified liquidity levels.', tags: ['limits', 'value'] },
      { question: 'Can I stop a payment?', answer: 'Yes, stop-payment requests can be initiated via the portal for un-cleared items.', tags: ['service', 'stop-payment'] },
      { question: 'Do you support international cheques?', answer: 'Yes, through our global network of correspondent clearing banks.', tags: ['global', 'instruments'] },
      { question: 'Are there storage fees?', answer: 'Physical instrument storage is included for premium account holders.', tags: ['fees', 'storage'] }
    ],
    seo: {
      metaTitle: 'Institutional Cheque Clearing | Prominence Bank',
      metaDescription: 'Secure and reliable cheque clearing services for private banking and corporate clients.',
      keywords: ['Cheque Payment', 'Bank Draft', 'Clearing House', 'Financial Instruments'],
      slug: 'cheque-payment'
    },
    iconName: 'landmark',
    heroImageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'ip-2-ip',
    title: 'IP 2 IP Interbank Transfer',
    tagline: 'Server-to-Server Protocol for Massive Asset Movement',
    shortDescription: 'IP 2 IP is a sophisticated inter-institutional protocol allowing direct server handshakes to move ledger entries without the latency of traditional clearing networks.',
    benefits: [
      'Direct server-side cryptographic handshake',
      'Near-instant ledger synchronization',
      'Extremely high transaction bandwidth',
      'Private tunnel encryption'
    ],
    heroStyle: HeroStyle.SideText,
    processStyle: ProcessStyle.VerticalNumbered,
    steps: [
      'Secure IP handshake and mutual auth',
      'Parallel ledger verification on both servers',
      'Cryptographic asset lock and transfer',
      'Synchronized ledger update and confirmation'
    ],
    useCases: [
      { title: 'Billion-Dollar Settlements', description: 'Moving massive capital between central ledgers.' },
      { title: 'Institutional Liquidity Pooling', description: 'Aggregating funds for major investment plays.' },
      { title: 'Digital Asset Backing', description: 'Moving fiat reserves behind tokenized assets.' },
      { title: 'Bank-to-Bank Swaps', description: 'Direct capital exchange between financial institutions.' }
    ],
    faqs: [
      { question: 'Is IP 2 IP a blockchain service?', answer: 'No, it is a direct inter-server ledger protocol using secure IP tunnels.', tags: ['technical', 'protocol'] },
      { question: 'What is the minimum transfer amount?', answer: 'IP 2 IP is typically reserved for transfers exceeding $10M USD.', tags: ['minimum', 'scale'] },
      { question: 'How secure is the handshake?', answer: 'It uses 4096-bit RSA encryption and mutual TLS certificate pinning.', tags: ['security', 'encryption'] },
      { question: 'Can any bank receive IP 2 IP?', answer: 'No, the receiving bank must have compatible server architecture.', tags: ['compatibility', 'network'] },
      { question: 'How fast is the transfer?', answer: 'The handshake and ledger update typically take less than 120 seconds.', tags: ['speed', 'real-time'] },
      { question: 'Are there public records?', answer: 'No, these are private interbank communications not visible on public networks.', tags: ['privacy', 'discretion'] },
      { question: 'What are the technical requirements?', answer: 'Dedicated static IPs and pre-shared cryptographic keys are mandatory.', tags: ['it', 'requirements'] },
      { question: 'Is there a risk of double-spending?', answer: 'No, the parallel ledger locking mechanism prevents any synchronization errors.', tags: ['risk', 'integrity'] }
    ],
    seo: {
      metaTitle: 'IP 2 IP Interbank Transfer | Prominence Bank',
      metaDescription: 'Direct server-to-server banking for high-velocity institutional capital movement.',
      keywords: ['IP2IP', 'Server to Server', 'Interbank Transfer', 'Ledger Move'],
      slug: 'ip-2-ip-interbank-transfer'
    },
    iconName: 'cpu',
    heroImageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'ledger-2-ledger',
    title: 'Ledger 2 Ledger Transfer',
    tagline: 'Instant Internal Liquidity and Ecosystem Payments',
    shortDescription: 'Move capital instantly across the Prominence Bank ecosystem. Ledger 2 Ledger transfers happen in real-time on our core systems with zero external network friction.',
    benefits: [
      'Instant settlement finality',
      'Zero external processing fees',
      '24/7/365 availability',
      'Maximized transaction privacy'
    ],
    heroStyle: HeroStyle.MinimalWhite,
    processStyle: ProcessStyle.HorizontalBlocks,
    steps: [
      'Internal beneficiary selection',
      'Real-time core ledger verification',
      'Immediate debit/credit execution',
      'Instant fund availability notification'
    ],
    useCases: [
      { title: 'Corporate Treasury Sweeping', description: 'Consolidating funds from subsidiary accounts.' },
      { title: 'B2B Partner Payments', description: 'Paying other Prominence Bank clients instantly.' },
      { title: 'Escrow Funding', description: 'Internal movement to specialized holding accounts.' },
      { title: 'Payroll Distribution', description: 'Moving bulk capital to internal disbursement sub-accounts.' }
    ],
    faqs: [
      { question: 'Are internal transfers free?', answer: 'Yes, Ledger 2 Ledger transfers carry no transaction fees.', tags: ['fees', 'internal'] },
      { question: 'Can I reverse a ledger transfer?', answer: 'Only with the express consent of the recipient or in cases of proven fraud.', tags: ['security', 'reversal'] },
      { question: 'What is the limit?', answer: 'Internal limits are significantly higher than external, often reaching $100M+.', tags: ['limits', 'scale'] },
      { question: 'Are they instant?', answer: 'Yes, settlement is reflected in the recipient account in milliseconds.', tags: ['speed', 'instant'] },
      { question: 'Do these require SWIFT codes?', answer: 'No, only the Prominence Bank account number or IBAN is required.', tags: ['data', 'recipient'] },
      { question: 'Can these be scheduled?', answer: 'Yes, standing instructions are fully supported for internal transfers.', tags: ['automation', 'recurring'] },
      { question: 'Is there a weekend delay?', answer: 'No, Ledger 2 Ledger operates 24/7 including holidays.', tags: ['availability', 'operational'] },
      { question: 'Are these transactions private?', answer: 'Yes, they never exit the bank\'s secure internal environment.', tags: ['privacy', 'security'] }
    ],
    seo: {
      metaTitle: 'Ledger 2 Ledger Transfer | Prominence Bank',
      metaDescription: 'Instant internal settlement between Prominence Bank accounts. Zero fees, maximum speed.',
      keywords: ['Internal Transfer', 'Ledger', 'Instant Settlement', 'No Fee Banking'],
      slug: 'ledger-2-ledger-transfer'
    },
    iconName: 'layers',
    heroImageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'paypal',
    title: 'PayPal Institutional Integration',
    tagline: 'Bridging E-Commerce Liquidity with Private Banking',
    shortDescription: 'Seamlessly integrate your PayPal merchant flows with your Prominence Bank institutional account for high-velocity clearing and treasury management.',
    benefits: [
      'Automated sweep protocols',
      'Optimized merchant clearing',
      'High-limit withdrawal support',
      'Integrated dispute reporting'
    ],
    heroStyle: HeroStyle.GradientVariant,
    processStyle: ProcessStyle.Timeline,
    steps: [
      'API-based account linkage',
      'Verification of merchant history',
      'Automated or manual sweep configuration',
      'Direct clearing to bank ledger'
    ],
    useCases: [
      { title: 'E-Commerce Scaling', description: 'Consolidating global retail revenue.' },
      { title: 'SaaS Subscription Clearing', description: 'Clearing high-volume digital service payments.' },
      { title: 'Digital Marketplace Payouts', description: 'Distributing funds from online platforms.' },
      { title: 'Global Ad Spend', description: 'Funding marketing operations via linked balances.' }
    ],
    faqs: [
      { question: 'Can I withdraw large amounts from PayPal?', answer: 'Yes, we provide high-limit clearance for verified institutional merchants.', tags: ['withdrawals', 'limits'] },
      { question: 'How long does clearing take?', answer: 'Typically 1-2 business days for linked institutional accounts.', tags: ['speed', 'clearing'] },
      { question: 'Are there hidden fees?', answer: 'Prominence Bank charges no additional fee for PayPal sweeps beyond standard intake.', tags: ['fees', 'pricing'] },
      { question: 'Do you support multi-currency?', answer: 'Yes, we clear in the original currency or provide optimized FX.', tags: ['currency', 'multi-ccy'] },
      { question: 'Is my data secure?', answer: 'We use OAuth 2.0 and hardware-level encryption for all API bridges.', tags: ['security', 'api'] },
      { question: 'Can I automate the sweeps?', answer: 'Yes, set daily, weekly, or balance-triggered automation.', tags: ['automation', 'efficiency'] },
      { question: 'What if a payment is held by PayPal?', answer: 'Our dedicated team provides documentation to resolve third-party holds.', tags: ['dispute', 'support'] },
      { question: 'Is a business account required?', answer: 'Yes, this service is exclusively for PayPal Business/Merchant entities.', tags: ['eligibility', 'business'] }
    ],
    seo: {
      metaTitle: 'PayPal Integration | Prominence Bank',
      metaDescription: 'Advanced institutional PayPal clearing and sweep services for corporate account holders.',
      keywords: ['PayPal Banking', 'Merchant Clearing', 'E-commerce Banking'],
      slug: 'paypal-integration'
    },
    iconName: 'send',
    heroImageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'digital-currency',
    title: 'Digital Currency Settlement',
    tagline: 'Institutional Gateways for the Tokenized Economy',
    shortDescription: 'Prominence Bank provides regulated on/off-ramps and multi-signature custody for stablecoins and digital assets, ensuring secure integration with the traditional financial system.',
    benefits: [
      'Regulated fiat/crypto on-ramps',
      'Multi-sig institutional custody',
      'On-chain transaction monitoring (KYT)',
      'Stablecoin liquidity provision'
    ],
    heroStyle: HeroStyle.DarkFinance,
    processStyle: ProcessStyle.StepCards,
    steps: [
      'KYT (Know Your Transaction) validation',
      'Asset deposit to segregated vault',
      'Liquidity matching or ledger credit',
      'Final fiat/digital balance update'
    ],
    useCases: [
      { title: 'Stablecoin Treasury', description: 'Holding corporate reserves in USDC/USDT.' },
      { title: 'Investment Diversification', description: 'Exposure to institutional digital assets.' },
      { title: 'Cross-Border Rails', description: 'Using blockchain for faster international settlement.' },
      { title: 'Tokenized Asset Funding', description: 'Buying real-world assets with digital capital.' }
    ],
    faqs: [
      { question: 'Which assets are supported?', answer: 'BTC, ETH, USDC, and USDT are our primary supported assets.', tags: ['assets', 'support'] },
      { question: 'Is it regulated?', answer: 'Yes, all digital asset services follow strict VASP guidelines.', tags: ['regulation', 'compliance'] },
      { question: 'How is security handled?', answer: 'We utilize cold storage and hardware security modules (HSM).', tags: ['security', 'custody'] },
      { question: 'Can I pay vendors in crypto?', answer: 'Yes, we convert and settle in the recipient\'s preferred currency.', tags: ['payments', 'utility'] },
      { question: 'Are there KYT checks?', answer: 'Yes, every on-chain transaction is analyzed for risk and source of funds.', tags: ['kyt', 'monitoring'] },
      { question: 'What is the minimum?', answer: 'Digital currency settlement starts at $25,000 equivalent.', tags: ['limits', 'minimum'] },
      { question: 'Are the funds insured?', answer: 'Custodial assets are covered by our institutional crime insurance.', tags: ['insurance', 'safety'] },
      { question: 'How fast is the ramp?', answer: 'Conversion to fiat usually settles within 30-60 minutes post-confirmation.', tags: ['speed', 'ramps'] }
    ],
    seo: {
      metaTitle: 'Digital Currency Settlement | Prominence Bank',
      metaDescription: 'Secure institutional crypto banking and stablecoin settlement services.',
      keywords: ['Crypto Bank', 'Digital Assets', 'Stablecoin', 'Bitcoin'],
      slug: 'digital-currency-settlement'
    },
    iconName: 'wallet',
    heroImageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'credit-card-direct',
    title: 'Credit Card Direct Acquiring',
    tagline: 'High-Volume Merchant Processing and Clearing',
    shortDescription: 'Direct merchant acquiring for high-ticket and institutional service providers. We provide the rails for secure, global card acceptance with prioritized clearing.',
    benefits: [
      'Direct Tier-1 acquiring access',
      'Reduced rolling reserve requirements',
      'Chargeback management suite',
      'Multi-currency processing'
    ],
    heroStyle: HeroStyle.CenteredOverlay,
    processStyle: ProcessStyle.HorizontalBlocks,
    steps: [
      'Merchant underwriting and risk review',
      'Gateway API integration',
      'Transaction capture and auth',
      'Batch clearing to merchant account'
    ],
    useCases: [
      { title: 'High-Ticket Services', description: 'Clearing payments for luxury goods and services.' },
      { title: 'Subscription Platforms', description: 'Managing recurring billing at scale.' },
      { title: 'Professional Fees', description: 'Accepting card payments for legal/consulting.' },
      { title: 'B2B Procurement', description: 'Accepting corporate cards for supply orders.' }
    ],
    faqs: [
      { question: 'What are the processing rates?', answer: 'Rates are customized based on industry risk and annual volume.', tags: ['pricing', 'merchant'] },
      { question: 'How often are settlements?', answer: 'Daily or weekly, depending on the merchant agreement.', tags: ['settlement', 'frequency'] },
      { question: 'Do you support 3DS?', answer: 'Yes, 3D Secure 2.0 is mandatory for all transactions.', tags: ['security', '3ds'] },
      { question: 'Are rolling reserves required?', answer: 'Yes, reserves are set based on individual risk assessments.', tags: ['risk', 'reserves'] },
      { question: 'Can I accept global cards?', answer: 'Yes, all major networks including Visa, MC, and Amex are supported.', tags: ['networks', 'global'] },
      { question: 'What is the dispute process?', answer: 'We provide a dedicated portal for managing and fighting chargebacks.', tags: ['disputes', 'support'] },
      { question: 'Is PCI compliance required?', answer: 'Yes, all merchants must maintain and prove PCI DSS compliance.', tags: ['pci', 'compliance'] },
      { question: 'Can I process in multiple currencies?', answer: 'Yes, we support dynamic currency conversion at the checkout.', tags: ['forex', 'processing'] }
    ],
    seo: {
      metaTitle: 'Credit Card Direct Acquiring | Prominence Bank',
      metaDescription: 'High-volume merchant credit card processing for institutional clients.',
      keywords: ['Merchant Services', 'Credit Card Processing', 'Acquiring'],
      slug: 'credit-card-direct'
    },
    iconName: 'creditCard',
    heroImageUrl: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'visa-net',
    title: 'VISA Net Global Processing',
    tagline: 'Unparalleled Scale via the World’s Leading Network',
    shortDescription: 'Harness the power of VISA Net for global card issuance, processing, and clearing. Prominence Bank offers direct endpoints for specialized VISA infrastructure.',
    benefits: [
      'Real-time global authorization',
      'Advanced tokenization security',
      'Zero-liability protection protocols',
      'Direct VNET connectivity'
    ],
    heroStyle: HeroStyle.Split,
    processStyle: ProcessStyle.VerticalNumbered,
    steps: [
      'Endpoint configuration and testing',
      'Network-level token generation',
      'Real-time transaction routing',
      'Global net settlement execution'
    ],
    useCases: [
      { title: 'Corporate Card Issuance', description: 'Deploying high-limit cards to global staff.' },
      { title: 'White-Label Wallets', description: 'Powering custom fintech solutions.' },
      { title: 'Cross-Border Retail', description: 'Scaling physical card acceptance worldwide.' },
      { title: 'Institutional Travel', description: 'Managing high-limit corporate travel expense rails.' }
    ],
    faqs: [
      { question: 'What is VISA Net?', answer: 'It is the global authorization and clearing network owned by Visa.', tags: ['network', 'visa'] },
      { question: 'Can I issue custom cards?', answer: 'Yes, we provide full BIN sponsorship and issuance services.', tags: ['issuance', 'bin'] },
      { question: 'Is tokenization available?', answer: 'Yes, we support Apple Pay, Google Pay, and custom tokens.', tags: ['security', 'tokenization'] },
      { question: 'What are the network fees?', answer: 'Standard VISA interchange plus our institutional processing fee.', tags: ['fees', 'interchange'] },
      { question: 'Are limits adjustable?', answer: 'Yes, card limits can be managed in real-time via the portal.', tags: ['limits', 'control'] },
      { question: 'Is fraud monitoring active?', answer: 'Yes, we use Visa Advanced Authorization for AI-driven fraud detection.', tags: ['security', 'fraud'] },
      { question: 'Do you support Visa Direct?', answer: 'Yes, for near-instant push-to-card payments globally.', tags: ['visa-direct', 'speed'] },
      { question: 'What is the uptime?', answer: 'VISA Net maintains 99.999% global operational uptime.', tags: ['reliability', 'uptime'] }
    ],
    seo: {
      metaTitle: 'VISA Net Global Processing | Prominence Bank',
      metaDescription: 'Direct VISA network integration for global issuance and processing.',
      keywords: ['VISA Net', 'Card Issuance', 'Global Processing'],
      slug: 'visa-net'
    },
    iconName: 'grid',
    heroImageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'card-force-payment',
    title: 'Card Force Payment',
    tagline: 'High-Velocity Authorization for High-Volume Rails',
    shortDescription: 'Card Force is a specialized protocol for merchants requiring immediate authorization and settlement of massive transaction batches with near-zero failure rates.',
    benefits: [
      'Aggressive authorization protocols',
      'High-bandwidth clearing pipes',
      'Optimized approval algorithms',
      'Direct rail prioritization'
    ],
    heroStyle: HeroStyle.SideText,
    processStyle: ProcessStyle.StepCards,
    steps: [
      'Batch processing initiation',
      'Force-auth handshake execution',
      'Real-time risk scoring bypass',
      'Direct priority settlement'
    ],
    useCases: [
      { title: 'High-Volume Retail Events', description: 'Managing peak flash-sale transaction loads.' },
      { title: 'Subscription Migration', description: 'Batch processing millions of recurring payments.' },
      { title: 'Debt Recovery Clearing', description: 'High-velocity attempt-and-clear protocols.' },
      { title: 'Digital Ad Buying', description: 'Real-time high-ticket ad-spend authorizations.' }
    ],
    faqs: [
      { question: 'What makes Card Force different?', answer: 'It uses prioritized routing and more aggressive authorization attempts.', tags: ['protocol', 'differentiation'] },
      { question: 'Is it riskier than standard processing?', answer: 'No, it simply optimizes for speed and volume success.', tags: ['risk', 'security'] },
      { question: 'What is the approval rate?', answer: 'Typically 10-15% higher than standard gateways for valid cards.', tags: ['performance', 'approval'] },
      { question: 'Do you support international cards?', answer: 'Yes, Card Force is a global cross-network protocol.', tags: ['global', 'compatibility'] },
      { question: 'What are the technical requirements?', answer: 'Integration with our specialized Card Force API endpoint.', tags: ['it', 'integration'] },
      { question: 'How fast is settlement?', answer: 'T+1 or T+2 depending on the underlying network rules.', tags: ['speed', 'settlement'] },
      { question: 'Can I use this for low-volume?', answer: 'It is designed for volume; low-volume accounts may use standard rails.', tags: ['eligibility', 'volume'] },
      { question: 'Is there a setup fee?', answer: 'Yes, due to the specialized infrastructure required for this service.', tags: ['fees', 'setup'] }
    ],
    seo: {
      metaTitle: 'Card Force Payment | Prominence Bank',
      metaDescription: 'High-velocity transaction processing for high-volume institutional merchants.',
      keywords: ['Card Force', 'High Volume Processing', 'Transaction Authorization'],
      slug: 'card-force-payment'
    },
    iconName: 'zap',
    heroImageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'fx4-deutsche-bank',
    title: 'FX4 (Deutsche Bank) Integration',
    tagline: 'Institutional Foreign Exchange and Liquidity Access',
    shortDescription: 'Direct access to the FX4 engine for deep liquidity, advanced hedging, and institutional-grade currency exchange protocols powered by our strategic partnerships.',
    benefits: [
      'Direct Tier-1 liquidity access',
      'Interbank mid-market pricing',
      'Advanced hedging instruments',
      'Automated FX settlement'
    ],
    heroStyle: HeroStyle.DarkFinance,
    processStyle: ProcessStyle.HorizontalBlocks,
    steps: [
      'Liquidity pool connection',
      'Real-time quote generation',
      'Trade execution and lock',
      'Automatic ledger settlement'
    ],
    useCases: [
      { title: 'Currency Risk Hedging', description: 'Protecting corporate profits from FX volatility.' },
      { title: 'Global Portfolio Balancing', description: 'Managing multi-currency investment assets.' },
      { title: 'Import/Export Settlement', description: 'Paying international invoices at interbank rates.' },
      { title: 'Arbitrage Operations', description: 'Executing high-speed currency exchange plays.' }
    ],
    faqs: [
      { question: 'What is FX4?', answer: 'It is a premium institutional FX engine providing deep liquidity.', tags: ['fx', 'liquidity'] },
      { question: 'Are the rates mid-market?', answer: 'Yes, we provide direct access to interbank spreads.', tags: ['rates', 'pricing'] },
      { question: 'What currencies are available?', answer: 'All G10 currencies and major emerging markets (30+ pairs).', tags: ['currencies', 'forex'] },
      { question: 'Is there a minimum trade?', answer: 'FX4 typically requires a $50,000 minimum execution.', tags: ['minimum', 'scale'] },
      { question: 'Can I automate trades?', answer: 'Yes, via our algorithmic trading and limit-order modules.', tags: ['automation', 'trading'] },
      { question: 'Is this regulated?', answer: 'Yes, fully compliant with global FX market standards and MiFID II.', tags: ['regulation', 'compliance'] },
      { question: 'What is the settlement speed?', answer: 'Spot trades settle T+0 or T+1 depending on the pair.', tags: ['speed', 'spot'] },
      { question: 'Are forwards supported?', answer: 'Yes, we offer flexible forward contracts up to 24 months.', tags: ['derivatives', 'hedging'] }
    ],
    seo: {
      metaTitle: 'FX4 Institutional FX | Prominence Bank',
      metaDescription: 'Access Tier-1 FX liquidity and interbank rates for your corporate treasury.',
      keywords: ['FX4', 'Forex', 'Institutional Liquidity', 'Currency Exchange'],
      slug: 'fx4-deutsche-bank'
    },
    iconName: 'refresh',
    heroImageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'stripe',
    title: 'Stripe Global Clearing',
    tagline: 'Modern Digital Infrastructure for the Global Elite',
    shortDescription: 'Seamlessly connect your high-volume Stripe merchant infrastructure to a regulated institutional bank for faster clearing and optimized liquidity.',
    benefits: [
      'Priority clearing windows',
      'Enhanced merchant verification',
      'Automated treasury sweeps',
      'Dispute resolution support'
    ],
    heroStyle: HeroStyle.MinimalWhite,
    processStyle: ProcessStyle.Timeline,
    steps: [
      'Dashboard linkage and auth',
      'Settlement window configuration',
      'Automated payout execution',
      'Bank-side receipt and credit'
    ],
    useCases: [
      { title: 'Global SaaS Clearing', description: 'Managing recurring revenue for software platforms.' },
      { title: 'Marketplace Operations', description: 'Clearing and distributing platform payouts.' },
      { title: 'Digital Product Sales', description: 'Scaling online retail at an institutional level.' },
      { title: 'Non-Profit Fundraising', description: 'Managing global charitable donation flows.' }
    ],
    faqs: [
      { question: 'Can I clear Stripe to Prominence Bank?', answer: 'Yes, we are a supported institutional destination for global payouts.', tags: ['payouts', 'stripe'] },
      { question: 'How fast are the payouts?', answer: 'We support T+1 and T+2 clearing for established merchants.', tags: ['speed', 'clearing'] },
      { question: 'Are high-risk industries supported?', answer: 'We evaluate all merchants on a risk-adjusted basis.', tags: ['risk', 'industries'] },
      { question: 'Do you charge a sweep fee?', answer: 'No, we only charge for standard incoming credit.', tags: ['fees', 'pricing'] },
      { question: 'Can I manage disputes through the bank?', answer: 'No, disputes are managed via Stripe, but we provide supporting documentation.', tags: ['support', 'disputes'] },
      { question: 'Is multi-currency supported?', answer: 'Yes, we can receive in any currency Stripe can pay out.', tags: ['currency', 'multi-ccy'] },
      { question: 'Do you offer working capital?', answer: 'Yes, based on your Stripe processing history and bank balance.', tags: ['lending', 'capital'] },
      { question: 'Is setup difficult?', answer: 'No, it takes less than 5 minutes to link through the bank portal.', tags: ['setup', 'it'] }
    ],
    seo: {
      metaTitle: 'Stripe Global Clearing | Prominence Bank',
      metaDescription: 'Institutional clearing and treasury management for Stripe merchants.',
      keywords: ['Stripe Banking', 'Clearing', 'Merchant Payments'],
      slug: 'stripe-clearing'
    },
    iconName: 'creditCard',
    heroImageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'gpi-swift',
    title: 'GPI (SWIFT Global Payment Innovation)',
    tagline: 'The Pinnacle of Payment Transparency and Speed',
    shortDescription: 'SWIFT GPI is the new standard in cross-border payments, offering near-instant settlement and complete transparency on the status and fees of every transfer.',
    benefits: [
      'Near-instant cross-border settlement',
      'Real-time end-to-end tracking',
      'Full visibility of intermediary fees',
      'UETR (Unique End-to-end Transaction Reference)'
    ],
    heroStyle: HeroStyle.GradientVariant,
    processStyle: ProcessStyle.VerticalNumbered,
    steps: [
      'GPI-compliant instruction issuance',
      'UETR generation and transmission',
      'Real-time tracker updates',
      'Confirmation of credit notification'
    ],
    useCases: [
      { title: 'Time-Critical Settlements', description: 'Payments where every hour matters for finality.' },
      { title: 'Audit-Heavy Operations', description: 'Transactions requiring perfect fee transparency.' },
      { title: 'Supply Chain Optimization', description: 'Releasing goods immediately upon proven payment credit.' },
      { title: 'High-Value Treasury', description: 'Moving critical capital with absolute visibility.' }
    ],
    faqs: [
      { question: 'What is SWIFT GPI?', answer: 'It is a faster, more transparent version of the traditional SWIFT network.', tags: ['gpi', 'swift'] },
      { question: 'How fast is it?', answer: 'Most payments settle within minutes; nearly all settle within 24 hours.', tags: ['speed', 'settlement'] },
      { question: 'Can I see the status?', answer: 'Yes, a real-time tracker is available in your client dashboard.', tags: ['tracking', 'transparency'] },
      { question: 'What is a UETR?', answer: 'A Unique End-to-end Transaction Reference that identifies your payment globally.', tags: ['uetr', 'id'] },
      { question: 'Are there extra fees?', answer: 'GPI is a standard feature for our premium institutional accounts.', tags: ['fees', 'premium'] },
      { question: 'Is it available to every bank?', answer: 'No, only banks that have adopted the GPI standard can provide this service.', tags: ['compatibility', 'network'] },
      { question: 'Are fees deducted in transit?', answer: 'GPI shows you exactly what was deducted and by whom.', tags: ['transparency', 'fees'] },
      { question: 'Is it more secure?', answer: 'It uses the same secure SWIFT rails but with enhanced tracking data.', tags: ['security', 'safety'] }
    ],
    seo: {
      metaTitle: 'SWIFT GPI Payments | Prominence Bank',
      metaDescription: 'The fastest and most transparent international payments available.',
      keywords: ['SWIFT GPI', 'Fast Payments', 'Transparent Banking'],
      slug: 'gpi-swift-global-payment-innovation'
    },
    iconName: 'refresh',
    heroImageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'rtgs',
    title: 'RTGS (Real-Time Gross Settlement)',
    tagline: 'Immediate Settlement Finality for High-Value Capital',
    shortDescription: 'RTGS ensures that each transaction is settled on an individual basis without netting, providing immediate finality and security for high-value interbank transfers.',
    benefits: [
      'Immediate settlement finality',
      'No batch processing delays',
      'Irrevocable transaction status',
      'Direct central bank ledger updates'
    ],
    heroStyle: HeroStyle.CenteredOverlay,
    processStyle: ProcessStyle.StepCards,
    steps: [
      'Real-time liquidity verification',
      'Gross settlement instruction entry',
      'Immediate central ledger debit/credit',
      'Instant proof of settlement generation'
    ],
    useCases: [
      { title: 'Central Bank Operations', description: 'Transfers requiring sovereign-level finality.' },
      { title: 'Interbank Lending', description: 'Settling overnight or term lending between banks.' },
      { title: 'Urgent Capital Calls', description: 'Meeting time-critical margin or investment requirements.' },
      { title: 'High-Value Equity Settlement', description: 'Clearing major market positions with finality.' }
    ],
    faqs: [
      { question: 'What does "Gross" mean?', answer: 'Transactions are settled individually, not bundled or netted with others.', tags: ['technical', 'settlement'] },
      { question: 'Is RTGS faster than SWIFT?', answer: 'Yes, it provides immediate settlement within the relevant network.', tags: ['speed', 'comparison'] },
      { question: 'Can an RTGS payment be reversed?', answer: 'No, once settled, RTGS transactions are final and irrevocable.', tags: ['security', 'finality'] },
      { question: 'Is there a minimum amount?', answer: 'RTGS is typically used for transactions exceeding $50,000.', tags: ['minimum', 'scale'] },
      { question: 'Is it available 24/7?', answer: 'Availability depends on the specific country\'s central bank operating hours.', tags: ['availability', 'hours'] },
      { question: 'What are the fees?', answer: 'RTGS carries a higher priority fee than standard clearing methods.', tags: ['fees', 'pricing'] },
      { question: 'Who can use this?', answer: 'This service is exclusive to our institutional and private wealth clients.', tags: ['eligibility', 'wealth'] },
      { question: 'Is it safe for large sums?', answer: 'It is the most secure method for moving large capital due to immediate finality.', tags: ['safety', 'scale'] }
    ],
    seo: {
      metaTitle: 'RTGS Settlement | Prominence Bank',
      metaDescription: 'Immediate and irrevocable settlement for high-value transactions.',
      keywords: ['RTGS', 'Real-Time Settlement', 'Interbank', 'Finality'],
      slug: 'rtgs-real-time-gross-settlement'
    },
    iconName: 'zap',
    heroImageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200'
  }
];
