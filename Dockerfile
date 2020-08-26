FROM nginx

# Label is added to identify image version
LABEL version="1.0"

# Nginx config file is copied
COPY nginx.conf /etc/nginx/nginx.conf

# Since it is plain html no CMD command is needed, just to copy in nginx directory
COPY . /usr/share/nginx/html
