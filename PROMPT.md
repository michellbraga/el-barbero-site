# PROMPT.md — Projeto EL BARBERO

## 1. Papel e objetivo

Você é o agente de engenharia responsável por construir do zero o site e sistema de agendamento da **EL BARBERO Barbearia — Dom Pedro, Manaus/AM**. Trabalhe exclusivamente neste repositório, usando as ferramentas disponíveis no VS Code/Codex.

O objetivo é entregar um site profissional alinhado à identidade real da barbearia, otimizado para SEO local, responsivo, acessível, rápido e integrado a um sistema de agendamento com painel administrativo e notificações pelo WhatsApp Business Platform oficial.

**Não implemente o projeto inteiro de uma só vez.** Siga `TASKS.md` por etapas, executando apenas a fase autorizada. Antes de qualquer alteração, leia `AGENTS.md`, este arquivo e a fase atual de `TASKS.md`.

## 2. Regras obrigatórias de execução

1. Comece inspecionando o repositório e o ambiente. Se estiver vazio, confirme isso. Não presuma que arquivos, banco de dados ou configurações existentes não importam.
2. Antes de escrever código, produza um diagnóstico curto: arquivos encontrados, estrutura proposta, requisitos ainda não definidos, riscos e plano da fase atual.
3. Não apague, recrie, limpe, sobrescreva nem faça `DROP`, `TRUNCATE` ou migração destrutiva em banco de dados. Nunca altere dados de produção sem autorização explícita.
4. Não imprima nem inclua credenciais, tokens, cookies, dados pessoais ou valores de `.env` em logs, documentação, commits ou respostas. Use `.env.example` apenas com nomes de variáveis e valores fictícios.
5. Não conecte, configure ou publique automaticamente o site na Hostinger. Primeiro prepare e teste localmente; implantação será uma fase separada e autorizada.
6. Não crie contas, repositórios, serviços pagos ou integrações externas sem solicitação explícita.
7. Não introduza Node.js como servidor de produção, banco de dados externo, framework pesado ou serviço pago sem demonstrar a necessidade e obter autorização.
8. Não invente nomes de barbeiros, preços, duração dos serviços, promoções, depoimentos, horários especiais, políticas ou dados de contato. Marque informações não confirmadas como pendentes ou use dados de demonstração claramente identificados, nunca apresentados como reais.
9. Não use imagens genéricas como se fossem fotos reais da EL BARBERO. Priorize os materiais fornecidos pelo proprietário. Use imagens temporárias somente com indicação clara de substituição.
10. Implemente apenas a fase solicitada. Ao terminar, informe arquivos alterados, decisões, comandos/testes executados, resultados e pendências. Não comece a próxima fase automaticamente.

## 3. Informações oficiais fornecidas

- Marca: **EL BARBERO**.
- Nome de referência no Google: **El Barbero Barbearia - Dom Pedro**.
- Instagram: https://www.instagram.com/barbearia.elbarbero/
- Google Maps: https://www.google.com/maps/place/El+Barbero+Barbearia+-+Dom+Pedro/@-3.0893882,-60.0414623,17z/
- Endereço informado: Avenida Pedro Teixeira, 351 — Dom Pedro, Manaus — AM, CEP 69040-550.
- Telefone informado: (92) 98194-3510. Antes de usar links de contato em produção, validar com o proprietário se este é o número que deve receber mensagens e agendamentos.
- Horário informado como referência inicial: segunda a sábado, 09:00–20:00; domingo fechado. Deve ser configurável no painel e confirmado antes de produção.
- Avaliações: o material fornecido menciona 263 avaliações no Google. Não exiba contagem ou nota dinâmica sem validar os dados atuais e a permissão/método de obtenção.
- Instagram visual: grade com identidade vintage de barbearia, logotipo ilustrado, letreiros e tipografia de personalidade, tons escuros, madeira, couro, tons quentes, fotografia do ambiente e dos serviços, cortes, equipe e experiência no local. A captura de tela do Instagram foi fornecida pelo usuário como referência visual. Não tente extrair detalhes ilegíveis da captura; solicite os arquivos originais da logo/fotos quando necessários.

### Informações comerciais a confirmar antes de publicação
- Lista definitiva de serviços, preços e duração de cada serviço.
- Nomes, fotos, biografias, serviços e disponibilidade dos barbeiros.
- Regras de intervalo entre atendimentos, antecedência mínima/máxima para agendar e política de cancelamento/atraso.
- Se clientes podem escolher qualquer barbeiro ou selecionar “primeiro disponível”.
- Número oficial de WhatsApp para mensagens e configuração da WhatsApp Business Platform.
- Horários excepcionais, feriados e pausas.
- Texto de privacidade e consentimento para mensagens transacionais.

## 4. Direção visual e UX

Construir uma identidade digital coerente com o Instagram real, sem transformar a marca em um tema genérico “luxo preto e dourado”.

- Direção: barbearia clássica/vintage, masculina, autêntica, acolhedora e profissional.
- Base visual sugerida: fundos escuros e carvão; tons de madeira, couro, creme/off-white e cores de destaque retiradas da logo original. Defina tokens de cor após examinar os arquivos originais da marca.
- Tipografia: combinação legível de uma fonte de personalidade para títulos e uma sans-serif altamente legível para textos e formulários. Evite excesso de fontes decorativas.
- Usar fotos reais fornecidas pelo proprietário em hero, galeria, equipe e ambiente. Manter contraste e legibilidade.
- Interface mobile-first, rápida, com navegação clara, botões de agendamento visíveis e acessíveis.
- Não sobrecarregar a página com animações. Respeitar `prefers-reduced-motion`.
- Incluir estados de carregamento, vazio, erro, sucesso, indisponibilidade e confirmação.
- Todos os botões devem funcionar; não criar controles decorativos sem ação.
- Usar textos em português brasileiro, moeda BRL e fuso `America/Manaus`.

## 5. Escopo do site público

Planejar e implementar, conforme as fases:

1. **Página inicial** com proposta de valor verdadeira, apresentação da barbearia, CTA de agendamento, fotos reais, serviços em destaque, profissionais, diferenciais confirmados, avaliações verificáveis, localização e horário.
2. **Serviços** com nome, descrição original, preço e duração confirmados; não inventar valores.
3. **Equipe** com nome, foto, apresentação e serviços associados, somente com dados fornecidos.
4. **Galeria** com imagens autorizadas da barbearia, cortes, ambiente e experiência.
5. **Agendamento** em etapas simples: escolher serviço, escolher profissional ou primeiro disponível (se habilitado), escolher data/horário, informar nome e telefone, revisar e confirmar.
6. **Localização/contato** com endereço, telefone validado, link de rota para Google Maps, horário e contato.
7. **Política de privacidade** clara sobre dados coletados, finalidade, retenção, contato e mensagens.
8. **Páginas individuais de serviços**, se houver conteúdo suficiente e valor real para SEO; evitar páginas duplicadas ou páginas finas criadas apenas para palavras-chave.
9. **Página de status/consulta do agendamento** usando token público aleatório e não sequencial, sem expor dados pessoais ou permitir enumeração.

## 6. Agendamento — regras funcionais obrigatórias

- Disponibilidade calculada no servidor a partir de horário de funcionamento, serviços ativos, duração do serviço, barbeiro/serviços habilitados, pausas, bloqueios, feriados e agendamentos existentes.
- Revalidar disponibilidade no servidor no momento de criar ou remarcar. Não confiar apenas no horário escolhido pelo navegador.
- Impedir colisões para o mesmo barbeiro mesmo com duas requisições concorrentes. Usar transações e estratégia de bloqueio/serialização adequada ao MySQL; um índice `UNIQUE` isolado não impede sobreposição de intervalos.
- Persistir preço e duração como snapshot no agendamento para preservar o histórico se o serviço mudar depois.
- Agendamentos cancelados não bloqueiam horários.
- Usar estados explícitos, por exemplo: `pending`, `confirmed`, `cancelled`, `completed`, `no_show`, com transições validadas no servidor.
- Não armazenar dados pessoais desnecessários.
- Respostas de API não devem revelar stack traces, SQL, caminhos locais ou informações internas.
- Proteger contra spam e tentativas automatizadas com limites proporcionais, validação e mecanismos adequados.
- Registrar histórico de mudanças relevantes no agendamento.
- Definir e documentar regras de antecedência, duração de intervalos, reagendamento e cancelamento após confirmação do proprietário.

## 7. Painel administrativo

- Somente usuários administrativos previamente criados podem entrar. Não oferecer cadastro público de administrador.
- Login seguro, senha armazenada com hash moderno, sessão protegida, expiração, regeneração do ID de sessão e proteção CSRF.
- Agenda por dia/semana, filtros por barbeiro/status e detalhes mínimos necessários.
- Criar/editar/desativar serviços e barbeiros.
- Configurar horários de trabalho, pausas, bloqueios, feriados e associações barbeiro-serviço.
- Confirmar, cancelar, remarcar e marcar atendimentos conforme permissões.
- Visualizar estado das notificações WhatsApp e erros sem expor tokens.
- Ações administrativas críticas devem ser validadas no servidor e registradas.
- Não incluir credenciais administrativas padrão fixas no código.

## 8. WhatsApp Business Platform oficial

- Usar a API oficial da Meta/WhatsApp Business Platform; não usar automação de WhatsApp Web, QR code de sessão ou bibliotecas não oficiais.
- Manter tokens, IDs e segredos exclusivamente em variáveis de ambiente.
- Criar uma camada de serviço isolada para envio e processamento de webhooks.
- A confirmação do agendamento deve ser salva no banco antes de tentar enviar a mensagem.
- Usar uma fila persistente `whatsapp_messages` e processamento por cron/worker compatível com o plano de hospedagem. Não presumir que cron, execução em background ou Composer estão disponíveis sem verificar.
- Falha do WhatsApp não pode apagar nem invalidar o agendamento; registrar falha e permitir nova tentativa segura.
- Distinguir mensagem aceita pela API de mensagem entregue/lida. Atualizar estados via webhook quando disponível.
- Validar assinatura/origem de webhooks conforme documentação oficial, aplicar idempotência e evitar processar o mesmo evento várias vezes.
- Mensagens iniciadas pela empresa devem respeitar as regras atuais da Meta, categorias e templates aprovados quando exigidos, janela de atendimento e consentimento aplicável.
- Não alegar que a integração está ativa até que as credenciais reais, templates, webhook e testes sejam configurados e aprovados.
- Documentar claramente quais variáveis e configurações o proprietário precisa fornecer, sem solicitar que cole segredos no chat.

## 9. SEO local — requisitos obrigatórios

SEO faz parte da arquitetura e do conteúdo desde o início, não é um retoque final.

### Metadados
- Cada página indexável deve ter `<title>` único, descritivo, natural e coerente com sua intenção de busca.
- Cada página indexável deve ter `meta description` única, clara e útil, sem promessas não comprovadas nem repetição artificial de palavras-chave.
- Configurar canonical quando necessário; evitar duplicação entre URLs com parâmetros.
- Definir idioma do documento como `pt-BR`.
- Garantir que cada página tenha **exatamente um H1 principal visível**, com H2/H3 organizando o conteúdo por hierarquia semântica. Não escolher níveis apenas pela aparência.
- Títulos e descrições devem ser específicos da página. Não usar o mesmo texto em todas as rotas.

### Conteúdo e intenção de busca
- Escrever conteúdo original em português brasileiro para buscas locais como “barbearia no Dom Pedro”, “barbearia em Manaus” e serviços específicos, somente quando a página realmente tratar desse assunto.
- Mencionar Manaus, Dom Pedro, endereço e serviços naturalmente, sem keyword stuffing.
- Não afirmar “a melhor”, “a mais bem avaliada”, preços, disponibilidade ou resultados sem comprovação.
- Criar páginas individuais para serviços somente quando houver conteúdo útil e diferenciado.
- Incluir NAP consistente (nome, endereço e telefone) onde apropriado.
- Usar links internos descritivos e URLs legíveis.
- Imagens devem ter nomes de arquivo úteis e `alt` descritivo quando informativo; imagens decorativas usam `alt=""`. Não encher `alt` com palavras-chave.
- Preparar sitemap.xml e robots.txt coerentes com o ambiente; não bloquear CSS/JS necessários.
- Implementar dados estruturados Schema.org adequados à entidade local e às páginas, usando apenas informações verificadas. Validar formato e consistência; nunca inventar avaliações ou `aggregateRating`.
- Não inserir avaliações copiadas sem autorização nem fabricar estrelas nos resultados.
- Garantir conteúdo principal renderizado e acessível aos mecanismos de busca sem depender exclusivamente de interação JavaScript.
- Preparar a propriedade para Google Search Console e documentação para submissão manual. Não alegar indexação ou ranking garantidos.
- SEO técnico: HTTPS em produção, URLs canônicas, status HTTP correto, redirecionamentos coerentes, páginas de erro adequadas, imagens otimizadas, Core Web Vitals, responsividade e acessibilidade.

### Exemplo inicial de metadados da página inicial
Use como rascunho sujeito à revisão de conteúdo:
- Title: `El Barbero Barbearia no Dom Pedro, Manaus`
- Meta description: `Conheça a El Barbero Barbearia no bairro Dom Pedro, em Manaus. Confira os serviços, conheça a equipe e agende seu horário online.`
- H1 sugerido: `Seu próximo corte na El Barbero, no Dom Pedro`
Não repetir esse H1 em outras páginas. Revisar o texto final de acordo com o conteúdo real e as páginas construídas.

## 10. Acessibilidade, performance e PWA

- HTML semântico, navegação por teclado, foco visível, labels, mensagens de erro acessíveis, contraste adequado e nomes acessíveis em botões/ícones.
- Layout responsivo com prioridade para celular.
- Otimizar imagens em dimensões adequadas e formatos modernos quando compatíveis.
- Carregar imagens abaixo da dobra de forma eficiente; evitar lazy-load da imagem principal crítica se isso prejudicar LCP.
- Evitar dependências e scripts desnecessários.
- PWA: `manifest.webmanifest`, ícones válidos e service worker com estratégia segura.
- Service worker pode armazenar assets estáticos, mas **nunca deve colocar em cache respostas privadas do painel, dados pessoais, sessões ou agendamentos**.
- Garantir atualização do service worker e recuperação de versões antigas.
- Não afirmar que o sistema funciona offline para criar agendamentos se isso não for realmente implementado com sincronização segura.

## 11. Stack e arquitetura inicial

- Hospedagem alvo: Hostinger Business; validar recursos disponíveis antes da implantação.
- PHP 8.3.
- MySQL com InnoDB.
- PDO com prepared statements.
- HTML semântico, CSS e JavaScript conforme necessário.
- PWA.
- Fuso horário: `America/Manaus`.
- Repositório Git privado no GitHub, a ser criado pelo proprietário.
- Desenvolvimento local no VS Code com Codex.

Começar com arquitetura PHP simples, organizada e compatível com hospedagem compartilhada. Não adicionar framework ou dependência sem justificar benefício e compatibilidade.

Estrutura de referência a ajustar após a inspeção inicial:

```text
el-barbero/
├── app/
│   ├── Controllers/
│   ├── Middleware/
│   ├── Repositories/
│   ├── Services/
│   └── Validators/
├── config/
├── database/
│   ├── migrations/
│   └── seeds/
├── docs/
├── public/
│   ├── assets/
│   ├── images/
│   ├── index.php
│   ├── manifest.webmanifest
│   └── sw.js
├── resources/
│   └── views/
├── routes/
├── storage/
│   └── logs/
├── tests/
├── .env.example
├── .gitignore
├── AGENTS.md
├── PROMPT.md
├── TASKS.md
└── README.md
```

Ajustar a estrutura para manter apenas `public/` acessível pela web. Não supor que a configuração de document root da hospedagem permite essa estrutura até verificar.

## 12. Banco de dados e migrações

Planejar o esquema antes de criar tabelas. Entidades candidatas:
- `admins`
- `services`
- `barbers`
- `barber_services`
- `working_hours`
- `schedule_blocks`
- `customers`
- `appointments`
- `appointment_history`
- `whatsapp_messages`
- `settings`

Use chaves estrangeiras, índices, restrições, datas armazenadas de forma consistente e migrações versionadas. O esquema final pode ser ajustado conforme as regras aprovadas.

- Nunca armazenar senha em texto puro.
- Não usar telefone como identificador público sequencial.
- Não colocar segredos no banco sem necessidade.
- Seeds devem ser opcionais e claramente de demonstração; não criar dados fictícios que apareçam em produção.
- Fazer backup e plano de reversão antes de qualquer migração de produção, com autorização explícita.

## 13. Testes e critérios de aceite

Cada fase deve ter critérios verificáveis. Sempre que aplicável:
- Validar sintaxe PHP com `php -l`.
- Executar testes automatizados disponíveis.
- Testar validação do servidor e falhas de rede.
- Testar acessos não autorizados ao painel e endpoints.
- Testar colisão de agendamentos, incluindo requisições concorrentes.
- Testar horários bloqueados, serviços inativos, cancelamentos e remarcações.
- Testar falha e reprocessamento de notificações.
- Validar metadados, exatamente um H1 por página indexável, hierarquia H2/H3, links, sitemap e robots.
- Testar mobile, teclado, formulários e mensagens de erro.
- Se uma ferramenta não estiver instalada, informar isso em vez de declarar o teste aprovado.
- Não declarar sucesso com base apenas em inspeção visual do código.

## 14. Formato obrigatório da resposta do Codex

Ao terminar cada tarefa, responder com:
1. **O que foi feito**
2. **Arquivos criados/alterados**
3. **Testes executados e resultados reais**
4. **Pendências ou decisões que exigem o proprietário**
5. **Próxima ação recomendada dentro de `TASKS.md`**

Não repetir a especificação inteira em cada resposta. Seja objetivo. Não avançar de fase sem autorização.
