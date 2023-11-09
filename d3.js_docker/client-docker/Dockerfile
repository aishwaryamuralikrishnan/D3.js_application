# Use an official Nginx runtime as a parent image
FROM nginx

# Remove the default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy your HTML and JavaScript files from the context
COPY . /usr/share/nginx/html

# Expose the port the web server will listen on (usually 80)
EXPOSE 80

# Start the web server when the container runs
CMD ["nginx", "-g", "daemon off;"]
