import { photos } from './photos'

export type MenuCategory = 'hot' | 'cold'

export interface MenuItem {
  id: string
  name: string
  description: string
  category: MenuCategory
  format: 'Chaud' | 'Froid'
  price: number
  tag?: string
  grabAndGo?: boolean
  photo: string
}

export interface Spot {
  id: string
  city: string
  district: string
  tagline: string
  description: string
  vibe: string[]
  photo: string
}

export interface Category {
  title: string
  to: string
  photo: string
  alt: string
}

export interface FeaturedDrink {
  id: string
  name: string
  price: number
  badge: string
  photo: string
  alt: string
}

export const INSTAGRAM_URL = 'https://www.instagram.com/kesh_cup/'
export const MAPS_URL = 'https://maps.app.goo.gl/NcyMruNBBfJ8bk7?g_st=ipc'

export const menuItems: MenuItem[] = [
  {
    id: 'espresso',
    name: 'Espresso',
    description: "L'essentiel, intense et net. Une crema dense, une finale franche.",
    category: 'hot',
    format: 'Chaud',
    price: 22,
    tag: 'Signature',
    photo: photos.espresso,
  },
  {
    id: 'americano',
    name: 'Americano',
    description: "Espresso allongé à l'eau chaude, douceur et longueur en bouche.",
    category: 'hot',
    format: 'Chaud',
    price: 24,
    photo: photos.americano,
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino Latte Art',
    description: 'Mousse de lait onctueuse sur espresso, un latte art dessiné à la main.',
    category: 'hot',
    format: 'Chaud',
    price: 25,
    tag: 'Best-seller',
    photo: photos.cappuccino,
  },
  {
    id: 'flat-white',
    name: 'Flat White',
    description: 'Double ristretto et lait velouté, texture soyeuse.',
    category: 'hot',
    format: 'Chaud',
    price: 34,
    photo: photos.hotCoffeeLatte,
  },
  {
    id: 'cafe-latte',
    name: 'Café Latte',
    description: 'Espresso et lait vapeur, la toile idéale pour notre latte art.',
    category: 'hot',
    format: 'Chaud',
    price: 34,
    tag: 'Latte art',
    photo: photos.heroCoffee,
  },
  {
    id: 'cortado',
    name: 'Cortado',
    description: "Espresso adouci d'une pointe de lait chaud, format serré.",
    category: 'hot',
    format: 'Chaud',
    price: 28,
    photo: photos.espresso,
  },
  {
    id: 'mocha',
    name: 'Mocha',
    description: 'Espresso, chocolat fondu et lait vapeur.',
    category: 'hot',
    format: 'Chaud',
    price: 38,
    photo: photos.cappuccino,
  },
  {
    id: 'cafe-filtre',
    name: 'Café Filtre — À emporter',
    description: 'Extraction douce, notes florales, prêt à emporter.',
    category: 'hot',
    format: 'Chaud',
    price: 26,
    grabAndGo: true,
    photo: photos.americano,
  },
  {
    id: 'iced-latte',
    name: 'Iced Latte',
    description: 'Espresso, lait frais et glace. Fraîcheur immédiate.',
    category: 'cold',
    format: 'Froid',
    price: 36,
    tag: 'Best-seller',
    photo: photos.icedLatte,
  },
  {
    id: 'cold-brew',
    name: 'Cold Brew',
    description: 'Infusion à froid 12 h, rondeur et faible acidité.',
    category: 'cold',
    format: 'Froid',
    price: 34,
    photo: photos.coldBrew,
  },
  {
    id: 'cold-brew-tonic',
    name: 'Cold Brew Tonic',
    description: 'Cold brew intense allongé au tonic, pétillant et désaltérant.',
    category: 'cold',
    format: 'Froid',
    price: 30,
    tag: 'Signature',
    photo: photos.coldBrew,
  },
  {
    id: 'iced-matcha',
    name: 'Iced Matcha Latte',
    description: 'Matcha fouetté, lait et glace. Végétal et vivifiant.',
    category: 'cold',
    format: 'Froid',
    price: 40,
    photo: photos.coldDrinks,
  },
  {
    id: 'iced-caramel',
    name: 'Iced Caramel Latte',
    description: 'Caramel, espresso et lait glacé.',
    category: 'cold',
    format: 'Froid',
    price: 28,
    photo: photos.icedLatte,
  },
  {
    id: 'citronnade-menthe',
    name: 'Citronnade Menthe',
    description: 'Citron pressé, menthe fraîche, touche pétillante.',
    category: 'cold',
    format: 'Froid',
    price: 30,
    photo: photos.coldDrinks,
  },
  {
    id: 'frappe-vanille',
    name: 'Frappé Vanille',
    description: 'Base frappée vanille, topping léger.',
    category: 'cold',
    format: 'Froid',
    price: 42,
    photo: photos.coldDrinks,
  },
  {
    id: 'cold-brew-bottle',
    name: 'Cold Brew — Bouteille 330 ml',
    description: 'Notre cold brew signature, prêt à emporter.',
    category: 'cold',
    format: 'Froid',
    price: 44,
    grabAndGo: true,
    photo: photos.coldBrew,
  },
  {
    id: 'iced-matcha-bottle',
    name: 'Iced Matcha — Bouteille',
    description: 'Matcha latte glacé, scellé pour la route.',
    category: 'cold',
    format: 'Froid',
    price: 48,
    grabAndGo: true,
    photo: photos.coldDrinks,
  },
  {
    id: 'citronnade-bottle',
    name: 'Citronnade — Bouteille',
    description: 'Citronnade menthe, prête à emporter.',
    category: 'cold',
    format: 'Froid',
    price: 34,
    grabAndGo: true,
    photo: photos.coldDrinks,
  },
]

export const spots: Spot[] = [
  {
    id: 'marrakech',
    city: 'Marrakech',
    district: 'Médina',
    tagline: "L'énergie de la Médina, en une tasse.",
    description:
      "Au cœur de la Médina, notre spot take away privilégie l'essentiel : un espresso précis et des boissons froides à emporter, à savourer en flânant dans les ruelles.",
    vibe: ['Take away', 'Latte art', 'À emporter'],
    photo: photos.marrakech,
  },
  {
    id: 'essaouira',
    city: 'Essaouira',
    district: 'Bord de mer',
    tagline: "La fraîcheur de l'Atlantique, à emporter.",
    description:
      "Face à la brise atlantique, notre adresse d'Essaouira prolonge le même esprit : des cold drinks vivifiants et un café net, pensés pour la balade.",
    vibe: ['Take away', 'Cold drinks', 'À emporter'],
    photo: photos.essaouira,
  },
]

export const categories: Category[] = [
  {
    title: 'Hot Coffee & Latte Art',
    to: '/menu',
    photo: photos.hotCoffeeLatte,
    alt: 'Cappuccino avec latte art',
  },
  {
    title: 'Cold Drinks',
    to: '/menu',
    photo: photos.coldDrinks,
    alt: 'Café glacé',
  },
  {
    title: 'Take Away Signatures',
    to: '/menu',
    photo: photos.takeawayCup,
    alt: 'Gobelet take-away',
  },
]

export const featuredDrinks: FeaturedDrink[] = [
  {
    id: 'iced-caramel',
    name: 'Iced Caramel Latte',
    price: 28,
    badge: 'Signature',
    photo: photos.icedLatte,
    alt: 'Iced caramel latte',
  },
  {
    id: 'cold-brew-tonic',
    name: 'Cold Brew Tonic',
    price: 30,
    badge: 'Best-seller',
    photo: photos.coldBrew,
    alt: 'Cold brew tonic',
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino Latte Art',
    price: 25,
    badge: 'Best-seller',
    photo: photos.cappuccino,
    alt: 'Cappuccino latte art',
  },
]

export const MARQUEE_ITEMS = [
  'Hot Coffee',
  'Latte Art',
  'Cold Drinks',
  'Take Away',
  'Marrakech Médina',
  'Essaouira',
  'Join us for a cup!',
]

export const formatPrice = (n: number): string => `${n} DH`
