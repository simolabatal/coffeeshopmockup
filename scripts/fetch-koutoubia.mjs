import { writeFile } from 'node:fs/promises'

// Photo emblématique de Marrakech : le minaret de la Koutoubia.
// Source vérifiée via l'API Wikimedia Commons — titre/description exacts :
// "Le minaret de la Koutoubia (Marrakech, Maroc)" (CC BY 2.0).
const url =
  'https://upload.wikimedia.org/wikipedia/commons/c/cc/Le_minaret_de_la_Koutoubia_%28Marrakech%2C_Maroc%29_%2850961792868%29.jpg'
const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'

const res = await fetch(url, { headers: { 'User-Agent': UA, Referer: 'https://commons.wikimedia.org/' } })
if (!res.ok) throw new Error('HTTP ' + res.status)
const type = (res.headers.get('content-type') || '').split(';')[0]
const buf = Buffer.from(await res.arrayBuffer())
if (!type.startsWith('image/')) throw new Error('not an image: ' + type)
if (buf[0] !== 0xff || buf[1] !== 0xd8) throw new Error('not a JPEG')
if (buf.length < 30 * 1024) throw new Error('too small: ' + buf.length)

await writeFile(new URL('../public/images/marrakech-medina.jpg', import.meta.url), buf)
console.log('OK  marrakech-medina.jpg (Koutoubia)  ' + (buf.length / 1024).toFixed(0) + ' KB  ' + type)
