# Relatório de Deploy em Produção — El Barbero

## Publicação
- Repositório: michellbraga/el-barbero-site
- Branch de produção: main
- Commit do site: 9e687cc32c58dc00f89597bf2ab0b372dc08e4f4 — Deploy da versão aprovada do El Barbero
- Projeto Vercel: el-barbero-site
- Estado do deployment: READY (Production)
- URL única do deployment: https://el-barbero-site-hp1eut8h7-michel-braga.vercel.app
- URL oficial: https://www.elb351.com/
- Domínios associados: www.elb351.com (principal); elb351.com redireciona para www.elb351.com com HTTP 308; el-barbero-site.vercel.app permanece associado.
- Projeto Vercel existente verificado; deployment conectado ao repositório michellbraga/el-barbero-site e à branch main. Framework informado como null, sem package.json, vercel.json ou comando de build local; a Vercel publicou os arquivos estáticos da raiz com sucesso.

## Validação realizada
- Vercel reportou estado READY para o commit acima.
- HTTPS: elb351.com redirecionou para www.elb351.com; ambos responderam com a home.
- Home, privacidade e as quatro páginas comerciais responderam HTTP 200.
- Vídeo de abertura, script de rastreamento, robots.txt e sitemap.xml responderam HTTP 200.
- Referências internas a imagens, CSS, JS e páginas testadas responderam HTTP 200.
- As cinco páginas principais têm um único H1; as páginas comerciais têm canonical, e o JSON-LD foi validado localmente.
- GTM-KS829245 está presente na home e nas páginas comerciais. As 21 CTAs de WhatsApp da home estão marcadas para agendamento.
- Os scripts passaram em node --check; git diff --check passou antes do commit.
- robots.txt em produção permite rastreamento e aponta para o sitemap.

## Rastreamento
O código publicado preserva o container GTM-KS829245 e o evento whatsapp_click, com filtros locais para link do número da barbearia, atributo data-conv=agendar, clique real, cinco segundos de permanência, intro fechada e deduplicação de 30 minutos mais debounce. O ID de Ads e o label não foram alterados em configuração; nenhum acesso ou alteração ao GTM publicado foi realizado.

O Tag Assistant e a conta GTM/Google Ads não estavam acessíveis neste trabalho. Portanto, o envio do evento pelo site e os filtros do código foram verificados, mas o disparo final da tag de conversão e a ausência de duplicidade na configuração remota não puderam ser confirmados em Preview.

## Problemas encontrados e correções
- O clone local estava sete commits atrás do main remoto. Foi feito backup e fast-forward para cf2084f antes da integração, preservando também o estado local anterior em stash.
- A revisão do script encontrou inicialização tardia de isGallery, que poderia interromper o carrossel no navegador. A ordem foi corrigida antes da publicação.
- robots.txt local estava configurado para bloquear indexação; foi alterado para permitir rastreamento em produção.
- Nenhum recurso testado retornou 404.

## Limitações dos testes
Não foi possível executar inspeção visual real em desktop e mobile nem coletar o console do navegador nesta sessão. Não foram medidos Lighthouse, Core Web Vitals ou eventos reais no Tag Assistant. A verificação de links WhatsApp confirmou os destinos e as marcações, sem enviar mensagem ou abrir uma conversa.