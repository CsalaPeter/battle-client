"use strict";

let ground = new Image();
let props = new Image();
let screenCol = 0;
let screenRow = 0;
let gameArea = "";
let ctx = "";

ground.src = "img/mapSheets/grass_and_road.png";
props.src = "img/mapSheets/props.png";

$(document).ready(function () {
  setTimeout(function () {
    // The size of the sheets
    let groundWidth = ground.width / tileSize;
    let groundHeight = ground.height / tileSize;
    let propsWidth = props.width / tileSize;
    let propsHeight = props.height / tileSize;

    // The size of the screen in tiles
    screenCol = Math.ceil($(window).width() / tileSize);
    screenRow = Math.ceil($(window).height() / tileSize);

    gameArea = $("#gameCanvas");
    gameArea.css("width", "100vw");
    gameArea.css("height", "100vh");
    gameArea.attr("width", $(window).width());
    gameArea.attr("height", $(window).height());

    ctx = gameArea.get(0).getContext("2d");

    drawLayer(ground, groundWidth, groundHeight, 1, layer1);
    drawLayer(props, propsWidth, propsHeight, 65, layer2);
  }, 2000);
});
