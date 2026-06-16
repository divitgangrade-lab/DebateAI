# 📋 STEP-BY-STEP LOCAL SETUP GUIDE - WINDOWS

## PART 2: RUN THIS PROJECT LOCALLY

### Prerequisites Check

Before starting, make sure you have:

1. **Windows 10 or 11**
2. **Administrator access** to install software
3. **Internet connection**
4. **At least 5GB free disk space**

---

## STEP 1: Install Node.js (Required)

### Why?
Node.js is the JavaScript runtime. It lets you run Next.js and npm locally.

### Installation:

1. Go to **https://nodejs.org/**
2. Download **LTS version** (18.x or 20.x) - NOT the latest
3. Run the installer
4. ✅ Check: "Automatically install necessary tools for node-gyp"
5. Click **Install**
6. Wait for installation (5-10 minutes)
7. **Restart your computer**

### Verify Installation:

Open **PowerShell** (not Command Prompt) and type:

```powershell
node --version
# Should print: v18.17.0 (or similar)

npm --version
# Should print: 9.6.7 (or similar)
```

✅ If both show version numbers, you're good!

❌ If not, restart computer and try again.

---

## STEP 2: Install Git (Optional but Recommended)

### Why?
Git lets you clone and manage the repository.

### Installation:

1. Go to **https://git-scm.com/**
2. Download for Windows
3. Run installer, click **Next** for all defaults
4. **Restart PowerShell**

### Verify:
```powershell
git --version
# Should print: git version 2.41.0 (or similar)
```

---

## STEP 3: Clone the Repository

### Choose Your Method:

#### Option A: Using Git (Recommended)

```powershell
# Navigate to where you want to save it
cd Documents

# Clone the repository
git clone https://github.com/divitgangrade-lab/DebateAI.git

# Enter directory
cd DebateAI
```

#### Option B: Download as ZIP

1. Go to https://github.com/divitgangrade-lab/DebateAI
2. Click **Code** → **Download ZIP**
3. Extract to `C:\Users\YourName\Documents\DebateAI`
4. Open PowerShell in that folder

---

## STEP 4: Install Dependencies

### What This Does:
Downloads all npm packages listed in `package.json`

### Command:

```powershell
# Make sure you're in the DebateAI folder
cd DebateAI

# Install all dependencies
npm install

# This will take 5-10 minutes
# You'll see lots of output - this is normal
```

### Expected Output:
```
added 450 packages, and audited 451 packages in 2m45s
```

✅ Success if you see "added X packages"

❌ If you see errors, try:
```powershell
npm install --force
```

---

## STEP 5: Create Environment Variables File

### What This Does:
Tells the app your API keys and configuration

### Instructions:

1. In the `DebateAI` folder, find `.env.example`
2. **Right-click** → **Copy**
3. **Right-click** → **Paste** → **Rename** to `.env.local`
4. **Open** `.env.local` in Notepad

### Update the values:

```bash
# OpenAI Configuration (Get from https://platform.openai.com/api-keys)
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxx

# Supabase Configuration (Get from https://supabase.com/)
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...

# Google OAuth (Get from https://console.cloud.google.com/)
GOOGLE_CLIENT_ID=xxxxx.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-xxxxx

# JWT Secret (Generate a random string)
JWT_SECRET=your-super-secret-key-here-make-it-random

# Application
NEXT_PUBLIC_API_URL=http://localhost:3000
NODE_ENV=development
```

### How to Get API Keys:

#### OpenAI Key:
1. Go to https://platform.openai.com/api-keys
2. Sign in with your account
3. Click **Create new secret key**
4. Copy the key
5. Paste in `.env.local`

#### Supabase Keys:
1. Go to https://supabase.com/ and sign up
2. Create a new project
3. Go to **Settings** → **API**
4. Copy URL and anon key

#### Google OAuth:
1. Go to https://console.cloud.google.com/
2. Create new project
3. Enable "Google+ API"
4. Create "OAuth 2.0 Client ID"
5. Configure redirect URI: `http://localhost:3000/api/auth/callback/google`

**For now:** You can leave placeholder values and the app will still run in dev mode.

---

## STEP 6: Fix the Code Issues

### Critical Fix #1: Remove 'use client' from layout.tsx

1. Open `app/layout.tsx`
2. **Delete** line 1: `'use client'`
3. **Save**

### Critical Fix #2: Add next-themes

```powershell
npm install next-themes
```

---

## STEP 7: Start Development Server

### Command:

```powershell
npm run dev

# This starts the development server
# Don't close this window
```

### Expected Output:

```
  ▲ Next.js 14.1.0
  - Local:        http://localhost:3000
  - Environments: .env.local

✓ Ready in 2.5s
```

✅ If you see this, success!

### Open the Website:

1. Open your browser
2. Go to **http://localhost:3000**
3. You should see the landing page!

---

## STEP 8: Debug Common Errors

### Error: "Module not found"

```
Error: Cannot find module '@/components/landing/hero'
```

**Why:** Components are missing (expected in current version)

**Fix:** The components need to be generated. This is OK for now.

### Error: "OPENAI_API_KEY is not set"

```
Error: Missing environment variable: OPENAI_API_KEY
```

**Fix:**
1. Make sure `.env.local` exists in the root folder
2. Add a placeholder value:
   ```
   OPENAI_API_KEY=sk-test-placeholder
   ```

### Error: "Port 3000 already in use"

```
Error: listen EADDRINUSE: address already in use :::3000
```

**Fix:**
```powershell
# Use different port
npm run dev -- -p 3001

# Then visit http://localhost:3001
```

### Error: "Cannot find module next-themes"

**Fix:**
```powershell
npm install next-themes
npm run dev
```

---

## STEP 9: Development Workflow

### Making Changes:

1. Keep `npm run dev` running in PowerShell
2. Open code in VS Code
3. Edit files
4. **Auto-refresh:** Page refreshes automatically in browser
5. Check browser console (F12) for errors

### Stopping the Server:

```powershell
# In the PowerShell window running dev server:
Ctrl + C

# Then type: y
# Then press Enter
```

### Restarting:

```powershell
npm run dev
```

---

## STEP 10: What to Expect

### Current Status:
- ✅ Landing page structure (needs component content)
- ✅ Dashboard layout (needs components)
- ✅ API routes (need AI integration)
- ❌ Actual components not shown yet
- ❌ Database not working
- ❌ Authentication not working

### You Will See:
- Home page (but empty or with errors)
- Menu items in sidebar
- Navigation bar
- Lots of "component not found" errors in console

### This is NORMAL because:
1. Components haven't been generated yet
2. Database isn't connected
3. API keys not real

---

## TROUBLESHOOTING CHECKLIST

- [ ] Node.js version 18+ installed?
- [ ] In correct folder (`cd DebateAI`)?
- [ ] Ran `npm install`?
- [ ] `.env.local` file exists?
- [ ] `'use client'` removed from `app/layout.tsx`?
- [ ] `next-themes` installed?
- [ ] No errors in terminal?
- [ ] Can access `http://localhost:3000`?

---

## Next: The Full Component Build

Once this is running, you'll need to:
1. Generate all ShadCN UI components
2. Create all page components
3. Implement database
4. Implement AI integration
5. Implement authentication

See `COMPONENT_BUILD_GUIDE.md` for that.

---
