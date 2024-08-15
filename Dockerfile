# Use an official Node runtime as the base image
FROM node:14 as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app
RUN npm run build

# Use Apache as the production server
FROM httpd:2.4

# Copy the build output to replace the default Apache contents
COPY --from=build /app/build/ /usr/local/apache2/htdocs/

# Copy custom Apache configuration if needed
# COPY ./my-httpd.conf /usr/local/apache2/conf/httpd.conf

# Expose port 80
EXPOSE 80
