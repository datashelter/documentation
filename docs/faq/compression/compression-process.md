# How is compression achieved with Snaper ?

We use ZSTD algorithm to compress all files sent to S3 (*you can optionnally disable this feature*).

We chose this algorithm as it offers one of the best speed/compression ratio.