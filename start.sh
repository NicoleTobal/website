docker rm -f /my-website
docker build -t my-website-image .
docker run --name my-website -p 8081:80 -d my-website-image