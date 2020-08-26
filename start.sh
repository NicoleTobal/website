# Removes existing container, uses force in order to avoid stopping container
docker rm -f /my-website
# Builds new image
docker build -t my-website-image .
# Cleans old images
docker image prune -f
# Runs container from image
docker run --name my-website -p 8081:80 -d my-website-image