# Use an official Node.js runtime as the base image
FROM public.ecr.aws/docker/library/node:16-alpine

# Create and set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of your application code to the container
COPY . .
RUN npm install prisma
RUN prisma generate
RUN npm install axios
# Build your Next.js application for production
RUN npm run build

# Expose the port that your Next.js application will run on
EXPOSE 3000

# Define the command to start your Next.js application
CMD ["npm", "start"]
