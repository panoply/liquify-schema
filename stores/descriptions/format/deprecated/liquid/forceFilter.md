DEPRECATED

The liquid "forceFilter" rule has changed. You should instead use "filterLineBreak" for example:

✓ THIS IS CORRECT

{
  "liquid": {
    "filterLineBreak": 3
  }
}

𐄂 THIS IS INCORRECT
{
  "liquid": {
    "forceFilter": 3
  }
}