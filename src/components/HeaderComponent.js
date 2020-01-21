import React, { Component }  from 'react';
import SideNav, {MenuIcon} from './SideNavComponent';
import Children from './ChildrenComponent';
import TitleComponent from './TitleComponent';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            showNav : false,
            item: 'Home'
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

    handleNavItem(item) {
      this.setState({item: item})
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
            items={[{title: 'Home', icon:'fa fa-home fa-lg'}, 
            {title: 'Categoria', icon:'fa fa-info-circle fa-lg'}, 
            {title:'Atividade', icon:'fa fa-info-circle fa-lg'}, 
            {title:'Histórico', icon:'fa fa-info-circle fa-lg'}
            ]}
            itemStyle={{backgroundColor: '#fff'}}
            onItemClick={(item) => this.handleNavItem(item)}
            itemHoverStyle={{backgroundColor: '#b2dfdb'}} />
            {this.state.item === "Home" ? <Children /> : 
            this.state.item === "Categoria" ? <TitleComponent title={this.state.item}/> : 
            this.state.item === "Atividade" ? <TitleComponent title={this.state.item}/> : 
            this.state.item === "Histórico" ? <TitleComponent title={this.state.item}/> : 
            null}  
        </>      
      );
    }
}

export default Header;