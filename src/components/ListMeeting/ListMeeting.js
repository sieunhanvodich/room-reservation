import React from 'react';
import Meeting from '../Meeting/Meeting';

const ListMeeting = ({Meetings, onClickCard}) => {
    return (
        <div className="d-flex flex-wrap">
            {Meetings.map((meeting, index) => (<Meeting key={meeting.id} onClickShowDetail={() => onClickCard(meeting)} content={meeting}/>))}
        </div>
    )
}

export default ListMeeting;