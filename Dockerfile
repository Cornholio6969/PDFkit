# ---------- deps ----------
FROM node:20-alpine AS deps
WORKDIR /app
# Copies package.json and package-lock.json if present
COPY package*.json ./
# Prefer reproducible installs; fall back if no lock
RUN npm ci || npm install

# ---------- build ----------
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---------- run ----------
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
# Easiest: keep node_modules from builder to avoid re-resolving in prod
COPY --from=builder /app ./
EXPOSE 3000
CMD ["npm","run","start"]
