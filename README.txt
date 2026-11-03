STUDYWAY — TELAS DO FRONT-END
================================

Este pacote contém um protótipo mobile em React Native + Expo inspirado no painel de telas enviado.

ARQUIVOS
--------
- App.js: todas as telas e estilos do protótipo.
- package.json: dependências mínimas para Expo.
- README.txt: este guia.

COMO USAR EM UM PROJETO EXPO EXISTENTE
--------------------------------------
1. Abra o projeto no VS Code.
2. Substitua o conteúdo do App.js pelo App.js deste pacote.
3. No terminal, rode:
   npx expo install @expo/vector-icons
4. Depois:
   npx expo start
5. Abra no Expo Go.

CATÁLOGO DE PDFs
----------------
O aplicativo usa os PDFs das pastas Arquivos ENEM, Arquivos UNESP e Arquivos USP
dentro de PDF's. Antes de iniciar o Expo diretamente com npx, gere o catálogo com:
   npm run generate:pdf-catalog
Os comandos npm run start, npm run web, npm run android e npm run ios fazem
essa geração automaticamente. Os aliases usam hard links e não duplicam os
arquivos originais; a pasta PDF's permanece organizada como estava.

IMPORTANTE
----------
O código é um FRONT-END/protótipo visual. Login, Google, Apple, banco de dados,
Supabase, PDFs, vídeos, cálculo real de desempenho e autenticação ainda são
simulados para deixar as telas navegáveis.

TELAS INCLUÍDAS
---------------
Splash
Onboarding 1, 2 e 3
Login
Cadastro
Recuperação de senha
Configuração inicial
Teste inicial
Início
Calendário
Conteúdos
Matéria
Aula
Exercícios
Simulados
Detalhes do simulado
Desempenho
Perfil
Configurações

PALETA
------
#05051A — azul quase preto
#2563EB — azul
#7C3AED — roxo
#EAF4FF — fundo claro
#FFFFFF — branco

OBSERVAÇÃO
----------
O projeto foi feito sem React Navigation para facilitar o entendimento inicial:
a navegação está controlada por estado dentro do App.js. Depois que as telas
estiverem aprovadas visualmente, podemos separar cada tela em arquivos e ligar
o Supabase.
