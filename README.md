# Gallery Search

A React-based application that allows users to search for images and videos, explore results, and save their favourite media into personal collections.

## Features
- Search images and videos using external APIs.
- Manage application state using Redux Toolkit.
- Handle loading states and API errors.
- Save and manage favourite items using Local Storage.
- Responsive UI built with Tailwind CSS.

## Tech Stack
React.js · Redux Toolkit · Tailwind CSS · REST APIs · JavaScript

## Getting Started

1. Clone the repository:
   ```bash
   git clone YOUR_REPOSITORY_URL
   ```

2. Navigate to the project folder:
   ```bash
   cd gallery-search
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## API Keys

Create a `.env` file in the project root and add API keys for the services you want to use:

```
VITE_UNSPLASH_KEY=your_unsplash_access_key
VITE_PEXELS_KEY=your_pexels_api_key
VITE_TENOR_KEY=your_tenor_api_key
```

For Vercel deployments, add these variables under **Project Settings > Environment Variables**, then redeploy. Vite embeds `VITE_` variables into the client bundle at build time, so adding them requires a new deployment.
