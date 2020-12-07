import React from 'react';
import IconButton from '../../../../common/IconButton/IconButton';


const primaryData = [
    {
        title: `首页`,
        img: require(`./../../../../static/package-secured.png`).default,
    },
    {
        title: `首页`,
        img: require(`./../../../../static/package-secured.png`).default,
    },
    {
        title: `首页`,
        img: require(`./../../../../static/package-secured.png`).default,
    },
    {
        title: `首页`,
        img: require(`./../../../../static/package-secured.png`).default,
    },
];


interface primaryDataInterface{
    title: string,
    img: any,
}

function Menu() {

    // 渲染上方导航
    const renderPrimary = (children: Array<primaryDataInterface>) => {
        return (
            <ul className='primary-container'>
                {
                    children.map( (child, index) => {
                        const { title, img } = child;
                        return (
                            <li key={index}>
                                <IconButton title={title} img={img} />
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
    return (
        <div className='wrap-container'>
            {renderPrimary(primaryData)}
        </div>
    );
}

export default Menu;
