//Kevin Youngerman
//Lab 5

//This program takes an adjacency matrix, converts it into an adjacency list, and prints out the
//list to the console. It prints each vertex, and every vertex it connects to.

function convertToAdjList(adjMatrix){ //This algorithm converts an adjacency matrix into an adjacency list
    let adjList =[];
    if(adjMatrix.length === 0)
    {
        return adjList;
    }
    else {
        for (let i = 0; i < adjMatrix.length; i++) {
            adjList[i] = [i + 1];
            for (let j = 0; j < adjMatrix.length; j++) {
                if (adjMatrix[i][j] === 1) {
                    if (j === i) {
                        adjList[i].push(i + 1);
                    } else {
                        adjList[i].push(j + 1);
                    }
                }
            }
        }
    }
return adjList;
}

function printAdjList(list) //Prints the adjacency list, with all the connections between the nodes
{
    if(list.length === 0)
    {
        console.log("The Array is empty");
    }
    else {
        for (let i = 0; i < list.length; i++) {
            console.log("Vertex ", i + 1, " connects to: ")
            for (let j = 0; j < list.length; j++) {
                if (list[i][j] !== undefined && j !== 0) {
                    console.log(list[i][j]);
                }
            }
        }
    }
}

function testConvert() { //Test/Example function that tests various predefined matrices
    console.log("-------matrix 1------ \n")
    let m1 =
           [[0, 1, 1],
            [0, 0, 1],
            [0, 1, 1]];
    let l1 = convertToAdjList(m1);
    printAdjList(l1);

    console.log("-------matrix 2------ \n")
    let m2 =
           [[0, 1, 1, 0],
            [0, 0, 1, 1],
            [0, 1, 1, 1],
            [0, 1, 0, 0]];
    let l2 = convertToAdjList(m2);
    printAdjList(l2);

    console.log("-------matrix 3------ \n")
    let m3 =
           [[0, 1],
            [1, 0]];
    let l3 = convertToAdjList(m3);
    printAdjList(l3);

    console.log("-------matrix 4------ \n")
    let m4 =
        [];
    let l4 = convertToAdjList(m4);
    printAdjList(l4);

}

testConvert();
