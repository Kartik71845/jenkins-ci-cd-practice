# Use a production-ready Node.js image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if present) to install dependencies
# We use package*.json to cover both formats
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production
# Install curl (Alpine uses apk rather than apt-get)
RUN apk --no-cache add curl

# Copy the rest of the application source code
COPY . .

# Inform Docker that the container listens on the specified port
EXPOSE 5000

# Command to run the application
CMD [ "npm", "start" ]
