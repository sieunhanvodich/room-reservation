import React from 'react';
import Meeting from '../Meeting/Meeting';

const ListMeeting = ({Meetings, onClickCard}) => {
    return (
        <div className="d-flex flex-wrap">
            {Meetings.map((meeting, index) => (<Meeting key={index} onClickShowDetail={onClickCard}/>))}
        </div>
    )
}

export default ListMeeting;