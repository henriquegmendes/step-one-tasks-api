// VERBOS HTTP
// API RESTFUL
// GET POST PUT DELETE

// GET    /tasks      ---> Listar TODOs
// POST   /tasks      ---> Criar um TODO
// GET    /tasks/{id} ---> Listar UM TODO específico
// PUT    /tasks/{id} ---> Editar um TODO específico
// PATCH  /tasks/{id} ---> Editar somente UM campo específico do TODO (campo "done")
// DELETE /tasks/{id} ---> Deletar um TODO específico

// STATUS CODES

// Criar um novo usuário:
// POST --- /users --- Passar qual é o nome e o username do novo usuário

// Formas de transitar informações entre CLIENTE e SERVIDOR
// BODY (corpo da requisição) --- transitar informações vindas de formulários
// PARAMS                     --- transita informações pela rota
// QUERY STRING               --- transita informações por uma query string dentro da propria URL
// HEADERS (cabeçalho)        --- transida informações pelos headers da requisição
