# Use a Node.js base image with version 18
FROM node:18-alpine

# Install pnpm
RUN npm install -g pnpm

# Set the working directory
WORKDIR /app

# Copy the package.json and pnpm-lock.yaml files
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN pnpm install

# Copy the application code
COPY . .

# Build the NestJS application
RUN pnpm build

# Expose the port that the application will run on
EXPOSE 3000

# Start the application
CMD ["pnpm", "start:prod"]
