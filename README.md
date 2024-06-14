En serie av punkter for å vise frem T3-stackken, shadcn/ui og tailwindcss.

# 1: Opprett et T3-prosjekt

Hva er T3? Se [T3-stacken](https://create.t3.gg/)

Kjør følgende kommando i et terminalvindu:

```
npm create t3-app@latest
```

Svar på spørsmålene som dukker opp:

```
Need to install the following packages:
create-t3-app@7.34.0
Ok to proceed? (y) y
   ___ ___ ___   __ _____ ___   _____ ____    __   ___ ___
  / __| _ \ __| /  \_   _| __| |_   _|__ /   /  \ | _ \ _ \
 | (__|   / _| / /\ \| | | _|    | |  |_ \  / /\ \|  _/  _/
  \___|_|_\___|_/‾‾\_\_| |___|   |_| |___/ /_/‾‾\_\_| |_|


│
◇  What will your project be called?
│  intro-t3-shadcn-tailwind
│
◇  Will you be using TypeScript or JavaScript?
│  JavaScript
│
◇   ───────────────────────────────────────╮
│                                          │
│  Wrong answer, using TypeScript instead  │
│                                          │
├──────────────────────────────────────────╯
│
◇  Will you be using Tailwind CSS for styling?
│  Yes
│
◇  Would you like to use tRPC?
│  Yes
│
◇  What authentication provider would you like to use?
│  None
│
◇  What database ORM would you like to use?
│  Prisma
│
◇  Would you like to use Next.js App Router?
│  No
│
◇  What database provider would you like to use?
│  SQLite (LibSQL)
│
◇  Should we initialize a Git repository and stage the changes?
│  No
│
◇  Should we run 'npm install' for you?
│  No
│
◇  What import alias would you like to use?
│  @/

✔ intro-t3-shadcn-tailwind scaffolded successfully!
```

# 2: Kjør prosjektet

```
Next steps:
  cd intro-t3-shadcn-tailwind
  npm install
  npm run db:push
  npm run dev
  git commit -m "initial commit"
```

# 3: Installer Shadcn/UI

Hva er shadcn/ui? Se [shadcn-ui-docs](https://ui.shadcn.com/).

Installer [Shadcn/UI NEXT.js](https://ui.shadcn.com/docs/installation/next)

Første steget er å lage et next.js prosjekt. Det har vi allerede gjort, så start på steg 2.

```
npx shadcn-ui@latest init
```

Det kommer et par spørsmål, som jeg kommer til svare slik på:

```
✔ Which style would you like to use? › Default
✔ Which color would you like to use as base color? › Slate
✔ Would you like to use CSS variables for colors? … no / yes
```

# 4: La oss lage vår første komponent #DarkMode

Install guide for dark mode: [shadcn-ui-dark-mode-next-js](https://ui.shadcn.com/docs/dark-mode/next)

Når vi har fullført den guiden, så har vi noen feil. For å fikse de må vi bare installere noen komponenter.

Kjør følgende kommandoer:

```
npx shadcn-ui@latest add button
npx shadcn-ui@latest add dropdown-menu
```
