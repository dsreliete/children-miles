import React, { Component }  from 'react';
import SideNav, {MenuIcon} from './SideNavComponent';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            showNav : false
        };
    }

    getStyle() {
        let styles = {
          topBar: {
            padding: 12,
            background: '#009688',
            color: '#fff',
            fontSize: '22px',
          },
          bg2: {
            backgroundColor: '#FFC107',
          },
          menuIcon: {
            marginRight: 16, 
            color: '#fff',
            verticalAlign: 'middle',
          },
          menuBar: {
            width: '100%',
            background: '#0AC',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            position: 'fixed',
            zIndex: 2,
            top: 0,
            paddingTop: 48,
          },
          list: {
            listStyleType: 'none'
          }
        }
        return styles;
      }

    render() {
      let styles = this.getStyle();
      return (
        <>
          <div style={styles.topBar}>
              <MenuIcon onClick={()=>this.setState({showNav: true})} style={styles.menuIcon}/>
              <img className="mr-3" src="/assets/images/icon.png" height="30" width="30" alt="Child Miles"/>
              Milhas Infantis
          </div>
          <SideNav
            showNav={this.state.showNav}
            onHideNav={()=>this.setState({showNav: false})}
            title={'Rodrigues Family'}
            titleStyle={styles.bg2}
            items={[{title: 'Home', icon:'fa fa-home fa-lg'}, {title: 'Service', icon:'fa fa-info-circle fa-lg'}, {title:'About', icon:'fa fa-info-circle fa-lg'}, {title:'Contact', icon:'fa fa-info-circle fa-lg'}]}
            itemStyle={{backgroundColor: '#fff'}}
            itemHoverStyle={{backgroundColor: '#b2dfdb'}} />
        </>        
      );
    }
}

export default Header;