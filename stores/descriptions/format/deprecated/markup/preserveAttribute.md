DEPRECATED

The markup "preserveAttribute" rule has changed. You should instead use "attributePreserve" for example:

✓ THIS IS CORRECT
{
  "liquid": {
    "attributePreserve": false
  }
}

𐄂 THIS IS INCORRECT
{
  "liquid": {
    "preserveAttribute": false
  }
}