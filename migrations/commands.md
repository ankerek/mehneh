##Commands##
More info: http://docs.sequelizejs.com/en/latest/docs/migrations
```
./sequelize db:migrate        # Run pending migrations.
./sequelize db:migrate:undo   # Revert the last migration run.
./sequelize help              # Display this help text.
./sequelize init              # Initializes the project.
./sequelize migration:create  # Generates a new migration file.
./sequelize version           # Prints the version number.
```

## Examples ##
### Migrate and migrate back
```
cd migrations
./sequelize db:migrate
./sequelize db:migrate:undo
```
