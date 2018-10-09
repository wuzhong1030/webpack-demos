module.exports = {
    root: true,
    extends: 'standard',
    env: {
        browser: true,
        node: true
    },
    globals: {
        $: true
    },
    plugins: [
        'html'
    ],
    rules: {
        // indent: ['error', 4]
    }
}