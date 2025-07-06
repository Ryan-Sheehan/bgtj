# Sanity Clean Content Studio

Congratulations, you have now installed the Sanity Content Studio, an open-source real-time content editing environment connected to the Sanity backend.

Now you can do the following things:

- [Read "getting started" in the docs](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme)
- [Join the community Slack](https://slack.sanity.io/?utm_source=readme)
- [Extend and build plugins](https://www.sanity.io/docs/content-studio/extending?utm_source=readme)

## CORS configuration for deployment

When deploying the Studio to Vercel under the domain `admin.boysgotojupiter.band`, you need to allow this origin in your Sanity project settings.

If you have the Sanity CLI installed, you can add the origin via command line:

```bash
# Run from the `studio` directory
sanity cors add https://admin.boysgotojupiter.band --credentials

# (Optional) allow local development
sanity cors add http://localhost:3333 --credentials
```

Alternatively, navigate to **Project settings → API → CORS Origins** in the Sanity manage UI and add the same URLs, ensuring **Allow credentials** is enabled.
