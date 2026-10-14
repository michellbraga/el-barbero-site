# PROMPT.md — El Barbero Barbearia

## Objetivo
Construir uma landing page enxuta, premium e orientada a agendamentos para **El Barbero Barbearia — Dom Pedro, Manaus/AM**. Antes de codificar, leia `AGENTS.md`, `README.md`, `TASKS.md`, `PROMPT.md` e a estrutura existente. Respeite a arquitetura e as tecnologias já definidas no projeto. Não recrie o projeto nem troque stack sem necessidade.

## Regras obrigatórias
- Implemente e valide design, conteúdo, SEO técnico/local, responsividade, performance e rastreamento.
- Não invente serviços, preços, horários, nomes de barbeiros, avaliações, promoções ou funcionalidades. Use somente dados confirmados no projeto ou neste prompt.
- Preserve integrações e convenções existentes. Não instale dependências se HTML/CSS/JS nativos resolverem.
- Entregue código funcional, não apenas um plano ou mockup. Não faça alterações fora do escopo.
- Antes de finalizar, execute os testes/comandos disponíveis e informe o que foi validado e o que não foi possível validar.

## Identidade visual
Use os tokens CSS abaixo como fonte central, sem espalhar hexadecimais pelo projeto:
```css
:root {
  --color-black: #0D0E12;
  --color-burgundy: #61131A;
  --color-ivory: #FAF8F5;
  --color-leather: #522E1E;
  --color-vintage-beige: #C7AE95;
  --color-antique-gold: #D28843;
  --color-background: var(--color-black);
  --color-surface: #1C1A19;
  --color-text: var(--color-ivory);
  --color-text-muted: var(--color-vintage-beige);
  --color-primary: var(--color-burgundy);
  --color-border: #46352F;
  --color-accent: var(--color-antique-gold);
}
```
Direção: barbearia clássica, masculina e premium; preto carvão dominante, bordô de assinatura, marfim para texto, madeira/couro e dourado apenas em pequenos detalhes. Evite neon, gradientes exagerados, excesso de dourado e visual genérico de template. Valorize fotografias reais do estabelecimento, cadeiras marrons, madeira, ambiente e uniformes bordô. Garanta contraste e foco visível.

## Dados confirmados
- Nome: El Barbero Barbearia — Dom Pedro.
- Endereço: Av. Pedro Teixeira, 351 - Dom Pedro, Manaus - AM, 69040-550.
- Telefone: +55 92 98194-3510.
- Instagram: https://www.instagram.com/barbearia.elbarbero/
- Google Maps: https://www.google.com/maps/place/El+Barbero+Barbearia+-+Dom+Pedro/data=!4m2!3m1!1s0x0:0x9305bbea23789d79
- As informações recebidas mencionam 263 avaliações no Google, mas não exiba nota ou contagem como dado estruturado sem verificar a informação atual. Não invente horário de funcionamento.
- Paleta veio de análise visual dos anexos e é uma padronização proposta, não manual oficial certificado.

## Estrutura da página
Manter uma única landing page, curta e útil:
1. **Abertura/intro de marca** — animação da logo por 8 segundos, seguida automaticamente da página.
2. **Cabeçalho** — logo, navegação por âncoras e botão “Agendar horário”.
3. **Hero** — fotografia real integrada ao layout como fundo ou composição editorial, não como cartaz/texto rasterizado. H1 único: “Barbearia clássica no Dom Pedro, em Manaus”. Texto curto com personalidade, sem promessas não confirmadas. CTA principal para WhatsApp e secundário para localização.
4. **Serviços** — exibir apenas serviços e preços confirmados nos dados do projeto. Se não houver dados confirmados, criar estrutura preparada e não preencher com conteúdo fictício.
5. **A experiência El Barbero** — poucas fotografias reais do ambiente, atendimento e detalhes. As imagens devem compor a grade/layout com recortes responsivos, máscaras, proporções e overlays CSS discretos; não colocar todo o conteúdo em uma imagem única. Não distorcer nem cortar rostos/elementos importantes.
6. **Localização e contato** — endereço, telefone clicável, Instagram e link para rotas no Google Maps.
7. **Rodapé** — nome, endereço resumido, telefone e links úteis.
Não criar seções vazias, depoimentos fictícios, FAQ desnecessário ou formulário sem destino funcional. Pode ajustar a ordem para melhor conversão.

## Imagens e mídia
- Inspecione os assets já existentes e use logo, fotografias e vídeo enviados quando estiverem no projeto. Não substitua assets da marca por imagens genéricas sem necessidade.
- A intro deve usar o vídeo de abertura fornecido, se disponível no projeto. Reproduzir por 8 segundos e depois revelar a landing page. Se o vídeo for menor, respeitar os 8 segundos totais com uma transição discreta; se falhar, mostrar a logo estática e seguir após 8 segundos.
- Vídeo: `muted`, `playsinline`, sem controles visíveis; respeitar `prefers-reduced-motion` e oferecer forma acessível de pular a intro. Não bloquear navegação nem manter a intro em visitas subsequentes da mesma sessão se a arquitetura permitir sem armazenamento excessivo.
- Não carregar a intro novamente a cada renderização. Garantir fallback quando autoplay for bloqueado.
- Usar `<img>`/`<picture>` semânticos para conteúdo e CSS background somente para decoração. Imagens integradas ao layout, nunca como uma única arte contendo toda a seção.
- Definir `width`/`height` ou `aspect-ratio`, `object-fit: cover` com `object-position` ajustável por imagem, `alt` descritivo e lazy loading abaixo da dobra. Não usar lazy loading na imagem LCP principal.
- Preferir WebP/AVIF quando houver conversão viável; preservar originais. Evitar imagens pesadas, CLS e carregamento de bibliotecas de animação grandes.

## Responsividade e acessibilidade
- Mobile-first; validar visualmente em larguras de 320, 375, 768, 1024 e 1440 px.
- Layout sem overflow horizontal em smartphone, tablet e desktop. Navegação mobile funcional; botões com área de toque adequada; CTAs sem cobrir conteúdo.
- Usar grid/flex, unidades fluidas (`clamp`, `%`, `rem`) e breakpoints coerentes.
- Não depender de hover para funções essenciais. Estados `focus-visible`, labels acessíveis, ordem de tabulação lógica, landmarks semânticos e textos alternativos.
- Respeitar `prefers-reduced-motion`; transições leves e sem movimento parallax obrigatório.
- Verificar contraste de texto e botão.

## Copy e conversão
- Escrever em português brasileiro, com voz clássica, confiante e direta.
- Distribuir naturalmente termos locais: “barbearia no Dom Pedro”, “barbearia em Manaus” e “corte masculino” somente quando compatíveis com os serviços confirmados.
- CTAs consistentes: “Agendar pelo WhatsApp”, “Ligar agora” e “Como chegar”.
- WhatsApp: usar link `https://wa.me/5592981943510` com mensagem inicial URL-encoded, por exemplo: “Olá! Gostaria de consultar horários para agendar na El Barbero.” Não afirmar que o agendamento está confirmado; o link inicia uma conversa.
- Telefone: `tel:+5592981943510`. Instagram e Google Maps devem abrir destinos corretos; links externos em nova aba com `rel="noopener noreferrer"` quando aplicável.

## SEO local e técnico — implementar e validar
1. **Title** único, descritivo e natural, por exemplo: `El Barbero Barbearia no Dom Pedro, Manaus | Agende seu horário`.
2. **Meta description** única, relevante e sem promessas falsas, incluindo bairro/cidade e CTA.
3. Um único `<h1>` principal; organizar `<h2>` e `<h3>` sem saltos semânticos. Usar `header`, `nav`, `main`, `section`, `address` e `footer` adequadamente.
4. Canonical absoluta apontando para o domínio de produção confirmado. Se o domínio final não estiver configurado no projeto, deixar um único marcador claramente documentado e não publicar canonical de localhost.
5. Validar `meta robots`, `robots.txt` e sitemap XML. Produção deve permitir rastreamento/indexação; ambiente local/staging não deve ser indexado. Não bloquear CSS, JS ou imagens necessários à renderização.
6. JSON-LD válido usando `BarberShop` se suportado pelo Schema.org; incluir somente dados confirmados: `name`, `address` (PostalAddress), `telephone`, `url` quando o domínio final for conhecido, `sameAs` do Instagram e `hasMap`/map URL quando apropriado. Não inventar `openingHours`, `priceRange`, `aggregateRating`, avaliações ou serviços.
7. Open Graph e metadados sociais coerentes, favicon e nome da marca.
8. URLs e metadados sem conteúdo duplicado; conteúdo principal renderizado no HTML e acessível sem depender de JavaScript.
9. Validar com ferramenta de teste de dados estruturados/HTML quando houver acesso; caso contrário, fazer validação local e informar limitações.

## Performance
- Priorizar LCP, CLS e INP; dimensionar mídia, evitar layout shifts e minimizar JS/CSS.
- Carregar fontes de modo eficiente e usar fontes locais já presentes se disponíveis. Evitar dependência externa desnecessária.
- Não colocar vídeo pesado como fundo permanente do hero. A intro é exceção e deve ser otimizada.
- Não adicionar mapa interativo pesado por padrão; usar link/preview leve para Google Maps.
- Confirmar ausência de erros no console e links quebrados, conforme ferramentas disponíveis.

## Rastreamento de conversões
- Preparar eventos para cliques em WhatsApp, telefone, rotas/Google Maps, Instagram e CTA de agendamento.
- Se Google Tag Manager/GA4 já estiver configurado, reutilizar a implementação existente. Enviar eventos com nomes claros, por exemplo `whatsapp_click`, `phone_click`, `directions_click`, `instagram_click`, `booking_cta_click`, sem duplicar disparos.
- Se não houver ID/container configurado, criar uma camada de eventos compatível (`dataLayer` apenas quando disponível) e documentar os IDs necessários; não inventar IDs nem inserir tags de terceiros com IDs falsos.
- Registrar origem/posição do CTA quando possível (`hero`, `header`, `contact`, `footer`). Não enviar dados pessoais desnecessários.

## Critérios de aceite
- [ ] Landing page curta, coerente com a identidade El Barbero e sem dados inventados.
- [ ] Intro de 8 segundos com fallback, acessibilidade e transição para o site.
- [ ] Layout funcional em 320, 375, 768, 1024 e 1440 px, sem overflow horizontal.
- [ ] Fotografias integradas ao layout, responsivas e sem distorção.
- [ ] Apenas um H1 e hierarquia de headings válida.
- [ ] Title, description, canonical, robots, robots.txt, sitemap e JSON-LD revisados.
- [ ] Links de WhatsApp, telefone, Instagram e rotas testados.
- [ ] Eventos de conversão implementados sem duplicação.
- [ ] Imagens dimensionadas, lazy loading correto e ausência de CLS evidente.
- [ ] Testes/comandos disponíveis executados; limitações documentadas.

## Entrega
Implemente diretamente no projeto existente. Ao terminar, apresente um resumo curto com arquivos alterados, verificações executadas, resultado e pendências que dependem de dados/credenciais externas. Não reescreva este prompt nem faça alterações repetitivas fora do escopo.
