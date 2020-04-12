import React , {Component} from 'react';
import  MenuItem  from '../menu-item/menu-item.component';
import './directory.styles.scss';
class Directory extends Component {

    constructor(){
        super();
        this.state = {
            sections: [
                {
                    title: 'Hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    LinkUrl: 'hats'
                },
                {
                    title: 'Jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    LinkUrl: ''
                },
                {
                    title: 'Sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    LinkUrl: ''
                },
                {
                    title: 'Womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    id: 4,
                    size: 'large',
                    LinkUrl: ''
                },
                {
                    title: 'Mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    id: 5,
                    size: 'large',
                    LinkUrl: ''

                }

            ]
        }
    }
    render(){

        const menuItems = this.state.sections.map(({id,...otherSectionProperties}) => {
            return(
                <MenuItem key={id} {...otherSectionProperties}></MenuItem>
            )
        })
        return(
            <div className='directory-menu'>
                {menuItems}

            </div>
        )
    }
}
export default Directory;