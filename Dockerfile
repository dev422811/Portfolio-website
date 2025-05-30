# Step 1: Build the app
FROM node:18 as build

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

# Step 2: Serve with Nginx
FROM nginx:alpine

# Copy build output to nginx html folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
