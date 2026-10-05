# Fullcycle Desafio Node Proxy Reverso

- Criação de docker compose para permitir proxu reverso em uma aplicação Node

## Funcionamento
- Nginx recebe a solicitação http e reencaminha para a aplicação Node;
- A aplicação nodejs, realiza e realiza operações ao banco Mysql e retorna novamente ao nginx;
- E por último, nginx apresenta a resposta do processamento ao cliente (navegador)

## estrutura

```
├── docker-compose.yml
├── nginx
│   ├── Dockerfile
│   └── nginx.conf
└── node
    ├── Dockerfile
    ├── index.js
    ├── package-lock.json
    └── package.json

```


### Instrução de Instalação e execução:

- Execute o camando abaixo para criar um container usando a imagem acima:
```
docker compose up
```
- Acessar a aplicação pelo navegador http://localhost:8080

```
Full Cycle Rocks!!
```
  
