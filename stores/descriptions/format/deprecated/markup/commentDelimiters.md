DEPRECATED

The markup "commentDelimiters" rule has changed. Remove the "s" from the rule, as it now named "commentDelimiter" for example:

✓ THIS IS CORRECT

{
  "liquid": {
    "commentDelimiter": true
  }
}

𐄂 THIS IS INCORRECT
{
  "liquid": {
    "commenterDelimiters": true
  }
}