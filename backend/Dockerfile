# ---------- Stage 1: Build ----------
FROM node:22 AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all deps (including dev)
RUN npm install

# Copy rest of the code
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build TypeScript -> dist
RUN npm run build


# ---------- Stage 2: Production ----------
FROM node:22-slim

WORKDIR /app

# Copy only required files
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

# Expose your backend port
EXPOSE 5000

# Start the server
CMD ["node", "dist/server.js"]