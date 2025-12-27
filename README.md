# Webopoli - Site Vitrine

Site vitrine pour Webopoli, création de sites web accessibles pour l'art, la nature et le bien-être.

## 🚀 Stack Technique

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (design system personnalisé)
- **Framer Motion** (animations)
- **Supabase** (formulaire de contact)
- **Lucide React** (icônes)

## 📦 Installation

```bash
cd webopoli
npm install
```

## 🔧 Configuration

### 1. Variables d'environnement

Copie le fichier `.env.example` en `.env.local` :

```bash
cp .env.example .env.local
```

### 2. Configurer Supabase (optionnel pour commencer)

Si tu veux le formulaire de contact fonctionnel :

1. Crée un compte sur [supabase.com](https://supabase.com)
2. Crée un nouveau projet
3. Va dans **Settings > API**
4. Copie `Project URL` et `anon public` key dans `.env.local`

#### Table Supabase à créer

Dans l'éditeur SQL de Supabase, exécute :

```sql
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  project TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Politique RLS pour permettre les insertions
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts" ON contacts
  FOR INSERT
  TO anon
  WITH CHECK (true);
```

## 💻 Développement

```bash
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000)

## 🌐 Déploiement sur Vercel

### Option 1 : Via l'interface Vercel (recommandé)

1. Crée un compte sur [vercel.com](https://vercel.com)
2. Connecte ton compte GitHub
3. Importe ce projet
4. Ajoute les variables d'environnement Supabase
5. Clique sur **Deploy**

### Option 2 : Via CLI

```bash
npm i -g vercel
vercel login
vercel
```

### Connecter ton domaine webopoli.com

1. Dans le dashboard Vercel, va dans **Settings > Domains**
2. Ajoute `webopoli.com` et `www.webopoli.com`
3. Vercel te donnera les DNS records à configurer
4. Dans Hostinger, va dans **DNS Zone**
5. Modifie le record A pour pointer vers Vercel :
   - Type: A
   - Name: @
   - Points to: 76.76.21.21 (IP Vercel)
6. Ajoute un CNAME pour www :
   - Type: CNAME
   - Name: www
   - Points to: cname.vercel-dns.com

⚠️ **Note** : Garde tes enregistrements MX intacts pour conserver tes emails Hostinger !

## 📁 Structure du Projet

```
webopoli/
├── src/
│   ├── app/
│   │   ├── globals.css      # Styles globaux + fonts
│   │   ├── layout.tsx       # Layout principal
│   │   └── page.tsx         # Page d'accueil
│   ├── components/
│   │   ├── Header.tsx       # Navigation
│   │   ├── Hero.tsx         # Section hero
│   │   ├── Philosophie.tsx  # Section philosophie
│   │   ├── Services.tsx     # Offres et tarifs
│   │   ├── Processus.tsx    # Étapes de travail
│   │   ├── Realisations.tsx # Portfolio
│   │   ├── Contact.tsx      # Formulaire contact
│   │   └── Footer.tsx       # Pied de page
│   └── lib/
│       ├── supabase.ts      # Client Supabase
│       └── utils.ts         # Utilitaires
├── public/
│   └── images/              # Images du site
├── tailwind.config.js       # Config Tailwind + palette
└── package.json
```

## 🎨 Personnalisation

### Palette de couleurs

La palette "Organic Minimal" est définie dans `tailwind.config.js` :

- **Sand** : Tons beiges/crème (backgrounds)
- **Sage** : Verts doux (accents principaux)
- **Terracotta** : Orange/terre cuite (accents secondaires)
- **Clay** : Bruns/gris chauds (textes)

### Typographie

- **Titres** : Playfair Display (serif élégant)
- **Corps** : DM Sans (sans-serif moderne)

## 📝 TODO

- [ ] Ajouter de vraies images dans `/public/images/`
- [ ] Créer les pages légales (mentions légales, CGV, confidentialité)
- [ ] Connecter le formulaire à Supabase
- [ ] Configurer les notifications email (via Supabase Edge Functions ou autre)
- [ ] Ajouter les méta tags Open Graph avec vraies images
- [ ] Créer un favicon personnalisé

## 📄 Licence

Projet privé - Tous droits réservés
