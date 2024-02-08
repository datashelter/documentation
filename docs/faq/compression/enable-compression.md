# Can I enable compression at any moment ?

You can’t change this parameter at ANY MOMENT.  Indeed, we do not store any state to know if the files you stored were compressed or not.

This implies that if you enable this parameter after having made your first snapshots, some files with be compressed and some not. This will cause a problem while restoring your data. **YOU DON’T WANT THAT !**