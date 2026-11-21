import { writeFile, mkdir } from 'node:fs/promises'

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'

// Sources vérifiées via l'API Wikimedia Commons (titre + description exacts).
const images = [
  {
    file: 'hero-coffee.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Latte_at_Doppio_Ristretto_Chiang_Mai_02.jpg',
    desc: 'barista free-pouring latte art',
  },
  {
    file: 'hot-coffee-latte.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/Latte_art_on_cappuccino_%28Unsplash%29.jpg/1600px-Latte_art_on_cappuccino_%28Unsplash%29.jpg',
    desc: 'cappuccino with latte art',
  },
  {
    file: 'cold-drinks.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/df/Segelas_kopi_susu_di_Pangkalpinang_Oktober_2022.jpg/1280px-Segelas_kopi_susu_di_Pangkalpinang_Oktober_2022.jpg',
    desc: 'glass of iced milk coffee',
  },
  {
    file: 'espresso.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/56/Espresso_shot_close-up.jpg/1600px-Espresso_shot_close-up.jpg',
    desc: 'close-up of an espresso with crema',
  },
  {
    file: 'americano.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/A_cup_of_Americano_in_Lano_Coffee_%28Palembang%2C_SS%29.jpg/1600px-A_cup_of_Americano_in_Lano_Coffee_%28Palembang%2C_SS%29.jpg',
    desc: 'cup of americano coffee',
  },
  {
    file: 'cappuccino.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Cappuccino_with_latte_art_on_Coffee_Right_in_Brno%2C_Brno-City_District.jpg/1280px-Cappuccino_with_latte_art_on_Coffee_Right_in_Brno%2C_Brno-City_District.jpg',
    desc: 'cappuccino with latte art',
  },
  {
    file: 'iced-latte.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1e/Iced_Coffee_in_Glass_-_Sunshine_Coffee_-_Laramie_Cafe_%2853838344552%29.jpg/1600px-Iced_Coffee_in_Glass_-_Sunshine_Coffee_-_Laramie_Cafe_%2853838344552%29.jpg',
    desc: 'iced coffee in a glass',
  },
  {
    file: 'cold-brew.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Iced_Americano_1.jpg',
    desc: 'iced coffee served at a coffee shop',
  },
  {
    file: 'marrakech-medina.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c4/Medina_of_Marrakech_007.jpg/1600px-Medina_of_Marrakech_007.jpg',
    desc: 'medina of Marrakech',
  },
  {
    file: 'essaouira.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/Maroc_Essaouira_Luc_Viatour_4.JPG/1600px-Maroc_Essaouira_Luc_Viatour_4.JPG',
    desc: 'Essaouira city, Morocco',
  },
]

const outDir = new URL('../public/images/', import.meta.url)
await mkdir(outDir, { recursive: true })

let ok = 0
for (const img of images) {
  try {
    const res = await fetch(img.url, { headers: { 'User-Agent': UA, Referer: 'https://commons.wikimedia.org/' } })
    if (!res.ok) throw new Error('HTTP ' + res.status)
    const type = (res.headers.get('content-type') || '').split(';')[0]
    const buf = Buffer.from(await res.arrayBuffer())
    if (!type.startsWith('image/')) throw new Error('not an image: ' + type)
    if (buf.length < 30 * 1024) throw new Error('too small: ' + buf.length + ' bytes')
    await writeFile(new URL('../public/images/' + img.file, import.meta.url), buf)
    ok++
    console.log(`OK   ${img.file.padEnd(24)} ${(buf.length / 1024).toFixed(0).padStart(5)} KB  ${type}  (${img.desc})`)
  } catch (e) {
    console.log(`FAIL ${img.file.padEnd(24)} ${String(e)}`)
  }
}
console.log(`\n${ok}/${images.length} images téléchargées`)
