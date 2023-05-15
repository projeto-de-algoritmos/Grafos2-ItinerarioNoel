import { Component, OnInit } from '@angular/core';
import PriorityQueue from './priorityQueue';

@Component({
  selector: 'grafo-prim',
  templateUrl: './grafo-prim.component.html',
  styleUrls: ['./grafo-prim.component.css']
})

export class GrafoPrimComponent implements OnInit {

  public selectedValue:any;
  public size :number|any;
  public extractMin: number | any;
  
  public arrayA:number[][][] = [
    [ [ 1, 350 ], [ 3, 270 ] ],
    [ [ 0, 350 ], [ 2, 180 ], [ 4, 190 ] ],
    [ [ 1, 180 ], [ 5, 400 ] ],
    [ [ 0, 270 ], [ 4, 200 ], [ 5, 500 ] ],
    [ [ 3, 200 ], [ 5, 300 ], [ 1, 190 ] ],
    [ [ 4, 300 ], [ 3, 500 ], [ 2, 400 ] ],
    [ [ 4, 110 ]]
  ];

  constructor() { }

  ngOnInit(): void {
    
  }
  
  public onClick(){
    let data = this.prim(this.arrayA, this.selectedValue);
    alert(data.data);
    
  }


  public prim(graph:number[][][], startVertex = -1) {
    
    const nVertices = graph.length - 1;
    const minSpanTree = [];
    let mstCost = 0, data;
    
  
    let firstVertex = startVertex === -1 ? Math.ceil(Math.random() * nVertices) : startVertex;
  
    const visitedVertices = [firstVertex];
  
    const crossingEdges = new PriorityQueue();
    console.log(crossingEdges)
  
    graph[firstVertex].forEach((edge) => {
      crossingEdges.insert([firstVertex, edge[0], edge[1]]);
    });
  
    while (crossingEdges.size() > 0) {
      const minEdge:number|any = crossingEdges.extractMin();
  
      if (visitedVertices.includes(minEdge[1])) {
        continue;
      }
  
      const newVertex = minEdge[1];
  
      visitedVertices.push(newVertex);
      minSpanTree.push(minEdge);
      mstCost += minEdge[2];
      data = visitedVertices;
  
      graph[newVertex].forEach((e) => {
        crossingEdges.insert([newVertex, e[0], e[1]]);
      });
    }
  
  
    return {mstCost, data}
  
  }
}

