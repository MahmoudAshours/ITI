import React from 'react';
import { Link } from 'react-router-dom';
const BLocks = (props) => {
    var blocksData = props.blockData;
    const src = '/images/blocks/';

    function rendercol(x) {
        const item = [];
        let n = x + 3
        for (let i = x; i < n && i < blocksData.length; i++) {

            let type = '';
            if (blocksData[i].type == 'lg') type = 'col-sm-5 col col col__1';
            else if (blocksData[i].type == 'md') type = 'col-sm-4  col col__2';
            else type = 'col-sm-3 col col__3';
            item.push(
                <div className={`${type}`} style={{
                    backgroundImage: `url(${src}${blocksData[i].image})`,
                }}>
                    <Link to={`${blocksData[i].link}`} > <div className="cont">
                        <h4 className="heaing-bottom-up">{blocksData[i].title}</h4>
                    </div>
                    </Link>
                </div>
            )
        }
        return (item)
    }

    function renderrow() {
        const x = blocksData.length;
        const row = [];
        for (let i = 0; i < x; i += (x / 3) + 1) {
            row.push(<div className='row'>
                {rendercol(i)}
            </div>)
        }
        return (row)
    }

    function renderBlocks(e) {

        if (e.length > 1) {
            return (
                <div className="container-fluid" >
                    {renderrow()}
                </div>
            )

        }
    }

    return (
        <div className="parent">
            {renderBlocks(blocksData)}
        </div>
    )
}


export default BLocks;