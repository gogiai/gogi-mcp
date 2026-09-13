# Multi-stage Dockerfile for Gogi MCP Server
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package manifests and install dependencies
COPY package*.json tsconfig.json ./
RUN npm ci

# Copy source and build TypeScript
COPY src ./src
RUN npm run build

# Production stage
FROM node:20-alpine AS runner

WORKDIR /app

# Copy package manifests and install production dependencies only
COPY package*.json ./
RUN npm ci --only=production

COPY --from=builder /app/dist ./dist

ENV NODE_ENV=production

# Default entrypoint for MCP bridge execution
ENTRYPOINT ["node", "dist/cli.js"]
