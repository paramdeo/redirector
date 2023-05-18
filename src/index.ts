import { Hono } from 'hono'

const app = new Hono({ strict:false })

// Create list of redirects => https://go.paramdeo.com/github
const redirects = {
  "bluesky": "https://bsky.app/profile/paramdeo.com",
  "github": "https://github.com/paramdeo",
  "gitlab": "https://gitlab.com/paramdeo",
  "mastodon": "https://fosstodon.org/@paramdeo",
  "twitter": "https://twitter.com/paramdeodotcom",
  "instagram": "https://instagram.com/paramdeodotcom",
  "tumblr": "https://paramdeo.tumblr.com",
  "hackernews": "https://news.ycombinator.com/user?id=oedmarap",
  "matrix": "https://matrix.to/#/@paramdeo:matrix.org",
  "telegram": "https://t.me/paramdeo",
  "keyoxide": "https://keyoxide.org/7B1AB72BF6C41AE362FC39887FBBB4E5A7D02A1E",
  "digitalocean ": "https://m.do.co/c/172de6c6559d",
  "bunnycdn": "https://bunnycdn.com/?ref=66lg2a410o",
  "nextdns": "https://nextdns.io/?from=7tvfcujm",
  "canva": "https://www.canva.com/join/kvh-ynx-cxj",
  "side-projects": "https://paramdeo.com/portfolio-side-projects",
  "sideprojects": "https://paramdeo.com/portfolio-side-projects"
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
