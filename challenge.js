function pangrams(s) {
    // Write your code here
    const letters = {}
    s.toLowerCase().split('').forEach((c) => {
        if (c >= 'a' && c <= 'z') letters[c] = 1
    })
    return ((Object.keys(letters).length === 26)
        ? 'pangram'
        : 'not pangram'
    )
}
