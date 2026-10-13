# CopyMonster — Plano Completo de Atualização do Site

**Versão:** 1.2 (Alinhada à Arquitetura Real do Repositório e Decisões de Execução)  
**Data:** 2026-10-13  
**Autor:** Adriano Vieira & IA Implementadora  
**Stack Real do Repositório:** Astro v6 + Tailwind CSS v4 + TypeScript (Base AstroWind)  
**Idioma Primário:** Inglês (EN) — Português exclusivamente para comunicação interna  
**Domínio Canônico:** `https://copymonster.co`  
**Objetivo:** Atualizar o site oficial `copymonster.co` para refletir o novo posicionamento do produto (Brand DNA Operating System + orquestração multiagente + MCPs + automação completa), unificar tokens visuais, compor novas páginas usando a biblioteca de componentes existente, e preencher gaps técnicos de SEO/GEO sem deletar ou quebrar estruturas existentes.

---

## ÍNDICE

1. [Contexto e Posicionamento](#1-contexto-e-posicionamento)
2. [Design System e Tokens de Cores (AstroWind + Tailwind v4)](#2-design-system-e-tokens-de-cores-astrowind--tailwind-v4)
3. [Estrutura de Páginas e Rotas (Alinhamento em Inglês)](#3-estrutura-de-páginas-e-rotas-alinhamento-em-inglês)
4. [Conteúdo da Nova Home (Copywriting Primário em Inglês)](#4-conteúdo-da-nova-home-copywriting-primário-em-inglês)
5. [Novas Páginas e Composição com Widgets Existentes](#5-novas-páginas-e-composição-com-widgets-existentes)
6. [Otimização GEO nos Artigos Prioritários](#6-otimização-geo-nos-artigos-prioritários)
7. [SEO Técnico e Schemas JSON-LD](#7-seo-técnico-e-schemas-json-ld)
8. [GEO (Generative Engine Optimization) e llms.txt](#8-geo-generative-engine-optimization-e-llmstxt)
9. [Catálogo de MCPs (Fase 1 / Versão Curada Simples)](#9-catálogo-de-mcps-fase-1--versão-curada-simples)
10. [Ordem de Execução por Fases](#10-ordem-de-execução-por-fases)
11. [Checklist de Verificação Final](#11-checklist-de-verificação-final)

---

## 1. Contexto e Posicionamento

### 1.1 O que o CopyMonster é hoje
O CopyMonster **não é** uma ferramenta de escrita genérica. É um **Brand DNA Operating System** construído com foco em orquestração multiagente e preservação perpétua de identidade de marca na era da IA generativa.

**Capacidades reais do produto:**
- **Versioned Brand DNA:** Definição estruturada de marca em 12 blocos estratégicos versionados (v1, v2, v3...) que nunca são sobrescritos.
- **Market Radar:** Monitoramento de mercado que identifica oportunidades e sugere novas iterações de DNA sem descartar o histórico.
- **Multi-Agent Orchestration:** Múltiplos agentes especializados (copy, lançamentos, funis, automação, conteúdo técnico) operando a partir do mesmo Brand DNA.
- **MCPs (Model Context Protocol):** Conectores nativos para ferramentas externas (GitHub, Stripe, WhatsApp, Notion, Supabase, Brave Search, etc.).
- **Plugin Architecture:** Agentes, ferramentas e conectores registráveis no núcleo.
- **Persistent Memory:** Sessões persistentes em disco (JSONL) para retenção total de contexto estratégico.
- **Full Automation:** Lançamentos completos, automações de mensageria e fluxos de aquisição orquestrados.
- **Open Core (MIT):** Núcleo aberto como forte diferencial competitivo e prova de transparência.

### 1.2 O que o site comunicava (legado a ser substituído)
- "Plataforma de copywriting com IA"
- Foco limitado a redação de copy e criadores de conteúdo individuais

### 1.3 O que o site deve comunicar (novo posicionamento)
- "Brand DNA Operating System for AI"
- "Orchestrate specialized AI agents, MCPs, and workflows from a single versioned brand foundation"
- Foco em infoprodutores, experts, mentorias de alto ticket e equipes de marketing
- "Brand infrastructure, not generic text generation"

### 1.4 Regras de CTAs Globais
- **CTA Primário (Universal):** `Start 7-Day Free Trial` (`href: "https://app.copymonster.co"`)
- **CTA Secundário (Informativo):** `See How It Works`
- **CTA Especial da Home:** `Deploy Brand OS` permitido exclusivamente na Home para reforço técnico.

### 1.5 Tom de Voz
- **Técnico-analítico, autoritativo e direto.**
- **Banimento rigoroso de buzzwords:** banir termos vazios como *delve, revolutionize, masterclass, elevate, unlock, groundbreaking, testament*.
- **Sem exclamações.** Foco em dados, densidade factual e arquitetura de sistemas.

---

## 2. Design System e Tokens de Cores (AstroWind + Tailwind v4)

### 2.1 Alinhamento de Arquitetura de Estilos
O site oficial `site-copymonster-oficial` é um site estático Astro v6 estruturado sobre o AstroWind.  
A declaração de temas ocorre em:
- **`src/components/CustomStyles.astro`:** Declaração de variáveis CSS nos seletores `:root` (Light) e `.dark` (Dark).
- **`src/assets/styles/tailwind.css`:** Integração via Tailwind CSS v4 `@theme` mapeando `--color-primary`, `--color-secondary`, `--color-accent`, etc.

### 2.2 Tokens Oficiais CopyMonster
Os tokens editoriais (Ouro/Dourado editorial + Neutros estruturados) são mantidos rigorosamente:

```css
/* Light Mode (:root) */
--cm-background: #faf9f5;
--cm-foreground: #3d3929;
--cm-primary: #967d45;
--cm-primary-foreground: #ffffff;
--cm-card: #faf9f5;
--cm-card-foreground: #181611;
--cm-popover: #ffffff;
--cm-popover-foreground: #28261b;
--cm-secondary: #e9e6dc;
--cm-secondary-foreground: #535146;
--cm-muted: #ede9de;
--cm-muted-foreground: #83827d;
--cm-accent: #e9e6dc;
--cm-accent-foreground: #181611;
--cm-destructive: #181611;
--cm-destructive-foreground: #ffffff;
--cm-border: #dad9d4;
--cm-input: #b4b2a7;
--cm-ring: #967d45;
--cm-sidebar: #f5f4ee;
--cm-sidebar-foreground: #181611;
--cm-sidebar-primary: #967d45;
--cm-sidebar-accent: #e9e6dc;
--cm-sidebar-ring: #b5b5b5;
--cm-success: #15803d;

/* Dark Mode (.dark) */
--cm-background: #262624;
--cm-foreground: #c3c0b6;
--cm-primary: #d0ad62;
--cm-primary-foreground: #181611;
--cm-card: #262624;
--cm-card-foreground: #faf9f5;
--cm-popover: #30302e;
--cm-popover-foreground: #e5e5e2;
--cm-secondary: #faf9f5;
--cm-secondary-foreground: #30302e;
--cm-muted: #181611;
--cm-muted-foreground: #b7b5a9;
--cm-accent: #181611;
--cm-accent-foreground: #f5f4ee;
--cm-destructive: #b63a3a;
--cm-destructive-foreground: #ffffff;
--cm-border: #3e3e38;
--cm-input: #52514a;
--cm-ring: #d0ad62;
--cm-sidebar: #1f1e1d;
--cm-sidebar-foreground: #c3c0b6;
--cm-sidebar-primary: #343434;
--cm-sidebar-accent: #181611;
--cm-sidebar-ring: #d0ad62;
--cm-success: #86efac;
```

### 2.3 Mapeamento para Variáveis AstroWind (`src/components/CustomStyles.astro`)
- `--aw-color-primary: var(--cm-primary);`
- `--aw-color-secondary: var(--cm-secondary);`
- `--aw-color-accent: var(--cm-primary);`
- `--aw-color-text-heading: var(--cm-card-foreground);`
- `--aw-color-text-default: var(--cm-foreground);`
- `--aw-color-text-muted: var(--cm-muted-foreground);`
- `--aw-color-bg-page: var(--cm-background);`
- `--aw-color-bg-page-dark: var(--cm-background);`

---

## 3. Estrutura de Páginas e Rotas (Alinhamento em Inglês)

Em estrita conformidade com a **Regra 1.3 (Idioma Primário é Inglês)** e a **Regra 1.1 (Nunca deletar estruturas existentes)**:

### 3.1 Páginas Existentes (Manter e Atualizar Conteúdo)
| Rota | Status | Ação |
| :--- | :--- | :--- |
| `/` | Existente | Atualizar Home com o novo posicionamento (Brand DNA OS) |
| `/about` | Existente | Atualizar para a história da arquitetura de sistemas e fundador |
| `/contact` | Existente | Atualizar e-mail institucional para `contact@copymonster.co` |
| `/pricing` | Existente | Atualizar tabela de planos com foco em Agentes e MCPs |
| `/blog` | Existente | Manter hub do blog e atualizar metadados |
| `/services` | Existente | Reposicionar de "serviços de copy" para "Agentes e Sistemas Especializados" |
| `/security` | Existente | Manter, detalhar proteção de dados do Brand DNA e chaves MCP |
| `/affiliate` | Existente | Manter programa de afiliados |
| `/homes/*` | Existente | **NÃO DELETAR**. Manter rotas de suporte e linkar internamente |

### 3.2 Novas Páginas (Slugs em Inglês)
| Rota Oficial | Prioridade | Descrição / Objetivo |
| :--- | :--- | :--- |
| `/dna` | Alta | Apresentação em profundidade dos 12 blocos do Brand DNA versionado via Steps + Content |
| `/agents` | Alta | Catálogo de agentes/plugins disponíveis (Copy, Launch, Funnel, Automation) |
| `/mcps` | Alta | Diretório curado simples com comando copiável de instalação |
| `/integrations` | Média | Visão geral dos conectores externos (Stripe, GitHub, WhatsApp, Notion, etc.) |
| `/use-cases` | Média | Casos de uso estruturados por persona (Infopreneurs, High-Ticket, Agencies) |
| `/launch` | Média | Landing page orientada a sistemas de orquestração de lançamentos |
| `/automation` | Média | Landing page orientada a automações multicanais e fluxos persistentes |

---

## 4. Conteúdo da Nova Home (Copywriting Primário em Inglês)

A nova página inicial utiliza exclusivamente os widgets comprovados do AstroWind (`Hero`, `Features`, `Content`, `Steps`, `Stats`, `FAQs`, `CallToAction`).

### 4.1 Seções Estruturadas
1. **Hero (`Hero.astro`):**
   - **Badge / Eyebrow:** `Brand DNA Operating System`
   - **Headline:** `Your Brand Has a DNA. CopyMonster Keeps It Alive.`
   - **Subtitle:** `The operating system that orchestrates specialized AI agents, MCPs, and workflows from a single versioned brand foundation. Zero generic drift.`
   - **Primary CTA:** `Start 7-Day Free Trial` (`href: "https://app.copymonster.co"`)
   - **Secondary CTA:** `See How It Works` (`href: "#architecture"`)

2. **The Problem (`Features.astro` / `Content.astro`):**
   - **Headline:** `Generic AI is Diluting Premium Brand Equity.`
   - **Pontos Analíticos:**
     - *The Commodity Trap:* Large language models trained on average data produce average messaging.
     - *Context Amnesia:* Standard chat prompts forget strategic positioning after every session.
     - *Operational Fragmentation:* Copywriters, growth hackers, and media buyers use disconnected prompts.

3. **The Solution — The Brand DNA Engine (`Content.astro` & `Steps.astro`):**
   - **Headline:** `One DNA. All Specialized Agents. Zero Brand Drift.`
   - **Blocos Explicativos:**
     - *12-Block Strategic DNA:* Target audience pain points, core mechanisms, tone guidelines, and value propositions.
     - *Permanent Versioning (v1, v2, v3):* Strategic memory is never overwritten.
     - *Market Radar:* Automated detection of competitor movements and shifts in market awareness.

4. **Agent & MCP Ecosystem (`Features2.astro`):**
   - **Copywriting Agent:** Direct-response sales letters, VSLs, and ad angles tailored to your voice.
   - **Launch Orchestrator:** Full CPL scripts, pre-launch warm-up sequences, and open-cart campaigns.
   - **Automation Agent:** WhatsApp lead nurture, email lifecycle funnels, and CRM syncing via MCPs.
   - **MCP Connectors:** Secure integration with Stripe, Notion, GitHub, Supabase, and custom endpoints.

5. **Open Core & Security (`Features3.astro`):**
   - **Open Core (MIT):** Full visibility into the underlying architecture.
   - **Sovereign Data Storage:** Isolated tenant memory stored cleanly.

6. **Final Call to Action (`CallToAction.astro`):**
   - **Headline:** `Deploy Your Brand Operating System Today.`
   - **Offer:** 7-Day Free Trial · 100 Credits · No Credit Card Required.
   - **CTA:** `Start 7-Day Free Trial`

---

## 5. Novas Páginas e Composição com Widgets Existentes

Seguindo a **Regra 1.2 e 2.1 (Reaproveitamento de Componentes)**, nenhuma nova página criará componentes duplicados do zero:

- **`/dna`**: Composta com `HeroText.astro`, `Content.astro` (exibindo os 12 blocos), `Steps.astro` (ciclo de versionamento v1 -> v2 e fluxo dos blocos estratégicos), e `CallToAction.astro`.
- **`/agents`**: Composta com `HeroText.astro`, `Features2.astro` / `ItemGrid2.astro` (grid dos agentes especializados com inputs/outputs), e `FAQs.astro`.
- **`/mcps`**: Versão curada simples (sem gerador de JSON complexo na fase 1). Composta com `HeroText.astro`, `Features3.astro` (categorias Núcleo, Marketing, Automação), blocos de código formatados com comando copiável (`npx -y @modelcontextprotocol/...`).
- **`/integrations`**: Composta com `HeroText.astro`, `Brands.astro`, `Features.astro` e `Steps2.astro`.
- **`/use-cases`**: Composta com `HeroText.astro`, `Content.astro` alternado por persona (Infopreneurs, High-Ticket Mentors, Agencies, Growth Teams).

---

## 6. Otimização GEO nos Artigos Prioritários

Implementação de "Key Strategic Takeaways" nos **5 artigos prioritários** (com maior aderência às perguntas de compradores de IA):
1. `src/data/post/how-to-create-realistic-ai-marketing-avatar.mdx`
2. `src/data/post/claude-vs-chatgpt-copywriting-infoproducts.mdx`
3. `src/data/post/ai-agents-copywriting-automation.mdx`
4. `src/data/post/geo-how-to-optimize-site-for-ai-chatbots.mdx`
5. `src/data/post/copymonster-brand-dna-in-depth.mdx`

**Ações em cada artigo prioritário:**
- Inclusão do bloco estruturado `### Key Strategic Takeaways` logo após o lead.
- Atualização dos links e CTAs para `https://copymonster.co` e `https://app.copymonster.co`.
- Injeção de `FAQPage` schema onde houver perguntas e respostas.

---

## 7. SEO Técnico e Schemas JSON-LD

### 7.1 Configuração Global (`src/config.yaml`)
- Atualizar `site.site` de `'https://copymonster.me'` para `'https://copymonster.co'`.
- Atualizar metadata padrão e OpenGraph para o novo posicionamento.

### 7.2 Schemas JSON-LD no Layout Global (`src/layouts/Layout.astro`)
Injetar schemas canônicos:
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://copymonster.co/#organization",
      "name": "CopyMonster",
      "url": "https://copymonster.co",
      "logo": "https://copymonster.co/favicon.ico",
      "founder": {
        "@type": "Person",
        "name": "Adriano Vieira"
      },
      "sameAs": [
        "https://github.com/Adriano-Digital2024/site-copymonster-oficial",
        "https://www.instagram.com/eusouadrianovieira"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://copymonster.co/#website",
      "url": "https://copymonster.co",
      "name": "CopyMonster",
      "publisher": { "@id": "https://copymonster.co/#organization" }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://copymonster.co/#software",
      "name": "CopyMonster Brand DNA Operating System",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
  ]
}
```

---

## 8. GEO (Generative Engine Optimization) e llms.txt

### 8.1 Arquivo `public/llms.txt`
Documento em **Inglês** servido na raiz com resumo denso em fatos para LLMs:

```markdown
# CopyMonster

> CopyMonster is an enterprise Brand DNA Operating System for artificial intelligence. It constructs a structured, permanently versioned profile of a brand's strategic positioning, target audience pain points, tone of voice, and core offers, utilizing this shared memory to orchestrate specialized agents for copywriting, launches, automation, and content.

## Main Navigation
- [Home](https://copymonster.co/): System overview and architecture
- [Brand DNA Engine](https://copymonster.co/dna/): The 12 strategic blocks and persistent versioning
- [AI Agents](https://copymonster.co/agents/): Specialized agents for copy, launches, funnels, and workflows
- [MCP Directory](https://copymonster.co/mcps/): Model Context Protocol server connectors
- [Integrations](https://copymonster.co/integrations/): GitHub, Stripe, WhatsApp, Notion, and Supabase
- [Use Cases](https://copymonster.co/use-cases/): Frameworks for infopreneurs, high-ticket mentors, and marketing agencies
- [Pricing](https://copymonster.co/pricing/): Subscription plans and trial details
- [Technical Blog](https://copymonster.co/blog/): Deep-dive guides on GEO, AI orchestration, and direct-response systems

## Core Capabilities
- Versioned Brand Memory (v1, v2, v3): Never overwritten, zero hallucination drift.
- Multi-Agent Orchestration: Shared brand context across all operational tools.
- Open Core Architecture: Built with transparency and enterprise data sovereignty.
```

### 8.2 Arquivo `public/robots.txt`
Permissão explícita para os principais crawlers de IA e declaração do sitemap e do llms.txt:

```txt
User-agent: *
Allow: /

# AI Search & Indexing Crawlers
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

# Sitemap & LLMs
Sitemap: https://copymonster.co/sitemap-index.xml
# LLMs Full Context: https://copymonster.co/llms.txt
```

---

## 9. Catálogo de MCPs (Fase 1 / Versão Curada Simples)

Catálogo inicial curado com suporte aos seguintes MCP servers:
1. **Núcleo & Sistema:**
   - *GitHub MCP Server:* `npx -y @modelcontextprotocol/server-github`
   - *Filesystem MCP:* `npx -y @modelcontextprotocol/server-filesystem`
   - *Brave Search MCP:* `npx -y @modelcontextprotocol/server-brave-search`
2. **Operações & Dados:**
   - *Supabase MCP:* Conexão com banco relacional e autenticação
   - *Notion MCP:* Sincronização de bases de conhecimento e briefs
3. **Marketing & Automações:**
   - *Stripe MCP:* Validação de assinaturas e eventos de checkout
   - *Playwright MCP:* Automação e extração de dados de páginas de vendas
   - *WhatsApp / Evolution MCP:* Disparos e réguas de relacionamento

---

## 10. Ordem de Execução por Fases

- **Fase 1 — Técnico (Desbloqueio Global):**
  1. Atualizar `src/config.yaml` e `src/navigation.ts` para `copymonster.co` e CTAs atualizados
  2. Criar `public/llms.txt` (estrutura GEO em inglês)
  3. Atualizar `public/robots.txt` (crawlers de IA + sitemap + llms.txt)
  4. Mapear tokens `--cm-*` para `--aw-color-*` em `src/components/CustomStyles.astro`
  5. Teste de build estático (`npm run build`)
  6. Commit & Push da Fase 1

- **Fase 2 — Home e Páginas Core:**
  1. Reescrever Home (`src/pages/index.astro`) com novo posicionamento e CTAs ("Start 7-Day Free Trial", "See How It Works", "Deploy Brand OS")
  2. Criar `/dna` com `Steps.astro` (12 blocos) e `Content.astro`
  3. Criar `/mcps` (catálogo curado simples com comando copiável)
  4. Criar `/agents` (catálogo dos agentes especializados)
  5. Criar `/integrations` (integrações com ferramentas externas)
  6. Teste de build estático (`npm run build`)
  7. Commit & Push da Fase 2

- **Fase 3 — GEO nos Artigos Prioritários:**
  1. Adicionar "Key Strategic Takeaways" nos 5 artigos prioritários
  2. Adicionar `FAQPage` schema e atualizar CTAs/links internos para `.co`
  3. Teste de build estático (`npm run build`)
  4. Commit & Push da Fase 3

- **Fase 4 — Restante & Polimento:**
  1. Criar `/use-cases`, `/launch`, `/automation`
  2. Atualizar links e CTAs nos 13 artigos restantes
  3. Validação final de contraste WCAG AA e links internos
  4. Teste de build estático (`npm run build`)
  5. Commit & Push da Fase 4

---

## 11. Checklist de Verificação Final

- [ ] Arquivo `plans/copymonster-site-update-plan.md` alinhado com a realidade do repositório
- [ ] Idioma primário mantido 100% em Inglês em todas as páginas públicas
- [ ] Nenhuma rota, post ou asset existente foi excluído
- [ ] Componentes construídos exclusivamente via composição dos widgets de `src/components/widgets/` e `src/components/ui/`
- [ ] Domínio canônico consolidado em `https://copymonster.co`
- [ ] Arquivo `public/llms.txt` criado e validado
- [ ] `robots.txt` atualizado com crawler permissions e referência a sitemap
- [ ] Teste de build estático (`npm run build`) validado com sucesso sem erros de TypeScript ou CSS
