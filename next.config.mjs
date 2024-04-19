/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: "zi4g4yas",
    NEXT_PUBLIC_SANITY_DATASET: "production",
    SANITY_SECRET_TOKEN: "skRyhX6sQ1cuywePolruov3UHgNGnSzTs5NewsfSxf9N7gHhHHf1KRY2XIUAKDzHoDt5ixuyI8Xh5RlO2JUG0ViYIkmGqDFyFTtUxCfLwQT6orDqwkKDf4jpKVji1nWESiteP3yD6O8jaNJq0K8HKlGt7JjiMfkkylsBoFLA2clKnhIfQX94",
  },
};

export default nextConfig;
