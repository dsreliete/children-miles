import React from 'react';
import PropTypes from 'prop-types';

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this._nav = React.createRef();
    this.hideNav = this.hideNav.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.getDefaultContent = this.getDefaultContent.bind(this);
    this.update = this.update.bind(this);
    this.getStyle = this.getStyle.bind(this);
    this.onItemClick = this.onItemClick.bind(this);
  }

  hideNav() {
    const { onHideNav } = this.props;
    onHideNav && onHideNav();
  }

  onTouchStart(evt) {
    this.startX = evt.touches[0].pageX;
    this.currentX = this.startX;
    this.touchingSideNav = true;
    requestAnimationFrame(this.update);
  }

  onTouchMove(evt) {
    // let { openFromRight } = this.props;
    if (!this.touchingSideNav) return;
    this.currentX = evt.touches[0].pageX;
    // const translateX = Math[openFromRight ? 'max' : 'min'](0, this.currentX - this.startX);
  }

  onTouchEnd(evt) {
    let { openFromRight } = this.props;
    if (!this.touchingSideNav) return;
    this.touchingSideNav = false;
    const translateX = Math[openFromRight ? 'max' : 'min'](0, this.currentX - this.startX);
    this._nav.current.style.transform = '';
    if (!openFromRight && translateX < 0) this.hideNav();
    if (openFromRight && translateX > 0) this.hideNav();
  }

  update() {
    let { openFromRight } = this.props;
    if (!this.touchingSideNav) return;
    requestAnimationFrame(this.update);
    const translateX = Math[openFromRight ? 'max' : 'min'](0, this.currentX - this.startX);
    this._nav.current.style.transform = `translateX(${translateX}px)`;
  }

  onItemClick(title) {
    this.props.onItemClick(title)
    this.hideNav()
  }

  getDefaultContent() {
    let styles = {
      title: {
        background: '#FFC107',
        color: '#fff',
        fontWeight: 400,
        margin: 0,
        lineHeight: '82px',
        padding: 22,
      },
      li: {
        padding: 22,
        cursor: 'pointer',
        backgroundColor: '#fff',
      },
      listUnstyled: {
        padding: 0,
        listStyle: 'none',
      },
      icon:{
          marginRight: 16,
          backgroundColor: 'transparent',
      },
      logo:{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center'
      }
    };

    Object.assign(styles.li, this.props.itemStyle);
    Object.assign(styles.listUnstyled, this.props.itemStyle);
    Object.assign(styles.icon, this.props.itemStyle);
    Object.assign(styles.title, this.props.titleStyle);
    Object.assign(styles.logo, this.props.titleStyle);


    let handleItemHover = (e, enter) => {
      if (enter)
        Object.assign(e.currentTarget.style, styles.li, (this.props.itemHoverStyle || {backgroundColor: '#f5f5f5'}))
      else
        Object.assign(e.currentTarget.style, styles.li)
    };

    return (
      <div>
        <div style={styles.title}>
          <img style={styles.logo} src="/assets/images/family.jpg" alt="family" width="90px" className="rounded-circle"/>
          <h3 className="mt-3">{this.props.title || 'Simple SideNav'}</h3>
        </div>
        <ul style={styles.listUnstyled}>
          { 
            this.props.items ? this.props.items.map((item, key) => <li key={'item' + key} 
              style={styles.li} 
              onMouseOver={(e)=> handleItemHover(e, true)} 
              onClick={() => this.onItemClick(item.title)}
              onMouseOut={(e)=> handleItemHover(e, false)} >
                <i style={styles.icon} className={item.icon}></i>{item.title}
            </li>)
            : <li key='item1' style={styles.li}>Item 1</li>
          }
        </ul>
      </div>
    )
  }

  getStyle() {
    const { openFromRight, showNav } = this.props;
    let styles = {
      root: {
        left     : 0,
        top      : 0,
        width    : '100%',
        height   : '100%',
        position : 'fixed',
        overflow : 'hidden',
        zIndex   : 8,
        pointerEvents : showNav ? 'auto' : 'none'
      },
      nav: {
        position   : 'relative',
        width      : '90%',
        maxWidth   : 400,
        height     : '100%',
        background : '#FFF',
        boxShadow  : '2px 0 12px rgba(0,0,0,0.4)',
        transform  : showNav ? 'none' : `translateX(${openFromRight ? 102 : -102}%)`,
        transition : `transform ${showNav ? '0.33s' : '0.13s' } cubic-bezier(0,0,0.3,1)`,
        display    : 'flex',
        willChange : 'transform',
        flexDirection: 'column',
        float: openFromRight ? 'right' : 'left',
      },
      overlay:{
        position : 'absolute',
        width    : '100%',
        height   : '100%',
        top      : 0,
        left     : 0,
        opacity  : showNav ? 1 : 0 ,
        background : 'rgba(0,0,0,0.4)',
        transition : 'opacity 0.3s cubic-bezier(0, 0, 0.3, 1)',
        willChange : 'opacity',
      }
    };

    Object.assign(styles.root, this.props.style);
    Object.assign(styles.nav, this.props.navStyle);
    return styles;
  }



  render() {
    let styles = this.getStyle();


    return(
      <aside style={styles.root}>
        <div style={styles.overlay} onClick={this.hideNav}></div>
        <nav style={styles.nav}
          onTransitionEnd={(e) => { e.target.style.transition = 'none' }}
          onTouchStart={this.onTouchStart}
          onTouchMove={this.onTouchMove}
          onTouchEnd={this.onTouchEnd}
          ref={this._nav}
          >
          {this.props.children || this.getDefaultContent()}
        </nav>
      </aside>
    )
  }


}

SideNav.propTypes = {
  style:          PropTypes.object,
  navStyle:       PropTypes.object,
  titleStyle:     PropTypes.object,
  itemStyle:      PropTypes.object,
  itemHoverStyle: PropTypes.object,
  title:          PropTypes.node,
  children:       PropTypes.node,
  items:          PropTypes.arrayOf(PropTypes.node),
  showNav:        PropTypes.bool,
  openFromRight:  PropTypes.bool,
  onHideNav:      PropTypes.func,
  onShowNav:      PropTypes.func,
  // onItemClick:    PropTypes.func,
}


let MenuIcon = props => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    cursor="pointer"
    fill="#fff"
    height="24"
    viewBox="0 0 24 24"
    width="24"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
);

export { SideNav, MenuIcon };
export default SideNav;
