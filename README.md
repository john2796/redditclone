# A Modern Fullstack Reddit Clone

Built with the Next.js App Router, TypeScript & Tailwind

## Features

- Infinite scrolling for dynamically loading posts
- Authentication using NextAuth & Google
- Custom feed for authenticated users
- Advanced caching using [Upstash Redis](https://upstash.com/?utm_source=Josh2)
- Optimistic updates for a great user experience
- Modern data fetching using React-Query
- A beautiful and highly functional post editor
- Image uploads & link previews
- Full comment functionality with nested replies
- ... and much more

## Getting started

and copy these .env.example variables into a separate .env file:

```bash
DATABASE_URL=
NEXTAUTH_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

REDIS_URL=
REDIS_SECRET=
```

## Prisma commands

Run a migration to create your database tables with Prisma Migrate

```bash
npm run postinstall
npx prisma migrate

```

and that's all you need to get started!

## Acknowledgements

- [Upstash Redis](https://upstash.com/?utm_source=Josh2) for making this possible
- Shadcn's [Taxonomy respository](https://github.com/shadcn/taxonomy) for showcasing the post editor
- [mysql databse](https://railway.app) for mysql
