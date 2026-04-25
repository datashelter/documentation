---
description: "Datashelter indexes are CSV files for easy parsing by external tools. CSV's simplicity and universal support make it ideal for backup metadata—no complex SQL queries or relational logic needed."
---

# Why are my indexes CSV files?

We sought a familiar format for creating our indexes, one that would be easily readable/editable by external applications. Given that we aren't performing any complex operations or relational queries, the use of SQLite seemed unnecessary.

Furthermore, we wanted to ensure that our indexes could be easily parsed and manipulated using a wide range of tools and programming languages. CSV is a widely supported format that can be easily read and written by many applications, making it a convenient choice for our indexes.
