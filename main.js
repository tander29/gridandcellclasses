function Grid(height, width, name, gridElement) {
    this.height = height;
    this.width = width;
    this.name = name;
    this.element = gridElement
    this.fillGrid()
    
    


this.neighbors = [
    {x: x=0, 
    y: y=1},
    {x: x=0, 
    y: y=-1},
    {x: x=1, 
    y: y=0},
    {x: x=1, 
    y: y=-1},
    {x: x=1, 
    y: y=1},
    {x: x=-1,
    y: y=0},
    {x: x=-1,
    y: y=1},
    {x: x=-1,
    y: y=-1}
            ]
        }

Grid.prototype = {
    
    fillGrid: function () {

        this.element.addEventListener('click', this.clickHandler.bind(this))
        
        this.sampleArray = new Array(this.height).fill().map(cell => new Array(this.width).fill(0))
        this.sampleArray.elementProperty = "elementProperty"
        this.sampleArray.forEach((_, rowIndex) => {
            let rowElement = document.createElement("section")
            rowElement.dataset.row = rowIndex
            this.element.appendChild(rowElement)
            _.forEach((_, colIndex) => {
                this.sampleArray[rowIndex][colIndex] = new Cell(rowIndex, colIndex, rowElement, this)
            });
        })
        console.table(this.sampleArray)
    },

    clickHandler: function(event) {
        const clickedCell = this.findCell(event.target.dataset.row, event.target.dataset.col)
        this.findNeighbors(clickedCell)
    },

    findCell: function (rowIndex, columnIndex) {
        const row = this.sampleArray[parseInt(rowIndex)]
        // if (row) {
        //     return row[parseInt(columnIndex)]
        // } else {
        //     return null
        // }
        return row && row[parseInt(columnIndex)]
    },

    findNeighbors: function(clickedCell) {
        let neighborsArray = []
        
        console.log(' i click on this', clickedCell) 
        for(let i = 0; i<this.neighbors.length; i++){
            let xNeighbor = clickedCell.rowIndex + this.neighbors[i].x
            let yNeighbor = clickedCell.colIndex + this.neighbors[i].y
            let neighborCell = this.findCell(xNeighbor, yNeighbor)

            if (neighborCell){
                neighborsArray.push(neighborCell)
            }
    }
    console.log(neighborsArray)
},
}





function Cell(rowIndex, colIndex, parent, grid) {
    this.rowIndex = rowIndex;
    this.colIndex = colIndex;
    this.parent = parent;
    this.grid = grid;
    this.createCell();  
}

Cell.prototype.createCell = function () {
    this.element = document.createElement("article");
    this.element.dataset.row = this.rowIndex;
    this.element.dataset.col = this.colIndex;
    this.parent.appendChild(this.element);
}

Cell.prototype.getCell = function () {
    
    return this.element
    
}

let bob = new Grid(8, 8, "name",document.getElementById("main"))


