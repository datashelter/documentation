---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Database client setup

As most databases require strong coherence between the client and the server, snaper **rely on the database client installed on your server**.

For this reason, you need to install the database client on your server before using snaper to backup and restore your databases.

<Tabs groupId="database_type">
  <TabItem value="mysql" label="MySQL">
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
  </TabItem>
  <TabItem value="postgresql" label="PostgreSQL">
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
  </TabItem>
  <TabItem value="mongodb" label="MongoDB">
    **Install**

    Follow the [official documentation](https://docs.mongodb.com/manual/installation/) to install the **MongoDB client**: 

    You will find binaries for most operating systems and distributions on the [MongoDB Download Center](https://www.mongodb.com/try/download/database-tools)

    **Verify installation**

    Ensure your client is **properly installed** by running:
    ```
    mongodump --version
    ```
  </TabItem>
</Tabs>