import { writeFile } from 'node:fs/promises'

const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'

const images = [
  {
    file: 'coffee-beans.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/38/Roasted_coffee_beans_on_the_surface._01.jpg/1920px-Roasted_coffee_beans_on_the_surface._01.jpg',
    desc: 'roasted coffee beans on the surface',
  },
  {
    file: 'takeaway-cup.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bc/Coffee_in_a_cardboard_cup_on_a_train.jpg/1920px-Coffee_in_a_cardboard_cup_on_a_train.jpg',
    desc: 'coffee in a disposable cardboard cup',
  },
  {
    file: 'cold-drinks.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/Iced_White_Mocha_in_a_Glass_Jug.jpg/1920px-Iced_White_Mocha_in_a_Glass_Jug.jpg',
    desc: 'iced white mocha in a glass jug',
  },
  {
    file: 'essaouira.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f8/Essaouira_Citadel.jpg/1920px-Essaouira_Citadel.jpg',
    desc: 'Essaouira citadel / Atlantic coast',
  },
]

let ok = 0
for (const img of images) {
  try {
    const res = await fetch(img.url, { headers: { 'User-Agent': UA, Referer: 'https://commons.wikimedia.org/' } })
    if (!res.ok) throw new Error('HTTP ' + res.status)
    const type = (res.headers.get('content-type') || '').split(';')[0]
    const buf = Buffer.from(await res.arrayBuffer())
    if (!type.startsWith('image/')) throw new Error('not an image: ' + type)
    if (buf[0] !== 0xff || buf[1] !== 0xd8) throw new Error('not a JPEG')
    if (buf.length < 30 * 1024) throw new Error('too small: ' + buf.length)
    await writeFile(new URL('../public/images/' + img.file, import.meta.url), buf)
    ok++
    console.log(`OK   ${img.file.padEnd(20)} ${(buf.length / 1024).toFixed(0).padStart(5)} KB  (${img.desc})`)
  } catch (e) {
    console.log(`FAIL ${img.file.padEnd(20)} ${String(e)}`)
  }
}
console.log(`\n${ok}/${images.length} téléchargées`)
