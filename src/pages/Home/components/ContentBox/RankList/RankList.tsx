import React from 'react';

interface rankProps {
    imgUrl: string
}

const RankList: React.FC<rankProps> = (props) => {
    const { imgUrl } = props;
    return (
        <div className="rank-list" style={{
            background: `url(${imgUrl}) 0% 0% / 100% 100% no-repeat`,
        }}>
        </div>
    )
};

export default RankList;