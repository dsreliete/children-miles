import React, { Component }  from 'react';
import SideNav, {MenuIcon} from './SideNavComponent';
import Children from './children/ChildrenComponent';
import Family from './family/FamilyComponent';
import TitleComponent from './TitleComponent';

class Main extends Component {

    constructor(props){
        super(props);
        this.state = {
            showNav : false,
            item: 'Home',
            familyName: ''
        };
    }

    getStyle = () => {
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

    handleNavItem = (item) => {
        this.setState({ item: item })
    }

    handleIconItem = () => {
        this.setState({ item: "Family" })
    }

    handleFamilyName = (name) => {
        this.setState({ familyName: name })
    }
    
    render() {
        let styles = this.getStyle();
    
        return (
            <>
                <div style={ styles.topBar }>
                    <MenuIcon onClick={ ()=> this.setState({ showNav: true })} style={ styles.menuIcon }/>
                    <img className="mr-3" src="/assets/images/icon.png" height="30" width="30" alt="Milhas Infantis"/>
                    Milhas Infantis
                </div>
                <SideNav
                    showNav={ this.state.showNav }
                    onHideNav={ () => this.setState({ showNav: false }) }
                    title={ this.state.familyName + ' Family' }
                    titleStyle={ styles.bg2 }
                    items={[
                        { title: 'Home', icon:'fa fa-home fa-lg' }, 
                        { title: 'Categoria', icon:'fa fa-list fa-lg' }, 
                        { title: 'Atividade', icon:'fa fa-thumbs-up fa-lg' }, 
                        { title: 'Penalidade', icon:'fa fa-thumbs-down fa-lg' },
                        { title: 'Prêmios', icon:'fa fa-gift fa-lg' },
                        { title: 'Histórico', icon:'fa fa-calendar fa-lg' }
                    ]}
                    itemStyle={{ backgroundColor: '#fff' }}
                    onItemClick={ (item) => this.handleNavItem(item) }
                    onIconClick={ () => this.handleIconItem() }
                    itemHoverStyle={{ backgroundColor: '#b2dfdb' }} 
                />
                { 
                    this.state.item === "Home" ? <Children /> : 
                    this.state.item === "Categoria" ? <TitleComponent title={ this.state.item }/> : 
                    this.state.item === "Atividade" ? <TitleComponent title={ this.state.item }/> :
                    this.state.item === "Penalidade" ? <TitleComponent title={ this.state.item }/> :
                    this.state.item === "Prêmios" ? <TitleComponent title={ this.state.item }/> : 
                    this.state.item === "Histórico" ? <TitleComponent title={ this.state.item }/> :
                    this.state.item === "Family" ? <Family setFamilyName={ this.handleFamilyName }/> : 
                    null 
                }  
            </>      
        );
    }
}

export default Main;