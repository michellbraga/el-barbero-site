# AGENTS.md — Instruções permanentes para Codex

- Leia `PROMPT.md` e `TASKS.md` antes de agir.
- Trabalhe exclusivamente no projeto EL BARBERO, com PHP 8.3, MySQL/PDO, HTML/CSS/JS e PWA, salvo decisão aprovada.
- Execute somente a fase explicitamente solicitada.
- Antes de editar, inspecione os arquivos existentes e resuma o plano.
- Não apague nem recrie dados; nenhuma operação destrutiva no banco sem autorização explícita.
- Nunca exponha segredos. `.env` fica fora do Git; mantenha `.env.example` sem credenciais reais.
- Não invente serviços, preços, durações, nomes, fotos, avaliações, horários ou políticas.
- Use conteúdo original em pt-BR e implemente SEO desde o início: title/description únicos, um H1 por página, hierarquia H2/H3, links internos e dados estruturados verificados.
- Valide entrada no servidor, use PDO preparado, escape a saída HTML, proteja CSRF, sessão, autenticação e webhooks.
- Agendamento deve ser revalidado no servidor e impedir sobreposição concorrente.
- Falhas no WhatsApp não podem perder o agendamento. Diferencie aceite da API de entrega confirmada.
- Não use APIs não oficiais de WhatsApp.
- Não adicione serviços pagos, frameworks pesados ou arquitetura incompatível com hospedagem compartilhada sem autorização.
- Não publique nem conecte a Hostinger sem autorização específica.
- Teste o que alterar. Nunca diga que um teste passou se não foi executado.
- Atualize documentação e `TASKS.md` quando uma fase for concluída.
- Ao final, informe mudanças, arquivos, testes reais, pendências e próxima ação. Não faça a fase seguinte automaticamente.

- Manter exatamente 10 posições preparadas para serviços e 5 para barbeiros; dados reais ainda não fornecidos devem ficar pendentes.
- Um serviço fictício só pode ser usado em demonstração local com aviso `EXEMPLO — SUBSTITUIR`; nunca o publique nem permita agendamento em produção.
- Retratos fictícios são placeholders, não fotos da equipe real. Integrá-los naturalmente ao design e removê-los/substituí-los antes da publicação.
- Preparar a troca posterior da logo, fotos reais, nomes, preços e durações por arquivos/dados, sem reescrever templates.
