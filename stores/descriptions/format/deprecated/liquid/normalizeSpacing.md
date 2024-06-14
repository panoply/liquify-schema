DEPRECATED

The liquid "normalizeSpacing" rule has changed. You should instead use "equipoiseSpacing" for example:

✓ THIS IS CORRECT

{
  "liquid": {
    "normalizeSpacing": true
  }
}

𐄂 THIS IS INCORRECT
{
  "liquid": {
    "equipoiseSpacing": true
  }
}