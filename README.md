# Recuperacao de senha

**RF**

- O usuario deve poder recuperar sua senha informando o seu email;
- O usuario deve receber um email com instrucoes de recuperacao de senha;
- O usuario deve poder resetar sua senha;

**RNF**

- Utilizar Mailtrap para testar envios em ambiente de dev;
- Utilixar Amazon SES para envio em producao;
- O envio de email deve acontecer em segundo plano (background job);

**RN**

- O link enviado por email para resetar senha, deve expirar em 2h;
- O usuario precisa confirmar a nova senha ao finalizar o processo de recuperacao;

# Atualizacao do perfil

**RF**

- O usuario deve poder atualizar seu nome, email e senha;

**RN**

- O usuario nao pode altera seu email para um email ja utilizado;
- Para atualizar sua senha, o usuario deve informar a senha antiga;
- Para atualizar sua senha, o usaurio precisa confimar a nova senha;


# Agendamento de servicos

**RF**

- O usuario deve poder listar todos os prestadores de sevico cadastrados;
- O usuario deve poder listar os dias de uma mes com pelo menos um disponivel de um prestador;
- O usuario deve poder listar horarios disponiveis em um dia especifico de um prestador;
- O usuario deve poder realizar um agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponiveis entre 8h as 18h (Primeiro as 8 ultimo as 17h);
- O usuario nao pode agendar em um horario ja ocupado;
- O usuario nao pode agendar em um horario que ja passou;
- O usuario nao pode agendar servicos consigo mesmo;
