## Hashing de senha

npm i bcryptjs
npm i -D @types/bcryptjs

## Diferença entre hashing e criptografia

Hashing:
- exemplos: MD5, SHA-1, SHA-256
- não pode ser desfeito. É um processo unidirecional.

Criptografia:
- Reversível. Tendo a chave, posso descriptografar o dado.

## Autenticaçao x Autorizaçao (Permissão)

autenticaçao -> quem vc diz ser é realmente quem vc é? (token)
autorização -> pode entrar ou nao(se com esse token voce pode entrar naquela rota ou nao)