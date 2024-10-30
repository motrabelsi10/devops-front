# Étape 1 : Construire l'application Angular
FROM node:18 AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code de l'application
COPY . .

# Construire l'application pour la production
RUN npm run build --prod

# Étape 2 : Servir l'application Angular avec Nginx
FROM nginx:alpine

# Copier l'application construite depuis l'étape précédente
COPY --from=build /app/dist/front-devops-chambres /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Commande pour exécuter Nginx
CMD ["nginx", "-g", "daemon off;"]
