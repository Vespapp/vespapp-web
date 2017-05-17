# vespapp-web
Web Platform for Asian Wasp Detection

## Minimun instructions to run
Install frontend dependencies

```
make install
```

Run gulp and collects static files from each of the applications

```
make collectstatic
```

Propagate changes make to the models into the database schem

```
make makemigrations
make migrate
```

## Rock docker!

Development

```
make devel
```
Deployment

```
make deploy
```

## Load DB

```
make load_locations
```


## Lenguages

Supported languages:

- Spanish
- Catalan

If you need more, fork and pull request ;)

```
make compile-lang
make update-lang
```
