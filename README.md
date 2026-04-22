# Vinyl Shop

A modern web application for browsing and purchasing vinyl records. Built with Next.js, Prisma, and Tailwind CSS.

## Description

Vinyl Shop is an e-commerce platform dedicated to vinyl enthusiasts. It allows users to explore a curated collection of vinyl records (which is actually my vinyl collection) across various genres and categories, search for specific albums, and place orders seamlessly. The application includes an admin panel for managing products and orders.

## How It Works

The application consists of a user-facing storefront and an admin dashboard:

- **User Storefront**: Users can browse products by category, search for records, view product details, and complete purchases through a streamlined ordering process.
- **Admin Panel**: Administrators can log in to manage the inventory, add new products, update existing ones, and monitor orders. Admin validation is handled by the `vinyl-shop-backend` project, which provides authentication services for secure access.

The backend uses Prisma ORM with a database to store products, orders, and user data. The frontend is built with Next.js for server-side rendering and optimal performance.

## What You Can Do

### As a User:

- Browse vinyl records by category
- Search for specific albums or artists
- View detailed product information
- Add products to cart and place orders
- Track order status

### As an Admin:

- Log in to the admin dashboard
- Add, edit, or remove products
- Manage product categories
- View and process orders
- Monitor sales and inventory

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm, yarn, pnpm, or bun
- A database (configured in Prisma)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd vinyl-shop
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Set up the database:
   - Configure your database connection in `prisma/schema.prisma`
   - Run migrations:
     ```bash
     npx prisma migrate dev
     ```
   - Seed the database (optional):
     ```bash
     npx prisma db seed
     ```

4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Admin Panel Usage

To access the admin panel:

1. Navigate to `/admin` in your browser.
2. Log in with the following credentials:
   - Email: `adminTest@mail.com`
   - Password: `12345678`
3. Once logged in, you can:
   - View the dashboard at `/admin`
   - Manage products at `/admin/products`
   - View orders at `/admin/orders`
   - Add new products at `/admin/products/new`
   - Search products at `/admin/products/search`

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: Configurable (e.g., PostgreSQL, MySQL)
- **Authentication**: Custom admin login
- **Styling**: Tailwind CSS
- **Linting**: ESLint

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Deploy on Vercel

Deploy your application easily on Vercel: [Vercel Platform](https://vercel.com/new)
