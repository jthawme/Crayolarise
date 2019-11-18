# Crayolarise

This package converts images into their crayola crayon palette. I only have a 24 pack of crayons so currently the only pack available is this one:

<https://www.amazon.co.uk/Crayola-52-3024-Crayons-24-Colors/dp/B0765ML9Y1>

## Installation

```
npm install crayolarise
```

## Usage 

```
import Crayolarise from 'crayolarise

// Do all of your canvas drawing stuff

Crayolarise.convert(canvas, scale); // scale is a pixelation amount. It is 1:1 by default
```


### API

`Crayolayise.list()` – Static method to list available packs

`Crayolarise.convertPack(pack)` – Static method to convert from an array of hex codes into the pack colour objects

`Crayolarise.setPack(String packName)` - Sets the internal pack to the desired pack (only 1 atm)

`Crayolarise.convert(canvas, scale)` - Converts current canvas to crayola colours

`Crayolarise.print(canvas, scale)` - Converts current canvas to a print ready 'colour dots' file

`Crayolarise.match(Color c)` - Method to return the index of the current pack of the closest colour