# DebateForge AI

**Train Like a Champion. Debate Like a Leader.**

DebateForge AI is an AI-powered training platform for students to practice Model United Nations (MUN), debate, public speaking, and communication skills.

## Features

- 🎯 **AI Debate Arena** - Practice debates with intelligent AI opponents
- 🌍 **MUN Simulator** - Realistic Model United Nations simulations
- 🎤 **Speech Coach** - AI-powered speech analysis and feedback
- 🇪🇸 **Spanish Practice** - Interactive Spanish conversation partner
- 📊 **Progress Tracking** - Comprehensive analytics and skill development
- 🏆 **Achievements** - Badges and leaderboards to track progress

## Technology Stack

### Frontend
- React.js + TypeScript
- Next.js 14 (App Router)
- Tailwind CSS
- ShadCN UI Components
- Framer Motion
- Lucide React Icons
- Recharts

### Backend
- Next.js API Routes
- Node.js
- OpenAI API
- Environment-based configuration

### Database
- Supabase/PostgreSQL

### Authentication
- Email login
- Google OAuth
- User profiles

## Project Structure

```
├── app/
│   ├── (auth)/                 # Authentication pages
│   ├── (dashboard)/            # Dashboard and main features
│   ├── api/                    # API routes
│   ├── layout.tsx
│   └── page.tsx                # Landing page
├── components/
│   ├── ui/                     # ShadCN UI components
│   ├── dashboard/              # Dashboard components
│   ├── debate/                 # Debate arena components
│   ├── mun/                    # MUN simulator components
│   ├── speech/                 # Speech coach components
│   └── spanish/                # Spanish practice components
├── lib/
│   ├── api/                    # API client utilities
│   ├── ai/                     # AI personality system
│   ├── db/                     # Database queries
│   └── utils.ts
├── styles/
│   └── globals.css
├── types/
│   └── index.ts
└── public/
    └── images/
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- OpenAI API key
- Supabase account

### Installation

1. Clone the repository
```bash
git clone https://github.com/divitgangrade-lab/DebateAI.git
cd DebateAI
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env.local
```

4. Configure your environment variables in `.env.local`

5. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Environment Variables

```
NEXT_PUBLIC_API_URL=
OPENAI_API_KEY=
SUPABASE_URL=
SUPABASE_ANON_KEY=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
JWT_SECRET=
```

## Features In Development

- [ ] Landing page with hero section
- [ ] User authentication system
- [ ] Dashboard with analytics
- [ ] AI Debate Arena
- [ ] MUN Simulator
- [ ] Speech Coach
- [ ] Spanish Practice Mode
- [ ] Progress tracking and achievements
- [ ] Dark mode support
- [ ] Mobile responsiveness
- [ ] PDF export functionality

## Color Scheme

- **Primary**: Deep Blue (#1e3a8a)
- **Secondary**: Purple (#7c3aed)
- **Accent**: Cyan (#06b6d4)
- **Background**: Dark slate (#0f172a)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see LICENSE file for details

## Contact

For questions or support, please reach out to the development team.
