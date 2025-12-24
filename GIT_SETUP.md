# Git Push Setup Guide

## Authentication Issue

GitHub no longer accepts passwords for Git operations. You need to use a **Personal Access Token (PAT)**.

## Solution: Create a Personal Access Token

### Step 1: Create a Token on GitHub

1. Go to GitHub.com and sign in
2. Click your profile picture → **Settings**
3. Scroll down to **Developer settings** (left sidebar)
4. Click **Personal access tokens** → **Tokens (classic)**
5. Click **Generate new token** → **Generate new token (classic)**
6. Give it a name: `portfolio-push`
7. Select scopes: Check **repo** (full control of private repositories)
8. Click **Generate token**
9. **COPY THE TOKEN IMMEDIATELY** (you won't see it again!)

### Step 2: Use the Token

When you push, use the token as your password:

```powershell
git push -u origin master
# Username: Raphael-G36
# Password: [paste your token here]
```

## Alternative: Use SSH (More Secure)

### Step 1: Generate SSH Key (if you don't have one)

```powershell
ssh-keygen -t ed25519 -C "raphaelokonmah3@gmail.com"
# Press Enter to accept default location
# Press Enter twice for no passphrase (or set one)
```

### Step 2: Add SSH Key to GitHub

1. Copy your public key:
   ```powershell
   cat ~/.ssh/id_ed25519.pub
   ```

2. Go to GitHub → Settings → **SSH and GPG keys**
3. Click **New SSH key**
4. Paste your public key
5. Click **Add SSH key**

### Step 3: Change Remote URL to SSH

```powershell
git remote set-url origin git@github.com:Raphael-G36/portfolio.git
git push -u origin master
```

## Quick Fix: Push to Master Branch

Since you're on `master` branch, use:

```powershell
git push -u origin master
```

If GitHub repo is set to `main`, you can either:
- Push to master and GitHub will accept it
- Or rename your branch: `git branch -M main` then `git push -u origin main`

