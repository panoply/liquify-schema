DEPRECATED

The liquid "preserveComment" rule has changed. You should instead use "commentPreserve" for example:

✓ THIS IS CORRECT

{
  "liquid": {
    "commentPreserve": true
  }
}

𐄂 THIS IS INCORRECT
{
  "liquid": {
    "preserveComment": true
  }
}