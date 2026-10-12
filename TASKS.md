# TASKS.md — Plano de implementação EL BARBERO

## Estado atual
- [ ] Reunir referências originais: logo em boa resolução, fotos autorizadas, dados dos serviços e barbeiros.
- [ ] Preparar 10 posições de serviços (1 exemplo fictício marcado apenas para demonstração local + 9 posições vazias) e 5 posições de barbeiros.
- [ ] Planejar placeholders visuais fictícios para barbeiros, integrados ao layout e fáceis de substituir; não usar como representação da equipe real.
- [ ] Confirmar regras comerciais e de agendamento.
- [ ] Criar repositório privado no GitHub.
- [ ] Preparar pasta local no VS Code.
- [ ] Conectar GitHub à Hostinger somente na fase de implantação.

## Fase 1 — Preparação e auditoria local
**Objetivo:** preparar a base sem tocar em produção.

- [ ] Inspecionar o repositório e ambiente local.
- [ ] Confirmar versões disponíveis de PHP, Composer (se necessário), MySQL e ferramentas de teste.
- [ ] Confirmar que `.env`, segredos, uploads privados e logs estão excluídos do Git.
- [ ] Definir estrutura inicial de diretórios e configuração local.
- [ ] Documentar decisões, dependências e dúvidas.
- [ ] Criar README com instruções locais.
**Aceite:** estrutura compreensível, segredos protegidos, instruções reproduzíveis e nenhuma alteração na hospedagem/banco de produção.

## Fase 2 — Especificação visual e conteúdo
- [ ] Analisar logo e referências originais da marca.
- [ ] Definir tokens de cor, tipografia, espaçamento, botões, cartões e estados.
- [ ] Criar mapa do site e fluxo de agendamento.
- [ ] Criar inventário de conteúdo e marcar dados ainda não confirmados.
- [ ] Garantir que placeholders de serviços e retratos fictícios não apareçam como dados reais em produção.
- [ ] Definir plano de SEO por página: intenção, title, description, H1, H2/H3 e links internos.
**Aceite:** direção visual e mapa de conteúdo aprovados antes de desenvolver páginas completas.

## Fase 3 — Modelo de dados e camada de acesso
- [ ] Documentar entidades e relações.
- [ ] Criar migrações versionadas e reversíveis quando possível.
- [ ] Configurar conexão PDO via ambiente.
- [ ] Criar seeds de demonstração opcionais e claramente identificados.
- [ ] Testar constraints, chaves estrangeiras e índices.
**Aceite:** testes em banco local; nenhuma migração de produção; dados de demonstração não confundidos com dados reais.

## Fase 4 — Backend e painel administrativo
- [ ] Login de administrador sem cadastro público.
- [ ] Proteção de sessão, CSRF, validação e autorização por endpoint.
- [ ] CRUD de serviços e barbeiros.
- [ ] Configuração de horários, pausas, bloqueios e dias especiais.
- [ ] Visualização e gestão de agendamentos.
- [ ] Histórico de alterações e logs sem dados sensíveis desnecessários.
**Aceite:** testes de autorização, validação e operações administrativas.

## Fase 5 — Motor de agendamento
- [ ] Calcular horários disponíveis no servidor.
- [ ] Considerar duração, horário de funcionamento, serviço por barbeiro, bloqueios e atendimentos existentes.
- [ ] Revalidar no momento da gravação.
- [ ] Impedir sobreposição, inclusive em requisições concorrentes.
- [ ] Criar, consultar, remarcar e cancelar com regras explícitas.
- [ ] Salvar snapshot de preço/duração e histórico.
**Aceite:** testes de colisão, limites, cancelamentos, remarcações e horários bloqueados.

## Fase 6 — Site público, identidade visual e SEO
- [ ] Implementar layout responsivo alinhado à marca.
- [ ] Página inicial, serviços, equipe, galeria, localização e CTA de agendamento.
- [ ] Fluxo de agendamento mobile-first.
- [ ] Textos originais em pt-BR, sem alegações não verificadas.
- [ ] Title e meta description únicos em cada página indexável.
- [ ] Um H1 por página e hierarquia H2/H3 correta.
- [ ] URLs claras, canonical quando necessário, links internos e imagens otimizadas.
- [ ] Schema.org apropriado apenas com dados confirmados.
- [ ] Gerar sitemap.xml e robots.txt adequados.
**Aceite:** checklist SEO aprovado, mobile testado, conteúdo real revisado pelo proprietário.

## Fase 7 — PWA, acessibilidade e performance
- [ ] Manifesto e ícones válidos.
- [ ] Service worker com cache seguro de assets públicos.
- [ ] Nunca armazenar em cache dados privados ou agendamentos.
- [ ] Testes de teclado, foco, labels, contraste e mensagens de erro.
- [ ] Otimizar imagens e recursos.
**Aceite:** instalação testada em navegador compatível e nenhuma resposta privada no cache.

## Fase 8 — WhatsApp Business Platform oficial
- [ ] Confirmar conta Meta, número, credenciais e templates aprovados.
- [ ] Implementar fila persistente de mensagens.
- [ ] Implementar envio e tratamento de erros/retries idempotentes.
- [ ] Implementar webhook com validação e deduplicação.
- [ ] Diferenciar aceito, enviado, entregue, lido e falhou conforme eventos disponíveis.
- [ ] Confirmar possibilidade de cron/worker na hospedagem.
- [ ] Documentar configuração sem expor segredos.
**Aceite:** teste ponta a ponta autorizado; agendamento permanece salvo mesmo se WhatsApp falhar.

## Fase 9 — Testes integrados e revisão
- [ ] Executar testes automatizados e sintaxe PHP.
- [ ] Testar fluxos públicos e administrativos.
- [ ] Testar segurança básica e erros.
- [ ] Verificar SEO técnico, metadados e dados estruturados.
- [ ] Testar dispositivos móveis e navegadores principais.
- [ ] Revisar textos, preços, serviços, profissionais, endereço e horários com o proprietário.
**Aceite:** relatório de testes com resultados reais e nenhuma falha bloqueadora conhecida.

## Fase 10 — Implantação na Hostinger
**Só iniciar com autorização explícita.**

- [ ] Confirmar recursos do plano, document root, PHP, extensões, HTTPS, Composer (se necessário), cron e permissões.
- [ ] Criar backup e plano de reversão.
- [ ] Configurar segredos fora da pasta pública.
- [ ] Configurar banco e usuário com privilégios mínimos.
- [ ] Executar migrações autorizadas com plano de rollback.
- [ ] Configurar deploy a partir do GitHub sem expor arquivos privados.
- [ ] Testar site, agendamento, painel, webhook e cron em produção.
- [ ] Configurar Search Console e enviar sitemap manualmente.
**Aceite:** checklist de produção concluído e proprietário confirma a publicação.

## Regras de avanço
- Trabalhar em apenas uma fase por vez.
- Não marcar tarefas como concluídas sem evidência.
- Se houver bloqueio, parar e perguntar somente o necessário.
- Não usar credenciais reais em commits, prompts ou logs.
- Não fazer deploy ou alterações de produção sem autorização.
