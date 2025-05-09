import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://c9697d7e7c6d75a899a02b9d4b309691@o4509280801456128.ingest.us.sentry.io/4509280807616512",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
      isNameRequired: true,
      isEmailRequired: true,
    }),
    Sentry.replayIntegration({
      // Additional SDK configuration goes in here, for example:
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
});