DEPRECATED

The liquid "forceArgument" rule has changed. You should instead use "argumentLineBreak" for example:

✓ THIS IS CORRECT

{
  "liquid": {
    "argumentLineBreak": 3
  }
}

𐄂 THIS IS INCORRECT
{
  "liquid": {
    "forceArgument": 3
  }
}