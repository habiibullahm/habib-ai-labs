import bidakaraPreview from '../assets/bidakara.png';
import agresPreview from '../assets/agres.png';

const headline = {
  lead: 'Practical AI',
  prefix: 'for real',
  accent: 'businesses.',
};
const contact = {
  whatsapp: '', // TODO: Add an international WhatsApp number, digits only.
  email: 'mr.habiibullahm@gmail.com',
  linkedin: 'https://www.linkedin.com/in/muhammad-habibullah/',
  github: 'https://github.com/habiibullahm',
};

export const site = {
  tagline: `${headline.lead} ${headline.prefix} ${headline.accent}`,
  founder: { name: 'Muhammad Habiibullah', role: 'AI & Full-Stack Engineer' },
  navigation: [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],
  seo: {
    title: 'Habib AI Labs — Practical AI for Real Businesses',
    description:
      'Habib AI Labs builds practical AI assistants, RAG systems, automation, and custom AI integrations for sales, customer support, and business knowledge.',
    url: 'https://ai.habiibullahm.my.id/',
    image: '/og-image.png',
  },
  hero: {
    headline,
    introduction: 'Independent AI product studio',
    description:
      'We build practical AI assistants and custom AI systems for sales, customer support, product discovery, and business knowledge.',
    capabilities: 'AI Assistants · RAG · Automation · Custom AI Integration',
  },
  labels: {
    discuss: 'Discuss Your Project',
    work: 'See Live Work',
    demo: 'Try Live Demo',
  },
  problems: [
    {
      title: 'Repetitive customer questions',
      description:
        'Your team spends time answering the same questions, again and again.',
      outcome: 'AI Customer Support',
    },
    {
      title: 'Complex product catalogs',
      description:
        'Customers need help understanding which product or service fits.',
      outcome: 'AI Product Recommendation',
    },
    {
      title: 'Slow lead qualification',
      description:
        'Collect customer needs, budget, and intent before the first sales conversation.',
      outcome: 'AI Sales Assistant',
    },
    {
      title: 'Scattered business knowledge',
      description:
        'Important answers are buried in websites, PDFs, SOPs, and FAQs.',
      outcome: 'AI Knowledge Assistant',
    },
  ],
  brand: 'Habib AI Labs',
  portfolio: 'https://habiibullahm.my.id/',
  contact,
  services: [
    {
      number: '01',
      title: 'AI Sales Assistant',
      description:
        'Help customers find the right product or service through natural conversation.',
      capabilities: [
        'Understand needs & budget',
        'Recommend and compare',
        'Capture and qualify leads',
      ],
      suitable: 'Retail · Distributors · B2B · Ecommerce',
      icon: 'sales',
    },
    {
      number: '02',
      title: 'AI Customer Support',
      description:
        'Answer repetitive customer questions using your approved business information.',
      capabilities: [
        'Grounded answers',
        'Source-aware responses',
        'Human escalation',
      ],
      suitable: 'Services · SaaS · Education · Support',
      icon: 'support',
    },
    {
      number: '03',
      title: 'AI Knowledge Assistant',
      description:
        'Turn business documents into a searchable, useful knowledge system.',
      capabilities: [
        'SOP and policy lookup',
        'Document search',
        'Answers with citations',
      ],
      suitable: 'Operations · HR · Internal teams',
      icon: 'knowledge',
    },
    {
      number: '04',
      title: 'Custom AI Integration',
      description:
        'Add AI capabilities to the products and workflows your team already uses.',
      capabilities: [
        'Websites and applications',
        'Databases and REST APIs',
        'CRM and internal tools',
      ],
      suitable: 'Existing products · Custom workflows',
      icon: 'integration',
    },
  ],
  projects: [
    {
      number: '01',
      name: 'Bidakara AI Assistant',
      url: 'https://bidakara-ai-assistant.vercel.app/',
      description:
        'An AI information assistant built around official business information, with grounded responses and safe fallback behavior.',
      note: 'Public-information prototype. Confirm medical and service information through official channels.',
      tags: ['RAG', 'Grounding', 'Guardrails', 'AI Assistant'],
      accent: 'blue',
      preview: bidakaraPreview,
    },
    {
      number: '02',
      name: 'AGRES AI Sales Assistant',
      url: 'https://agres-ai-sales-assistant.vercel.app/chat',
      description:
        'A conversational sales assistant for product discovery, recommendations, budget understanding, and lead qualification.',
      note: 'Public catalog demo. Prices and stock are a snapshot, not real-time availability.',
      tags: ['Sales AI', 'Product Recommendation', 'Lead Qualification', 'RAG'],
      accent: 'orange',
      preview: agresPreview,
    },
  ],
  process: [
    [
      '01',
      'Understand',
      'Map the problem, customer flow, existing workflow, data, and success criteria.',
    ],
    [
      '02',
      'Connect data',
      'Start with the useful information you already have: web, docs, catalogs, or APIs.',
    ],
    [
      '03',
      'Build & test',
      'Build the AI workflow, interface, integrations, guardrails, and evaluation tests.',
    ],
    [
      '04',
      'Deploy',
      'Launch as a standalone app, website assistant, dashboard, or workflow integration.',
    ],
    [
      '05',
      'Improve',
      'Use feedback and evaluation to refine knowledge, answers, UX, and reliability.',
    ],
  ],
  pricing: [
    {
      tier: 'STARTER',
      title: 'AI Assistant MVP',
      price: 'Rp3.5jt',
      detail: 'Starting from',
      description: 'A focused first assistant to prove the use case.',
      includes: [
        'Initial discovery',
        'One primary knowledge source + basic RAG',
        'Custom chat UI + basic guardrails',
        'Deployment + initial evaluation',
      ],
      cta: 'Start a Pilot',
      featured: false,
    },
    {
      tier: 'BUSINESS',
      title: 'Business AI Assistant',
      price: 'Rp7.5jt',
      detail: 'Starting from',
      description: 'A richer assistant connected to your business workflow.',
      includes: [
        'Multiple knowledge sources',
        'Product recommendations or lead capture',
        'Analytics and dashboard',
        'Workflow and system integrations',
      ],
      cta: 'Discuss Your Use Case',
      featured: true,
    },
    {
      tier: 'CUSTOM',
      title: 'Custom AI System',
      price: 'Custom',
      detail: 'Scoped to your project',
      description:
        'A tailored system integrated with your existing product or tools.',
      includes: [
        'Authenticated AI applications',
        'Database, CRM, or API integration',
        'Internal tools and custom workflows',
        'Advanced architecture and evaluation',
      ],
      cta: 'Talk About Your Project',
      featured: false,
    },
  ],
  faqs: [
    [
      'Do I need AI-ready data?',
      'No. Existing websites, FAQs, PDFs, catalogs, spreadsheets, and structured documents can often be used as starting sources.',
    ],
    [
      'Can you use my existing website?',
      'Yes. Relevant content can be prepared and used as part of the AI knowledge base.',
    ],
    [
      'Can this integrate into an existing application?',
      'Yes. The assistant can be delivered as a standalone experience or integrated into your existing website, depending on the setup.',
    ],
    [
      'Can this connect to my database or API?',
      'Yes, depending on the project scope and system architecture. Access and data permissions are considered during discovery.',
    ],
    [
      'Does AI always answer correctly?',
      'No. AI systems are probabilistic. Good implementations use grounding, evaluation, guardrails, citations, and human escalation where necessary.',
    ],
    [
      'Can we start with an MVP?',
      'Yes. Starting with a focused pilot is usually recommended before expanding to a larger production system.',
    ],
    [
      'Is this a monthly subscription?',
      'Development can be project-based. Hosting, model/API usage, maintenance, analytics, and ongoing improvement may introduce recurring costs depending on the implementation.',
    ],
  ],
  pipeline: [
    'Business Problem',
    'Product Flow',
    'Frontend',
    'Backend',
    'Data',
    'AI',
    'Evaluation',
    'Deployment',
  ],
} as const;

export const contactLinks = [
  {
    label: 'WhatsApp',
    url: site.contact.whatsapp
      ? 'https://wa.me/' + site.contact.whatsapp.replace(/\D/g, '')
      : '',
  },
  {
    label: 'Email',
    url: site.contact.email ? 'mailto:' + site.contact.email : '',
  },
  { label: 'LinkedIn', url: site.contact.linkedin },
  { label: 'GitHub', url: site.contact.github },
].filter((contact) => contact.url);

export const projectEnquiryUrl = site.contact.whatsapp
  ? 'https://wa.me/' + site.contact.whatsapp.replace(/\D/g, '')
  : site.contact.email
    ? 'mailto:' +
      site.contact.email +
      '?subject=' + encodeURIComponent(`${site.brand} project enquiry`)
    : site.portfolio;
