"use strict";

let tileSourceX;
let tileSourceY;

function drawLayer(tileSheet, tileCol, tileRow, tileStartId, mapLayer) {
  let mapCols = mapLayer[0].length;
  let mapRows = mapLayer.length;

  for (let col = 0; col < mapWidthX; col += 1) {
    for (let row = 0; row < mapHeightY; row += 1) {
      if (col >= 0 && row >= 0 && col <= mapCols && row < mapRows) {
        let tileId = mapLayer[row][col];
        if (tileId !== 0) {
          tileId -= tileStartId;
          // Where to cut from the tile sheet
          tileSourceX = (tileId % tileCol) * tileSize;
          tileSourceY = Math.floor(tileId / tileRow) * tileSize;

          ctx.drawImage(
            tileSheet,
            tileSourceX,
            tileSourceY,
            tileSize,
            tileSize,
            col * tileSize,
            row * tileSize,
            tileSize,
            tileSize
          );
        }
      }
    }
  }
}
