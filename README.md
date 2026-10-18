# Rotina a Dois

Site do Marcelo e da Carla para organizar rotina, hábitos, finanças, compras e notas.
Tudo é separado em três pilares: **Marcelo**, **Carla** e **Nós dois**.

- HTML, CSS e JavaScript puros (sem build), hospedado na Vercel
- Dados no Firebase Firestore, com cache offline e atualização em tempo real entre os dois celulares
- Login por e-mail e senha (Firebase Auth); só os dois e-mails liberados entram

## Arquivos

| Arquivo | O que é |
|---|---|
| `index.html` | O site inteiro (telas, estilos e lógica) |
| `config.js` | Configuração do Firebase e quem é cada e-mail |
| `firestore.rules` | Regras de segurança do banco |

## Como colocar no ar

### 1. Firebase
1. Crie um projeto em <https://console.firebase.google.com> (ex.: `rotina-a-dois`).
2. **Authentication > Sign-in method**: ative **E-mail/senha**.
3. **Authentication > Users > Add user**: crie o usuário do Marcelo e o da Carla.
4. **Firestore Database > Criar banco** (modo produção, região `southamerica-east1`).
5. **Firestore > Regras**: cole o conteúdo de `firestore.rules` com os dois e-mails reais e publique.
6. **Configurações do projeto > Seus apps > Web (`</>`)**: registre um app e copie o `firebaseConfig`.

### 2. `config.js`
Cole o `firebaseConfig` e troque os dois e-mails em `PESSOAS`.
A chave `apiKey` do Firebase web não é secreta; quem protege os dados são as regras do Firestore.

### 3. Vercel
1. Em <https://vercel.com/new>, importe este repositório.
2. Framework Preset: **Other**. Sem comando de build e sem pasta de saída.
3. Deploy. A cada `git push` na `main`, a Vercel publica de novo.
4. (Opcional) Em Firebase > Authentication > Settings > Authorized domains, adicione o domínio `*.vercel.app` do site.

## Estrutura dos dados (Firestore)

Toda coleção guarda `who` (`marcelo` | `carla` | `casal`), `by` (quem lançou) e `createdAt`.

- `tasks`: `title`, `date` (AAAA-MM-DD), `period`, `done`
- `habits`: `name`, `days` (mapa `{ "AAAA-MM-DD": true }`)
- `transactions`: `desc`, `amount`, `type` (`saida`/`entrada`), `category`, `date`, `installment` (`n`, `total`, `group`)
- `shopping`: `item`, `qty`, `done`
- `notes`: `text`, `pinned`
- `settings/financas`: `limiteMensal`
