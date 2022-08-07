<a href="http://accretence.com">![create-next-dashboard](https://i.imgur.com/hNovO0U.png)</a>

<a href="https://npmjs.com/package/create-next-dashboard">
   <p align="center">
   <img src="https://img.shields.io/npm/v/create-next-dashboard?style=for-the-badge&labelColor=000000">
   <img src="https://img.shields.io/npm/dw/create-next-dashboard?color=000&style=for-the-badge">
   </p>
</a>

## Usage

1. Setup a local deployment using this command:

```bash
npx create-next-dashboard my-app
```

2. Create your `.env` file and provide these variables:

```shell
JWT_SECRET =
MONGO_ATLAS_URI =
MAIL_SMTP_HOST =
MAIL_SMTP_USER =
MAIL_SMTP_PASS =
MAIL_SMTP_PORT =
```

3. Fill in the `main.config.js` file with your preferred information.
4. Run `cd my-app` and `npm run dev`, the app should be running in `localhost:3000`!

## Deployment

Refer to [Next.js Deployment Documentation](https://nextjs.org/docs/deployment) to find the best deployment strategy for you.

## Sending Emails

You need to provide `SMTP` credentials obtained from your Email provider in `.env`.

## Authentication

Authentication is implemented using `httpOnly` cookies served from serverless API functions.

## Database

You can spin up a MongoDB database instance using [MongoDB Atlas](http://cloud.mongodb.com/). Provide the `MOGNO_ATLAS_URI` in `.env`.

## Google Analytics

You only need to provide your `googleAnalyticsID` in `main.config.js` file to activate your Google Analytics.

## Built Upon

-   [geist-ui](https://github.com/geist-org/geist-ui) as UI library which adheres to the design language of [Vercel](https://vercel.com/)!
-   [react-dashboard-design](https://github.com/ofekashery/react-dashboard-design) as inspiration and much of the initial codebase!
-   [nextjs-client-auth-architectures](https://github.com/justincy/nextjs-client-auth-architectures) as the route protection architecture!
