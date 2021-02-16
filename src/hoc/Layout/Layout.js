import React, {Component} from 'react'
import classes from './Layout.module.scss'
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Draw from '../../components/Navigation/Draw/Draw'

class Layout extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      menu: false
    }
  }
  
  toggleMenuHandler(){
    this.setState({
      menu: !this.state.menu
    })
  }
  
  render() {
    return (
      <div className={classes.Layout}>
        <Draw
          isOpen={this.state.menu}
          onToggleMenu={this.toggleMenuHandler.bind(this)}
        />
        
        <MenuToggle
          isOpen={this.state.menu}
          onToggleMenu={this.toggleMenuHandler.bind(this)}
        />
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Layout