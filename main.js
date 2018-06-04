function Grid(height, width, name) {
    this.height = height;
    this.width = width;
    this.name = name;
    this.fillGrid()
    this.findCell(1, 2)
    Cell.call(this)
    
    

}

Grid.prototype = {
    fillGrid: function () {
        let main = document.getElementById("main")
        
        this.sampleArray = new Array(this.height).fill().map(cell => new Array(this.width).fill(0))
        this.sampleArray.elementProperty = "hello"
        this.sampleArray.forEach((_, rowIndex) => {
            let rowDiv = document.createElement("section")
            // this.sampleArray[rowIndex] = 'big'
            rowDiv.dataset.row = rowIndex
            main.appendChild(rowDiv)
            _.forEach((_, colIndex) => {
                // this.sampleArray[rowIndex][colIndex] = new Cell(rowIndex, colIndex, rowDiv).createCell()
                // cellElement.createCell()
                this.sampleArray[rowIndex][colIndex] = new Cell(rowIndex, colIndex, rowDiv)
                
            });
        })
        console.table(this.sampleArray)
    },

    
    findCell: function (row, column) {
        console.log(this.sampleArray[row][column])  
        return this.sampleArray[row][column]
    },

    findNeighbors: function () {
        // let newNeighbor = new Cell()
    },
}

function Cell(rowIndex, colIndex, parent) {
    this.rowIndex = rowIndex;
    this.colIndex = colIndex;
    this.parent = parent;
    this.createCell();
    
    
}

Cell.prototype.createCell = function () {
    this.element = document.createElement("article");
    this.element.dataset.row = this.rowIndex;
    this.element.dataset.col = this.colIndex;
    this.parent.appendChild(this.element);
    this.element.addEventListener('click', this.getCell.bind(this))
}

Cell.prototype.getCell = function () {
    
    console.log(this.element)
    return this.element

}
Cell.prototype.hiMom = function () {
    
    console.log('hi mom')
    

}


let bob = new Grid(3, 5, "name")


