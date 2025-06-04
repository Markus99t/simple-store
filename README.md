# GymBeam Store

GymBeam Store je responzívna webová aplikácia simulujúca online obchod s produktmi rôzneho druhu. Aplikácia obsahuje autentifikáciu používateľov, prehliadanie produktov, filtrovanie podľa kategórií a detailné zobrazenie produktov.

## ✨ Funkcie

- **Autentifikácia používateľov** - prihlásenie/odhlásenie cez FakeStore API
- **Responzívny dizajn** - optimalizované pre desktop, tablet a mobil
- **Prehliadanie produktov** - grid view s možnosťou filtrovania
- **Filtrovanie podľa kategórií** - jednoduché prepínanie medzi kategóriami
- **Detail produktu** - detailné informácie, obrázky a hodnotenia
- **Skeleton loading** - smooth loading stavy pre lepší UX
- **Chránené trasy** - prístup k produktom iba pre prihlásených používateľov
- **SSG optimalizácia** - statické generovanie stránok pre produkty

## 🛠️ Tech Stack

- **Next.js 15** - React framework s App Router
- **React 19** - najnovšia verzia React
- **Tailwind CSS 4** - utility-first CSS framework
- **FakeStore API** - mock API pre produkty a autentifikáciu
- **ESLint** - linting a code quality

## 🚀 Spustenie projektu

### Požiadavky

- Node.js 18+
- npm, yarn alebo pnpm

### Inštalácia

1. Klonujte repozitár:

```bash
git clone https://github.com/Markus99t/simple-store.git
cd simple-store
```

2. Nainštalujte závislosti:

```bash
npm install
# alebo
yarn install
# alebo
pnpm install
```

3. Spustite development server:

```bash
npm run dev
# alebo
yarn dev
# alebo
pnpm dev
```

4. Otvorte [http://localhost:3000](http://localhost:3000) v prehliadači

### Demo prístupové údaje

Pre testovanie aplikácie použite:

- **Username:** `johnd`
- **Password:** `m38rmF$`

## 📁 Štruktúra projektu

```
src/
├── app/                        # Next.js App Router
│   ├── globals.css             # Globálne CSS štýly
│   ├── layout.js               # Root layout
│   ├── page.js                 # Domovská stránka
│   ├── login/                  # Prihlásenie
│   └── products/               # Produkty
│       ├── layout.js           # Layout pre produkty
│       ├── page.js             # Zoznam produktov
│       └── [id]/               # Detail produktu
├── components/                 # React komponenty
│   ├── Header.js               # Hlavička
│   ├── ProductDetail.js        # Detail produktu
│   ├── ProductsList.js         # Zoznam produktov
│   ├── ProductNavigation.js    # Navigácia
│   ├── ProtectedRoute.js       # Ochrana trás
│   └── Skeletons.js            # Loading komponenty
└── contexts/
    └── AuthContext.js          # Context pre autentifikáciu
```

## 🎨 Dizajn a UX

- **Farebná schéma:** Orange (#ff6b00) ako primárna farba GymBeam brand
- **Responzívny grid:** Automatické prispôsobenie pre rôzne veľkosti obrazoviek
- **Smooth animácie:** Hover efekty a prechody pre lepší UX
- **Loading stavy:** Skeleton komponenty počas načítavania
- **Accessibility:** Semantické HTML a ARIA atribúty

## 🔧 Dostupné skripty

```bash
npm run dev      # Spustenie development servera s Turbopack
npm run build    # Build produkčnej verzie
npm run start    # Spustenie produkčnej verzie
npm run lint     # ESLint kontrola kódu
```

## 🌐 API Endpointy

Aplikácia používa [FakeStore API](https://fakestoreapi.com/):

- `GET /products` - Zoznam všetkých produktov
- `GET /products/{id}` - Detail produktu
- `GET /products/categories` - Kategórie produktov
- `POST /auth/login` - Prihlásenie používateľa
- `GET /users/1` - Údaje používateľa

## 📱 Responzívnosť

- **Mobile:** 1 kolóna v grid
- **Tablet:** 2 kolóny v grid
- **Desktop:** 3-4 kolóny v grid
- **Navigation:** Hamburger menu na mobiloch

## 🔒 Autentifikácia

- Local storage pre uchovanie auth tokenu
- Context API pre globálny stav
- Automatické presmerovanie na login pri neautorizovanom prístupe
- Perzistencia session medzi reloadmi

## ⚡ Optimalizácie

- **SSG:** Statické generovanie pre produktové stránky
- **Image Optimization:** Next.js Image komponenty
- **Code Splitting:** Automatické rozdelenie bundles
- **Caching:** ISR s revalidation na 1 hodinu
- **Turbopack:** Rýchly development bundler

## 📄 Licencia

Tento projekt je určený na vzdelávacie účely a demonštráciu Next.js možností.

---

Vyvinuté s ❤️ pomocou Next.js a Tailwind CSS
