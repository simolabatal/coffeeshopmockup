// Photographies locales vérifiées (téléchargées dans public/images/).
// Chaque fichier provient de Wikimedia Commons avec un titre/description
// correspondant exactement au thème. Aucun logo / aucune marque reproduit.

export const IMG = '/images/'

export const photos = {
  heroCoffee: IMG + 'hero-coffee.jpg',
  hotCoffeeLatte: IMG + 'hot-coffee-latte.jpg',
  coldDrinks: IMG + 'cold-drinks.jpg',
  espresso: IMG + 'espresso.jpg',
  americano: IMG + 'americano.jpg',
  cappuccino: IMG + 'cappuccino.jpg',
  icedLatte: IMG + 'iced-latte.jpg',
  coldBrew: IMG + 'cold-brew.jpg',
  marrakech: IMG + 'marrakech-medina.jpg',
  essaouira: IMG + 'essaouira.jpg',
} as const

export type PhotoSrc = (typeof photos)[keyof typeof photos]

export const FALLBACK_PHOTO = photos.heroCoffee
