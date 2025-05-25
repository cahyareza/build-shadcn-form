# Secure Contact Form with Next.js, shadcn/ui, and Arcjet

This project is a **Next.js application** featuring a secure contact form built with [shadcn/ui](https://ui.shadcn.com/) components and robust validation using [Zod](https://zod.dev/). The backend API is protected by [Arcjet](https://arcjet.com/) for advanced bot detection, rate limiting, and security shielding.

## Features

- **Contact Form:** Built with shadcn/ui, supporting name, email, and datetime fields.
- **Validation:** Uses Zod for schema-based validation on both client and server.
- **Notifications:** User feedback is provided via [Sonner](https://sonner.emilkowal.ski/) toast notifications.
- **Security:** Arcjet middleware protects the API from bots, spoofing, and abuse (rate limiting, bot detection, and shielding).
- **API Route:** `/api/contact` endpoint processes form submissions, validates input, and can be extended to send emails or store data.

## Tech Stack

- Next.js
- React
- shadcn/ui
- Zod
- Sonner
- Arcjet

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env.local` file and add your Arcjet key:
     ```
     ARCJET_KEY=your-arcjet-key
     ```

4. **Run the development server:**
   ```sh
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## License

MIT