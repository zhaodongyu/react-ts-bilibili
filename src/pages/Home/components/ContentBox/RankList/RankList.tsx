import React from 'react';

interface rankProps {
    imgUrl: string
}

const RankList: React.FC<rankProps> = (props) => {
    const { imgUrl } = props;
    return (
        <div className="rank-list" style={{
            background: `center / contain no-repeat url(${imgUrl})`
        }}>
        </div>
    )
};

export default RankList;