FROM node:23-alpine3.20

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY . .

# Command will be provided by smithery.yaml
CMD ["node", "src/index.ts"]
