let gridCount = 16;
//This sets the default value for the grid

const DRAWINGGRID = document.querySelector(".drawingBoard");
for (let repetetions = 1; repetetions <= gridCount * gridCount; repetetions++){
    const grid = document.createElement('div');
    const divided = (256/gridCount);
    grid.style.cssText = `background-color: Green; height:${divided-2}px; width:${divided-2}px; border: solid; border-width: 1px; border-color: black;`;
    DRAWINGGRID.appendChild(grid);
}