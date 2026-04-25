---
description: "Install and verify database clients required for Snaper backups. Choose from MySQL/MariaDB, PostgreSQL, or MongoDB client installation instructions and verification commands for your operating system."
---


# Database client setup

As most databases require strong compatibility between the client and the server, Snaper **relies on the database client installed on your server**.

For this reason, you need to install the database client on your server before using Snaper to back up and restore your databases.

::: tabs

    == tab "MySQL"
                **Install**

                Install the **MySQL client** by running the following command:
                ```
                sudo apt update
                sudo apt install mariadb-client # or "mysql-client" if not available
                ```

                **Verify installation**

                Ensure your client is **properly installed** by running:
                ```
                mysql --version
                ```


    == tab "PostgreSQL"
                **Install**

                Install the **PostgreSQL client** by running the following command:
                ```
                sudo apt update
                sudo apt install postgres
                ```

                **Verify installation**

                Ensure your client is **properly installed** by running:
                ```
                psql --version
                ```


    == tab "MongoDB"
            **Install**

            Follow the [official documentation](https://docs.mongodb.com/manual/installation/) to install the **MongoDB client**:

          You can find binaries for most operating systems and distributions in the [MongoDB Download Center](https://www.mongodb.com/try/download/database-tools)

            **Verify installation**

            Ensure your client is **properly installed** by running:
            ```
            mongodump --version
            ```


:::
