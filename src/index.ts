import { Hono } from 'hono'

const app = new Hono({ strict:false })

// Create list of redirects => https://go.paramdeo.com/github
const redirects = {
  "behance": "https://behance.net/paramdeo",
  "bluesky": "https://bsky.app/profile/paramdeo.com",
  "buymeacoffee": "https://www.buymeacoffee.com/paramdeo",
  "capitalone": "https://i.capitalone.com/JrSCjZNN4",
  "kofi": "https://ko-fi.com/paramdeo",
  "paypal": "https://paypal.me/paramdeo",
  "discord": "https://discord.com/channels/@me/1007392034392383559",
  "fundrise": "https://fundrise.com/r/7v0495",
  "github": "https://github.com/paramdeo",
  "gitlab": "https://gitlab.com/paramdeo",
  "mastodon": "https://fosstodon.org/@paramdeo",
  "messenger": "https://m.me/paramdeoksingh",
  "twitter": "https://twitter.com/paramdeo_",
  "instagram": "https://instagram.com/paramdeo_",
  "facebook": "https://facebook.com/paramdeoksingh",
  "linkedin": "https://www.linkedin.com/in/paramdeo",
  "tumblr": "https://paramdeo.tumblr.com",
  "hackernews": "https://news.ycombinator.com/user?id=oedmarap",
  "matrix": "https://matrix.to/#/@paramdeo:matrix.org",
  "privacy": "https://app.privacy.com/join/BWXLA",
  "telegram": "https://t.me/paramdeo",
  "society6": "https://society6.com/paramdeo",
  "redbubble": "https://paramdeo.redbubble.com",
  "keyoxide": "https://keyoxide.org/7B1AB72BF6C41AE362FC39887FBBB4E5A7D02A1E",
  "digitalocean ": "https://m.do.co/c/172de6c6559d",
  "bunnycdn": "https://bunnycdn.com/?ref=66lg2a410o",
  "nextdns": "https://nextdns.io/?from=7tvfcujm",
  "canva": "https://www.canva.com/join/kvh-ynx-cxj",
  "public": "https://public.com/user-referral?referrer=paramdeo",
  "side-projects": "https://paramdeo.com/portfolio-side-projects",
  "sideprojects": "https://paramdeo.com/portfolio-side-projects",
  "warp": "https://app.warp.dev/referral/R5PYG5"
} as const

// Create Map from Object for efficient lookups
const redirectsMap: Map<string | any, string | any> = new Map(Object.entries(redirects))

app.get('/:redirect', (c) => {
  // Grab the URL parameter
  let redirect = c.req.param('redirect')
  // If URL parameter exists as a Map key
  if (redirect && redirectsMap.has(redirect)) {
    // Redirect to the URL stored in the matching key
    return c.redirect(redirectsMap.get(redirect), 302)
  }
  // Otherwise, if  URL parameter is malformed, go home
  return c.redirect('https://paramdeo.com', 301)
})

// Handle requests to the base URL
app.get('/', (c) => c.redirect('https://paramdeo.com', 301))

export default app
