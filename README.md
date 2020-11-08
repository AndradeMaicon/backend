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