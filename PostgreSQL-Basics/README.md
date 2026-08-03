# PostgreSQL Basics

The answers are in the `solutions` folder. Run `ex_1.sql` first because it creates the table.

```bash
psql -d your_database -f solutions/ex_1.sql
psql -d your_database -f solutions/ex_2.sql
```

Adding a dolphin without a name gives a `NOT NULL` error because `name` is the primary key.
