This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Guide to Access the Assessment Page

1. Visit this [`URL`](https://grepsr-eight.vercel.app/dataset)
2. Click on `Amazon product price` link
   You have arrived at the page. :)

## Getting Started

To run this project locally, first, start the development server:

```bash
npm install
# or
yarn
```

```bash
npm run dev
# or
yarn dev
```

Very Important Note: You must create a .env.local file and add a link/base URL to the server to fetch data. Visit [`MockAPI`](https:/www.mockapi.io/) to create mock data. The data structure should be as follows:

```ts
export interface DatasetData {
  createdAt: string;
  price: number;
  rating: number;
  brand: string;
  availability: boolean;
  product_name: string;
  id: string | number;
}
```

To run tests, use:

```bash
npm run test
```
