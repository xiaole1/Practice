import React  'React' ;
import ReactDom  'react-dom' ;
import Header from './public/header.js';
import Footer from '.public/footer.js';
import Nav from './public/nav.js';

var cstyle={width:800,heigth:400,margin:"0 auto",backgroundColor:"#f00"}
class Contents extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
        <div style={cstyle}>contents</div>;
      )
  }
}

ReactDom.render(
    <div><Header />
        <Nav />
        <Contents />
        <Footer />
    </div>,
    document.getElementById('eg')
  );