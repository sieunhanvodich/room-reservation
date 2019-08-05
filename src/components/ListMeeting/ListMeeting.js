import React from 'react';
import Meeting from '../Meeting/Meeting';

class ListMeeting extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <div className="d-flex flex-wrap">
                {this.props.Meetings.map((meeting, index) => (<Meeting key={meeting.id} onClickShowDetail={() => this.props.onClickCard(meeting)} content={meeting}/>))}
            </div>
        );
    }
    
}
export default ListMeeting;
