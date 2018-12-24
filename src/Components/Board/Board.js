import React,{Component} from 'react'
import Square from '../Square/Square'
class Board extends Component{

   constructor(props){
       super(props)
       this.state={
           squares:Array(9).fill(null),
           xIsNext:true
       }
   }

   handleClick(i){
       const squares=this.state.squares.slice()
       if (calculateWinner(squares) || squares[i]) {
        return;
      }
       squares[i]=this.state.xIsNext ?'X':'O'
       
       this.setState({
           squares:squares,
           xIsNext:!this.state.xIsNext

       })
   }
    returnSquare(i){
        return <Square 
                  value={this.state.squares[i]} 
                  onClick={()=>this.handleClick(i)}/>      
    }
    render(){
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
          status = 'Winner: ' + winner;
        } else {
          status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }



        return (
          <div  className="board">
             <div className="board__status">{status}</div>
             <div  className="board__box">
             <div >
                 {this.returnSquare(0)}
                 {this.returnSquare(1)}
                 {this.returnSquare(2)}
             </div> 
             <div >
                 {this.returnSquare(3)}
                 {this.returnSquare(4)}
                 {this.returnSquare(5)}
             </div>
             <div >
                 {this.returnSquare(6)}
                 {this.returnSquare(7)}
                 {this.returnSquare(8)}
             </div>
             </div>
          </div>
    )    
    }
}

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
export default Board