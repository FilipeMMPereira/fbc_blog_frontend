# FbcBlogFrontend

Um sistema de blog moderno desenvolvido com Angular, oferecendo funcionalidades completas para publicação de conteúdo e gerenciamento administrativo.

## 📋 Funcionalidades

### Frontend Público
- **Home**: Página inicial com listagem de posts
- **Categorias**: Navegação por posts categorizados (`/category/:slug`)
- **Detalhes do Post**: Visualização completa de posts (`/details/:slug`)
- **Sobre**: Página institucional
- **Sistema de Autenticação**: Login e criação de conta

### Área Administrativa (Protegida)
- **Dashboard**: Painel de controle administrativo
- **Gerenciamento de Categorias**: Criação e edição de categorias
- **Editor de Posts**: Sistema completo para criação e edição de posts
- **Autenticação**: Sistema de proteção de rotas administrativas

## 🚀 Tecnologias

- **Angular CLI** v20.2.2
- **TypeScript**
- **Lazy Loading** para otimização de performance
- **Route Guards** para proteção de rotas
- **Layouts modulares** (público e administrativo)

## ⚙️ Configuração e Instalação

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn
- Angular CLI (`npm install -g @angular/cli`)

### Instalação
```bash
# Clone o repositório
git clone [URL_DO_REPOSITORIO]
cd FbcBlogFrontend

# Instale as dependências
npm install
```

## 🛠️ Comandos de Desenvolvimento

### Servidor de Desenvolvimento
```bash
ng serve
```
Acesse `http://localhost:4200/`. A aplicação recarregará automaticamente quando você modificar arquivos.

### Geração de Código
```bash
# Gerar componente
ng generate component nome-do-componente

# Gerar serviço
ng generate service nome-do-servico

# Ver todas as opções disponíveis
ng generate --help
```

### Build de Produção
```bash
ng build
```
Os arquivos serão gerados no diretório `dist/`. O build de produção otimiza a aplicação para melhor performance.

### Build de Desenvolvimento
```bash
ng build --configuration development
```

## 🧪 Testes

### Testes Unitários
```bash
ng test
```
Executa os testes usando [Karma](https://karma-runner.github.io).

### Testes End-to-End
```bash
ng e2e
```

### Cobertura de Testes
```bash
ng test --code-coverage
```

## 🗺️ Estrutura de Rotas

### Rotas Públicas
- `/` - Página inicial
- `/login` - Página de login
- `/create-account` - Criação de conta
- `/category/:slug` - Posts por categoria
- `/about` - Página sobre
- `/details/:slug` - Detalhes do post

### Rotas Administrativas (Protegidas)
- `/admin` - Dashboard administrativo
- `/admin/category/create` - Criar categoria
- `/admin/post/create` - Criar post

## 🔐 Autenticação

O sistema utiliza o `AuthService` como guard para proteger as rotas administrativas. Certifique-se de estar autenticado para acessar a área `/admin`.

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── layouts/
│   │   ├── admin/          # Layout da área administrativa
│   │   └── layout/         # Layout público
│   ├── pages/
│   │   ├── admin/          # Páginas administrativas
│   │   ├── auth/           # Páginas de autenticação
│   │   ├── home/           # Página inicial
│   │   ├── about/          # Página sobre
│   │   └── details/        # Página de detalhes
│   └── services/           # Serviços da aplicação
```

## 🚀 Deploy

### Build para Produção
```bash
ng build --configuration production
```

### Variáveis de Ambiente
Configure as variáveis de ambiente nos arquivos:
- `src/environments/environment.ts` (desenvolvimento)
- `src/environments/environment.prod.ts` (produção)

## 📝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).

## 🐛 Problemas Conhecidos

- Documente aqui qualquer problema conhecido ou limitação

## 📞 Suporte

Para dúvidas ou suporte, entre em contato:

- **Email**: filipepereira977@gmail.com
- **Telefone**: +258 849013127 ou +258 868011729
- **Desenvolvedor**: Filipe Pereira

Ou abra uma issue no repositório para reportar bugs ou sugerir melhorias.

---

**Desenvolvido com ❤️ por Filipe Pereira usando Angular**
