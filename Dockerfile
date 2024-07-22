# Specify the base image we need for our React app
FROM node:20.11-alpine AS build

# Create /app directory within the image to hold our application source code
WORKDIR /app

# Copy everything in the root directory into our /app directory
COPY . .

# Install the dependencies 
RUN npm ci

# Build the app with optional configuration
RUN npm run build

FROM caddy:2.8-alpine AS run

# Copy the application executable from the build image
COPY --from=build /app/dist /srv

# Copy the Caddyfile configuration file to the proper location
COPY --from=build /app/Caddyfile /etc/caddy/Caddyfile

# Tell Docker that the container listens on specified network ports at runtime
EXPOSE 3000
