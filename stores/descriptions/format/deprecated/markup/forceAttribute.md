DEPRECATED

The markup "forceAttribute" rule has changed. You should instead use "attributeLineBreak" for example:

✓ THIS IS CORRECT

{
  "liquid": {
    "attributeLineBreak": true
  }
}

𐄂 THIS IS INCORRECT
{
  "liquid": {
    "forceAttribute": true
  }
}