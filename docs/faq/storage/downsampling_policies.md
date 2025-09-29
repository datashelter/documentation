# What are downsampling policies?

They keep many recent versions and fewer older versions, to optimize both cost and recovery.

Explanation

A tiered retention policy defines how backup versions are preserved over time.

Recent versions are kept in larger numbers, since they are often used for quick restores.

Older versions are gradually reduced, which helps limit the amount of storage space used.

It’s a balance between security (being able to roll back in time) and cost control.