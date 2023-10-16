# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install serve globally
RUN npm install -g serve

# Copy the rest of the application code into the container
COPY . .

# Expose port 5000 for the app to listen on (default port for serve)
EXPOSE 5000

# Define the command to run the app
#CMD ["serve", "-s", "."]
CMD ["serve", ".", "-l", "5000"]

