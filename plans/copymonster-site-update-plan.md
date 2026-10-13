reposicionamento, páginas novas, conteúdo, MCPs, GEO, e checklist de verificação.

markdown
# CopyMonster — Plano Completo de Atualização do Site

**Versão:** 1.0
**Data:** 2026-10-12
**Autor:** Adriano Vieira
**Destinatário:** IA implementadora
**Objetivo:** Atualizar o site oficial copymonster.co para refletir o novo posicionamento do produto (Brand DNA Operating System + orquestração multiagente + MCPs + automação completa), consolidar a paleta de cores, e corrigir gaps técnicos de SEO/GEO.

---

## ÍNDICE

1. [Contexto e posicionamento](#1-contexto-e-posicionamento)
2. [Paleta de cores — consolidação de tokens](#2-paleta-de-cores--consolidação-de-tokens)
3. [Estrutura de páginas](#3-estrutura-de-páginas)
4. [Conteúdo da nova home](#4-conteúdo-da-nova-home)
5. [Páginas novas](#5-páginas-novas)
6. [Atualização dos artigos do blog](#6-atualização-dos-artigos-do-blog)
7. [SEO técnico](#7-seo-técnico)
8. [GEO (Generative Engine Optimization)](#8-geo-generative-engine-optimization)
9. [Página de MCPs](#9-página-de-mcps)
10. [Checklist de verificação final](#10-checklist-de-verificação-final)

---

## 1. Contexto e posicionamento

### 1.1 O que o CopyMonster é hoje

O CopyMonster **não é mais** uma ferramenta de copywriting. É um **Brand DNA Operating System** construído a partir de um fork do DeepSeek Harness (DSH), com rebranding e a metodologia proprietária de Brand DNA integrada.

**Capacidades reais do produto:**

- **Brand DNA versionado** — o usuário constrói um DNA de marca (12 blocos estratégicos) que fica em um diretório isolado, com versionamento (v1, v2, v3...) e nunca é apagado
- **Radar de mercado** — o sistema identifica oportunidades sozinho, notifica o usuário, e gera novas versões do DNA sem destruir as anteriores
- **Orquestração multiagente** — múltiplos agentes especializados (copy, lançamento, funil, automação, conteúdo) compartilham o mesmo DNA
- **MCPs (Model Context Protocol)** — conectores para serviços externos (Supabase, WhatsApp, Stripe, Notion, GitHub, etc.)
- **Tudo é plugin** — o agente, as ferramentas, os conectores e os presets são plugins que se registram no núcleo
- **Sessões persistentes** — cada conversa fica salva em disco (JSONL), o agente lembra do contexto
- **Automação completa** — o usuário pode criar lançamentos inteiros, automações de WhatsApp, sequências de e-mail, funis completos
- **Open Core (MIT)** — o núcleo é aberto, o que é diferencial competitivo vs. Writer, Jasper, Seismic

### 1.2 O que o site diz hoje (desatualizado)

- "Plataforma de copywriting com IA"
- "Gera copy com Brand DNA"
- "Para copywriters e criadores"
- "Ferramenta de escrita"

### 1.3 O que o site deve dizer (novo posicionamento)

- "Sistema operacional de marca"
- "Orquestra agentes, MCPs e plugins"
- "Para infoprodutores, experts e agências"
- "Infraestrutura de marca"

### 1.4 Nova narrativa central

> CopyMonster é o sistema operacional da sua marca. Você define o DNA uma vez, e todos os agentes — copy, lançamento, automação, funil, conteúdo — operam a partir dele. Não é uma ferramenta de copy. É a infraestrutura que impede sua marca de virar genérica na era da IA.

### 1.5 Público primário

- **Primário:** Infoprodutor solo / expert / mentor online (criador de curso, mentor, coach)
- **Secundário:** Agência de marketing, equipe de conteúdo
- **Terciário:** Criador de conteúdo técnico, startup

### 1.6 Tom de voz

- **Técnico-analítico** (o blog atual já usa esse tom — manter)
- **Sem buzzwords** — banir: "delve", "revolutionize", "masterclass", "elevate", "unlock", "groundbreaking", "testament"
- **Direto, fact-dense, autoritativo**
- **Sem exclamações**

---

## 2. Paleta de cores — consolidação de tokens

### 2.1 Arquivo fonte

`apps/web/src/cm-theme.css` é a **single source of truth**. Nenhum componente pode ter literal de cor (hex, rgb, hsl). O script `scripts/check-theme.sh` valida isso em CI e build.

### 2.2 Tokens Light Mode (`:root`)

```css
:root {
  /* Base */
  --cm-background: #faf9f5;
  --cm-foreground: #3d3929;

  /* Primary (Ouro/Dourado editorial) */
  --cm-primary: #967d45;
  --cm-primary-foreground: #ffffff;

  /* Card */
  --cm-card: #faf9f5;
  --cm-card-foreground: #181611;

  /* Popover */
  --cm-popover: #ffffff;
  --cm-popover-foreground: #28261b;

  /* Secondary */
  --cm-secondary: #e9e6dc;
  --cm-secondary-foreground: #535146;

  /* Muted */
  --cm-muted: #ede9de;
  --cm-muted-foreground: #83827d;

  /* Accent (novo) */
  --cm-accent: #e9e6dc;
  --cm-accent-foreground: #181611;

  /* Destructive */
  --cm-destructive: #181611;
  --cm-destructive-foreground: #ffffff;

  /* Border / Input */
  --cm-border: #dad9d4;
  --cm-input: #b4b2a7;

  /* Ring (novo) */
  --cm-ring: #967d45;

  /* Sidebar */
  --cm-sidebar: #f5f4ee;
  --cm-sidebar-foreground: #181611;
  --cm-sidebar-primary: #967d45;
  --cm-sidebar-accent: #e9e6dc;
  --cm-sidebar-ring: #b5b5b5;

  /* Success */
  --cm-success: #15803d;

  /* Shadow */
  --cm-shadow: 0 4px 20px -2px rgba(24, 22, 17, 0.08), 0 1px 4px rgba(24, 22, 17, 0.04);

  /* Overlay */
  --cm-overlay: rgba(0, 0, 0, 0.65);
}
2.3 Tokens Dark Mode (body[data-ds-dark-theme])
css
body[data-ds-dark-theme] {
  /* Base */
  --cm-background: #262624;
  --cm-foreground: #c3c0b6;

  /* Primary */
  --cm-primary: #d0ad62;
  --cm-primary-foreground: #181611;

  /* Card */
  --cm-card: #262624;
  --cm-card-foreground: #faf9f5;

  /* Popover */
  --cm-popover: #30302e;
  --cm-popover-foreground: #e5e5e2;

  /* Secondary */
  --cm-secondary: #faf9f5;
  --cm-secondary-foreground: #30302e;

  /* Muted */
  --cm-muted: #181611;
  --cm-muted-foreground: #b7b5a9;

  /* Accent (novo) */
  --cm-accent: #181611;
  --cm-accent-foreground: #f5f4ee;

  /* Destructive */
  --cm-destructive: #b63a3a;
  --cm-destructive-foreground: #ffffff;

  /* Border / Input */
  --cm-border: #3e3e38;
  --cm-input: #52514a;

  /* Ring (novo) */
  --cm-ring: #d0ad62;

  /* Sidebar */
  --cm-sidebar: #1f1e1d;
  --cm-sidebar-foreground: #c3c0b6;
  --cm-sidebar-primary: #343434;
  --cm-sidebar-accent: #181611;
  --cm-sidebar-ring: #d0ad62;

  /* Success */
  --cm-success: #86efac;

  /* Shadow */
  --cm-shadow: 0 4px 24px -2px rgba(0, 0, 0, 0.35), 0 1px 4px rgba(0, 0, 0, 0.2);

  /* Overlay */
  --cm-overlay: rgba(0, 0, 0, 0.65);
}
2.4 Focus visible (A11y)
css
:focus-visible {
  outline: 2px solid #E7BF73; /* Light */
  outline-offset: 2px;
}

body[data-ds-dark-theme] :focus-visible {
  outline: 2px solid var(--cm-ring);
  outline-offset: 2px;
}
2.5 Ações de implementação
Atualizar apps/web/src/cm-theme.css com os tokens acima

Adicionar tokens novos: --cm-accent, --cm-accent-foreground, --cm-ring, --cm-sidebar-primary, --cm-sidebar-ring

Renomear --cm-destructive-foreground → manter (não renomear para destructive-fore, isso é só apelido na documentação)

Rodar scripts/check-theme.sh para garantir que nenhum componente tem cor hardcoded

Substituir o :focus-visible hardcoded (#E7BF73) por var(--cm-ring) no Light

Validar contraste com ferramenta A11y (WCAG AA mínimo)

2.6 O que NÃO fazer
Não trocar as cores existentes por cores novas — a paleta é a mesma, só consolidada

Não criar tokens que não estão na lista

Não usar literais de cor em componentes — sempre var(--cm-*)

3. Estrutura de páginas
3.1 Páginas existentes (manter, mas atualizar conteúdo)
URL	Status	Ação
/	Existe	Reescrever com novo posicionamento
/about/	Existe	Atualizar história (Brand DNA OS, não app de copy)
/contact/	Existe	Atualizar e-mail para contato@copymonster.co
/pricing/	Existe	Atualizar para refletir escopo novo
/blog/	Existe	Manter, atualizar CTAs
/services/	Existe	Atualizar para refletir serviços novos
/security/	Existe	Manter, revisar
/affiliate/	Existe	Manter, revisar
3.2 Páginas novas (criar)
URL	Prioridade	Descrição
/dna/	Alta	Explicando o sistema de Brand DNA em profundidade
/agentes/	Alta	Catálogo de agentes/plugins disponíveis
/mcps/	Alta	Docs de MCPs (ver seção 9)
/integracoes/	Média	Stripe, WhatsApp, Meta, Notion, GitHub, etc.
/casos-de-uso/	Média	Por persona (infoprodutor, agência, expert)
/lancamento/	Média	Landing page focada em lançamentos
/automacao/	Média	Landing page focada em automação
3.3 Arquivos técnicos (criar)
Arquivo	Prioridade	Descrição
/llms.txt	Crítica	Arquivo de GEO (ver seção 8)
/sitemap.xml	Crítica	Já existe? Verificar
/robots.txt	Crítica	Já existe? Verificar
3.4 Páginas a descontinuar / redirecionar
/homes/personal/, /homes/mobile-app/, /homes/startup/, /homes/saas/ — se existirem, redirecionar para /casos-de-uso/

4. Conteúdo da nova home
4.1 Estrutura da página
1. Hero

Headline: "Sua marca tem DNA. O CopyMonster é o sistema que o mantém vivo."

Subheadline: "O sistema operacional de marca que orquestra agentes, MCPs e automações a partir de um único DNA versionado."

CTA primário: "Começar grátis" (trial 7 dias / 100 créditos)

CTA secundário: "Ver como funciona"

2. O problema

Headline: "IA genérica está matando a essência da sua marca."

Corpo: dados sobre o paradoxo da IA (conteúdo genérico em escala, perda de identidade, sophisticated buyers filtrando buzzwords)

Dados: citar estatísticas reais se disponíveis

3. A solução

Headline: "Um DNA. Todos os agentes. Zero genérico."

Corpo: explicar o mecanismo — DNA versionado + agentes especializados + MCPs + radar de mercado

Diagrama visual (se possível)

4. O que você pode criar

Lista de casos de uso:

Copy (anúncios, e-mails, landing pages, VSLs)

Lançamentos completos (pré-lançamento, CPL, carrinho aberto)

Funis de venda

Automação de WhatsApp

Sequências de e-mail

Conteúdo para redes sociais

Roteiros de vídeo

Newsletters

5. Diferenciais

Open Core (MIT)

Memória estratégica permanente

Versionamento de DNA

Orquestração multiagente

MCPs e plugins

Radar de mercado

6. Prova

Como a IA descreve o CopyMonster (citar ChatGPT, Gemini, Perplexity)

Depoimentos (se houver)

Logos de clientes (se houver)

7. CTA final

Trial 7 dias / 100 créditos

Sem cartão de crédito

4.2 Regras de copy
Sem buzzwords (lista da seção 1.6)

Sem exclamações

Direto, fact-dense, autoritativo

Cada seção com no máximo 3 parágrafos

H2 e H3 hierárquicos

Tabelas e listas para densidade de informação

5. Páginas novas
5.1 /dna/
Objetivo: Explicar o sistema de Brand DNA em profundidade.

Estrutura:

O que é Brand DNA

Por que DNA antes de copy ("No DNA. No Copy.")

Os 12 blocos estratégicos

Versionamento (v1, v2, v3...)

Radar de mercado

Como o DNA alimenta todos os agentes

Casos de uso

CTA

5.2 /agentes/
Objetivo: Catálogo de agentes/plugins disponíveis.

Estrutura:

O que são agentes

Como funcionam (plugin architecture)

Lista de agentes disponíveis:

Agente de copy

Agente de lançamento

Agente de funil

Agente de automação

Agente de conteúdo

Agente de e-mail

Agente de anúncio

etc.

Cada agente com descrição, caso de uso, e CTA

Como criar agentes personalizados

CTA

5.3 /mcps/
Ver seção 9.

5.4 /integracoes/
Objetivo: Mostrar integrações disponíveis.

Estrutura:

O que são MCPs (introdução)

Lista de integrações:

Stripe (pagamentos)

WhatsApp (comunicação)

Meta Ads (tráfego pago — se disponível)

Instagram (social)

Notion (conhecimento)

GitHub (versionamento)

Supabase (dados)

Google Drive (arquivos)

Brave Search (pesquisa)

Playwright (automação)

Zapier (ponte)

Cada integração com descrição, requisitos, e link para docs

CTA

5.5 /casos-de-uso/
Objetivo: Mostrar casos de uso por persona.

Estrutura:

Infoprodutor solo

Expert / mentor

Agência

Criador de conteúdo

Startup

Cada persona com dores, soluções, e CTA

6. Atualização dos artigos do blog
6.1 Artigos existentes (atualizar)
Os artigos do blog estão bem escritos e são GEO-friendly. Precisam de:

Atualizar CTAs — todos apontam para "Scale your Brand DNA" — trocar para refletir o novo posicionamento (agentes, MCPs, automação)

Atualizar links internos — verificar se apontam para .co e não .me

Adicionar JSON-LD — Article ou BlogPosting schema

Adicionar FAQPage schema — onde houver FAQ

Adicionar links para páginas novas — /dna/, /agentes/, /mcps/

Lista de artigos a atualizar:

/how-to-create-realistic-ai-marketing-avatar/

/create-weekly-newsletter-with-ai/

/reverse-copy-optimization-with-ai/

/geo-how-to-optimize-site-for-ai-chatbots/

/claude-vs-chatgpt-copywriting-infoproducts/

/boring-copy-ai-sales-pages-guide/

/voice-to-copy-method-ai-transcription/

/ai-to-create-sell-micro-infoproducts/

/ai-welcome-email-sequence/

/ai-agents-copywriting-automation/

/ai-pre-launch-cpl-script/

/copywriting-high-ticket-artificial-intelligence/

/strategic-landing-pages/

/how-to-build-your-brand-dna/

/copymonster-brand-dna-in-depth/

6.2 Novos artigos (criar)
Responder as 8 perguntas que o ChatGPT testou (do diagnóstico):

"Best brand management platforms for AI teams that need to keep messaging consistent across content, sales, and support"

"Which brand operating system is better for a small marketing team: brand governance or AI content generation"

+6 perguntas adicionais (não reveladas no diagnóstico gratuito)

Estratégia:

1 artigo por pergunta

Cada artigo com FAQPage schema

Cada artigo com Organization + SoftwareApplication schema

Publicar regularmente (1-2 por semana)

Citar fontes externas (aumenta autoridade)

7. SEO técnico
7.1 Verificações
□ Canonical de todas as páginas aponta para copymonster.co (self-referential)
□ og:url e twitter:url apontam para .co
□ Sitemap.xml publicado em https://copymonster.co/sitemap.xml
□ Sitemap declarado no robots.txt
□ Meta title: 50-60 caracteres
□ Meta description: 120-160 caracteres
□ 1 H1 por página
□ Hierarquia de headings (H1 > H2 > H3)
□ Links internos com texto descritivo (sem "clique aqui")
□ 23 links quebrados corrigidos
□ Imagens com alt text
□ HTTPS forçado
□ Sem conteúdo misto
□ TTFB < 500ms
□ lang e charset declarados
□ Favicon declarado
7.2 JSON-LD
Adicionar em todas as páginas:

json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CopyMonster",
  "url": "https://copymonster.co",
  "logo": "https://copymonster.co/logo.png",
  "founder": {
    "@type": "Person",
    "name": "Adriano Vieira"
  },
  "sameAs": [
    "https://www.linkedin.com/company/copymonster",
    "https://github.com/copymonster",
    "https://www.instagram.com/copymonster"
  ]
}
json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "CopyMonster",
  "url": "https://copymonster.co",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://copymonster.co/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "CopyMonster",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "BRL"
  }
}
8. GEO (Generative Engine Optimization)
8.1 Criar llms.txt
Arquivo em https://copymonster.co/llms.txt:

text
# CopyMonster

> CopyMonster é um Brand DNA Operating System. Constrói um perfil estruturado e versionado do posicionamento, público-alvo, tom de voz e ofertas de uma marca, e usa essa memória compartilhada para alimentar agentes especializados de copy, lançamento, automação e conteúdo.

## Páginas principais

- [Home](https://copymonster.co/): visão geral do produto
- [DNA](https://copymonster.co/dna/): como funciona o sistema de Brand DNA
- [Agentes](https://copymonster.co/agentes/): catálogo de agentes disponíveis
- [MCPs](https://copymonster.co/mcps/): conectores para serviços externos
- [Integrações](https://copymonster.co/integracoes/): Stripe, WhatsApp, Notion, GitHub, etc.
- [Casos de uso](https://copymonster.co/casos-de-uso/): por persona
- [Pricing](https://copymonster.co/pricing/): planos e trial
- [Blog](https://copymonster.co/blog/): artigos sobre GEO, copy, automação

## Sobre

- [About](https://copymonster.co/about/): história e fundador
- [Contact](https://copymonster.co/contact/): contato@copymonster.co

## Diferenciais

- Open Core (MIT)
- Brand DNA versionado
- Orquestração multiagente
- MCPs e plugins
- Radar de mercado
8.2 Corrigir gaps de GEO
Do diagnóstico anterior:

□ Arquivo llms.txt (criar)
□ Organization + WebSite schema (criar)
□ Entidade (sameAs) (criar)
□ Schema da página (criar)
□ About/Contato + marca (revisar)
□ Crawlers de IA liberados (verificar robots.txt)
□ Conteúdo no HTML cru (não só JS) — verificar SSR
□ Proposta de valor clara no topo (reescrever home)
□ Listas e tabelas (adicionar nos artigos)
□ FAQ na página (adicionar FAQPage schema)
8.3 Estratégia de conteúdo para GEO
1 artigo por pergunta de comprador (8 perguntas do diagnóstico)

Cada artigo com FAQPage schema

Cada artigo com Organization + SoftwareApplication schema

Publicar regularmente (1-2 por semana)

Citar fontes externas (aumenta autoridade)

Estruturar com tabelas, listas, code blocks (alta densidade de informação)

8.4 Presença fora do site (score 21/100)
LinkedIn ativo

GitHub público (MIT visível)

Menções em comunidades (Reddit, Indie Hackers, Product Hunt)

Guest posts em blogs de marketing

Diretórios de SaaS (G2, Capterra, Product Hunt)

9. Página de MCPs
9.1 Estrutura da página /mcps/
Objetivo: Catálogo de MCPs disponíveis, com nome, descrição, e comando copiável.

Estrutura:

Introdução — o que são MCPs, por que importam

Como instalar — o usuário copia o comando e cola no painel

Catálogo — lista de MCPs, organizados por categoria:

Núcleo: Filesystem, GitHub, Brave Search, Notion

Marketing: Meta Ads, Mailchimp, HubSpot, Stripe

Conteúdo: Playwright, Buffer, Metricool, Zapier

Como criar MCPs personalizados — link para docs

CTA

9.2 Formato de cada entrada
json
{
  "nome": "GitHub MCP Server",
  "descricao": "Gerencia repositórios, issues, PRs e commits",
  "categoria": "nucleo",
  "comando": "npx -y @modelcontextprotocol/server-github",
  "variaveis": ["GITHUB_TOKEN"],
  "fonte": "https://github.com/modelcontextprotocol/servers"
}
9.3 MCPs iniciais (20-30 curados)
Núcleo (4):

Filesystem MCP

GitHub MCP

Brave Search MCP

Notion MCP

Marketing (4):

Meta Ads MCP (oficial da Meta)

Mailchimp MCP

HubSpot MCP

Stripe MCP

Conteúdo (4):

Playwright MCP

Buffer MCP

Metricool MCP

Zapier MCP

Adicionais (8-18): a definir conforme necessidade

9.4 Ações de implementação
Criar página /mcps/ com estrutura acima

Para cada MCP, armazenar metadados (nome, descrição, comando, variáveis, fonte)

Botão "Copiar comando" em cada entrada

Link para docs oficiais de cada MCP

Integrar com MCP Harbor ou registry existente para descoberta (opcional, fase 2)

10. Checklist de verificação final
10.1 Técnico
□ cm-theme.css atualizado com tokens novos
□ scripts/check-theme.sh passando (sem literais de cor)
□ Canonical aponta para .co
□ og:url e twitter:url apontam para .co
□ Sitemap.xml publicado e válido
□ robots.txt declara sitemap
□ llms.txt criado
□ JSON-LD (Organization, WebSite, SoftwareApplication) em todas as páginas
□ Meta title 50-60 caracteres
□ Meta description 120-160 caracteres
□ 1 H1 por página
□ Hierarquia de headings correta
□ Links internos com texto descritivo
□ 23 links quebrados corrigidos
□ Imagens com alt text
□ HTTPS forçado
□ Sem conteúdo misto
□ TTFB < 500ms
□ lang e charset declarados
□ Favicon declarado
10.2 Conteúdo
□ Home reescrita com novo posicionamento
□ Página /dna/ criada
□ Página /agentes/ criada
□ Página /mcps/ criada
□ Página /integracoes/ criada
□ Página /casos-de-uso/ criada
□ Artigos do blog atualizados (CTAs, links, JSON-LD)
□ Novos artigos criados (respondendo perguntas de compradores)
□ Tom de voz consistente (sem buzzwords)
□ E-mail de contato atualizado para contato@copymonster.co
10.3 GEO
□ llms.txt criado
□ Organization + WebSite schema
□ Entidade (sameAs)
□ Schema da página
□ About/Contato + marca
□ Crawlers de IA liberados
□ Conteúdo no HTML cru (SSR)
□ Proposta de valor clara no topo
□ Listas e tabelas nos artigos
□ FAQ na página (FAQPage schema)
10.4 Presença fora do site
□ LinkedIn atualizado
□ GitHub público (MIT visível)
□ Menções em comunidades
□ Guest posts
□ Diretórios de SaaS (G2, Capterra, Product Hunt)
10.5 Conversão
□ Trial 7 dias / 100 créditos visível
□ Sem cartão de crédito
□ Garantia visível
□ Política de privacidade clara
□ CNPJ visível
□ Casos de uso visíveis
Anexo A — Ordem de execução sugerida
Fase	Foco	Entregável	Prazo
1	Técnico	Paleta, canonical, sitemap, JSON-LD, llms.txt, meta tags, links	Semana 1
2	Visual	Design system + validação A11y	Semana 2
3	Mensagem	Nova home, páginas atualizadas, reposicionamento	Semanas 3-4
4	Conteúdo	Atualizar artigos + criar 4-6 novos	Semanas 5-6
5	Autoridade	GitHub, Product Hunt, G2, guest posts	Semanas 7-8
6	Conversão	Prova social, casos de uso, garantia, trial	Semanas 9-10
Anexo B — O que NÃO fazer
Não trocar as cores existentes por cores novas — a paleta é a mesma, só consolidada

Não usar literais de cor em componentes

Não usar buzzwords na copy

Não usar exclamações

Não criar páginas que não estão no plano sem aprovação

Não migrar para .me (descartado)

Não quebrar o redirect 301 de .me → .co

Não remover o scripts/check-theme.sh

