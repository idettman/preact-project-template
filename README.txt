
https://github.com/rollup/rollup/wiki/Command-Line-Interface


# create a self-executing bundle...
rollup --format iife -- src/app.js > build/app.js

# ...with inline sourcemaps:
rollup -f iife --sourcemap inline -- src/app.js > build/app.js

# create a bundle with dependencies on jQuery and Angular,
# with a sourcemap in a separate file
rollup -f iife --globals jquery:jQuery,angular:ng \
  -i src/app.js -o build/app.js -m build/app.js.map

# passing values via `process.env`
rollup -c --environment INCLUDE_DEPS,BUILD:production




// using the example above
process.env.INCLUDE_DEPS === 'true' // always a string
process.env.BUILD === 'production'