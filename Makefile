# Images
docker_nginx_build:
	docker build -t vespapp/nginx dockerfile_nginx/
docker_nginx_push:
	docker push vespapp/nginx
docker_build:
	docker build -t vespapp/vespapp-web .
docker_push:
	docker push vespapp/vespapp-web

# Run
install:
	docker-compose run --no-deps --rm npm install
	docker-compose run --no-deps --rm bower install
	docker-compose run --no-deps --rm -T gulp
makemigrations:
	docker-compose run --rm --service-ports web makemigrations
migrate:
	docker-compose run --rm --service-ports web migrate
collectstatic:
	docker-compose run --rm gulp
	docker-compose run --rm web collectstatic --noinput
devel:
	docker-compose run --rm --service-ports dev
gulp-watch:
	docker-compose run --rm -T gulp watch

# Lenguages
compile-lang:
	docker-compose run --rm dev compilemessages
update-lang:
	docker-compose run --rm web makemessages -a

# Stop all containers
stop-rm:
	cd tasks && \
	./stop-rm-Dockers.sh
